import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import ProjectHero from "@/components/ProjectHero";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectMetrics from "@/components/ProjectMetrics";
import ProjectSections from "@/components/ProjectSections";
import ProjectNavigation from "@/components/ProjectNavigation";
import Reveal from "@/components/Reveal";
import EvenfloCaseStudy from "@/components/case-study/EvenfloCaseStudy";
import ResourceLivingCaseStudy from "@/components/case-study/ResourceLivingCaseStudy";

import { getProject, getProjects } from "@/lib/projects";
import { evenfloCaseStudy } from "@/lib/case-studies/evenflo";
import { resourceLivingCaseStudy } from "@/lib/case-studies/resource-living";

// Slugs with a hand-curated case-study template instead of the generic
// filesystem-driven campaign renderer. Every other slug keeps using the
// generic pipeline below untouched.
const CURATED_HERO: Record<string, string> = {
  evenflo: evenfloCaseStudy.heroImage,
  "resource-living": resourceLivingCaseStudy.heroImage,
};

export function generateStaticParams() {
  const projects = getProjects();
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

  if (!project) {
    return {};
  }

  const heroImage = CURATED_HERO[slug] ?? project.heroImage;

  return {
    title: `${project.title} — Case Study`,
    description: project.excerpt,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.excerpt,
      images: heroImage ? [{ url: heroImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study`,
      description: project.excerpt,
      images: heroImage ? [heroImage] : undefined,
    },
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

  const projects = getProjects();

  const currentIndex = projects.findIndex(
    (item) => item.slug === project.slug
  );

  const previous =
    currentIndex > 0 ? projects[currentIndex - 1] : undefined;

  const next =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : undefined;

  const previousLink = previous ? { slug: previous.slug, title: previous.title } : undefined;
  const nextLink = next ? { slug: next.slug, title: next.title } : undefined;

  if (project.slug === "evenflo") {
    return <EvenfloCaseStudy project={project} previous={previousLink} next={nextLink} />;
  }

  if (project.slug === "resource-living") {
    return (
      <ResourceLivingCaseStudy project={project} previous={previousLink} next={nextLink} />
    );
  }

  return (
    <article className="pb-24 pt-28 sm:pt-36 md:pb-40 md:pt-40">
      <div className="container-px max-w-content mx-auto">

        <Reveal>
          <Link
            href="/portfolio"
            className="mb-8 inline-flex min-h-11 items-center gap-2 rounded-full px-1 text-sm text-bone transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:mb-12"
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

        <div className="mt-14 grid gap-12 sm:mt-20 lg:grid-cols-3 lg:gap-16">

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
            <ProjectMetrics metrics={project.metrics} />
          </div>

        </div>

        <ProjectOverview
          excerpt={project.excerpt}
          problem={project.problem}
          strategy={project.strategy}
          solution={project.solution}
          result={project.result}
        />

        <ProjectSections campaigns={project.campaigns} brand={project.title} />

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
