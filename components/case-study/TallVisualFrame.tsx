"use client";

import Image from "next/image";
import ScrollFrameCore from "@/components/case-study/ScrollFrameCore";

type TallVisualFrameProps = {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
};

const VIEWPORT_HEIGHT =
  "h-[1920px] md:h-[1100px] lg:h-[1200px] xl:h-[1300px] 2xl:h-[1400px]";

export default function TallVisualFrame({
  src,
  alt,
  label,
  width,
  height,
}: TallVisualFrameProps) {
  return (
    <ScrollFrameCore
      viewportClassName={VIEWPORT_HEIGHT}
      scrollHint="Scroll within the frame to view the full artwork"
      ariaLabel={`${label} — scrollable editorial visual`}
      header={
        <div className="flex items-center gap-3 border-b border-white/10 bg-[#111]/90 px-5 py-4">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
          </span>
          <p className="text-xs uppercase tracking-[0.28em] text-bone">
            <span className="text-gold">{label}</span>
          </p>
        </div>
      }
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 1024px) 100vw, 1200px"
        className="block h-auto w-full max-w-full"
      />
    </ScrollFrameCore>
  );
}
