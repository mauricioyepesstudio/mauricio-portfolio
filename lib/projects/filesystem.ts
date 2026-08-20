import "server-only";

import fs from "node:fs";
import path from "node:path";
import { brandCatalog } from "./catalog";
import type { Brand, Campaign, MediaAsset, MediaKind, MediaSection } from "./types";

const PROJECTS_ROOT = path.join(process.cwd(), "public", "projects");
const MEDIA_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif", ".svg", ".mp4", ".webm", ".mov"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov"]);
const EXCLUDED = /(^|[-_.\s])(copy|backup|draft|temp|tmp|old|thumb|thumbnail|duplicate)([-_.\s]|$)|\.ds_store/i;

const LIMITS: Record<MediaKind, number> = {
  hero: 1,
  logo: 2,
  social: 8,
  newsletter: 4,
  web: 6,
  packaging: 8,
  print: 6,
  promo: 6,
  product: 8,
  event: 6,
  video: 3,
  other: 6,
};

const SECTION_ORDER: MediaKind[] = ["logo", "packaging", "product", "print", "event", "web", "newsletter", "social", "promo", "video", "other"];

const CAMPAIGN_PRIORITY: Record<string, string[]> = {
  "resource-living": ["magazine", "ad-sales", "pool-leads", "c2-miltimedia", "c2-multimedia", "your-business-here", "social", "videos"],
  getlost: ["hero", "logos", "packaging", "new-products", "events", "web-site", "social", "estationery"],
  evenflo: ["true-lips", "blonde-to-brunette"],
};

function naturalCompare(a: string, b: string) {
  return a.localeCompare(b, "en", { numeric: true, sensitivity: "base" });
}

function titleFromSlug(value: string) {
  return value
    .replace(/resource-living-/gi, "")
    .replace(/c2-miltimedia/gi, "c2-multimedia")
    .replace(/-campaign$/i, "")
    .replace(/\bweb[- ]?site\b/i, "Website")
    .replace(/\bc2 miltimedia\b/i, "C2 Multimedia")
    .replace(/\bblak friday\b/i, "Black Friday")
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function kindFromPath(parts: string[], extension: string): MediaKind {
  if (VIDEO_EXTENSIONS.has(extension)) return "video";
  const value = parts.join(" ").toLowerCase();
  if (/hero|header/.test(value)) return "hero";
  if (/logo|identity|branding/.test(value)) return "logo";
  if (/packag|rolling-paper/.test(value)) return "packaging";
  if (/product/.test(value)) return "product";
  if (/event|booth|trade-show/.test(value)) return "event";
  if (/newsletter|email/.test(value)) return "newsletter";
  if (/web|banner|landing/.test(value)) return "web";
  if (/social|feed|post/.test(value)) return "social";
  if (/print|stationery|business-card|magazine|menu/.test(value)) return "print";
  if (/promo|advertis|campaign/.test(value)) return "promo";
  return "other";
}

function collectFiles(directory: string, relativeParts: string[] = []): MediaAsset[] {
  if (!fs.existsSync(directory)) return [];
  const entries = fs.readdirSync(directory, { withFileTypes: true }).sort((a, b) => naturalCompare(a.name, b.name));

  return entries.flatMap((entry) => {
    if (entry.name.startsWith(".") || EXCLUDED.test(entry.name)) return [];
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectFiles(absolute, [...relativeParts, entry.name]);
    const extension = path.extname(entry.name).toLowerCase();
    if (!MEDIA_EXTENSIONS.has(extension)) return [];
    const publicPath = `/${path.relative(path.join(process.cwd(), "public"), absolute).split(path.sep).map(encodeURIComponent).join("/")}`;
    return [{ src: publicPath, name: titleFromSlug(path.basename(entry.name, extension)), kind: kindFromPath(relativeParts, extension), extension }];
  });
}

function dedupeAndLimit(assets: MediaAsset[], brandSlug: string, campaignSlug: string) {
  const seen = new Set<string>();
  const grouped = new Map<MediaKind, MediaAsset[]>();
  for (const asset of assets) {
    const normalized = asset.name.toLowerCase().replace(/\W+/g, "");
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    const current = grouped.get(asset.kind) ?? [];
    const specialLimit = brandSlug === "resource-living" && /your-business-here/.test(campaignSlug) ? Math.min(LIMITS[asset.kind], 4) : LIMITS[asset.kind];
    if (current.length < specialLimit) grouped.set(asset.kind, [...current, asset]);
  }
  return grouped;
}

function campaignFromDirectory(brandSlug: string, directory: string, campaignSlug: string): Campaign | null {
  const grouped = dedupeAndLimit(collectFiles(directory, [campaignSlug]), brandSlug, campaignSlug);
  const hero = grouped.get("hero")?.[0];
  grouped.delete("hero");
  const sections: MediaSection[] = SECTION_ORDER.flatMap((kind) => {
    const assets = grouped.get(kind) ?? [];
    if (!assets.length) return [];
    const labels: Record<MediaKind, string> = { hero: "Hero", logo: "Identity", social: "Social", newsletter: "Email & Newsletter", web: "Web & Digital", packaging: "Packaging", print: "Editorial & Print", promo: "Campaign Assets", product: "Product", event: "Events", video: "Motion", other: "Selected Work" };
    return [{ kind, title: labels[kind], assets }];
  });
  if (!hero && !sections.length) return null;
  return { slug: campaignSlug, title: titleFromSlug(campaignSlug), hero, sections };
}

function campaignRank(brandSlug: string, slug: string) {
  const priority = CAMPAIGN_PRIORITY[brandSlug] ?? [];
  const index = priority.findIndex((item) => slug.toLowerCase().includes(item));
  return index === -1 ? priority.length + 1 : index;
}

function scanBrand(slug: string): { campaigns: Campaign[]; heroImage: string } {
  const directory = path.join(PROJECTS_ROOT, slug);
  if (!fs.existsSync(directory)) return { campaigns: [], heroImage: "" };
  const children = fs.readdirSync(directory, { withFileTypes: true }).filter((entry) => entry.isDirectory());

  // Brands with no campaign subfolders (a flat dump of files directly in the
  // brand directory) get treated as a single implicit "Selected Work" campaign
  // instead of being silently dropped for lacking a heroImage.
  const campaigns = children.length
    ? children
        .map((entry) => campaignFromDirectory(slug, path.join(directory, entry.name), entry.name))
        .filter((campaign): campaign is Campaign => Boolean(campaign))
        .sort((a, b) => campaignRank(slug, a.slug) - campaignRank(slug, b.slug) || naturalCompare(a.title, b.title))
    : [campaignFromDirectory(slug, directory, "selected-work")].filter((campaign): campaign is Campaign => Boolean(campaign));

  const rootAssets = children.length ? collectFiles(directory).filter((asset) => asset.kind === "hero") : [];
  const heroImage = campaigns.find((campaign) => campaign.hero)?.hero?.src ?? rootAssets[0]?.src ?? campaigns.flatMap((campaign) => campaign.sections.flatMap((section) => section.assets))[0]?.src ?? "";
  return { campaigns, heroImage };
}

export function getProjects(): Brand[] {
  return brandCatalog.map((copy) => ({ ...copy, ...scanBrand(copy.slug) })).filter((brand) => brand.heroImage);
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}
