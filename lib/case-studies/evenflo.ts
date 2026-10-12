import "server-only";

import type { CampaignChapterData, SocialPick } from "./types";

// 05 — Campaign. Leads with the packaging render (real product photography)
// instead of the flat title-card hero; the color-swatch grid gets its own
// large, uncropped editorial moment instead of sitting unused in the archive.
const b2b: CampaignChapterData = {
  slug: "blonde-to-brunette",
  eyebrow: "05 — Campaign",
  title: "Blonde2Brunette Ink",
  intro:
    "A trade-facing launch built for PMU professionals evaluating the Blonde2Brunette hybrid pigment — a wholesale-ready hero and packaging pairing carried through a full social and email rollout.",
  hero: {
    src: "/projects/evenflo/blonde-to-brunette-campaign/packaging/evenflo-b2b-packaging-mockup.jpg",
    alt: "Blonde2Brunette Ink packaging — Evenflo",
  },
  logo: {
    src: "/projects/evenflo/blonde-to-brunette-campaign/logo/evenflo-b2b-logo.jpg",
    alt: "Blonde2Brunette Ink campaign logo lockup",
  },
  newsletter: {
    src: "/projects/evenflo/blonde-to-brunette-campaign/newsletter/evenflo-b2b-newsletter.png",
    alt: "Blonde2Brunette Ink post-launch email",
    note: "Post-Launch Email",
    width: 600,
    height: 4594,
  },
  gallery: [
    {
      title: "Color System",
      emphasis: "large",
      assets: [
        {
          src: "/projects/evenflo/campaigns/01-blonde-to-brunette-ink/hero/Evenflo-Colours-Blonde2brunette-Hybrid-Formula-REACH-Compliance.png",
          alt: "Blonde2Brunette Ink shade system — Morena, Castaña, Bonita, Rubia pigment drawdown card",
        },
      ],
    },
  ],
  posts: [2, 3, 4].map((n) => ({
    src: `/projects/evenflo/blonde-to-brunette-campaign/social/posts/evenflo-b2b-social-post-${n}.jpg`,
    alt: `Blonde2Brunette Ink social feed post ${n}`,
  })),
  stories: [2, 3].map((n) => ({
    src: `/projects/evenflo/blonde-to-brunette-campaign/social/stories/evenflo-b2b-social-story-${n}.jpg`,
    alt: `Blonde2Brunette Ink social story ${n}`,
  })),
  videos: [
    {
      src: "/projects/evenflo/blonde-to-brunette-campaign/video/evenflo-b2b-campaign-video.mp4",
      caption: "Blonde2Brunette Ink — Campaign Film",
      orientation: "landscape",
    },
  ],
};

// 06 — Campaign. Leads with the real model/product photograph instead of the
// title-card hero; varies rhythm against b2b above it (packaging-led hero →
// photography-led hero) and keeps its color-system moment at supporting
// scale rather than repeating b2b's "major" treatment.
const trueLips: CampaignChapterData = {
  slug: "true-lips",
  eyebrow: "06 — Campaign",
  title: "True Lips",
  intro:
    "A consumer-facing companion launch for the True Lips pigment line, carrying the same brand system into a warmer, editorial social and email presentation.",
  // Varies the section rhythm against b2b above it — without this, both
  // chapters render hero → packaging → social → newsletter → motion back to
  // back and the page reads as a stack of identical cards.
  layout: "social-close",
  hero: {
    src: "/projects/evenflo/true-lips-campaign/social/posts/evenflo-true-lips-social-post-1.jpg",
    alt: "True Lips campaign — Evenflo",
  },
  logo: {
    src: "/projects/evenflo/true-lips-campaign/logo/evenflo-true-lips-logo.jpg",
    alt: "True Lips campaign logo lockup",
  },
  newsletter: {
    src: "/projects/evenflo/true-lips-campaign/newsletter/evenflo-true-lips-newsletter-alt.png",
    alt: "True Lips campaign email — device and procedure photography",
    note: "Campaign Email",
    width: 600,
    height: 6713,
  },
  gallery: [
    {
      title: "Color System",
      assets: [
        {
          src: "/projects/evenflo/campaigns/04-true-lips-ink/social/Evenflo True Lips Unisex Pigments 1.png",
          alt: "True Lips product and color system — Dirty French, Naturalista, Royal Mauve",
        },
      ],
    },
  ],
  posts: [2, 3, 4].map((n) => ({
    src: `/projects/evenflo/true-lips-campaign/social/posts/evenflo-true-lips-social-post-${n}.jpg`,
    alt: `True Lips social feed post ${n}`,
  })),
  stories: [2, 3].map((n) => ({
    src: `/projects/evenflo/true-lips-campaign/social/stories/evenflo-true-lips-social-story-${n}.jpg`,
    alt: `True Lips social story ${n}`,
  })),
  videos: [
    {
      src: "/projects/evenflo/true-lips-campaign/video/evenflo-true-lips-campaign-video.mp4",
      caption: "True Lips — Campaign Film",
      orientation: "landscape",
    },
  ],
};

// 07 — System Recap. A deliberately concise synthesis chapter — proves the
// same creative system (photography concept, packaging language, color
// education) carried across both real launches, using only assets already
// established elsewhere on the page. No new social/newsletter content here
// by design; this is a summary beat, not another gallery.
const systemRecap: CampaignChapterData = {
  slug: "campaign-system",
  eyebrow: "07 — System Recap",
  title: "One System, Two Launches",
  intro:
    "One creative system — model-led photography, a shared packaging language and consistent color-swatch education — carried across two real product launches without repeating itself.",
  hero: {
    src: "/projects/evenflo/true-lips-campaign/packaging/evenflo-true-lips-packaging-mockup.jpg",
    alt: "True Lips packaging — Evenflo",
  },
  gallery: [
    {
      title: "One Identity, Two Color Lines",
      emphasis: "large",
      assets: [
        { src: "/projects/evenflo/blonde-to-brunette-campaign/logo/evenflo-b2b-logo.jpg", alt: "Blonde2Brunette Ink campaign logo lockup" },
        { src: "/projects/evenflo/true-lips-campaign/logo/evenflo-true-lips-logo.jpg", alt: "True Lips campaign logo lockup" },
      ],
    },
  ],
  videos: [
    {
      src: "/projects/evenflo/blonde-to-brunette-campaign/video/evenflo-b2b-campaign-video-2.mp4",
      caption: "Blonde2Brunette Ink — Social Cutdown",
      orientation: "landscape",
    },
  ],
};

export const evenfloCaseStudy = {
  heroImage: "/projects/evenflo/blonde-to-brunette-campaign/social/posts/evenflo-b2b-social-post-1.jpg",
  campaigns: [b2b, trueLips, systemRecap] as const,
  brandPackaging: [
    { asset: b2b.logo!, label: "Blonde2Brunette Ink", kind: "Identity" },
    { asset: trueLips.logo!, label: "True Lips", kind: "Identity" },
    { asset: { src: "/projects/evenflo/blonde-to-brunette-campaign/packaging/evenflo-b2b-packaging-mockup.jpg", alt: "Blonde2Brunette Ink packaging mockup" }, label: "Blonde2Brunette Ink", kind: "Packaging" },
    { asset: { src: "/projects/evenflo/true-lips-campaign/packaging/evenflo-true-lips-packaging-mockup.jpg", alt: "True Lips packaging mockup" }, label: "True Lips", kind: "Packaging" },
  ],
  social: [
    { ...trueLips.stories![0], campaign: "True Lips", size: "feature" },
    { ...b2b.posts![0], campaign: "Blonde2Brunette Ink", size: "support" },
    { ...b2b.stories![0], campaign: "Blonde2Brunette Ink", size: "tall" },
    { ...trueLips.posts![0], campaign: "True Lips", size: "support" },
    { ...trueLips.posts![1], campaign: "True Lips", size: "support" },
    { ...b2b.posts![1], campaign: "Blonde2Brunette Ink", size: "support" },
    { ...trueLips.stories![1], campaign: "True Lips", size: "tall" },
    { ...b2b.posts![2], campaign: "Blonde2Brunette Ink", size: "support" },
  ] satisfies SocialPick[],
  motion: [b2b, trueLips, systemRecap].flatMap((c) => c.videos!.map((v) => ({ ...v, campaign: c.title }))),
};
