export type MediaKind =
  | "hero"
  | "logo"
  | "social"
  | "newsletter"
  | "web"
  | "packaging"
  | "print"
  | "promo"
  | "product"
  | "event"
  | "video"
  | "other";

export type MediaAsset = {
  src: string;
  name: string;
  kind: MediaKind;
  extension: string;
  poster?: string;
  /** Real source dimensions, probed from file content when technically possible. */
  width?: number;
  height?: number;
  /** width / height, derived from the probed dimensions. */
  aspectRatio?: number;
};

export type MediaSection = {
  kind: MediaKind;
  title: string;
  assets: MediaAsset[];
};

export type Campaign = {
  slug: string;
  title: string;
  /** Short category label shown above the title, e.g. "Advertising · Lead Generation". Falls back to a numbered "Campaign NN" label when absent. */
  eyebrow?: string;
  /** One-sentence editorial context for the chapter. Falls back to a generic line when absent. */
  context?: string;
  description?: string;
  hero?: MediaAsset;
  sections: MediaSection[];
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectSection = {
  title: string;
  description?: string;
  images: string[];
};

export type ProjectVideo = {
  src: string;
  poster?: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  heroImage: string;
  deliverables: string[];
  cover: { from: string; to: string };
  excerpt: string;
  services: string[];
  problem: string;
  strategy: string;
  solution: string;
  result: string;
  metrics: ProjectMetric[];
  gallery?: string[];
  sections?: ProjectSection[];
  videos?: ProjectVideo[];
  heroVideo?: string;
};

export type Brand = Project & {
  campaigns: Campaign[];
  /** Assets from a project-level brand/ folder (logos, identity marks). Empty when no such folder exists. */
  brandAssets?: MediaAsset[];
  /** Loose, non-campaign supporting media (e.g. general social proofs) rendered as one section after the campaign chapters, never as its own named campaign. */
  supportingWork?: MediaSection[];
};
