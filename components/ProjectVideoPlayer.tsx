type ProjectVideoPlayerProps = {
  src: string;
  poster?: string;
  caption?: string;
};

export default function ProjectVideoPlayer({
  src,
  poster,
  caption,
}: ProjectVideoPlayerProps) {
  return (
    <figure className="min-w-0 overflow-hidden rounded-2xl border border-line bg-[#0d0d0d] sm:rounded-[28px]">
      <video
        className="aspect-video h-auto max-h-[78vh] w-full bg-black object-contain"
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
