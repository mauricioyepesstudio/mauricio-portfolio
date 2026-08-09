import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Creative work by Mauricio Yepes including branding, editorial design, advertising campaigns, digital marketing and web design.",
};

export default function PortfolioPage() {
  const projects = getProjects();
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
              Branding, editorial design, lead-generation systems and
              product launches — each case study broken down by problem,
              approach and outcome, not just a gallery of final assets.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-12 mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:mb-20 sm:mt-16 md:flex-row md:items-center md:justify-between">
            <p className="text-xs uppercase tracking-[0.35em] text-bone">
              Selected Projects
            </p>

            <p className="text-sm text-bone">
              {projects.length} focused case studies
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
