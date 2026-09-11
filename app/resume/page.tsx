import type { Metadata } from "next";
import { Download, Mail, Globe, Briefcase } from "lucide-react";
import Reveal from "@/components/Reveal";
import { experience, skills, languages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Mauricio Yepes — Creative Director, Marketing Specialist and Multidisciplinary Designer based in Miami, Florida.",
};

export default function ResumePage() {
  return (
    <div className="pt-40 pb-32 md:pb-40">
      <div className="container-px max-w-content mx-auto">
        {/* HERO */}

        <div className="grid min-w-0 gap-8 items-end mb-24 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <p className="eyebrow mb-4">Resume</p>

            <h1 className="font-sans font-semibold text-display-lg text-paper">
              12+ years creating
              <br />
              brands, campaigns and
              <span className="font-serif italic text-gold">
                {" "}
                experiences.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4 md:text-right">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 justify-center rounded-full bg-paper px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-all duration-300 hover:bg-gold"
            >
              <Download size={18} />
              Download Resume
            </a>
          </Reveal>
        </div>

        {/* RESUME CARD */}

        <div className="min-w-0 overflow-x-clip rounded-[36px] border border-line bg-[#101010] p-8 md:p-16">

          {/* HEADER */}

          <div className="grid min-w-0 gap-10 border-b border-line pb-12 md:grid-cols-12">

            <Reveal className="md:col-span-8">

              <h2 className="font-serif italic text-5xl text-paper">
                Mauricio Yepes
              </h2>

              <p className="mt-3 text-xl text-bone">
                Creative Director • Marketing Specialist • Multidisciplinary Designer
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-bone">
                Creative Director with 12+ years of experience
                developing branding systems, editorial publications,
                advertising campaigns, websites and digital marketing
                strategies for companies throughout the United States and
                Latin America.
              </p>

            </Reveal>

            <Reveal delay={0.05} className="min-w-0 md:col-span-4">

              <div className="space-y-5">

                <div className="flex min-w-0 items-start gap-3 text-bone">
                  <Mail size={18} className="mt-0.5 shrink-0" />
                  <span className="break-all">rgentertainmentmanagement@gmail.com</span>
                </div>

                <div className="flex items-center gap-3 text-bone">
                  <Globe size={18} />
                  <span>mauricio-portfolio-v2.vercel.app</span>
                </div>

                <div className="flex items-center gap-3 text-bone">
                  <Briefcase size={18} />
                  <span>Miami, Florida</span>
                </div>

                <p className="pt-4 text-sm text-gold">
                  Legally authorized to work in the United States
                </p>

                <p className="text-sm text-bone">
                  {languages.join(" • ")}
                </p>

              </div>

            </Reveal>

          </div>

          {/* PROFESSIONAL SUMMARY */}

          <div className="border-b border-line py-14">

            <Reveal>

              <p className="eyebrow mb-6">
                Professional Summary
              </p>

              <p className="max-w-5xl text-xl leading-10 text-bone">
                Twelve years directing creative for magazines, product
                launches and marketing campaigns across the United States
                and Latin America. My work spans strategy, editorial
                design, digital marketing and AI-assisted production,
                built to hold up in market, not just in a deck.
              </p>

            </Reveal>

          </div>

          {/* EXPERIENCE */}

          <div className="border-b border-line py-14">

            <Reveal>
              <p className="eyebrow mb-8">
                Professional Experience
              </p>
            </Reveal>

            <div className="space-y-12">

              {experience.map((item, index) => (

                <Reveal
                  key={item.role}
                  delay={index * 0.05}
                >

                  <div className="grid md:grid-cols-12 gap-6">

                    <div className="md:col-span-3">
                      <p className="text-gold text-sm uppercase tracking-[0.2em]">
                        {item.period}
                      </p>
                    </div>

                    <div className="md:col-span-9">

                      <h3 className="text-2xl font-medium text-paper">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-bone">
                        {item.org}
                      </p>

                      <p className="mb-5 text-sm text-bone/70">
                        {item.location}
                      </p>

                      <p className="leading-8 text-bone">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </Reveal>

              ))}

            </div>

          </div>

          {/* SKILLS */}

          <div className="border-b border-line py-14">

            <Reveal>
              <p className="eyebrow mb-8">
                Core Skills
              </p>
            </Reveal>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

              {Object.entries(skills).map(([category, items], i) => (

                <Reveal
                  key={category}
                  delay={i * 0.05}
                >

                  <h3 className="mb-5 text-paper font-semibold capitalize">
                    {category}
                  </h3>

                  <ul className="space-y-2">

                    {items.map((item) => (

                      <li
                        key={item}
                        className="text-bone"
                      >
                        {item}
                      </li>

                    ))}

                  </ul>

                </Reveal>

              ))}

            </div>

          </div>

          {/* SOFTWARE */}

          <div className="border-b border-line py-14">

            <Reveal>

              <p className="eyebrow mb-8">
                Software & Platforms
              </p>

              <div className="flex flex-wrap gap-3">

                {[
                  "Adobe Photoshop",
                  "Illustrator",
                  "InDesign",
                  "After Effects",
                  "Premiere Pro",
                  "Figma",
                  "WordPress",
                  "Elementor",
                  "Shopify",
                  "Meta Ads",
                  "Google Ads",
                  "HubSpot",
                  "ChatGPT",
                  "Midjourney",
                  "Runway",
                ].map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-line px-5 py-2 text-sm text-paper"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </Reveal>

          </div>

          {/* AVAILABILITY */}

          <div className="pt-14">

            <Reveal>

              <p className="eyebrow mb-8">
                Available For
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                {[
                  "Creative Direction",
                  "Brand Strategy",
                  "Marketing Leadership",
                  "Senior Graphic Design",
                  "Advertising Campaigns",
                  "Editorial Design",
                  "Digital Marketing",
                  "Freelance & Full-Time",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-line p-6 text-center text-paper transition hover:border-gold"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </Reveal>

          </div>

        </div>
      </div>
    </div>
  );
}