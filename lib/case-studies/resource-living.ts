import "server-only";

import type { EditorialChapter, SectionIntro, SocialPick } from "./types";

// ANONYMOUS CASE — requires written permission before naming the client.
// No client name, logo, URL or figures may appear in this case. Only assets
// verified free of the client's logo/wordmark are referenced: the ad-sales,
// C2 Multimedia and "Your Business Here" tracks, the stories and the pool
// video all carry the client's branding and stay out until permission exists.
// Paths use the public alias below; next.config.mjs rewrites it to the source
// folder so the client's name never appears in a URL.
export const ANONYMOUS_SLUG = "south-florida-home-magazine";
const ASSETS = `/projects/${ANONYMOUS_SLUG}`;

const poolLeads: EditorialChapter = {
  slug: "pool-leads",
  eyebrow: "04 — Campaign",
  title: "Pool Leads",
  intro:
    "A homeowner-facing lead campaign for South Florida pool and outdoor-living builders, pairing lifestyle imagery with a direct consultation call to action.",
  hero: {
    src: `${ASSETS}/campaigns/02-pool-leads/hero/South-Florida-Living-Luxury-Comfort-Memories-Free-Consultation-hero.png`,
    alt: "Pool Leads campaign hero — South Florida living",
  },
  featureVisual: {
    src: `${ASSETS}/campaigns/02-pool-leads/social/Luxury-Pools.png`,
    alt: "Luxury pools lead ad — South Florida lifestyle photography",
    width: 1080,
    height: 1920,
  },
  social: [
    { src: `${ASSETS}/campaigns/02-pool-leads/social/Pool-Builders-Dream-Backyard-Design-Top-Pool-Builders-Free-Consultation.png`, alt: "Pool builders — dream backyard design" },
    { src: `${ASSETS}/campaigns/02-pool-leads/social/South-Florida-Outdoor-Living-Backyard-Design-Evolution.png`, alt: "Outdoor living — backyard design evolution" },
    { src: `${ASSETS}/campaigns/02-pool-leads/social/Vacation-Living.png`, alt: "Vacation living lead ad" },
  ],
};

// The current track: a single Meta Ads campaign covering Broward and Palm
// Beach counties, segmented into per-category ad sets. Performance insights
// get added only once the campaign reports real data (and the client allows it).
const browardPalmBeach: EditorialChapter = {
  slug: "broward-palm-beach-campaign",
  eyebrow: "05 — Campaign",
  title: "Broward – Palm Beach Lead Campaign",
  intro:
    "One Meta Ads lead-generation campaign covering Broward and Palm Beach counties, structured as a single campaign segmented into service-category ad sets — AC, bathrooms, pavers, roofing, windows & doors, landscaping, kitchens, pools and more — each with its own creative and a dedicated Meta lead form.",
  hero: {
    src: `${ASSETS}/campaigns/05-broward-palm-beach-meta-campaign/hero/broward-palm-beach-campaign-hero.png`,
    alt: "Broward – Palm Beach Meta Ads lead campaign hero — kitchens category creative",
  },
  social: [
    { src: `${ASSETS}/campaigns/05-broward-palm-beach-meta-campaign/advertising/kitchens-ad-creative.png`, alt: "Kitchens category ad creative" },
    { src: `${ASSETS}/campaigns/05-broward-palm-beach-meta-campaign/advertising/bathrooms-ad-creative.png`, alt: "Bathrooms category ad creative" },
    { src: `${ASSETS}/campaigns/05-broward-palm-beach-meta-campaign/advertising/roofing-ad-creative.png`, alt: "Roofing category ad creative" },
    { src: `${ASSETS}/campaigns/05-broward-palm-beach-meta-campaign/advertising/windows-and-doors-ad-creative.png`, alt: "Windows & doors category ad creative" },
    { src: `${ASSETS}/campaigns/05-broward-palm-beach-meta-campaign/advertising/landscaping-ad-creative.jpg`, alt: "Landscaping category ad creative" },
  ],
};

const impactWindows = {
  src: `${ASSETS}/social/Impact-Windows-Doors-Elegance-Security-Hurricane-Protection.png`,
  alt: "Impact windows & doors category ad",
};

const closingSystem: SectionIntro = {
  eyebrow: "07 — Closing",
  title: "One commercial system, not a set of ads.",
  description:
    "Homeowner-facing pool and outdoor-living leads and the Broward–Palm Beach Meta campaign share one creative system and one lead-capture mechanism that extends to any new service category.",
};

const socialSection: SectionIntro = {
  eyebrow: "06 — Social Campaign System",
  title: "Two campaigns, one editorial sequence.",
  description: "The strongest feed and story executions across both tracks, curated side by side rather than shown as a full export dump.",
};

const social: SocialPick[] = [
  { ...poolLeads.social![0], campaign: "Pool Leads", size: "feature" },
  { ...browardPalmBeach.social![0], campaign: "Broward – Palm Beach", size: "tall" },
  { ...poolLeads.social![2], campaign: "Pool Leads", size: "support" },
  { ...impactWindows, campaign: "Service Categories", size: "support" },
  { ...poolLeads.social![1], campaign: "Pool Leads", size: "tall" },
  { ...browardPalmBeach.social![1], campaign: "Broward – Palm Beach", size: "support" },
  { ...browardPalmBeach.social![3], campaign: "Broward – Palm Beach", size: "support" },
];

export type ResourceLivingCaseStudyData = {
  heroImage: string;
  narrative: {
    creativeSystem: string;
    campaignExecution: string;
    channels: string;
    outcome: string;
  };
  chapters: EditorialChapter[];
  closingSystem: SectionIntro;
  socialSection: SectionIntro;
  social: SocialPick[];
};

export const resourceLivingCaseStudy: ResourceLivingCaseStudyData = {
  heroImage: browardPalmBeach.hero.src,
  narrative: {
    creativeSystem:
      "A modular design system — consistent typography, color and layout rules — lets every homeowner lead campaign and service category read as part of one trusted publication instead of separate marketing efforts.",
    campaignExecution:
      "Directed homeowner-facing pool and outdoor-living lead generation and the current Meta Ads campaign for Broward and Palm Beach, segmented into per-category ad sets with dedicated lead forms.",
    channels: "Print advertising, direct-response social, email, short-form vertical video and a recurring social content calendar across home-service categories.",
    outcome:
      "The campaigns now share one visual and messaging system — a repeatable framework the publication can extend to new service categories without starting from scratch.",
  },
  chapters: [poolLeads, browardPalmBeach],
  closingSystem,
  socialSection,
  social,
};
