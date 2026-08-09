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
};

export type MediaSection = {
  kind: MediaKind;
  title: string;
  assets: MediaAsset[];
};

export type Campaign = {
  slug: string;
  title: string;
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
};
