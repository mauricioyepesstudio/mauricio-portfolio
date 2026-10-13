import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ACCOUNTS: Record<string, { tokenEnv: string; accountId: string }> = {
  belong: { tokenEnv: "INSTAGRAM_BELONG_TOKEN", accountId: "17841429815124871" },
  evolusa: { tokenEnv: "INSTAGRAM_EVOLUSA_TOKEN", accountId: "17841427988961077" },
  "personal-cfo": { tokenEnv: "INSTAGRAM_PERSONAL_CFO_TOKEN", accountId: "17841476683743459" },
};
const ALLOWED = new Set(["IMAGE", "VIDEO", "CAROUSEL_ALBUM", "REELS"]);
type Media = { id?: string; caption?: string; media_type?: string; media_url?: string; thumbnail_url?: string; permalink?: string; timestamp?: string; like_count?: number; comments_count?: number };
function safeUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;
  try { const url = new URL(value); return url.protocol === "https:" ? url.toString() : null; } catch { return null; }
}
export async function GET(request: NextRequest) {
  const project = request.nextUrl.searchParams.get("project") || "";
  const account = ACCOUNTS[project];
  if (!account) return NextResponse.json({ error: "Unknown project" }, { status: 400 });
  const token = process.env[account.tokenEnv];
  if (!token) return NextResponse.json({ configured: false, posts: [], message: "Instagram account not connected to the portfolio server." }, { headers: { "Cache-Control": "no-store" } });
  try {
    const url = new URL(`https://graph.instagram.com/v24.0/me/media`);
    url.searchParams.set("fields", "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count");
    url.searchParams.set("limit", "12");
    const upstream = await fetch(url, { headers: { Authorization: `Bearer ${token}` }, cache: "no-store", signal: AbortSignal.timeout(10000) });
    if (!upstream.ok) return NextResponse.json({ configured: true, posts: [], error: "Instagram could not be reached or the authorization has expired." }, { status: 502, headers: { "Cache-Control": "no-store" } });
    const body = await upstream.json() as { data?: Media[] };
    const posts = (Array.isArray(body.data) ? body.data : []).filter(p => p.id && ALLOWED.has(p.media_type || "")).map(p => ({
      id: p.id, caption: (p.caption || "").slice(0, 700), mediaType: p.media_type,
      image: safeUrl(p.thumbnail_url) || safeUrl(p.media_url), url: safeUrl(p.permalink),
      publishedAt: p.timestamp || null, likes: typeof p.like_count === "number" ? p.like_count : null,
      comments: typeof p.comments_count === "number" ? p.comments_count : null,
    }));
    return NextResponse.json({ configured: true, posts }, { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } });
  } catch {
    return NextResponse.json({ configured: true, posts: [], error: "Unable to load Instagram posts right now." }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }
}
