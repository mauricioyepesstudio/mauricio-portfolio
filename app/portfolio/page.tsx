import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Creative work by Mauricio Yepes including branding, editorial design, advertising campaigns, digital marketing and web design.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-40 pb-32">
      <div className="container-px mx-auto max-w-content">
        <Reveal>
          <div className="max-w-5xl">
            <p className="eyebrow mb-5">Portfolio</p>

            <h1 className="font-sans text-5xl font-semibold leading-[0.92] text-paper md:text-7xl">
              Creative work
              <br />
              driven by strategy,
              <br />
              crafted for results.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-bone">
              A curated collection of branding, editorial, advertising,
              digital marketing and web design projects developed over more
              than two decades of professional experience.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 mb-20 flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs uppercase tracking-[0.35em] text-bone">
              Selected Projects
            </p>

            <p className="text-sm text-bone">
              {projects.length} Case Studies • 20+ Years • 500+ Projects
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2">
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