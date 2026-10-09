import "server-only";

import type { EditorialChapter, SectionIntro, SocialPick } from "./types";

// Named case (client permission confirmed 2026-10-09). Still no invented
// figures: performance insights are added only once real data exists.
export const RESOURCE_LIVING_SLUG = "resource-living";
const ASSETS = `/projects/${RESOURCE_LIVING_SLUG}`;
const OCT_2026 = `${ASSETS}/campaigns/06-broward-palm-beach-oct-2026`;

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

// The current track: one Meta Ads campaign covering Broward and Palm Beach,
// segmented into per-category ad sets. October 2026 refresh: a new editorial
// photo system, typographic category ads and a 3-second vertical video per
// category. Performance insights get added only once the campaign reports data.
const categoryVideo = (file: string, caption: string) => ({
  src: `${OCT_2026}/video/${file}.mp4`,
  poster: `${OCT_2026}/video/${file}-poster.jpg`,
  caption,
  orientation: "vertical" as const,
});

const browardPalmBeach: EditorialChapter = {
  slug: "broward-palm-beach-campaign",
  eyebrow: "05 — Campaign",
  title: "Broward – Palm Beach Lead Campaign",
  intro:
    "One Meta Ads lead-generation campaign covering Broward and Palm Beach counties, segmented into service-category ad sets — pools, kitchens, bathrooms, impact windows, roofing, pavers, pergolas, outdoor kitchens and more. The October 2026 refresh gives every category one editorial look: golden-hour South Florida homes, restrained serif headlines and a short vertical video per category.",
  hero: {
    src: `${OCT_2026}/hero/biscayne-bay-living-room-hero.jpg`,
    alt: "Waterfront living room at golden hour overlooking Biscayne Bay",
  },
  social: [
    { src: `${OCT_2026}/advertising/kitchens-baths-beautifully-lived-in.jpg`, alt: "Kitchens & baths ad — Beautifully lived in" },
    { src: `${OCT_2026}/advertising/impact-windows-light-meets-strength.jpg`, alt: "Impact windows & doors ad — Light meets strength" },
    { src: `${OCT_2026}/advertising/roofing-beauty-above-it-all.jpg`, alt: "Roofing ad — Beauty above it all" },
    { src: `${OCT_2026}/advertising/pavers-a-beautiful-first-impression.jpg`, alt: "Pavers & driveways ad — A beautiful first impression" },
    { src: `${OCT_2026}/advertising/interiors-every-detail-elevated.jpg`, alt: "Interiors & home care ad — Every detail, elevated" },
    { src: `${OCT_2026}/advertising/garage-room-for-more.jpg`, alt: "Garage & epoxy ad — Room for more" },
    { src: `${OCT_2026}/advertising/restoration-beauty-renewed.jpg`, alt: "Cleaning & restoration ad — Beauty, renewed" },
    { src: `${OCT_2026}/social/pergola-twilight.jpg`, alt: "Pergola over a pool at twilight" },
  ],
  videos: [
    categoryVideo("01-pools", "Pools — Evenings that feel like a private resort."),
    categoryVideo("02-kitchens", "Kitchens — Where every gathering begins."),
    categoryVideo("03-bathrooms", "Bathrooms — Your daily retreat, redefined."),
    categoryVideo("05-impact-windows-doors", "Impact windows & doors — Light, views and peace of mind."),
    categoryVideo("06-roofing", "Roofing — Built to stand beautiful."),
    categoryVideo("07-pavers", "Pavers — Every arrival, a statement."),
    categoryVideo("10-pergolas", "Pergolas — Outdoor living, elevated."),
    categoryVideo("11-screen-enclosures", "Screen enclosures — Enjoy the outdoors, your way."),
    categoryVideo("21-outdoor-kitchens", "Outdoor kitchens — Entertaining, South Florida style."),
  ],
};

const closingSystem: SectionIntro = {
  eyebrow: "07 — Closing",
  title: "One commercial system, not a set of ads.",
  description:
    "Resource Living's pool and outdoor-living leads and the Broward–Palm Beach Meta campaign share one creative system and one lead-capture mechanism that extends to any new service category.",
};

const socialSection: SectionIntro = {
  eyebrow: "06 — Organic Content",
  title: "One editorial look across every category.",
  description: "Organic posts from the October 2026 calendar — the same photography and light that carry the paid campaign, published as the magazine's own feed.",
};

const social: SocialPick[] = [
  { src: `${OCT_2026}/social/pool-teal-oasis.jpg`, alt: "Teal pool with in-water loungers", campaign: "Pools", size: "support" },
  { src: `${OCT_2026}/social/kitchen-dusk-pool.jpg`, alt: "Marble kitchen at dusk overlooking the pool", campaign: "Kitchens", size: "support" },
  { src: `${OCT_2026}/social/bathroom-palm-beach-canal.jpg`, alt: "Palm Beach bathroom with canal view", campaign: "Bathrooms", size: "support" },
  { src: `${OCT_2026}/social/roofing-waterway-estate.jpg`, alt: "Charcoal-roofed estate by the waterway", campaign: "Roofing", size: "support" },
  { src: `${OCT_2026}/social/closet-marble-island.jpg`, alt: "Walk-in closet with marble island", campaign: "Closets", size: "support" },
  { src: `${OCT_2026}/social/outdoor-kitchen-golden-hour.jpg`, alt: "Outdoor kitchen by the pool at golden hour", campaign: "Outdoor Kitchens", size: "support" },
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
