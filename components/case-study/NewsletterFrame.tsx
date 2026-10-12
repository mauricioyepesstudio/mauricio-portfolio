import Image from "next/image";

type NewsletterFrameProps = {
  src: string;
  alt: string;
  note: string;
  campaign: string;
  width: number;
  height: number;
  /** Two-up layout: the frame sits in a half-width column. */
  compact?: boolean;
};

export default function NewsletterFrame({
  src,
  alt,
  note,
  campaign,
  width,
  height,
  compact = false,
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

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={compact ? "(max-width: 768px) 92vw, 46vw" : "(max-width: 1024px) 92vw, 1200px"}
        className="h-auto w-full"
      />
    </figure>
  );
}
