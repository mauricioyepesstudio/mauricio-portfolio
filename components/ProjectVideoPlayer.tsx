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
    <div className="overflow-hidden rounded-[28px] border border-line bg-[#0d0d0d]">
      <video
        className="h-auto w-full bg-black"
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
    </div>
  );
}
