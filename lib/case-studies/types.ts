export type CuratedAsset = {
  src: string;
  alt: string;
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
  logo?: CuratedAsset;
  packaging?: CuratedAsset;
  /** Horizontal web/display ad creative — always rendered full content width, uncropped. */
  banners?: CuratedAsset[];
  posts?: CuratedAsset[];
  stories?: CuratedAsset[];
  newsletter?: NewsletterAsset;
  /** Website/landing-page screenshots. First item renders as the large scrollable frame; any additional items render as smaller supporting shots (e.g. a mobile view) below it. */
  website?: WebsiteAsset[];
  videos?: CampaignVideo[];
  /** Extra media that doesn't fit the named slots — print, event photography, colorway breakdowns, etc. */
  gallery?: GallerySection[];
};

export type SocialPick = CuratedAsset & {
  campaign: string;
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
  hero: CuratedAsset;
  spotlight?: CuratedAsset & { label: string };
  newsletter?: NewsletterAsset;
  social?: CuratedAsset[];
  videos?: CampaignVideo[];
};
