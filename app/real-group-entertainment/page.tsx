import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

const description =
  "Real Group Entertainment is a venture studio — EvoluSA, Resource Living and BELONG, three live products built and grown under one creative and operational system.";

export const metadata: Metadata = {
  title: "Real Group Entertainment",
  description,
  openGraph: {
    type: "website",
    title: "Real Group Entertainment — Venture Studio",
    description,
    images: [
      {
        url: "/images/rge-og.png",
        width: 1200,
        height: 630,
        alt: "Real Group Entertainment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Group Entertainment — Venture Studio",
    description,
    images: ["/images/rge-og.png"],
  },
};

const ventures = [
  {
    name: "EvoluSA",
    tagline: "Connecting Spanish-speaking professionals and clients across the U.S.",
    status: "Live — real revenue",
    image: "/brand/live-product/evolusa-live-homepage.png",
    href: "/evolusa",
    external: "https://evolusa.vercel.app",
  },
  {
    name: "Resource Living",
    tagline: "Meta Ads lead-generation system for South Florida home-improvement contractors.",
    status: "Live campaign — Broward & Palm Beach",
    image: "/projects/resource-living/campaigns/05-broward-palm-beach-meta-campaign/hero/broward-palm-beach-campaign-hero.png",
    href: "/portfolio/resource-living",
    external: null,
  },
  {
    name: "BELONG",
    tagline: "Mission-first community platform for builders.",
    status: "Live — taking members",
    image: "/brand/live-product/belong-live-homepage.png",
    href: "/belong",
    external: "https://belong-ruddy.vercel.app",
  },
];

export default function RealGroupEntertainmentPage() {
  return (
    <div className="pb-24 pt-28 sm:pt-36 md:pb-32 md:pt-40">
      <div className="container-px mx-auto max-w-content">
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/brand/rge/rge-mark-white.png"
              alt="Real Group Entertainment"
              width={56}
              height={61}
              className="h-14 w-auto"
            />
            <p className="eyebrow">Real Group Entertainment — Venture Studio</p>
          </div>

          <h1 className="font-sans text-[clamp(2.7rem,10vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-paper max-w-4xl">
            Real businesses.
            <br />
            Not just brand decks
            <span className="font-serif italic text-gold">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-bone sm:mt-8 sm:text-xl sm:leading-9">
            Real Group Entertainment is the studio behind three live ventures —
            EvoluSA, Resource Living and BELONG. One creative and operational
            system, three real products, each with its own users, creative and
            growth channel.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {ventures.map((v) => (
              <div key={v.name} className="overflow-hidden rounded-2xl border border-line">
                <Image
                  src={v.image}
                  alt={`${v.name} — live product`}
                  width={800}
                  height={500}
                  className="aspect-[8/5] w-full object-cover object-top"
                />
                <div className="px-6 py-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{v.status}</p>
                  <h3 className="mt-2 text-lg font-semibold text-paper">{v.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-bone">{v.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href={v.href}
                      className="text-xs uppercase tracking-[0.2em] text-paper underline underline-offset-4 hover:text-gold"
                    >
                      Case study
                    </Link>
                    {v.external && (
                      <a
                        href={v.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-bone hover:text-gold"
                      >
                        Visit live <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-20 border-t border-line pt-10">
            <p className="text-xs uppercase tracking-[0.35em] text-bone mb-8">
              Building in Public
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/brand/live-product/linkedin-post-rge.png"
                  alt="Real Group Entertainment LinkedIn update post"
                  width={800}
                  height={640}
                  className="w-full"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/brand/live-product/linkedin-post-evolusa.png"
                  alt="EVOLUSA LinkedIn update post"
                  width={800}
                  height={640}
                  className="w-full"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-bone">
              Real posts, published live on LinkedIn — not mockups.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-20 flex justify-center border-t border-line pt-10">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-line px-8 py-4 text-paper transition-colors hover:bg-paper hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Discuss a Project
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
