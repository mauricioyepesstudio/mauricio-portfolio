import type { BrandPackagingItem, CampaignChapterData, SocialPick } from "./types";

export type SectionCopy = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export type CaseStudyData = {
  heroImage: string;
  /** Optional smaller layered image composited over the main hero for added editorial depth (e.g. a packaging or lifestyle shot). */
  heroInset?: { src: string; alt: string; label?: string };
  campaigns: CampaignChapterData[];
  brandPackaging?: BrandPackagingItem[];
  brandPackagingCopy?: SectionCopy;
  social?: SocialPick[];
  socialCopy?: SectionCopy;
  motion?: { src: string; caption: string; campaign: string; orientation?: "landscape" | "vertical" }[];
  motionCopy?: SectionCopy;
};
