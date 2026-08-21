type ProjectVideoPlayerProps = {
  src: string;
  poster?: string;
  caption?: string;
  orientation?: "landscape" | "vertical";
};

export default function ProjectVideoPlayer({
  src,
  poster,
  caption,
  orientation = "landscape",
}: ProjectVideoPlayerProps) {
  return (
    <figure
      className={`min-w-0 overflow-hidden rounded-2xl border border-line bg-[#0d0d0d] sm:rounded-[28px] ${
        orientation === "vertical" ? "mx-auto w-full max-w-[320px]" : ""
      }`}
    >
      <video
        className={`h-auto max-h-[78vh] w-full bg-black object-contain ${
          orientation === "vertical" ? "aspect-[9/16]" : "aspect-video"
        }`}
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={caption ?? "Project video"}
      >
        <source src={src} type="video/mp4" />
      </video>

      {caption && (
        <p className="px-6 py-5 text-sm text-bone">{caption}</p>
      )}
    </figure>
  );
}
