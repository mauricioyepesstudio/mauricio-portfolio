import Reveal from "@/components/Reveal";
import ProjectVideoPlayer from "@/components/ProjectVideoPlayer";
import type { ProjectVideo } from "@/lib/projects";

type ProjectVideosProps = {
  videos?: ProjectVideo[];
};

export default function ProjectVideos({ videos = [] }: ProjectVideosProps) {
  if (!videos.length) return null;

  return (
    <section className="mt-40">
      <Reveal>
        <div className="mx-auto mb-16 max-w-5xl text-center">
          <p className="eyebrow mb-5">Video</p>

          <h2 className="text-5xl font-semibold leading-[0.92] text-paper md:text-7xl">
            Motion from
            <br />
            the campaign.
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-2">
        {videos.map((video, index) => (
          <Reveal key={video.src} delay={index * 0.05}>
            <ProjectVideoPlayer
              src={video.src}
              poster={video.poster}
              caption={video.caption}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
