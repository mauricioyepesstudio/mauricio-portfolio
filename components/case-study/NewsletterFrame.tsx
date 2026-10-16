import Image from "next/image";
import ScrollFrameCore from "./ScrollFrameCore";

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
    <ScrollFrameCore className="mx-auto w-full max-w-[420px]" viewportClassName="max-h-[min(760px,75vh)]" scrollHint="Scroll to read the full newsletter" ariaLabel={`${campaign} — ${note}`} header={
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#111]/90 px-5 py-4">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </span>
        <p className="min-w-0 truncate text-[11px] uppercase tracking-[0.2em] text-bone">
          {campaign} — <span className="text-gold">{note}</span>
        </p>
      </div>
      }>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 480px) 92vw, 420px"
        className="h-auto w-full"
      />
    </ScrollFrameCore>
  );
}
