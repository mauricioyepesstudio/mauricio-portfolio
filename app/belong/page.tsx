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

export default function BelongPage({ embedded = false }: { embedded?: boolean }) {
  return (
    <div className={embedded ? "pb-12 pt-10" : "pb-24 pt-28 sm:pt-36 md:pb-32 md:pt-40"}>
      <div className={embedded ? "" : "container-px mx-auto max-w-content"}>
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src={`${BRAND}/identity/belong-b-mark.jpg`}
              alt="BELONG B symbol"
              width={56}
              height={56}
              className="h-14 w-14 rounded-2xl object-cover"
            />
            <p className="eyebrow">BELONG — Live</p>
          </div>

          <h1 className="font-sans text-[clamp(2.7rem,10vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-paper max-w-4xl">
            Build a life that matters
            <span className="font-serif italic text-gold">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-bone sm:mt-8 sm:text-xl sm:leading-9">
            With people who get it. BELONG turns intent into momentum —
            connecting builders, communities, projects, and events around
            what each person is actually trying to create.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://belong-ruddy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-8 py-4 text-sm font-medium text-black transition hover:scale-105"
            >
              Join BELONG <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>



        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-line">
            <Image
              src="/brand/live-product/belong-live-homepage.png"
              alt="BELONG live product — belong-ruddy.vercel.app homepage"
              width={1440}
              height={900}
              className="w-full"
            />
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-bone">
            Live at belong-ruddy.vercel.app — real product, not a mockup
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 rounded-2xl bg-white/[0.03] p-8 sm:p-10">
            <p className="text-lg text-paper">
              BELONG is live and taking members — an early, active build. The
              product ships in public: what you see today is real, running
              product, not a mockup.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div id="venture-brand" className="mt-20 scroll-mt-32 border-t border-line pt-10">
            <p className="text-xs uppercase tracking-[0.35em] text-bone mb-8">
              Brand Identity
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {brandMarks.map((mark) => (
                <div key={mark.src} className="overflow-hidden rounded-xl border border-line">
                  <Image
                    src={mark.src}
                    alt={mark.alt}
                    width={1254}
                    height={1254}
                    sizes="(max-width: 640px) 31vw, 30vw"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="mt-3 grid gap-3 sm:mt-6 sm:gap-6 lg:grid-cols-2">
              {brandBanners.map((banner) => (
                <div key={banner.src} className="overflow-hidden rounded-xl border border-line">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    width={banner.width}
                    height={banner.height}
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    className="h-auto w-full"
                  />
                </div>
              ))}
            </div>
            <div className="mt-3 overflow-hidden rounded-xl border border-line sm:mt-6">
              <Image
                src={`${BRAND}/social/belong-event-scene.jpg`}
                alt="BELONG community gathering concept with the illuminated B mark"
                width={1600}
                height={900}
                sizes="(max-width: 1536px) 92vw, 1440px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.13}>
          <div id="venture-roadmap" className="mt-20 scroll-mt-32 border-t border-line pt-10">
            <p className="text-xs uppercase tracking-[0.35em] text-bone mb-8">
              Recent Development
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-line">
                <Image
                  src="/brand/live-product/belong-login-oauth.png"
                  alt="BELONG sign-in screen with Google and Apple OAuth"
                  width={600}
                  height={400}
                  className="aspect-[3/2] w-full object-cover object-top"
                />
                <div className="px-6 py-5">
                  <h3 className="text-paper font-semibold">{recentProgress[0].title}</h3>
                  <p className="mt-2 text-sm leading-6 text-bone">{recentProgress[0].body}</p>
                </div>
              </div>
<div className="overflow-hidden rounded-xl border border-[#6035AC] bg-gradient-to-br from-[#130825] via-[#331568] to-[#090717] p-8 sm:p-12"><div className="flex h-full min-h-72 flex-col justify-between"><p className="text-xs uppercase tracking-[0.25em] text-[#BFA1FF]">BELONG / COMMUNITY</p><div><p className="text-5xl font-black tracking-tight text-white sm:text-6xl">WE ALL<br/><span className="text-[#BFA1FF]">BELONG.</span></p><p className="mt-5 max-w-sm text-white/75">Be seen. Find your people. Build what matters.</p></div><div className="mt-10 h-2 w-full rounded-full bg-gradient-to-r from-[#6B25FA] via-[#A782FF] to-[#DCCAFF]"/></div></div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-20 border-t border-line pt-10">
            <p className="text-xs uppercase tracking-[0.35em] text-bone mb-8">
              Product Pillars
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-xl border border-line px-6 py-5">
                  <h3 className="text-paper font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-bone">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
