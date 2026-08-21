import { ChevronDown } from "lucide-react";

type WebsiteFrameProps = {
  src: string;
  alt: string;
  label: string;
  project: string;
};

export default function WebsiteFrame({ src, alt, label, project }: WebsiteFrameProps) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] sm:rounded-[28px]">
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

      <div
        tabIndex={0}
        role="region"
        aria-label={`${project} ${label} — scrollable, full page`}
        className="relative h-[520px] overflow-y-auto overscroll-contain focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold sm:h-[620px] lg:h-[780px] xl:h-[900px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
      </div>

      <div className="pointer-events-none relative -mt-14 h-14 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

      <figcaption className="flex items-center gap-2 px-5 py-4 text-xs text-bone">
        <ChevronDown size={14} className="text-gold" aria-hidden="true" />
        Scroll within the frame to explore the full page
      </figcaption>
    </figure>
  );
}
