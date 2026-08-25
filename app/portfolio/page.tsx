import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { FEATURED_CASE_STUDY_SLUGS, getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Creative work by Mauricio Yepes including branding, editorial design, advertising campaigns, digital marketing and web design.",
};

export default function PortfolioPage() {
  const projects = getProjects();
  const featured = FEATURED_CASE_STUDY_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
    (project): project is NonNullable<typeof project> => Boolean(project),
  );
  const additional = projects.filter(
    (project) => !FEATURED_CASE_STUDY_SLUGS.includes(project.slug as (typeof FEATURED_CASE_STUDY_SLUGS)[number]),
  );

  return (
    <div className="pb-24 pt-28 sm:pt-36 md:pb-32 md:pt-40">
      <div className="container-px mx-auto max-w-content">
        <Reveal>
          <div className="max-w-5xl">
            <p className="eyebrow mb-5">Portfolio</p>

            <h1 className="font-sans text-[clamp(2.7rem,10vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-paper">
              Every project here
              <br />
              ships with the process
              <br />
              behind it.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-bone sm:mt-8 sm:text-xl sm:leading-9">
              Branding, editorial design, lead-generation systems and product launches — each case
              study broken down by problem, approach and outcome, not just a gallery of final
              assets.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mb-10 mt-12 border-t border-line pt-6 sm:mb-14 sm:mt-16">
            <p className="eyebrow mb-3">Featured Case Studies</p>
            <p className="max-w-2xl text-sm leading-7 text-bone">
              Deep-dive integrated marketing work across publishing, beauty and lifestyle brands.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:gap-10 md:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {additional.length > 0 ? (
          <>
            <Reveal delay={0.1}>
              <div className="mb-10 mt-20 border-t border-line pt-8 sm:mb-14 sm:mt-24">
                <p className="eyebrow mb-3">Selected Work</p>
                <p className="max-w-2xl text-sm leading-7 text-bone">
                  Additional verified client projects — branding, packaging, retail and campaign
                  design.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:gap-10 md:grid-cols-2">
              {additional.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.04}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </>
        ) : null}

        <Reveal delay={0.15}>
          <div className="mt-16 flex justify-center border-t border-line pt-10">
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
