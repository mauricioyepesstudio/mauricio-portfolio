import "server-only";

import type { CampaignChapterData } from "./types";
import type { CaseStudyData } from "./case-study-data";

const c2Multimedia: CampaignChapterData = {
  slug: "c2-multimedia",
  eyebrow: "05 — Campaign",
  title: "C2 Multimedia Lead Network",
  intro:
    "A dedicated identity and email system for Resource Living's advertiser-facing lead network, positioning the program as its own trusted media brand.",
  hero: {
    src: "/projects/resource-living/c2-miltimedia-lead-network-campaign/hero/C2-multimedia-lead-network-hero.webp",
    alt: "C2 Multimedia Lead Network campaign hero — Resource Living",
  },
  logo: {
    src: "/projects/resource-living/c2-miltimedia-lead-network-campaign/logo/C2-multimedia-lead-network-logo.svg",
    alt: "C2 Multimedia Lead Network logo",
  },
  newsletter: {
    src: "/projects/resource-living/c2-miltimedia-lead-network-campaign/newsletter/C2-multimedia-lead-network-newsletter.jpg",
    alt: "C2 Multimedia Lead Network newsletter",
    note: "Advertiser Newsletter",
    width: 600,
    height: 2200,
  },
  posts: [
    { src: "/projects/resource-living/c2-miltimedia-lead-network-campaign/social/Kitchen-Cabinets.png", alt: "C2 Multimedia kitchen cabinets lead ad" },
  ],
};

const adSales: CampaignChapterData = {
  slug: "ad-sales",
  eyebrow: "06 — Campaign",
  title: "Advertiser Acquisition",
  intro:
    "The pitch to prospective advertisers — a direct-response campaign proving Resource Living's reach into 180K+ South Florida homes, backed by a short-form video reel.",
  hero: {
    src: "/projects/resource-living/resource-living-ad-sales-campaign/hero/resource-living-ad-sales-campaign-hero.png",
    alt: "Resource Living advertiser acquisition campaign hero",
  },
  logo: {
    src: "/projects/resource-living/resource-living-ad-sales-campaign/logo/ResourceLivingAppLogo.jpg",
    alt: "Resource Living app logo",
  },
  posts: [
    { src: "/projects/resource-living/resource-living-ad-sales-campaign/social/Advertising-Services-Business-Growth.png", alt: "Advertising services — business growth" },
    { src: "/projects/resource-living/resource-living-ad-sales-campaign/social/Advertising-Services-Stand-Out-Be-Seen-Consistent-Calls.png", alt: "Advertising services — stand out, be seen" },
    { src: "/projects/resource-living/resource-living-ad-sales-campaign/social/Local-Homes-Marketing-Reach-180K-Homes.png", alt: "Advertising services — reach 180K homes" },
  ],
  videos: [
    {
      src: "/projects/resource-living/resource-living-ad-sales-campaign/VIDEOS/resource_living_pro_ad.mp4",
      caption: "Advertiser Acquisition — Campaign Reel",
      orientation: "landscape",
    },
    {
      src: "/projects/resource-living/resource-living-ad-sales-campaign/VIDEOS/final_meta_reel.mp4",
      caption: "Advertiser Acquisition — Meta Placement Reel",
      orientation: "landscape",
    },
  ],
};

const poolLeads: CampaignChapterData = {
  slug: "pool-leads",
  eyebrow: "07 — Campaign",
  title: "Pool Leads",
  intro:
    "A homeowner-facing lead campaign for South Florida pool and outdoor-living builders, pairing lifestyle imagery with a direct consultation call to action.",
  hero: {
    src: "/projects/resource-living/resource-living-pool-leads-campaign/hero/South-Florida-Living-Luxury-Comfort-Memories-Free-Consultation-hero.png",
    alt: "Pool Leads campaign hero — Resource Living",
  },
  posts: [
    { src: "/projects/resource-living/resource-living-pool-leads-campaign/social/Luxury-Pools.png", alt: "Luxury pools lead ad" },
    { src: "/projects/resource-living/resource-living-pool-leads-campaign/social/Pool-Builders-Dream-Backyard-Design-Top-Pool-Builders-Free-Consultation.png", alt: "Pool builders — dream backyard design" },
    { src: "/projects/resource-living/resource-living-pool-leads-campaign/social/South-Florida-Outdoor-Living-Backyard-Design-Evolution.png", alt: "Outdoor living — backyard design evolution" },
    { src: "/projects/resource-living/resource-living-pool-leads-campaign/social/Vacation-Living.png", alt: "Vacation living lead ad" },
  ],
  videos: [
    {
      src: "/projects/resource-living/resource-living-pool-leads-campaign/videos/Final Pools.mp4",
      caption: "Pool Leads — Campaign Video",
      orientation: "landscape",
    },
  ],
};

const yourBusinessHere: CampaignChapterData = {
  slug: "your-business-here",
  eyebrow: "08 — Campaign",
  title: "Your Business Here — Service Categories",
  intro:
    "A modular lead-generation system spanning five home-service categories — kitchens, windows, roofing, patios and HVAC — sharing one placement format that scales to any local business.",
  hero: {
    src: "/projects/resource-living/resource-living-your-business-here-services-campaign/Kitchen-Restorations.png",
    alt: "Your Business Here — kitchen restorations placement",
  },
  posts: [
    { src: "/projects/resource-living/resource-living-your-business-here-services-campaign/Best-Home-Improvements-post-1.png", alt: "Best home improvements placement" },
    { src: "/projects/resource-living/resource-living-your-business-here-services-campaign/Hurricane-Protection.png", alt: "Hurricane protection placement" },
    { src: "/projects/resource-living/resource-living-your-business-here-services-campaign/Landscaping-Services-Business-Placement-Client-Visibility.png", alt: "Landscaping services placement" },
    { src: "/projects/resource-living/resource-living-your-business-here-services-campaign/Pool-Patio-Renovations.png", alt: "Pool & patio renovations placement" },
  ],
  stories: [1, 2, 3, 4, 5, 6].map((n) => ({
    src: `/projects/resource-living/your-business-here-services-campaign/social/stories/resource-living-story-${n}.png`,
    alt: `Resource Living social story ${n}`,
  })),
  gallery: [
    {
      title: "Category Highlights",
      assets: [
        { src: "/projects/resource-living/social/ac/social/Air-Conditioning-Services.png", alt: "Air conditioning services category highlight" },
        { src: "/projects/resource-living/social/kitchens/social/Kitchen-Remodeling-New-Kitchen-1.png", alt: "Kitchen remodeling category highlight" },
        { src: "/projects/resource-living/social/patios/social/Backyard-Oasis-Design-Build-1.png", alt: "Backyard patio category highlight" },
        { src: "/projects/resource-living/social/roofers/Roofing-Decra-Villa-Tile-Shingle-Shake.png", alt: "Roofing category highlight" },
        { src: "/projects/resource-living/social/windows/social/Impact-Windows-Doors-Elegance-Security-Hurricane-Protection.png", alt: "Impact windows & doors category highlight" },
      ],
    },
  ],
  videos: [
    {
      src: "/projects/resource-living/videos/MIZNER PAVERS.mp4",
      caption: "Mizner Pavers — Category Campaign Video",
      orientation: "landscape",
    },
  ],
};

export const resourceLivingCaseStudy: CaseStudyData = {
  heroImage: adSales.hero.src,
  campaigns: [c2Multimedia, adSales, poolLeads, yourBusinessHere],
  brandPackagingCopy: {
    eyebrow: "04 — Brand System",
    title: "One publication, four audience journeys.",
    description:
      "Editorial, advertiser acquisition, homeowner lead generation and a modular service-category system all read as parts of one connected Resource Living ecosystem.",
  },
  brandPackaging: [
    { asset: c2Multimedia.logo!, label: "C2 Multimedia", kind: "Identity" },
    { asset: adSales.logo!, label: "Resource Living App", kind: "Identity" },
  ],
};
