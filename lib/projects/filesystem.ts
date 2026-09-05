import "server-only";

import fs from "node:fs";
import path from "node:path";
import { brandCatalog, campaignCatalog } from "./catalog";
import { probeDimensions } from "./probe-media";
import type { Brand, Campaign, MediaAsset, MediaKind, MediaSection } from "./types";

const PROJECTS_ROOT = path.join(process.cwd(), "public", "projects");
const MEDIA_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif", ".svg", ".mp4", ".webm", ".mov"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov"]);
const EXCLUDED = /(^|[-_.\s])(copy|backup|draft|temp|tmp|old|thumb|thumbnail|duplicate)([-_.\s]|$)|\.ds_store/i;

/** The standard project-level folder set (public/projects/<slug>/...). "hero" is reserved for the
 * project hero image; "campaigns" is a wrapper — only directories inside it are real campaigns.
 * Every other standard folder is project-level media, classified directly by its own name. */
const RESERVED_HERO_FOLDER = "hero";
const CAMPAIGNS_FOLDER = "campaigns";

/** A standard folder's name IS its classification under the new asset architecture — no keyword guessing. */
const FOLDER_TO_KIND: Record<string, MediaKind> = {
  hero: "hero",
  identity: "logo",
  editorial: "print",
  packaging: "packaging",
  advertising: "promo",
  social: "social",
  email: "newsletter",
  web: "web",
  motion: "video",
  print: "print",
  misc: "other",
};

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

const KIND_LABELS: Record<MediaKind, string> = {
  hero: "Hero",
  logo: "Identity",
  social: "Social",
  newsletter: "Email & Newsletter",
  web: "Web & Digital",
  packaging: "Packaging",
  print: "Editorial & Print",
  promo: "Advertising",
  product: "Product",
  event: "Events",
  video: "Motion",
  other: "Selected Work",
};

const SECTION_ORDER: MediaKind[] = ["logo", "packaging", "product", "print", "event", "web", "newsletter", "social", "promo", "video", "other"];

/** Fallback ordering when a campaign has no explicit editorial `priority`. Substring-matched against the campaign slug. */
const CAMPAIGN_PRIORITY: Record<string, string[]> = {
  "resource-living": ["magazine", "ad-sales", "pool-leads", "c2-multimedia", "your-business-here"],
};

function naturalCompare(a: string, b: string) {
  return a.localeCompare(b, "en", { numeric: true, sensitivity: "base" });
}

function titleFromSlug(value: string) {
  return value
    .replace(/^\d+-/, "") // strip the campaigns/ numbering prefix, e.g. "01-ad-sales" -> "ad-sales"
    .replace(/resource-living-/gi, "")
    .replace(/-campaign$/i, "")
    .replace(/\bweb[- ]?site\b/i, "Website")
    .replace(/\bblak friday\b/i, "Black Friday")
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/** Recursively collects every media file under `directory`, all classified as `kind` — the
 * standard folder's name already declares its category, so no keyword guessing is needed.
 * Video files are always forced to the "video" kind regardless of which folder they're in,
 * since they must render through the video player, not next/image. */
function collectFilesWithKind(directory: string, kind: MediaKind): MediaAsset[] {
  if (!fs.existsSync(directory)) return [];
  const entries = fs.readdirSync(directory, { withFileTypes: true }).sort((a, b) => naturalCompare(a.name, b.name));

  return entries.flatMap((entry) => {
    if (entry.name.startsWith(".") || EXCLUDED.test(entry.name)) return [];
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectFilesWithKind(absolute, kind);
    const extension = path.extname(entry.name).toLowerCase();
    if (!MEDIA_EXTENSIONS.has(extension)) return [];
    const effectiveKind: MediaKind = VIDEO_EXTENSIONS.has(extension) ? "video" : kind;
    const dimensions = probeDimensions(absolute, extension) ?? undefined;
    const publicPath = `/${path.relative(path.join(process.cwd(), "public"), absolute).split(path.sep).map(encodeURIComponent).join("/")}`;
    return [
      {
        src: publicPath,
        name: titleFromSlug(path.basename(entry.name, extension)),
        kind: effectiveKind,
        extension,
        width: dimensions?.width,
        height: dimensions?.height,
        aspectRatio: dimensions ? dimensions.width / dimensions.height : undefined,
      },
    ];
  });
}

/** Collects every standard-named subfolder of `directory` (hero/identity/editorial/... — whichever
 * are present) into one flat, kind-tagged asset list. An unrecognized folder name falls back to "other"
 * rather than being silently skipped. */
function collectStandardFolders(directory: string): MediaAsset[] {
  if (!fs.existsSync(directory)) return [];
  const entries = fs.readdirSync(directory, { withFileTypes: true }).filter((entry) => entry.isDirectory());
  return entries.flatMap((entry) => {
    const kind = FOLDER_TO_KIND[entry.name.toLowerCase()] ?? "other";
    return collectFilesWithKind(path.join(directory, entry.name), kind);
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

/** Case-insensitive lookup — source folder casing is inconsistent (e.g. "VIDEOS" vs "videos"). */
function findEditorial(brandSlug: string, campaignSlug: string) {
  const campaigns = campaignCatalog[brandSlug];
  if (!campaigns) return undefined;
  if (campaigns[campaignSlug]) return campaigns[campaignSlug];
  const lower = campaignSlug.toLowerCase();
  const key = Object.keys(campaigns).find((candidate) => candidate.toLowerCase() === lower);
  return key ? campaigns[key] : undefined;
}

function sectionsFromGrouped(grouped: Map<MediaKind, MediaAsset[]>): MediaSection[] {
  return SECTION_ORDER.flatMap((kind) => {
    const assets = grouped.get(kind) ?? [];
    if (!assets.length) return [];
    return [{ kind, title: KIND_LABELS[kind], assets }];
  });
}

function campaignFromDirectory(brandSlug: string, directory: string, campaignSlug: string): Campaign | null {
  const editorial = findEditorial(brandSlug, campaignSlug);
  const grouped = dedupeAndLimit(collectStandardFolders(directory), brandSlug, campaignSlug);
  const hero = grouped.get("hero")?.[0];
  grouped.delete("hero");
  const sections = sectionsFromGrouped(grouped);
  if (!hero && !sections.length) return null;
  return {
    slug: campaignSlug,
    title: editorial?.title ?? titleFromSlug(campaignSlug),
    eyebrow: editorial?.eyebrow,
    context: editorial?.context,
    hero,
    sections,
  };
}

function campaignRank(brandSlug: string, slug: string) {
  const editorialPriority = findEditorial(brandSlug, slug)?.priority;
  if (editorialPriority !== undefined) return editorialPriority;
  const priority = CAMPAIGN_PRIORITY[brandSlug] ?? [];
  const index = priority.findIndex((item) => slug.toLowerCase().includes(item));
  return index === -1 ? priority.length + 1 : index;
}

type BrandScan = { campaigns: Campaign[]; heroImage: string; supportingWork: MediaSection[] };

function scanBrand(slug: string): BrandScan {
  const directory = path.join(PROJECTS_ROOT, slug);
  if (!fs.existsSync(directory)) return { campaigns: [], heroImage: "", supportingWork: [] };

  const children = fs.readdirSync(directory, { withFileTypes: true }).filter((entry) => entry.isDirectory());
  const heroFolder = children.find((entry) => entry.name.toLowerCase() === RESERVED_HERO_FOLDER);
  const campaignsFolder = children.find((entry) => entry.name.toLowerCase() === CAMPAIGNS_FOLDER);
  // Only directories inside campaigns/ are ever interpreted as campaigns. Every other standard
  // folder (identity, editorial, packaging, advertising, social, email, web, motion, print, misc)
  // is project-level media, never a campaign chapter.
  const categoryFolders = children.filter(
    (entry) => entry.name.toLowerCase() !== RESERVED_HERO_FOLDER && entry.name.toLowerCase() !== CAMPAIGNS_FOLDER
  );

  const projectHeroAssets = heroFolder ? collectFilesWithKind(path.join(directory, heroFolder.name), "hero") : [];

  let campaigns: Campaign[] = [];
  if (campaignsFolder) {
    const campaignDirs = fs
      .readdirSync(path.join(directory, campaignsFolder.name), { withFileTypes: true })
      .filter((entry) => entry.isDirectory());
    campaigns = campaignDirs
      .map((entry) => campaignFromDirectory(slug, path.join(directory, campaignsFolder.name, entry.name), entry.name))
      .filter((campaign): campaign is Campaign => Boolean(campaign))
      .sort((a, b) => campaignRank(slug, a.slug) - campaignRank(slug, b.slug) || naturalCompare(a.title, b.title));
  }

  const projectAssets = categoryFolders.flatMap((entry) => {
    const kind = FOLDER_TO_KIND[entry.name.toLowerCase()] ?? "other";
    return collectFilesWithKind(path.join(directory, entry.name), kind);
  });
  const supportingGrouped = dedupeAndLimit(projectAssets, slug, "project-level");
  const supportingWork = sectionsFromGrouped(supportingGrouped);

  const heroImage =
    projectHeroAssets[0]?.src ??
    campaigns.find((campaign) => campaign.hero)?.hero?.src ??
    campaigns.flatMap((campaign) => campaign.sections.flatMap((section) => section.assets))[0]?.src ??
    supportingWork.flatMap((section) => section.assets)[0]?.src ??
    "";

  return { campaigns, heroImage, supportingWork };
}

let cachedProjects: Brand[] | null = null;

function computeProjects(): Brand[] {
  return brandCatalog.map((copy) => ({ ...copy, ...scanBrand(copy.slug) })).filter((brand) => brand.heroImage);
}

export function getProjects(): Brand[] {
  if (process.env.NODE_ENV !== "production") return computeProjects();
  if (!cachedProjects) cachedProjects = computeProjects();
  return cachedProjects;
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}
