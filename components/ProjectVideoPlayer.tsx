type ProjectVideoPlayerProps = {
  src: string;
  poster?: string;
  caption?: string;
  /** Real width / height when known. Takes priority over `orientation` when both are set. */
  aspectRatio?: number;
  /** Coarse fallback when a real aspect ratio hasn't been probed yet. */
  orientation?: "landscape" | "vertical";
};

export default function ProjectVideoPlayer({
  src,
  poster,
  caption,
  aspectRatio,
  orientation,
}: ProjectVideoPlayerProps) {
  const ratio = aspectRatio ?? (orientation === "vertical" ? 9 / 16 : 16 / 9);
  const isVertical = ratio < 1;

  return (
    <figure
      className={`min-w-0 overflow-hidden rounded-2xl border border-line bg-[#0d0d0d] sm:rounded-[28px] ${
        isVertical ? "mx-auto w-full max-w-[320px]" : ""
      }`}
    >
      <video
        className="h-auto max-h-[78vh] w-full bg-black object-contain"
        style={{ aspectRatio: ratio }}
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
