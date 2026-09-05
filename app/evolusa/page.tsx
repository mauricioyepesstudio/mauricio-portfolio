import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "EVOLUSA",
  description:
    "EVOLUSA connects Spanish-speaking immigrants in the U.S. with verified professionals — a Real Group Entertainment venture.",
};

const categories = [
  { name: "Marketing & Digital Presence", status: "Live" },
  { name: "Business Operations", status: "Live" },
  { name: "Notary", status: "Activating" },
  { name: "Tax & Accounting", status: "Coming soon" },
  { name: "Legal & Immigration", status: "Coming soon" },
];

export default function EvolusaPage() {
  return (
    <div className="pb-24 pt-28 sm:pt-36 md:pb-32 md:pt-40">
      <div className="container-px mx-auto max-w-content">
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/brand/evolusa/EVOLUSA_Profile_1080x1080.png"
              alt="EVOLUSA"
              width={56}
              height={56}
              className="h-14 w-14 rounded-2xl object-cover"
            />
            <p className="eyebrow">EVOLUSA — Live Venture</p>
          </div>

          <h1 className="font-sans text-[clamp(2.7rem,10vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-paper max-w-4xl">
            Tu próximo paso
            <span className="font-serif italic text-gold">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-bone sm:mt-8 sm:text-xl sm:leading-9">
            EVOLUSA connects Spanish-speaking immigrants in the United
            States with verified professionals at the exact moment they
            need them. Every client already passed through a needs,
            eligibility, and location profile before reaching a
            professional — a qualified connection, not a cold lead.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://evolusa.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-8 py-4 text-sm font-medium text-black transition hover:scale-105"
            >
              Visit evolusa.vercel.app <ArrowUpRight size={16} />
            </a>
            <a
              href="https://evolusa.vercel.app/aplicar-profesional"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 text-sm font-medium text-paper transition hover:border-paper"
            >
              Apply as a professional
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-20 rounded-2xl bg-white/[0.03] p-8 sm:p-10">
            <p className="text-2xl sm:text-3xl font-semibold text-paper">
              $25 per real connection — already charged and collected.
            </p>
            <p className="mt-3 text-bone">
              Not a projection. This is what&apos;s already happening on
              EVOLUSA today.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-20 border-t border-line pt-10">
            <p className="text-xs uppercase tracking-[0.35em] text-bone mb-8">
              Service Categories
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between rounded-xl border border-line px-5 py-4"
                >
                  <span className="text-paper">{c.name}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-bone">
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-bone">
              No results are guaranteed and EVOLUSA does not itself
              determine immigration eligibility — regulated services are
              provided by appropriately licensed professionals per their
              jurisdiction.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
