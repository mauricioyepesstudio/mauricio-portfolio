import Image from "next/image";
import { ChevronDown } from "lucide-react";

type NewsletterFrameProps = {
  src: string;
  alt: string;
  note: string;
  campaign: string;
  width: number;
  height: number;
};

export default function NewsletterFrame({
  src,
  alt,
  note,
  campaign,
  width,
  height,
}: NewsletterFrameProps) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] sm:rounded-[28px]">
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#111]/90 px-5 py-4">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </span>
        <p className="text-xs uppercase tracking-[0.28em] text-bone">
          {campaign} — <span className="text-gold">{note}</span>
        </p>
      </div>

      <div
        tabIndex={0}
        role="region"
        aria-label={`${campaign} ${note} — scrollable, full length`}
        className="relative h-[620px] overflow-y-auto overscroll-contain focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold md:h-[720px] lg:h-[800px] min-[1440px]:h-[890px] min-[1920px]:h-[940px]"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 1024px) 92vw, 1200px"
          className="h-auto w-full"
        />
      </div>

      <div className="pointer-events-none relative -mt-14 h-14 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

      <figcaption className="flex items-center gap-2 px-5 py-4 text-xs text-bone">
        <ChevronDown size={14} className="text-gold" aria-hidden="true" />
        Scroll within the frame to view the full email
      </figcaption>
    </figure>
  );
}
