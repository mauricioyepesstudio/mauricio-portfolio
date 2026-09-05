type ProjectVideoPlayerProps = {
  src: string;
  poster?: string;
  caption?: string;
  /** Real width / height when known. Falls back to a 16:9 landscape assumption. */
  aspectRatio?: number;
};

export default function ProjectVideoPlayer({
  src,
  poster,
  caption,
  aspectRatio,
}: ProjectVideoPlayerProps) {
  const ratio = aspectRatio ?? 16 / 9;

  return (
    <figure className="min-w-0 overflow-hidden rounded-2xl border border-line bg-[#0d0d0d] sm:rounded-[28px]">
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
