import "server-only";

import type { CampaignChapterData } from "./types";
import type { CaseStudyData } from "./case-study-data";

// 02 — Packaging & Print. Not a literal marketing "campaign," but reuses the
// chapter component so the packaging system gets the same large, editorial
// presentation as every other section instead of being buried in a tile grid.
const packagingAndPrint: CampaignChapterData = {
  slug: "packaging-print",
  eyebrow: "02 — Packaging & Print",
  title: "Packaging & Print",
  intro:
    "The Black Rolling Papers packaging system, built to stand out on shelf and carried consistently through business collateral and a magazine placement.",
  hero: {
    src: "/projects/getlost/black-rolling-papers/packaging/getlost-black-rolling-papers-packaging-2.webp",
    alt: "Black Rolling Papers packaging system — Get Lost",
  },
  gallery: [
    {
      title: "Packaging",
      emphasis: "large",
      assets: [1, 2, 3, 4].map((n) => ({
        src: `/projects/getlost/black-rolling-papers/packaging/getlost-black-rolling-papers-packaging-${n}.webp`,
        alt: `Black Rolling Papers packaging variant ${n}`,
      })),
    },
    {
      title: "Print & Collateral",
      emphasis: "large",
      assets: [
        { src: "/projects/getlost/black-rolling-papers/print/getlost-business-card-front.webp", alt: "Get Lost business card — front" },
        { src: "/projects/getlost/black-rolling-papers/print/getlost-business-card-back.webp", alt: "Get Lost business card — back" },
        { src: "/projects/getlost/black-rolling-papers/print/getlost-magazine-ad.webp", alt: "Get Lost magazine advertisement" },
        { src: "/projects/getlost/black-rolling-papers/print/getlost-post-card.webp", alt: "Get Lost postcard" },
      ],
    },
  ],
};

const blackRollingPapers: CampaignChapterData = {
  slug: "black-rolling-papers",
  eyebrow: "03 — Campaign",
  title: "Black Rolling Papers",
  intro:
    "The flagship product line's launch moment — hero imagery and a coordinated social push introducing the packaging system to the feed.",
  hero: {
    src: "/projects/getlost/black-rolling-papers/hero/getlost-black-rolling-papers-hero.jpg",
    alt: "Black Rolling Papers campaign hero — Get Lost",
  },
  posts: [1, 2, 3, 4, 5, 6].map((n) => ({
    src: `/projects/getlost/black-rolling-papers/social/posts/getlost-black-rolling-papers-post-${n}.png`,
    alt: `Black Rolling Papers social post ${n}`,
  })),
  videos: [
    {
      src: "/projects/getlost/black-rolling-papers/video/getlost-black-rolling-papers-video.mp4",
      caption: "Black Rolling Papers — Campaign Video",
      orientation: "landscape",
    },
  ],
};

const events: CampaignChapterData = {
  slug: "events",
  eyebrow: "04 — Events & Lifestyle",
  title: "On the Road",
  intro:
    "Booth and city activations carried the brand's identity into live environments — Atlantic City, Miami, Texas and Las Vegas — each documented for the social feed.",
  hero: {
    src: "/projects/getlost/events/hero/getlost-events-hero.webp",
    alt: "Get Lost event activation — Las Vegas",
  },
  gallery: [
    {
      title: "City Activations",
      assets: [
        { src: "/projects/getlost/events/gallery/cities/getlost-event-atlantic-city.webp", alt: "Get Lost event — Atlantic City" },
        { src: "/projects/getlost/events/gallery/cities/getlost-event-miami.webp", alt: "Get Lost event — Miami" },
        { src: "/projects/getlost/events/gallery/cities/getlost-event-texas.webp", alt: "Get Lost event — Texas" },
        { src: "/projects/getlost/events/gallery/cities/getlost-event-vegas.webp", alt: "Get Lost event — Las Vegas" },
        { src: "/projects/getlost/events/gallery/cities/getlost-event-booth-1.webp", alt: "Get Lost trade show booth 1" },
        { src: "/projects/getlost/events/gallery/cities/getlost-event-booth-2.png", alt: "Get Lost trade show booth 2" },
      ],
    },
  ],
};

const newProducts: CampaignChapterData = {
  slug: "new-products",
  eyebrow: "05 — Product & Social",
  title: "New Product Drops",
  intro:
    "A recurring social format for introducing new accessories and hardware to the line — backpacks, grinders, torches and trays — keeping the feed current between major launches.",
  hero: {
    src: "/projects/getlost/new-products/hero/getlost-new-products-hero.webp",
    alt: "Get Lost new products hero",
  },
  posts: [1, 2, 3, 4, 5, 6].map((n) => ({
    src: `/projects/getlost/new-products/social/posts/getlost-new-products-post-${n}.webp`,
    alt: `Get Lost new product post ${n}`,
  })),
};

const website: CampaignChapterData = {
  slug: "website",
  eyebrow: "06 — Website & Digital Experience",
  title: "Storefront Design",
  intro: "The online storefront extends the same illustrated identity into a full e-commerce experience — homepage, product certification and category navigation.",
  hero: {
    src: "/projects/getlost/website/hero/getlost-website-hero.webp",
    alt: "Get Lost website design hero",
  },
  website: [
    { src: "/projects/getlost/website/gallery/pages/getlost-website-home.webp", alt: "Get Lost website homepage — full scroll", label: "Homepage — Full Scroll" },
    { src: "/projects/getlost/website/gallery/pages/getlost-website-header.webp", alt: "Get Lost website header", label: "Header" },
    { src: "/projects/getlost/website/gallery/pages/getlost-website-certification.webp", alt: "Get Lost website certification page", label: "Certification Page" },
  ],
};

export const getlostCaseStudy: CaseStudyData = {
  heroImage: blackRollingPapers.hero.src,
  heroInset: {
    src: "/projects/getlost/events/gallery/cities/getlost-event-vegas.webp",
    alt: "Get Lost event activation — Las Vegas",
    label: "Live Events",
  },
  campaigns: [packagingAndPrint, blackRollingPapers, events, newProducts, website],
  brandPackagingCopy: {
    eyebrow: "01 — Brand Identity",
    title: "One illustrated world, every touchpoint.",
    description:
      "A single illustrated mark and icon system carries Get Lost from packaging to product content, events, social and the online storefront.",
  },
  brandPackaging: [
    { asset: { src: "/projects/getlost/brand/logo/getlost-logo-galaxy.webp", alt: "Get Lost logo mark" }, label: "Primary Mark", kind: "Identity" },
    { asset: { src: "/projects/getlost/brand/icons/getlost-icon-rolling-papers.png", alt: "Get Lost rolling papers icon" }, label: "Rolling Papers", kind: "Identity" },
    { asset: { src: "/projects/getlost/brand/icons/getlost-icon-events.png", alt: "Get Lost events icon" }, label: "Events", kind: "Identity" },
    { asset: { src: "/projects/getlost/brand/icons/getlost-icon-merch.png", alt: "Get Lost merch icon" }, label: "Merch", kind: "Identity" },
    { asset: { src: "/projects/getlost/brand/icons/getlost-icon-porducts.png", alt: "Get Lost products icon" }, label: "Products", kind: "Identity" },
    { asset: { src: "/projects/getlost/brand/icons/getlost-icon-colaborate.png", alt: "Get Lost collaborate icon" }, label: "Collaborate", kind: "Identity" },
    { asset: { src: "/projects/getlost/brand/icons/getlost-icon-influencers.png", alt: "Get Lost influencers icon" }, label: "Influencers", kind: "Identity" },
  ],
  motionCopy: {
    eyebrow: "07 — Motion",
    title: "The brand, in motion.",
  },
  motion: [
    { ...blackRollingPapers.videos![0], campaign: "Black Rolling Papers" },
    { src: "/projects/getlost/new-products/video/getlost-new-products-video-1.mp4", caption: "New Product Drop — Feed Video", campaign: "New Products", orientation: "vertical" },
    { src: "/projects/getlost/new-products/video/getlost-new-products-video-2.mp4", caption: "New Product Drop — Feed Video", campaign: "New Products", orientation: "vertical" },
    { src: "/projects/getlost/new-products/video/getlost-new-products-video-3.mp4", caption: "New Product Drop — Feed Video", campaign: "New Products", orientation: "vertical" },
  ],
};
