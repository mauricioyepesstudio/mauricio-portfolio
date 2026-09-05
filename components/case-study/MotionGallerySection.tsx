import Reveal from "@/components/Reveal";
import ProjectVideoPlayer from "@/components/ProjectVideoPlayer";
import type { MotionItem, SectionIntro } from "@/lib/case-studies/types";

export default function MotionGallerySection({
  intro,
  videos,
}: {
  intro: SectionIntro;
  videos: MotionItem[];
}) {
  return (
    <section className="mt-24 sm:mt-36">
      <Reveal>
        <div className="mb-10 border-t border-white/10 pt-7 sm:mb-14">
          <p className="eyebrow mb-3">{intro.eyebrow}</p>
          <h2 className="max-w-3xl text-[clamp(2.35rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-paper">
            {intro.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-bone">{intro.description}</p>
        </div>
      </Reveal>

      <div className="grid min-w-0 gap-6 sm:gap-8 lg:grid-cols-2">
        {videos.map((video, index) => (
          <Reveal key={video.src} delay={index * 0.08} className="min-w-0">
            <ProjectVideoPlayer src={video.src} caption={`${video.campaign} — ${video.caption}`} orientation={video.orientation} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
