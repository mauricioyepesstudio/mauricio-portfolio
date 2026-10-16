type WebsiteFrameProps = {
  src: string;
  alt: string;
  label: string;
  project: string;
};

export default function WebsiteFrame({ src, alt, label, project }: WebsiteFrameProps) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
        <div className="flex items-center gap-3 border-b border-white/10 bg-[#111]/90 px-5 py-4">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
          </span>
          <p className="text-xs uppercase tracking-[0.28em] text-bone">
            {project} — <span className="text-gold">{label}</span>
          </p>
        </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="block h-auto w-full max-w-full"
      />
    </figure>
  );
}
