import type { Metadata } from "next";
import { Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import { experience, skills, languages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Download the resume of Mauricio Yepes, Creative Director and Brand Strategist based in Miami, FL.",
};

export default function ResumePage() {
  return (
    <div className="pt-40 pb-28 md:pb-40">
      <div className="container-px max-w-content mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-20">
          <Reveal className="md:col-span-8">
            <p className="eyebrow mb-4">Resume</p>
            <h1 className="font-sans font-semibold text-display-lg text-paper">
              Twelve years,
              <br />
              <span className="font-serif italic text-gold">one</span> point
              of view.
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:text-right">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 justify-center bg-paper text-ink px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-gold transition-colors duration-300"
            >
              <Download size={16} /> Download PDF
            </a>
          </Reveal>
        </div>

        <div className="border border-line rounded-3xl p-8 md:p-16">
          <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-line">
            <Reveal className="md:col-span-8">
              <h2 className="font-serif italic text-3xl text-paper">
                Mauricio Yepes
              </h2>
              <p className="text-bone mt-2">
                Creative Director &amp; Brand Strategist
              </p>
              <p className="text-bone text-sm mt-4">
                Miami, FL — Legally authorized to work in the United States
              </p>
            </Reveal>
            <Reveal delay={0.05} className="md:col-span-4 md:text-right">
              <p className="text-sm text-bone">hello@mauricioyepes.com</p>
              <p className="text-sm text-bone mt-1">
                {languages.join(" · ")}
              </p>
            </Reveal>
          </div>

          <div className="py-12 border-b border-line">
            <Reveal>
              <p className="eyebrow mb-6">Experience</p>
            </Reveal>
            <div className="space-y-10">
              {experience.map((item, i) => (
                <Reveal key={item.role} delay={i * 0.05}>
                  <div className="grid md:grid-cols-12 gap-4">
                    <span className="md:col-span-3 text-sm text-gold">
                      {item.period}
                    </span>
                    <div className="md:col-span-9">
                      <h3 className="text-lg text-paper font-medium">
                        {item.role} — {item.org}
                      </h3>
                      <p className="text-sm text-bone mt-1 mb-2">
                        {item.location}
                      </p>
                      <p className="text-bone leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="pt-12">
            <Reveal>
              <p className="eyebrow mb-6">Core Skills</p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, items], i) => (
                <Reveal key={category} delay={i * 0.05}>
                  <p className="text-sm text-paper font-medium mb-3 capitalize">
                    {category}
                  </p>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="text-sm text-bone">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
