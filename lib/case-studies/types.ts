export type CuratedAsset = {
  src: string;
  alt: string;
  /** Per-asset presentation only; default styling remains unchanged. */
  fit?: "cover" | "contain";
  background?: "light";
};

export type NewsletterAsset = CuratedAsset & {
  note: string;
  width: number;
  height: number;
};

export type WebsiteAsset = CuratedAsset & {
  /** e.g. "Homepage — Full Scroll", "Header", "Mobile" */
  label: string;
};

export type CampaignVideo = {
  src: string;
  /** Still frame shown before playback. */
  poster?: string;
  caption: string;
  /** Controls aspect ratio and grid sizing. Defaults to "landscape". */
  orientation?: "landscape" | "vertical";
};

export type GallerySection = {
  title: string;
  assets: CuratedAsset[];
  /** "large" caps the grid at 1-2 columns for technical/detailed artwork that needs room to be inspected. Defaults to "standard" (up to 4 columns). */
  emphasis?: "standard" | "large";
};

// A single campaign "chapter" inside a case study. Only `slug`, `eyebrow`,
// `title`, `intro` and `hero` are required — every other section renders
// conditionally so a brand can present exactly the material that actually
// exists for that campaign instead of padding out missing fields.
export type CampaignChapterData = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  hero: CuratedAsset;
  /** "contain" shows the hero uncropped inside the 16:9 panel — for square/portrait or non-16:9 key visuals that would lose content under the default "cover" crop. */
  heroFit?: "cover" | "contain";
  /** Keep the source but omit a requested hero from this campaign. */
  hideHero?: boolean;
  logo?: CuratedAsset;
  packaging?: CuratedAsset;
  /** Horizontal web/display ad creative — always rendered full content width, uncropped. */
  banners?: CuratedAsset[];
  posts?: CuratedAsset[];
  stories?: CuratedAsset[];
  newsletter?: NewsletterAsset;
  /** Additional emails from the same campaign. Shown side by side with `newsletter` (two columns on desktop, native width). */
  extraNewsletters?: NewsletterAsset[];
  /** Website/landing-page screenshots. First item renders as the large scrollable frame; any additional items render as smaller supporting shots (e.g. a mobile view) below it. */
  website?: WebsiteAsset[];
  videos?: CampaignVideo[];
  /** Extra media that doesn't fit the named slots — print, event photography, colorway breakdowns, etc. */
  gallery?: GallerySection[];
  /** Section ordering within the chapter. "social-close" moves the newsletter earlier and lets social close the chapter instead — used to vary rhythm when consecutive chapters would otherwise render in an identical sequence. Defaults to "default" (hero → packaging → social → newsletter → motion). */
  layout?: "default" | "social-close";
};

export type SocialPick = CuratedAsset & {
  campaign: string;
  /** Tile size in SocialEditorial's mosaic; SocialEditorialGrid renders uniform tiles and ignores it. */
  size: "feature" | "tall" | "support";
};

export type BrandPackagingItem = {
  asset: CuratedAsset;
  label: string;
  kind: string;
};

// --- Editorial section types ---
// Resource Living's narrative-driven presentation shares primitives with the
// generic campaign architecture above (CuratedAsset, NewsletterAsset,
// CampaignVideo) but needs its own section/chapter shapes rather than
// stretching CampaignChapterData to fit a different editorial layout.

/** Heading block used by every full-width editorial section (eyebrow + title + optional supporting copy). */
export type SectionIntro = {
  eyebrow: string;
  title: string;
  description?: string;
};

/** Same tile shape as BrandPackagingItem — aliased so both the generic BrandPackaging grid and the editorial IdentityGrid consume one canonical type. */
export type IdentityTile = BrandPackagingItem;

export type MotionItem = {
  src: string;
  caption: string;
  campaign: string;
  orientation?: "landscape" | "vertical";
};

// A narrative "chapter" inside Resource Living's editorial case study — a
// sibling of CampaignChapterData, not an extension of it. It groups social
// into one unified array (no posts/stories split) and uses a single labeled
// "spotlight" image instead of packaging/banners/gallery, so it needs its
// own shape rather than forcing CampaignChapterData's fields to fit.
export type EditorialChapter = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** Optional: a chapter whose source files have no sharp wide image skips the hero instead of upscaling a small one. */
  hero?: CuratedAsset;
  spotlight?: CuratedAsset & { label: string };
  newsletter?: NewsletterAsset;
  /** A single full-width, natural-aspect visual for a standout tall/wide asset (a system diagram, an oversized mockup) that shouldn't be cropped, shrunk into a square "spotlight" frame, or wrapped in newsletter chrome. Renders at intrinsic aspect ratio with the page owning scroll — no internal scroll trap. */
  featureVisual?: CuratedAsset & { label?: string; width: number; height: number };
  social?: CuratedAsset[];
  videos?: CampaignVideo[];
};
