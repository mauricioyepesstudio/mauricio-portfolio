import Link from "next/link";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/lib/projects";
import { FEATURED_CASE_STUDY_SLUGS } from "@/lib/projects/featured";

export default function SelectedWork() {
  const projects = getProjects();
  const featured = FEATURED_CASE_STUDY_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
    (project): project is NonNullable<typeof project> => Boolean(project),
  );
  const additional = projects.filter((project) => !FEATURED_CASE_STUDY_SLUGS.includes(project.slug as (typeof FEATURED_CASE_STUDY_SLUGS)[number]));

  return (
    <section id="work" className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/5 blur-[140px]" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-content">
        <Reveal>
          <div className="mb-14 max-w-4xl md:mb-20">
            <p className="eyebrow mb-5">Featured Case Studies</p>
            <h2 className="font-sans text-[clamp(2.35rem,7vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-paper">
              Integrated brand and marketing work — built end to end, not just designed.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-bone">
              Four flagship projects demonstrating creative direction, campaign systems, editorial,
              packaging, digital, email, social and motion across publishing, beauty and lifestyle
              brands.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {additional.length > 0 ? (
          <>
            <Reveal delay={0.12}>
              <div className="mb-10 mt-24 max-w-3xl border-t border-line pt-10 md:mt-28 md:pt-12">
                <p className="eyebrow mb-4">Selected Work</p>
                <h3 className="font-sans text-[clamp(1.85rem,5vw,3rem)] font-semibold leading-[1.02] text-paper">
                  Additional client projects across branding, packaging and campaign design.
                </h3>
                <p className="mt-4 text-base leading-7 text-bone">
                  Real work for food, retail, architecture, entertainment and independent businesses
                  — expandable as new assets are added.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
              {additional.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.05}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </>
        ) : null}

        <Reveal delay={0.2}>
          <div className="mt-16 flex justify-center md:mt-20">
            <Link
              href="/portfolio"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-line px-8 py-4 text-paper transition-all duration-300 hover:bg-paper hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              View Full Portfolio
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
