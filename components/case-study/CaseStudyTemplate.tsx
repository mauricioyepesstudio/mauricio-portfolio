import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ProjectHero from "@/components/ProjectHero";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectMetrics from "@/components/ProjectMetrics";
import ProjectNavigation from "@/components/ProjectNavigation";
import Reveal from "@/components/Reveal";

import BrandPackaging from "@/components/case-study/BrandPackaging";
import CampaignChapter from "@/components/case-study/CampaignChapter";
import SocialEditorial from "@/components/case-study/SocialEditorial";
import MotionGallery from "@/components/case-study/MotionGallery";

import type { CaseStudyData } from "@/lib/case-studies/case-study-data";
import type { Brand } from "@/lib/projects/types";

type Props = {
  project: Brand;
  data: CaseStudyData;
  previous?: { slug: string; title: string };
  next?: { slug: string; title: string };
};

export default function CaseStudyTemplate({ project, data, previous, next }: Props) {
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
          image={data.heroImage}
          from={project.cover.from}
          to={project.cover.to}
          inset={data.heroInset}
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

        <ProjectOverview
          excerpt={project.excerpt}
          problem={project.problem}
          strategy={project.strategy}
          solution={project.solution}
          result={project.result}
        />

        {data.brandPackaging?.length ? (
          <BrandPackaging items={data.brandPackaging} {...data.brandPackagingCopy} />
        ) : null}

        {data.campaigns.map((chapter) => (
          <CampaignChapter key={chapter.slug} chapter={chapter} brand={project.title} />
        ))}

        {data.social?.length ? <SocialEditorial picks={data.social} {...data.socialCopy} /> : null}

        {data.motion?.length ? <MotionGallery videos={data.motion} {...data.motionCopy} /> : null}

        <ProjectNavigation previous={previous} next={next} />
      </div>
    </article>
  );
}
