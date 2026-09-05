import type { BrandPackagingItem, CampaignChapterData, MotionItem, SectionIntro, SocialPick } from "./types";

/** Alias kept for this module's existing call sites — canonical shape now lives in ./types as SectionIntro. */
export type SectionCopy = SectionIntro;

export type CaseStudyData = {
  heroImage: string;
  /** Optional smaller layered image composited over the main hero for added editorial depth (e.g. a packaging or lifestyle shot). */
  heroInset?: { src: string; alt: string; label?: string };
  campaigns: CampaignChapterData[];
  brandPackaging?: BrandPackagingItem[];
  brandPackagingCopy?: SectionCopy;
  social?: SocialPick[];
  socialCopy?: SectionCopy;
  motion?: MotionItem[];
  motionCopy?: SectionCopy;
};
