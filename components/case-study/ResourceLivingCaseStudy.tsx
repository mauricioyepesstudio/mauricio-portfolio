import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ProjectHero from "@/components/ProjectHero";
import ProjectMetrics from "@/components/ProjectMetrics";
import ProjectNavigation from "@/components/ProjectNavigation";
import Reveal from "@/components/Reveal";

import CaseStudySectionHeader from "@/components/case-study/CaseStudySectionHeader";
import EditorialChapter from "@/components/case-study/EditorialChapter";
import IdentityGrid from "@/components/case-study/IdentityGrid";
import MotionGallerySection from "@/components/case-study/MotionGallerySection";
import ResourceLivingOverview from "@/components/case-study/ResourceLivingOverview";
import SocialEditorialGrid from "@/components/case-study/SocialEditorialGrid";
import TallVisualFrame from "@/components/case-study/TallVisualFrame";

import { resourceLivingCaseStudy } from "@/lib/case-studies/resource-living";
import type { Brand } from "@/lib/projects/types";

type Props = {
  project: Brand;
  previous?: { slug: string; title: string };
  next?: { slug: string; title: string };
};

export default function ResourceLivingCaseStudy({ project, previous, next }: Props) {
  const study = resourceLivingCaseStudy;

  return (
    <article className="pb-24 pt-28 sm:pt-36 md:pb-40 md:pt-40">
      <div className="container-px mx-auto max-w-content">
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
          image={study.heroImage}
          from={project.cover.from}
          to={project.cover.to}
        />

        <div className="mt-14 grid gap-12 sm:mt-20 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <div className="sticky top-32">
              <p className="eyebrow mb-6">Deliverables</p>
              <ul className="space-y-3">
                {project.deliverables.map((item) => (
                  <li key={item} className="text-bone">
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

        <ResourceLivingOverview
          excerpt={project.excerpt}
          problem={project.problem}
          strategy={project.strategy}
          creativeSystem={study.narrative.creativeSystem}
          campaignExecution={study.narrative.campaignExecution}
          channels={study.narrative.channels}
          outcome={study.narrative.outcome}
        />

        <section className="mt-24 border-t border-white/10 pt-7 sm:mt-36">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="lg:col-span-1">
              <CaseStudySectionHeader intro={study.brandEditorial} bare />
            </div>
            <div className="lg:col-span-2">
              <IdentityGrid items={[...study.publicationSystem]} />
            </div>
          </div>
        </section>

        {/* Opening — Story-1's phone-mockup treatment shown full-width and
            uncropped. It's a 9:16 image far too tall for ProjectHero's wide
            banner aspect without destructive cropping, so it renders here
            instead, immediately after the brand section. */}
        <section className="mt-24 sm:mt-36">
          <CaseStudySectionHeader intro={study.openingVisual} />
          <Reveal>
            <TallVisualFrame
              src={study.openingFeature.src}
              alt={study.openingFeature.alt}
              label="Placement Mockup — Full Resolution"
              width={study.openingFeature.width}
              height={study.openingFeature.height}
            />
          </Reveal>
        </section>

        {study.chapters.map((chapter) => (
          <EditorialChapter key={chapter.slug} chapter={chapter} brand={project.title} />
        ))}

        <SocialEditorialGrid intro={study.socialSection} picks={[...study.social]} />

        <MotionGallerySection intro={study.motionSection} videos={[...study.motion]} />

        <section className="mt-24 border-t border-white/10 pt-7 sm:mt-36">
          <CaseStudySectionHeader intro={study.closingSystem} />
        </section>

        <ProjectNavigation previous={previous} next={next} />
      </div>
    </article>
  );
}
