export type CuratedAsset = {
  src: string;
  alt: string;
};

export type SocialPick = CuratedAsset & {
  campaign: string;
  size: "feature" | "tall" | "support";
};

export type IdentityTile = {
  asset: CuratedAsset;
  label: string;
  kind: string;
};

export type MotionItem = {
  src: string;
  caption: string;
  campaign: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

export type NewsletterAsset = CuratedAsset & {
  note: string;
  width: number;
  height: number;
};

export type EditorialChapter = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  hero: CuratedAsset;
  spotlight?: CuratedAsset & { label: string };
  newsletter?: NewsletterAsset;
  social?: CuratedAsset[];
  videos?: MotionItem[];
};
