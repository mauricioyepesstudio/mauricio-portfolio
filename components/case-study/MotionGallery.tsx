import Reveal from "@/components/Reveal";
import ProjectVideoPlayer from "@/components/ProjectVideoPlayer";

type MotionItem = {
  src: string;
  caption: string;
  campaign: string;
  orientation?: "landscape" | "vertical";
};

type Props = {
  videos: MotionItem[];
  eyebrow?: string;
  title?: string;
};

export default function MotionGallery({
  videos,
  eyebrow = "08 — Motion",
  title = "Both launches, in motion.",
}: Props) {
  const landscape = videos.filter((v) => (v.orientation ?? "landscape") === "landscape");
  const vertical = videos.filter((v) => v.orientation === "vertical");

  return (
    <section className="mt-24 sm:mt-36">
      <Reveal>
        <div className="mb-10 border-t border-white/10 pt-7 sm:mb-14">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="max-w-3xl text-[clamp(2.35rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-paper">
            {title}
          </h2>
        </div>
      </Reveal>

      {landscape.length ? (
        <div className={`grid gap-6 sm:gap-8 ${landscape.length > 1 ? "lg:grid-cols-2" : ""}`}>
          {landscape.map((video, index) => (
            <Reveal key={video.src} delay={index * 0.08}>
              <ProjectVideoPlayer src={video.src} caption={video.caption} orientation="landscape" />
            </Reveal>
          ))}
        </div>
      ) : null}

      {vertical.length ? (
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 ${landscape.length ? "mt-8 sm:mt-10" : ""}`}>
          {vertical.map((video, index) => (
            <Reveal key={video.src} delay={index * 0.06}>
              <ProjectVideoPlayer src={video.src} caption={video.caption} orientation="vertical" />
            </Reveal>
          ))}
        </div>
      ) : null}
    </section>
  );
}
