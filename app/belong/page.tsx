import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

const belongDescription =
  "BELONG is a mission-first community platform for builders — a Real Group Entertainment venture in active development.";

export const metadata: Metadata = {
  title: "BELONG",
  description: belongDescription,
  openGraph: {
    type: "website",
    title: "BELONG — Real Group Entertainment",
    description: belongDescription,
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
    title: "BELONG — Real Group Entertainment",
    description: belongDescription,
    images: ["/images/rge-og.png"],
  },
};

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

export default function BelongPage() {
  return (
    <div className="pb-24 pt-28 sm:pt-36 md:pb-32 md:pt-40">
      <div className="container-px mx-auto max-w-content">
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7c3aed] text-2xl font-bold text-white">
              B
            </span>
            <p className="eyebrow">BELONG — In Development</p>
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
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 rounded-2xl bg-white/[0.03] p-8 sm:p-10">
            <p className="text-lg text-paper">
              BELONG is currently in active development — not yet publicly
              live. This page will link to the real product as soon as
              there&apos;s something real to show, not before.
            </p>
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
