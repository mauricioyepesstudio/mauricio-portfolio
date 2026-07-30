import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { skills, languages } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "I&apos;m a Creative Director and Brand Strategist based in Miami with 20+ years of experience helping brands grow through design, advertising and digital marketing.",
};

export default function AboutPage() {
  return (
    <div className="pt-40 pb-28 md:pb-40">
      <div className="container-px max-w-content mx-auto">
        <div className="grid md:grid-cols-12 gap-8">
          <Reveal className="md:col-span-8">
            <p className="eyebrow mb-4">About</p>

            <h1 className="font-sans font-semibold text-display-lg text-paper">
              Building brands that
              <br />
              people remember<span className="font-serif italic text-gold">.</span>
            </h1>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mt-20">
          <Reveal className="md:col-span-4">
            <div className="sticky top-32">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#2a2420] to-[#0a0a0a] flex items-end p-8">
                <div>
                  <p className="font-serif italic text-2xl text-paper">
                    Mauricio Yepes
                  </p>

                  <p className="text-sm text-bone mt-1">
                    Creative Director • Miami, Florida
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-2">
                {languages.map((language) => (
                  <p key={language} className="text-sm text-bone">
                    {language}
                  </p>
                ))}

                <p className="text-sm text-bone pt-2">
                  Legally authorized to work in the United States
                </p>
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-8 space-y-6 text-lg text-bone leading-relaxed">
            <Reveal>
              <p>
                I&apos;m a Creative Director and Brand Strategist based in Miami with
                more than <strong className="text-paper">20 years of experience</strong>{" "}
                creating brands, advertising campaigns, editorial publications,
                websites and marketing systems that help businesses grow.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <p>
                Throughout my career I&apos;ve collaborated with international brands
                including <span className="text-paper">FK Irons</span>,
                <span className="text-paper"> Microbeau</span>,
                <span className="text-paper"> Grupo Nutresa</span>,
                <span className="text-paper"> Evenflo Colours</span>,
                <span className="text-paper"> Resource Living</span> and
                numerous companies across the United States and Latin America.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p>
                My background combines branding, editorial design, print
                production, digital marketing, web design and AI-assisted
                creative workflows. I enjoy connecting business goals with
                strong visual communication that generates measurable results.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p>
                Whether leading a complete rebrand, launching a marketing
                campaign or building a digital experience, my focus is always
                the same: creating work that is strategically sound, visually
                memorable and built to perform.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="pt-10">
                <Link
                  href="/resume"
                  className="inline-flex items-center justify-center bg-paper text-ink px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-gold transition-colors duration-300"
                >
                  View Resume
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-28 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border-t border-b border-line">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.05}>
              <div className="bg-ink p-8 h-full">
                <p className="eyebrow mb-4 capitalize">{category}</p>

                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-bone text-sm">
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
  );
}