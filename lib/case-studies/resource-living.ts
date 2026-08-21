import "server-only";

import type {
  CuratedAsset,
  EditorialChapter,
  IdentityTile,
  MotionItem,
  SectionIntro,
  SocialPick,
} from "./types";

const base = "/projects/resource-living";

const adSalesHero: CuratedAsset = {
  src: `${base}/resource-living-ad-sales-campaign/hero/resource-living-ad-sales-campaign-hero.png`,
  alt: "Resource Living magazine advertising campaign hero",
};

const publicationLogo: CuratedAsset = {
  src: `${base}/resource-living-ad-sales-campaign/logo/ResourceLivingAppLogo.jpg`,
  alt: "Resource Living publication logo lockup",
};

const c2Logo: CuratedAsset = {
  src: `${base}/c2-miltimedia-lead-network-campaign/logo/C2-multimedia-lead-network-logo.svg`,
  alt: "C2 Multimedia lead network campaign logo",
};

const adSalesChapter: EditorialChapter = {
  slug: "ad-sales",
  eyebrow: "05 — Campaign",
  title: "Magazine Advertising & Ad Sales",
  intro:
    "Creative direction for advertiser acquisition — positioning Resource Living as a trusted South Florida home-improvement publication with a clear media proposition across print, social and motion.",
  hero: adSalesHero,
  spotlight: {
    ...publicationLogo,
    label: "Publication Identity",
  },
  social: [
    {
      src: `${base}/resource-living-ad-sales-campaign/social/Advertising-Services-Business-Growth.png`,
      alt: "Resource Living ad sales social — business growth messaging",
    },
    {
      src: `${base}/resource-living-ad-sales-campaign/social/Advertising-Services-Stand-Out-Be-Seen-Consistent-Calls.png`,
      alt: "Resource Living ad sales social — stand out and be seen",
    },
    {
      src: `${base}/resource-living-ad-sales-campaign/social/Local-Homes-Marketing-Reach-180K-Homes.png`,
      alt: "Resource Living ad sales social — local homes marketing reach",
    },
  ],
  videos: [
    {
      src: `${base}/resource-living-ad-sales-campaign/VIDEOS/final_meta_reel.mp4`,
      caption: "Ad Sales — Meta Reel",
      campaign: "Magazine Advertising & Ad Sales",
    },
    {
      src: `${base}/resource-living-ad-sales-campaign/VIDEOS/resource_living_pro_ad.mp4`,
      caption: "Ad Sales — Pro Spot",
      campaign: "Magazine Advertising & Ad Sales",
    },
  ],
};

const poolLeadsChapter: EditorialChapter = {
  slug: "pool-leads",
  eyebrow: "06 — Campaign",
  title: "Pool Leads",
  intro:
    "A category-specific lead-generation campaign connecting South Florida homeowners with pool builders — hero creative, social content and motion built around outdoor living and free consultation offers.",
  hero: {
    src: `${base}/resource-living-pool-leads-campaign/hero/South-Florida-Living-Luxury-Comfort-Memories-Free-Consultation-hero.png`,
    alt: "Pool leads campaign hero — South Florida outdoor living",
  },
  social: [
    {
      src: `${base}/resource-living-pool-leads-campaign/social/Luxury-Pools.png`,
      alt: "Pool leads social — luxury pools",
    },
    {
      src: `${base}/resource-living-pool-leads-campaign/social/Pool-Builders-Dream-Backyard-Design-Top-Pool-Builders-Free-Consultation.png`,
      alt: "Pool leads social — dream backyard design",
    },
    {
      src: `${base}/resource-living-pool-leads-campaign/social/South-Florida-Outdoor-Living-Backyard-Design-Evolution.png`,
      alt: "Pool leads social — outdoor living evolution",
    },
    {
      src: `${base}/resource-living-pool-leads-campaign/social/Vacation-Living.png`,
      alt: "Pool leads social — vacation living",
    },
  ],
  videos: [
    {
      src: `${base}/resource-living-pool-leads-campaign/videos/Final Pools.mp4`,
      caption: "Pool Leads — Campaign Film",
      campaign: "Pool Leads",
    },
  ],
};

const c2Chapter: EditorialChapter = {
  slug: "c2-multimedia",
  eyebrow: "07 — Campaign",
  title: "C2 Multimedia Lead Network",
  intro:
    "Lead-network creative for the C2 Multimedia program — connecting service businesses with homeowners through a coordinated hero, identity, email and social system.",
  hero: {
    src: `${base}/c2-miltimedia-lead-network-campaign/hero/C2-multimedia-lead-network-hero.webp`,
    alt: "C2 Multimedia lead network campaign hero",
  },
  spotlight: {
    ...c2Logo,
    label: "Campaign Identity",
  },
  newsletter: {
    src: `${base}/c2-miltimedia-lead-network-campaign/newsletter/C2-multimedia-lead-network-newsletter.jpg`,
    alt: "C2 Multimedia lead network email",
    note: "Lead Network Email",
    width: 1080,
    height: 15042,
  },
  social: [
    {
      src: `${base}/c2-miltimedia-lead-network-campaign/social/Kitchen-Cabinets.png`,
      alt: "C2 Multimedia social — kitchen cabinets category",
    },
  ],
};

const yourBusinessHereChapter: EditorialChapter = {
  slug: "your-business-here",
  eyebrow: "08 — Campaign",
  title: "Your Business Here",
  intro:
    "Service-category social creative for the Your Business Here program — recurring post formats built for home-improvement contractors across kitchens, hurricane protection, landscaping and pool renovations.",
  hero: {
    src: `${base}/resource-living-your-business-here-services-campaign/Landscaping-Services-Business-Placement-Client-Visibility.png`,
    alt: "Your Business Here campaign — landscaping services business placement",
  },
  social: [
    {
      src: `${base}/resource-living-your-business-here-services-campaign/Best-Home-Improvements-post-1.png`,
      alt: "Your Business Here social — best home improvements",
    },
    {
      src: `${base}/resource-living-your-business-here-services-campaign/Hurricane-Protection.png`,
      alt: "Your Business Here social — hurricane protection",
    },
    {
      src: `${base}/resource-living-your-business-here-services-campaign/Kitchen-Restorations.png`,
      alt: "Your Business Here social — kitchen restorations",
    },
    {
      src: `${base}/resource-living-your-business-here-services-campaign/Pool-Patio-Renovations.png`,
      alt: "Your Business Here social — pool and patio renovations",
    },
  ],
};

export const resourceLivingCaseStudy = {
  heroImage: adSalesHero.src,

  publicationSystem: [
    { asset: publicationLogo, label: "Resource Living", kind: "Publication" },
    { asset: c2Logo, label: "C2 Multimedia", kind: "Lead Network" },
  ] satisfies IdentityTile[],

  brandEditorial: {
    eyebrow: "04 — Brand & Editorial System",
    title: "One publication, one creative framework.",
    description:
      "Creative direction for a premium home-improvement publication — identity lockups and campaign systems designed to carry consistently from magazine advertising through digital lead programs and recurring social content.",
  } satisfies SectionIntro,

  chapters: [adSalesChapter, poolLeadsChapter, c2Chapter, yourBusinessHereChapter] as const,

  categorySocial: [
    {
      src: `${base}/social/ac/social/Air-Conditioning-Services.png`,
      alt: "Category social — air conditioning services",
    },
    {
      src: `${base}/social/kitchens/social/Kitchen-Remodeling-New-Kitchen-1.png`,
      alt: "Category social — kitchen remodeling",
    },
    {
      src: `${base}/social/patios/social/Backyard-Oasis-Design-Build-1.png`,
      alt: "Category social — backyard oasis design and build",
    },
    {
      src: `${base}/social/roofers/Roofing-Decra-Villa-Tile-Shingle-Shake.png`,
      alt: "Category social — roofing materials",
    },
    {
      src: `${base}/social/windows/social/Impact-Windows-Doors-Elegance-Security-Hurricane-Protection.png`,
      alt: "Category social — impact windows and doors",
    },
  ] satisfies CuratedAsset[],

  social: [
    {
      src: `${base}/resource-living-pool-leads-campaign/social/Luxury-Pools.png`,
      alt: "Pool leads social — luxury pools",
      campaign: "Pool Leads",
      size: "feature",
    },
    {
      src: `${base}/resource-living-ad-sales-campaign/social/Advertising-Services-Business-Growth.png`,
      alt: "Ad sales social — business growth",
      campaign: "Ad Sales",
      size: "support",
    },
    {
      src: `${base}/social/kitchens/social/Kitchen-Remodeling-New-Kitchen-1.png`,
      alt: "Category social — kitchen remodeling",
      campaign: "Social System",
      size: "tall",
    },
    {
      src: `${base}/resource-living-your-business-here-services-campaign/Hurricane-Protection.png`,
      alt: "Your Business Here social — hurricane protection",
      campaign: "Your Business Here",
      size: "support",
    },
    {
      src: `${base}/c2-miltimedia-lead-network-campaign/social/Kitchen-Cabinets.png`,
      alt: "C2 Multimedia social — kitchen cabinets",
      campaign: "C2 Multimedia",
      size: "support",
    },
    {
      src: `${base}/social/windows/social/Impact-Windows-Doors-Elegance-Security-Hurricane-Protection.png`,
      alt: "Category social — impact windows",
      campaign: "Social System",
      size: "tall",
    },
    {
      src: `${base}/resource-living-pool-leads-campaign/social/Vacation-Living.png`,
      alt: "Pool leads social — vacation living",
      campaign: "Pool Leads",
      size: "support",
    },
    {
      src: `${base}/social/patios/social/Backyard-Oasis-Design-Build-1.png`,
      alt: "Category social — backyard oasis",
      campaign: "Social System",
      size: "support",
    },
  ] satisfies SocialPick[],

  socialSection: {
    eyebrow: "09 — Social Media Campaigns",
    title: "Category content that scales.",
    description:
      "Recurring social formats organized by home-improvement category — air conditioning, kitchens, patios, roofing and windows — designed to extend the publication's lead-generation system without rebuilding creative each time.",
  } satisfies SectionIntro,

  motion: [
    {
      src: `${base}/resource-living-ad-sales-campaign/VIDEOS/final_meta_reel.mp4`,
      caption: "Ad Sales — Meta Reel",
      campaign: "Magazine Advertising & Ad Sales",
    },
    {
      src: `${base}/resource-living-ad-sales-campaign/VIDEOS/resource_living_pro_ad.mp4`,
      caption: "Ad Sales — Pro Spot",
      campaign: "Magazine Advertising & Ad Sales",
    },
    {
      src: `${base}/resource-living-pool-leads-campaign/videos/Final Pools.mp4`,
      caption: "Pool Leads — Campaign Film",
      campaign: "Pool Leads",
    },
    {
      src: `${base}/videos/MIZNER PAVERS.mp4`,
      caption: "Category Video — Mizner Pavers",
      campaign: "Lead Generation",
    },
  ] satisfies MotionItem[],

  motionSection: {
    eyebrow: "10 — Motion & Video",
    title: "Print-to-screen production.",
    description:
      "Video and motion assets produced for advertiser outreach, category lead campaigns and social distribution — extending the same creative direction from magazine advertising into Meta reels and campaign films.",
  } satisfies SectionIntro,

  narrative: {
    creativeSystem:
      "Built a connected visual system spanning magazine advertising, advertiser outreach, category-specific lead campaigns, landing and email experiences, and recurring social content — so each initiative reads as part of one trusted publication.",
    campaignExecution:
      "Directed campaign creative across ad sales, pool leads, the C2 Multimedia lead network and the Your Business Here service program — each with its own hero, social formats and, where applicable, email and motion deliverables.",
    channels:
      "Print advertising, social media, email marketing, landing experiences, lead-generation campaigns and video production for South Florida homeowners and local service businesses.",
    outcome:
      "The resulting system gives the brand a consistent structure that can be extended by campaign and service category without rebuilding the creative framework each time.",
  },
};
