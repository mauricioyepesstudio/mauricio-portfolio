import Reveal from "@/components/Reveal";
import ProjectVideoPlayer from "@/components/ProjectVideoPlayer";

type MotionItem = { src: string; caption: string; campaign: string };

export default function MotionGallery({ videos }: { videos: MotionItem[] }) {
  return (
    <section className="mt-24 sm:mt-36">
      <Reveal>
        <div className="mb-10 border-t border-white/10 pt-7 sm:mb-14">
          <p className="eyebrow mb-3">08 — Motion</p>
          <h2 className="max-w-3xl text-[clamp(2.35rem,7vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-paper">
            Both launches, in motion.
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        {videos.map((video, index) => (
          <Reveal key={video.src} delay={index * 0.08}>
            <ProjectVideoPlayer src={video.src} caption={video.caption} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
