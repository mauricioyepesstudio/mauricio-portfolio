type BannerFrameProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function BannerFrame({ src, alt, caption }: BannerFrameProps) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-[28px]">
      <img src={src} alt={alt} loading="lazy" className="block h-auto w-full max-w-full" />
      {caption ? (
        <figcaption className="border-t border-white/10 px-5 py-3 text-xs uppercase tracking-[0.2em] text-bone">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
