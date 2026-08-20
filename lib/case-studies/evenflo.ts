import "server-only";

export type CuratedAsset = {
  src: string;
  alt: string;
};

export type CampaignChapter = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  hero: CuratedAsset;
  logo: CuratedAsset;
  packaging: CuratedAsset;
  newsletter: CuratedAsset & { note: string; width: number; height: number };
  posts: CuratedAsset[];
  stories: CuratedAsset[];
  video: { src: string; caption: string };
};

export type SocialPick = CuratedAsset & {
  campaign: string;
  size: "feature" | "tall" | "support";
};

const b2b: CampaignChapter = {
  slug: "blonde-to-brunette",
  eyebrow: "05 — Campaign",
  title: "Blonde2Brunette Ink",
  intro:
    "A trade-facing launch built for PMU professionals evaluating the Blonde2Brunette hybrid pigment — a wholesale-ready hero and packaging pairing carried through a full social and email rollout.",
  hero: {
    src: "/projects/evenflo/blonde-to-brunette-campaign/hero/evenflo-b2b-campaign-hero.jpg",
    alt: "Blonde2Brunette Ink campaign hero — Evenflo",
  },
  logo: {
    src: "/projects/evenflo/blonde-to-brunette-campaign/logo/evenflo-b2b-logo.jpg",
    alt: "Blonde2Brunette Ink campaign logo lockup",
  },
  packaging: {
    src: "/projects/evenflo/blonde-to-brunette-campaign/packaging/evenflo-b2b-packaging-mockup.jpg",
    alt: "Blonde2Brunette Ink packaging mockup",
  },
  newsletter: {
    src: "/projects/evenflo/blonde-to-brunette-campaign/newsletter/evenflo-b2b-newsletter.png",
    alt: "Blonde2Brunette Ink post-launch email",
    note: "Post-Launch Email",
    width: 600,
    height: 4594,
  },
  posts: [1, 2, 3, 4].map((n) => ({
    src: `/projects/evenflo/blonde-to-brunette-campaign/social/posts/evenflo-b2b-social-post-${n}.jpg`,
    alt: `Blonde2Brunette Ink social feed post ${n}`,
  })),
  stories: [1, 2, 3].map((n) => ({
    src: `/projects/evenflo/blonde-to-brunette-campaign/social/stories/evenflo-b2b-social-story-${n}.jpg`,
    alt: `Blonde2Brunette Ink social story ${n}`,
  })),
  video: {
    src: "/projects/evenflo/blonde-to-brunette-campaign/video/evenflo-b2b-campaign-video.mp4",
    caption: "Blonde2Brunette Ink — Campaign Film",
  },
};

const trueLips: CampaignChapter = {
  slug: "true-lips",
  eyebrow: "06 — Campaign",
  title: "True Lips",
  intro:
    "A consumer-facing companion launch for the True Lips pigment line, carrying the same brand system into a warmer, editorial social and email presentation.",
  hero: {
    src: "/projects/evenflo/true-lips-campaign/hero/evenflo-true-lips-campaign-hero.jpg",
    alt: "True Lips campaign hero — Evenflo",
  },
  logo: {
    src: "/projects/evenflo/true-lips-campaign/logo/evenflo-true-lips-logo.jpg",
    alt: "True Lips campaign logo lockup",
  },
  packaging: {
    src: "/projects/evenflo/true-lips-campaign/packaging/evenflo-true-lips-packaging-mockup.jpg",
    alt: "True Lips packaging mockup",
  },
  newsletter: {
    src: "/projects/evenflo/true-lips-campaign/newsletter/evenflo-true-lips-newsletter.png",
    alt: "True Lips campaign email",
    note: "Campaign Email",
    width: 600,
    height: 5974,
  },
  posts: [1, 2, 3, 4].map((n) => ({
    src: `/projects/evenflo/true-lips-campaign/social/posts/evenflo-true-lips-social-post-${n}.jpg`,
    alt: `True Lips social feed post ${n}`,
  })),
  stories: [1, 2, 3].map((n) => ({
    src: `/projects/evenflo/true-lips-campaign/social/stories/evenflo-true-lips-social-story-${n}.jpg`,
    alt: `True Lips social story ${n}`,
  })),
  video: {
    src: "/projects/evenflo/true-lips-campaign/video/evenflo-true-lips-campaign-video.mp4",
    caption: "True Lips — Campaign Film",
  },
};

export const evenfloCaseStudy = {
  heroImage: trueLips.hero.src,
  campaigns: [b2b, trueLips] as const,
  brandPackaging: [
    { asset: b2b.logo, label: "Blonde2Brunette Ink", kind: "Identity" },
    { asset: trueLips.logo, label: "True Lips", kind: "Identity" },
    { asset: b2b.packaging, label: "Blonde2Brunette Ink", kind: "Packaging" },
    { asset: trueLips.packaging, label: "True Lips", kind: "Packaging" },
  ],
  social: [
    { ...trueLips.stories[0], campaign: "True Lips", size: "feature" },
    { ...b2b.posts[0], campaign: "Blonde2Brunette Ink", size: "support" },
    { ...b2b.stories[0], campaign: "Blonde2Brunette Ink", size: "tall" },
    { ...trueLips.posts[0], campaign: "True Lips", size: "support" },
    { ...trueLips.posts[1], campaign: "True Lips", size: "support" },
    { ...b2b.posts[1], campaign: "Blonde2Brunette Ink", size: "support" },
    { ...trueLips.stories[1], campaign: "True Lips", size: "tall" },
    { ...b2b.posts[2], campaign: "Blonde2Brunette Ink", size: "support" },
  ] satisfies SocialPick[],
  motion: [b2b, trueLips].map((c) => ({ ...c.video, campaign: c.title })),
};
