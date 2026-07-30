import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import ProjectHero from "@/components/ProjectHero";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectMetrics from "@/components/ProjectMetrics";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectNavigation from "@/components/ProjectNavigation";
import Reveal from "@/components/Reveal";

import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Case Study`,
    description: project.excerpt,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex(
    (item) => item.slug === project.slug
  );

  const previous =
    currentIndex > 0 ? projects[currentIndex - 1] : undefined;

  const next =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : undefined;

  return (
    <article className="pt-40 pb-28 md:pb-40">
      <div className="container-px max-w-content mx-auto">

        <Reveal>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-bone hover:text-paper transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            All Case Studies
          </Link>
        </Reveal>

        <ProjectHero
          title={project.title}
          category={project.category}
          client={project.client}
          year={project.year}
          image={project.heroImage}
          from={project.cover.from}
          to={project.cover.to}
        />

        <div className="mt-20 grid lg:grid-cols-3 gap-16">

          <Reveal>
            <div className="sticky top-32">

              <p className="eyebrow mb-6">
                Deliverables
              </p>

              <ul className="space-y-3">
                {project.deliverables.map((item) => (
                  <li
                    key={item}
                    className="text-bone"
                  >
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </Reveal>

          <div className="lg:col-span-2">

            <ProjectMetrics
              metrics={project.metrics}
            />

          </div>

        </div>

        <ProjectOverview
          excerpt={project.excerpt}
          problem={project.problem}
          strategy={project.strategy}
          solution={project.solution}
          result={project.result}
        />

        <ProjectGallery
          title={project.title}
          images={project.gallery}
        />

        <ProjectNavigation
          previous={
            previous
              ? {
                  slug: previous.slug,
                  title: previous.title,
                }
              : undefined
          }
          next={
            next
              ? {
                  slug: next.slug,
                  title: next.title,
                }
              : undefined
          }
        />

      </div>
    </article>
  );
}