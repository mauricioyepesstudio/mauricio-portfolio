import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

const ventures = [
  {
    name: "EVOLUSA",
    status: "Live",
    tagline: "Tu próximo paso.",
    description:
      "Connects Spanish-speaking immigrants in the U.S. with verified professionals — marketing and business operations live today, notary activating. Real qualified connections, not cold leads.",
    proof: "$25 per real connection, already charged and collected.",
    href: "/evolusa",
    external: "https://evolusa.vercel.app",
    accent: "#F20D24",
    logo: "/brand/evolusa/EVOLUSA_Profile_1080x1080.png",
  },
  {
    name: "BELONG",
    status: "In development",
    tagline: "Build a life that matters — with people who get it.",
    description:
      "A mission-first community platform: builders, communities, and real projects, not vanity metrics. Proof Loop turns claims and promises into evidence and accountable outcomes.",
    proof: null,
    href: "/belong",
    external: null,
    accent: "#7c3aed",
    logo: null,
  },
];

export default function RGEVentures() {
  return (
    <section id="ventures" className="py-28 md:py-40 border-t border-line">
      <div className="container-px max-w-content mx-auto">
        <Reveal>
          <p className="eyebrow mb-5">The Ventures</p>
          <h2 className="font-sans text-[clamp(2.4rem,7vw,4rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-paper max-w-3xl">
            Two products in production, not two decks.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-10">
          {ventures.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white/[0.02] p-8 sm:p-10 transition hover:border-white/20">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {v.logo ? (
                        <Image
                          src={v.logo}
                          alt={v.name}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-xl object-cover"
                        />
                      ) : (
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                          style={{ backgroundColor: v.accent }}
                        >
                          {v.name.charAt(0)}
                        </span>
                      )}
                      <span className="text-2xl font-semibold text-paper">
                        {v.name}
                      </span>
                    </div>
                    <span
                      className="rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.2em]"
                      style={{ borderColor: v.accent, color: v.accent }}
                    >
                      {v.status}
                    </span>
                  </div>

                  <p className="mt-6 text-lg italic text-bone">
                    &ldquo;{v.tagline}&rdquo;
                  </p>
                  <p className="mt-4 text-base leading-7 text-bone">
                    {v.description}
                  </p>

                  {v.proof && (
                    <p className="mt-6 rounded-xl bg-white/[0.03] px-4 py-3 text-sm text-paper">
                      {v.proof}
                    </p>
                  )}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href={v.href}
                    className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
                  >
                    Learn more
                  </Link>
                  {v.external && (
                    <a
                      href={v.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition hover:border-paper"
                    >
                      Visit live site <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
