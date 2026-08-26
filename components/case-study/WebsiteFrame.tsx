"use client";

import ScrollFrameCore from "@/components/case-study/ScrollFrameCore";

type WebsiteFrameProps = {
  src: string;
  alt: string;
  label: string;
  project: string;
};

const VIEWPORT_HEIGHT =
  "h-[520px] sm:h-[620px] md:h-[1100px] lg:h-[1200px] xl:h-[1300px] 2xl:h-[1400px]";

export default function WebsiteFrame({ src, alt, label, project }: WebsiteFrameProps) {
  return (
    <ScrollFrameCore
      viewportClassName={VIEWPORT_HEIGHT}
      scrollHint="Scroll within the frame to explore the full page"
      ariaLabel={`${project} ${label} — scrollable website capture`}
      header={
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
      }
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="block h-auto w-full max-w-full"
      />
    </ScrollFrameCore>
  );
}
