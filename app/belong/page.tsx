import { BelongPageContent } from "@/components/building/BelongPageContent";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

const belongDescription =
  "BELONG is a mission-first community platform for builders — a Real Group Entertainment venture, live and taking members.";

export const metadata: Metadata = pageMetadata({
  title: "BELONG",
  description: belongDescription,
  path: "/belong",
});

const recentProgress = [
  {
    title: "Google & Apple sign-in",
    body: "One-tap OAuth on login and registration, removing password friction from first contact with the product.",
  },
  {
    title: "Accountability circles, hardened",
    body: "Small-group accountability circles — a core Mission Engine feature — rebuilt for reliability under real concurrent use.",
  },
  {
    title: "Dedicated growth & brand practice",
    body: "A standing growth-strategy, external-content and brand-taste practice now runs alongside engineering, separate from and never touching the in-app social features themselves.",
  },
];

const pillars = [
  {
    title: "Mission-first identity",
    body: "Profile, dashboard, and discovery center on what you're building, not vanity metrics.",
  },
  {
    title: "Community as infrastructure",
    body: "Communities are first-class — discovery, membership, and events flow through them.",
  },
  {
    title: "Build in public",
    body: "Projects and events make work visible to the right people. Progress is real data.",
  },
  {
    title: "Proof, not just claims",
    body: "The Proof Loop turns claims and promises into structured evidence and accountable outcomes.",
  },
];

const BRAND = "/projects/real-group-entertainment/campaigns/02-belong-brand";

const brandMarks = [
  { src: `${BRAND}/identity/just-belong-logo.jpg`, alt: "JUST BELONG logo lockup with tagline" },
  { src: `${BRAND}/identity/belong-b-mark.jpg`, alt: "BELONG B symbol with star" },
  { src: `${BRAND}/social/belong-star-mark.jpg`, alt: "BELONG crescent star mark" },
];

const brandBanners = [
  { src: `${BRAND}/hero/belong-community-banner.jpg`, alt: "BELONG banner — Be seen. Find your people. Build what matters.", width: 1600, height: 607 },
  { src: `${BRAND}/social/we-all-belong-banner.jpg`, alt: "BELONG banner — We all belong", width: 1600, height: 609 },
  { src: `${BRAND}/social/just-belong-banner.jpg`, alt: "JUST BELONG banner with light trails", width: 1600, height: 608 },
  { src: `${BRAND}/social/different-stories-banner.jpg`, alt: "BELONG banner — Different stories, shared humanity", width: 1600, height: 608 },
];

export default function BelongPage() { return <BelongPageContent />; }
