import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { skills, languages } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Creative Director, Brand Strategist and Marketing Designer based in Miami with more than 20 years of experience creating memorable brands and digital experiences.",
};

export default function AboutPage() {
  return (
    <div className="pt-40 pb-28 md:pb-40">
      <div className="container-px max-w-content mx-auto">
        {/* HERO */}

        <div className="grid md:grid-cols-12 gap-8">
          <Reveal className="md:col-span-8">
            <p className="eyebrow mb-4">About</p>

            <h1 className="font-sans font-semibold text-display-lg text-paper leading-tight">
              Designing brands,
              <br />
              digital experiences
              <br />
              and ideas that last
              <span className="font-serif italic text-gold">.</span>
            </h1>
          </Reveal>
        </div>

        {/* CONTENT */}

        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mt-20">
          {/* LEFT */}

          <Reveal className="md:col-span-4">
            <div className="sticky top-32">
              <div className="relative h-[700px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0d0d]">
                <Image
  src="/images/mauricio.png"
  alt="Mauricio Yepes"
  fill
  priority
  className="object-contain object-top"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <p className="font-serif italic text-3xl text-paper">
                    Mauricio Yepes
                  </p>

                  <p className="text-sm text-bone mt-2">
                    Creative Director
                  </p>

                  <p className="text-sm text-bone">
                    Miami, Florida
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-2">
                {languages.map((language) => (
                  <p
                    key={language}
                    className="text-sm text-bone"
                  >
                    {language}
                  </p>
                ))}

                <p className="text-sm text-bone pt-3">
                  Legally authorized to work in the United States
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}

          <div className="md:col-span-8">
            <div className="space-y-6 text-lg leading-relaxed text-bone">
              <Reveal>
                <p>
                  I'm a <strong className="text-paper">Creative Director</strong>,
                  Brand Strategist and Marketing Designer with more than
                  <strong className="text-paper"> 20 years of experience</strong>
                  creating brands, advertising campaigns, editorial publications,
                  websites and digital experiences that help businesses grow.
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <p>
                  Throughout my career I've collaborated with international
                  brands including
                  <span className="text-paper"> FK Irons</span>,
                  <span className="text-paper"> Microbeau</span>,
                  <span className="text-paper"> Grupo Nutresa</span>,
                  <span className="text-paper"> Evenflo Colours</span>,
                  <span className="text-paper"> Resource Living</span>
                  and many businesses across the United States and Latin America.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p>
                  My expertise combines branding, editorial design, print
                  production, digital marketing, web design and AI-assisted
                  creative workflows. Every project is guided by strategy,
                  creativity and measurable business results.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <p>
                  I believe great design is more than aesthetics. It creates
                  trust, communicates clearly and helps companies grow through
                  meaningful experiences that connect with people.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="pt-8">
                  <Link
                    href="/resume"
                    className="inline-flex items-center justify-center rounded-full bg-paper px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-gold"
                  >
                    View Resume
                  </Link>
                </div>
              </Reveal>

              {/* STATS */}

              <Reveal delay={0.25}>
                <div className="grid grid-cols-3 gap-8 border-t border-line pt-14 mt-14">
                  <div>
                    <h3 className="text-5xl font-semibold text-paper">
                      20+
                    </h3>

                    <p className="mt-3 text-sm text-bone">
                      Years of Experience
                    </p>
                  </div>

                  <div>
                    <h3 className="text-5xl font-semibold text-paper">
                      Hundreds of
                    </h3>

                    <p className="mt-3 text-sm text-bone">
                      Creative Projects
                    </p>
                  </div>

                  <div>
                    <h3 className="text-5xl font-semibold text-paper">
                      100+
                    </h3>

                    <p className="mt-3 text-sm text-bone">
                      Brands & Clients
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* SKILLS */}

        <div className="mt-32">
          <Reveal>
            <div className="mb-14">
              <p className="eyebrow mb-4">Expertise</p>

              <h2 className="font-sans text-display-md font-semibold text-paper">
                Creative disciplines that bring brands to life.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([category, items], i) => (
              <Reveal
                key={category}
                delay={i * 0.05}
              >
                <div className="h-full bg-ink p-8 transition-all duration-500 hover:bg-white/5">
                  <p className="eyebrow mb-5 capitalize">
                    {category}
                  </p>

                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-bone"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}