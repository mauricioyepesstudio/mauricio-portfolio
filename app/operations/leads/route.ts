import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function equalSecret(received: string, expected: string): boolean {
  const a = Buffer.from(received);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

function htmlSafe(value: unknown): string {
  return String(value ?? "").replace(/[&<>'"]/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
  })[c] || c);
}

type Lead = {
  id: number;
  external_id: string;
  customer_name?: string;
  customer_email?: string;
  category: string;
  assigned_to?: string;
  status: string;
  delivery_status: string;
  revenue_amount?: string;
};

type Summary = {
  total_leads: number;
  closed_revenue: string;
  delivery_failed: number;
  delivery_unverified: number;
  stages: Record<string, number>;
};

function reply(content: string, status = 200, extra: Record<string, string> = {}) {
  return new NextResponse(content, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-store, max-age=0",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
      ...extra,
    },
  });
}

const style = `body{font:15px system-ui;background:#0a0a0a;color:#f4f2ee;margin:0;padding:38px;line-height:1.5}main{max-width:1100px;margin:auto}h1{font-size:clamp(28px,5vw,48px)}a{color:#d6ad6d}section{border:1px solid #353330;padding:24px;margin-top:24px;border-radius:12px}.metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px}.metric{background:#161616;border:1px solid #393632;padding:20px;border-radius:10px}strong{display:block;font-size:27px;color:#d6ad6d}table{border-collapse:collapse;width:100%;margin-top:14px;min-width:720px}th,td{padding:12px;border-bottom:1px solid #333;text-align:left}th{color:#d6ad6d}small,.muted{color:#b5b1aa}.scroll{overflow-x:auto}code{color:#d6ad6d}`;

export async function GET(req: Request) {
  const password = process.env.REAL_GROUP_ADMIN_PASSWORD;
  if (!password || password.length < 24) {
    return reply("Real Group commercial dashboard is not configured.", 503);
  }
  const authorization = req.headers.get("authorization") || "";
  let authorized = false;
  if (authorization.startsWith("Basic ")) {
    try {
      const credentials = Buffer.from(authorization.slice(6), "base64").toString("utf8");
      const separator = credentials.indexOf(":");
      authorized = separator > -1 &&
        credentials.slice(0, separator) === "realgroup" &&
        equalSecret(credentials.slice(separator + 1), password);
    } catch {
      authorized = false;
    }
  }
  if (!authorized) {
    return reply("Authentication required.", 401, {
      "WWW-Authenticate": 'Basic realm="Real Group Commercial Operations", charset="UTF-8"',
    });
  }

  const api = process.env.COMMERCIAL_API_BASE_URL;
  const apiKey = process.env.COMMERCIAL_API_KEY;
  const tenantKey = process.env.COMMERCIAL_TENANT_KEY;
  if (!api || !apiKey || !tenantKey) {
    return reply(`<html><head><title>Real Group · CRM</title><style>${style}</style></head><body><main><h1>Real Group · Commercial Operations</h1><section><h2>CRM connection pending</h2><p>Portal access is protected. The independent commercial backend must be configured before leads appear here.</p><p class="muted">No demo records are shown as actual customers.</p></section></main></body></html>`, 503);
  }
  let base: URL;
  try {
    base = new URL(api);
    if (base.protocol !== "https:" && !(process.env.NODE_ENV !== "production" && base.hostname === "localhost")) throw new Error("https");
  } catch {
    return reply("Commercial backend URL is invalid.", 503);
  }
  const headers = {
    "X-API-Key": apiKey,
    "X-Commercial-Tenant": "real_group",
    "X-Commercial-Tenant-Key": tenantKey,
  };

  try {
    const [leadsRes, summaryRes] = await Promise.all([
      fetch(new URL("/commercial/leads?limit=100", base), { headers, cache: "no-store", signal: AbortSignal.timeout(4500) }),
      fetch(new URL("/commercial/summary", base), { headers, cache: "no-store", signal: AbortSignal.timeout(4500) }),
    ]);
    if (!leadsRes.ok || !summaryRes.ok) throw new Error("commercial API unavailable");
    const leads = (await leadsRes.json() as {leads: Lead[]}).leads;
    const summary = await summaryRes.json() as Summary;
    if (!Array.isArray(leads) || typeof summary.total_leads !== "number") throw new Error("invalid API response");
    const metrics = [
      ["Received", summary.total_leads],
      ["Unverified delivery", summary.delivery_unverified],
      ["Delivery failures", summary.delivery_failed],
      ["Won", summary.stages.won || 0],
      ["Recorded revenue", `$${summary.closed_revenue || "0.00"}`],
    ];
    const rows = leads.map(l => `<tr><td>${htmlSafe(l.id)}</td><td>${htmlSafe(l.customer_name)}</td><td>${htmlSafe(l.customer_email)}</td><td>${htmlSafe(l.category)}</td><td>${htmlSafe(l.status)}</td><td>${htmlSafe(l.delivery_status)}</td><td>${htmlSafe(l.assigned_to || "Unassigned")}</td><td>${htmlSafe(l.revenue_amount || "—")}</td></tr>`).join("");
    return reply(`<!doctype html><html lang="en"><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>Real Group · Sales Dashboard</title><style>${style}</style></head><body><main><p class="muted">REAL GROUP / PRIVATE OPERATIONS</p><h1>Commercial opportunities</h1><p>Only Real Group data. No shared customer lists, no estimated revenue and no automated contractor outreach.</p><div class="metrics">${metrics.map(([label, value]) => `<div class="metric"><small>${htmlSafe(label)}</small><strong>${htmlSafe(value)}</strong></div>`).join("")}</div><section><h2>Latest opportunities</h2><div class="scroll"><table><thead><tr><th>ID</th><th>Contact</th><th>Email</th><th>Service</th><th>Stage</th><th>Delivery</th><th>Owner</th><th>Revenue</th></tr></thead><tbody>${rows || '<tr><td colspan="8">No commercial enquiries recorded yet.</td></tr>'}</tbody></table></div><p class="muted">Showing up to 100 latest entries. Revenue is based only on opportunities marked won.</p></section></main></body></html>`);
  } catch {
    return reply("The CRM is currently unavailable. Please retry after checking the independent backend.", 503);
  }
}
