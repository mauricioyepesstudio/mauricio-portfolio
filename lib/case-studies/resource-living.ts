import "server-only";

import type { CuratedAsset, EditorialChapter, IdentityTile, MotionItem, SectionIntro, SocialPick } from "./types";

// 05 — Campaign. Leads the chapter sequence with the real commercial pitch —
// the "180K+ Homes" reach claim is promoted ahead of the other supporting
// ads, matching the approved curation's emphasis on the strongest proof.
const adSales: EditorialChapter = {
  slug: "ad-sales",
  eyebrow: "05 — Campaign",
  title: "Advertiser Acquisition",
  intro:
    "The pitch to prospective advertisers — a direct-response campaign proving Resource Living's reach into 180K+ South Florida homes, backed by a short-form video reel.",
  hero: {
    src: "/projects/resource-living/campaigns/01-ad-sales/hero/resource-living-ad-sales-campaign-hero.png",
    alt: "Resource Living advertiser acquisition campaign hero",
  },
  social: [
    { src: "/projects/resource-living/campaigns/01-ad-sales/social/Local-Homes-Marketing-Reach-180K-Homes.png", alt: "Advertising services — reach 180K homes" },
    { src: "/projects/resource-living/campaigns/01-ad-sales/social/Advertising-Services-Business-Growth.png", alt: "Advertising services — business growth" },
    { src: "/projects/resource-living/campaigns/01-ad-sales/social/Advertising-Services-Stand-Out-Be-Seen-Consistent-Calls.png", alt: "Advertising services — stand out, be seen" },
  ],
  videos: [
    {
      src: "/projects/resource-living/campaigns/01-ad-sales/motion/resource_living_pro_ad.mp4",
      caption: "Advertiser Acquisition — Campaign Reel",
      orientation: "vertical",
    },
    {
      src: "/projects/resource-living/campaigns/01-ad-sales/motion/final_meta_reel.mp4",
      caption: "Advertiser Acquisition — Meta Placement Reel",
      orientation: "vertical",
    },
  ],
};

// 06 — Campaign. The C2 diagram is real system documentation — 13 numbered
// steps covering ad creation, landing pages, CRM lead capture, organic
// social amplification and analytics reporting — not an email. It renders
// through `featureVisual` (full width, natural aspect, no chrome) instead
// of `newsletter`, which always draws an email-style header bar.
const c2Multimedia: EditorialChapter = {
  slug: "c2-multimedia",
  eyebrow: "06 — Campaign",
  title: "C2 Multimedia: The Lead System",
  intro:
    "The real, documented mechanism behind Resource Living's advertiser lead network — ad creation, landing pages, CRM lead capture, organic social amplification and performance reporting, walked through step by step rather than described.",
  hero: {
    src: "/projects/resource-living/campaigns/03-c2-multimedia-lead-network/hero/C2-multimedia-lead-network-hero.webp",
    alt: "C2 Multimedia Lead Network campaign hero — Resource Living",
  },
  featureVisual: {
    src: "/projects/resource-living/campaigns/03-c2-multimedia-lead-network/email/C2-multimedia-lead-network-newsletter.jpg",
    alt: "C2 Multimedia lead-generation system — ad, landing page, CRM, social amplification and analytics",
    label: "Lead-Generation System Documentation",
    width: 1080,
    height: 15042,
  },
  social: [
    { src: "/projects/resource-living/campaigns/03-c2-multimedia-lead-network/social/Kitchen-Cabinets.png", alt: "C2 Multimedia kitchen cabinets lead ad" },
  ],
};

// 07 — Campaign. Luxury Pools — the strongest lifestyle asset — leads as a
// large, uncropped feature moment; the remaining three executions sit in a
// smaller supporting grid rather than all four at equal weight.
const poolLeads: EditorialChapter = {
  slug: "pool-leads",
  eyebrow: "07 — Campaign",
  title: "Pool Leads",
  intro:
    "A homeowner-facing lead campaign for South Florida pool and outdoor-living builders, pairing lifestyle imagery with a direct consultation call to action.",
  hero: {
    src: "/projects/resource-living/campaigns/02-pool-leads/hero/South-Florida-Living-Luxury-Comfort-Memories-Free-Consultation-hero.png",
    alt: "Pool Leads campaign hero — Resource Living",
  },
  featureVisual: {
    src: "/projects/resource-living/campaigns/02-pool-leads/social/Luxury-Pools.png",
    alt: "Luxury pools lead ad — South Florida lifestyle photography",
    width: 1080,
    height: 1920,
  },
  social: [
    { src: "/projects/resource-living/campaigns/02-pool-leads/social/Pool-Builders-Dream-Backyard-Design-Top-Pool-Builders-Free-Consultation.png", alt: "Pool builders — dream backyard design" },
    { src: "/projects/resource-living/campaigns/02-pool-leads/social/South-Florida-Outdoor-Living-Backyard-Design-Evolution.png", alt: "Outdoor living — backyard design evolution" },
    { src: "/projects/resource-living/campaigns/02-pool-leads/social/Vacation-Living.png", alt: "Vacation living lead ad" },
  ],
  videos: [
    {
      src: "/projects/resource-living/campaigns/02-pool-leads/motion/Final Pools.mp4",
      caption: "Pool Leads — Campaign Video",
      orientation: "vertical",
    },
  ],
};

const yourBusinessHereStories = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/projects/resource-living/your-business-here-services-campaign/social/stories/resource-living-story-${n}.png`,
  alt: `Resource Living social story ${n}`,
}));

const yourBusinessHerePosts: CuratedAsset[] = [
  { src: "/projects/resource-living/campaigns/04-your-business-here-services/advertising/Best-Home-Improvements-post-1.png", alt: "Best home improvements placement" },
  { src: "/projects/resource-living/campaigns/04-your-business-here-services/advertising/Hurricane-Protection.png", alt: "Hurricane protection placement" },
  { src: "/projects/resource-living/campaigns/04-your-business-here-services/advertising/Landscaping-Services-Business-Placement-Client-Visibility.png", alt: "Landscaping services placement" },
  { src: "/projects/resource-living/campaigns/04-your-business-here-services/advertising/Pool-Patio-Renovations.png", alt: "Pool & patio renovations placement" },
];

// 08 — Campaign. Story-1's phone-mockup treatment — the highest-resolution,
// highest-craft asset in the archive — gets a dedicated large presentation
// instead of sitting in a six-up equal-weight story grid. Only two of the
// remaining five stories are shown as supporting proof.
const yourBusinessHere: EditorialChapter = {
  slug: "your-business-here",
  eyebrow: "08 — Campaign",
  title: "Your Business Here — Service Categories",
  intro:
    "A modular lead-generation system spanning five home-service categories — kitchens, windows, roofing, patios and HVAC — sharing one placement format that scales to any local business.",
  hero: {
    src: "/projects/resource-living/campaigns/04-your-business-here-services/advertising/Kitchen-Restorations.png",
    alt: "Your Business Here — kitchen restorations placement",
  },
  featureVisual: {
    src: yourBusinessHereStories[0].src,
    alt: yourBusinessHereStories[0].alt,
    label: "Placement Mockup — Full Resolution",
    width: 4500,
    height: 8000,
  },
  social: [...yourBusinessHerePosts, yourBusinessHereStories[1], yourBusinessHereStories[2]],
  videos: [
    {
      src: "/projects/resource-living/motion/MIZNER PAVERS.mp4",
      caption: "Mizner Pavers — Category Campaign Video",
      orientation: "vertical",
    },
  ],
};

// 09 — Campaign. Folds the previously orphaned category-highlight grid
// (rendered disconnected from any narrative chapter at the bottom of the
// page) into a proper chapter. Windows leads at hero scale — the strongest,
// highest-resolution highlight; the three lower-resolution tiles (AC,
// Kitchen, Roofing) sit at small supporting scale rather than major visuals.
const categoryNetwork: EditorialChapter = {
  slug: "category-network",
  eyebrow: "09 — Campaign",
  title: "The Category Network",
  intro:
    "Five home-service categories sharing one modular placement system — previously shown only as a disconnected grid at the bottom of the page.",
  hero: {
    src: "/projects/resource-living/social/Impact-Windows-Doors-Elegance-Security-Hurricane-Protection.png",
    alt: "Impact windows & doors category highlight",
  },
  social: [
    { src: "/projects/resource-living/social/Backyard-Oasis-Design-Build-1.png", alt: "Backyard patio category highlight" },
    { src: "/projects/resource-living/social/Air-Conditioning-Services.png", alt: "Air conditioning services category highlight" },
    { src: "/projects/resource-living/social/Kitchen-Remodeling-New-Kitchen-1.png", alt: "Kitchen remodeling category highlight" },
    { src: "/projects/resource-living/social/Roofing-Decra-Villa-Tile-Shingle-Shake.png", alt: "Roofing category highlight" },
  ],
};

// 13 — Campaign. The current, live-in-progress track: a single Meta Ads
// campaign (not a print/editorial placement) covering Broward and Palm
// Beach counties, segmented into per-category ad sets. Strategy and report
// exist now; performance insights get added here once the campaign is live
// and reporting real cost-per-lead data.
const browardPalmBeach: EditorialChapter = {
  slug: "broward-palm-beach-campaign",
  eyebrow: "13 — Campaign",
  title: "Broward – Palm Beach Lead Campaign",
  intro:
    "The current track: one Meta Ads lead-generation campaign covering Broward and Palm Beach counties, structured as a single campaign segmented into service-category ad sets — AC, bathrooms, pavers, roofing, windows & doors, landscaping, kitchens, pools and more — each with its own creative and a dedicated Meta lead form. Strategy, audience targeting and the creative system are built and approved; live cost-per-lead and conversion insights will be added here once the campaign is running.",
  hero: {
    src: "/projects/resource-living/campaigns/05-broward-palm-beach-meta-campaign/hero/broward-palm-beach-campaign-hero.png",
    alt: "Broward – Palm Beach Meta Ads lead campaign hero — kitchens category creative",
  },
  social: [
    { src: "/projects/resource-living/campaigns/05-broward-palm-beach-meta-campaign/advertising/kitchens-ad-creative.png", alt: "Kitchens category ad creative — Broward Palm Beach campaign" },
    { src: "/projects/resource-living/campaigns/05-broward-palm-beach-meta-campaign/advertising/bathrooms-ad-creative.png", alt: "Bathrooms category ad creative — Broward Palm Beach campaign" },
    { src: "/projects/resource-living/campaigns/05-broward-palm-beach-meta-campaign/advertising/pools-ad-creative.png", alt: "Pools category ad creative — Broward Palm Beach campaign" },
    { src: "/projects/resource-living/campaigns/05-broward-palm-beach-meta-campaign/advertising/roofing-ad-creative.png", alt: "Roofing category ad creative — Broward Palm Beach campaign" },
    { src: "/projects/resource-living/campaigns/05-broward-palm-beach-meta-campaign/advertising/windows-and-doors-ad-creative.png", alt: "Windows & doors category ad creative — Broward Palm Beach campaign" },
    { src: "/projects/resource-living/campaigns/05-broward-palm-beach-meta-campaign/advertising/landscaping-ad-creative.jpg", alt: "Landscaping category ad creative — Broward Palm Beach campaign" },
  ],
};

const brandEditorial: SectionIntro = {
  eyebrow: "04 — Brand System",
  title: "One publication, four audience journeys.",
  description:
    "Editorial, advertiser acquisition, homeowner lead generation and a modular service-category system all read as parts of one connected Resource Living ecosystem.",
};

const publicationSystem: IdentityTile[] = [
  {
    asset: { src: "/projects/resource-living/campaigns/03-c2-multimedia-lead-network/identity/C2-multimedia-lead-network-logo.svg", alt: "C2 Multimedia Lead Network logo" },
    label: "C2 Multimedia",
    kind: "Identity",
  },
  {
    asset: { src: "/projects/resource-living/campaigns/01-ad-sales/identity/ResourceLivingAppLogo.jpg", alt: "Resource Living app logo" },
    label: "Resource Living App",
    kind: "Identity",
  },
];

// The opening ecosystem visual — Story-1's phone-mockup treatment shown
// full-width and uncropped ahead of any chapter. A 9:16 image this tall
// would crop destructively inside ProjectHero's wide banner aspect, so it
// renders here instead, immediately after the brand section.
const openingVisual: SectionIntro = {
  eyebrow: "The Integrated Ecosystem",
  title: "One creative system, four commercial campaigns.",
  description:
    "The Your Business Here placement system, shown at full resolution — real digital campaign execution built for a real commercial marketing context.",
};

const openingFeature = {
  src: yourBusinessHereStories[0].src,
  alt: yourBusinessHereStories[0].alt,
  width: 4500,
  height: 8000,
};

const closingSystem: SectionIntro = {
  eyebrow: "12 — Closing",
  title: "One commercial system, not a set of ads.",
  description:
    "Advertiser acquisition, the C2 lead-generation system, homeowner-facing pool leads, the modular Your Business Here placements and the category network share one creative system and one commercial mechanism.",
};

const socialSection: SectionIntro = {
  eyebrow: "10 — Social Campaign System",
  title: "Four campaigns, one editorial sequence.",
  description: "The strongest feed and story executions across every track, curated side by side rather than shown as a full export dump.",
};

const social: SocialPick[] = [
  { ...adSales.social![0], campaign: "Advertiser Acquisition", size: "feature" },
  { ...yourBusinessHereStories[0], campaign: "Your Business Here", size: "tall" },
  { ...c2Multimedia.social![0], campaign: "C2 Multimedia", size: "support" },
  { src: poolLeads.featureVisual!.src, alt: poolLeads.featureVisual!.alt, campaign: "Pool Leads", size: "support" },
  { ...yourBusinessHereStories[1], campaign: "Your Business Here", size: "tall" },
  { ...adSales.social![1], campaign: "Advertiser Acquisition", size: "support" },
  { ...poolLeads.social![0], campaign: "Pool Leads", size: "support" },
  { ...yourBusinessHerePosts[0], campaign: "Your Business Here", size: "support" },
];

const motionSection: SectionIntro = {
  eyebrow: "11 — Motion",
  title: "Four campaigns, in motion.",
};

const motion: MotionItem[] = [adSales, poolLeads, yourBusinessHere].flatMap((c) =>
  c.videos!.map((v) => ({ ...v, campaign: c.title }))
);

export type ResourceLivingCaseStudyData = {
  heroImage: string;
  narrative: {
    creativeSystem: string;
    campaignExecution: string;
    channels: string;
    outcome: string;
  };
  brandEditorial: SectionIntro;
  publicationSystem: IdentityTile[];
  openingVisual: SectionIntro;
  openingFeature: { src: string; alt: string; width: number; height: number };
  chapters: EditorialChapter[];
  closingSystem: SectionIntro;
  socialSection: SectionIntro;
  social: SocialPick[];
  motionSection: SectionIntro;
  motion: MotionItem[];
};

export const resourceLivingCaseStudy: ResourceLivingCaseStudyData = {
  heroImage: adSales.hero.src,
  narrative: {
    creativeSystem:
      "A modular design system — consistent typography, color and layout rules — lets the advertiser outreach, homeowner lead campaigns and the category-placement network all read as one connected Resource Living ecosystem instead of separate marketing efforts.",
    campaignExecution:
      "Directed five connected campaign tracks: the C2 Multimedia advertiser lead network (with a documented ad-to-analytics system), an advertiser-acquisition push proving reach into 180K+ South Florida homes, homeowner-facing pool and outdoor-living lead generation, a modular 'Your Business Here' system spanning five home-service categories, and the current live track — a single Meta Ads campaign for Broward and Palm Beach segmented into per-category ad sets with dedicated lead forms.",
    channels: "Print advertising, direct-response social, homeowner and advertiser email, short-form vertical video, and a recurring social content calendar across five service categories.",
    outcome:
      "The four tracks now share one visual and messaging system, giving Resource Living a repeatable framework it can extend to new service categories without starting from scratch.",
  },
  brandEditorial,
  publicationSystem,
  openingVisual,
  openingFeature,
  chapters: [adSales, c2Multimedia, poolLeads, yourBusinessHere, categoryNetwork, browardPalmBeach],
  closingSystem,
  socialSection,
  social,
  motionSection,
  motion,
};
