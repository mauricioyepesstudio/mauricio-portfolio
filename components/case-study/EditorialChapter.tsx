import Image from "next/image";
import Reveal from "@/components/Reveal";
import NewsletterFrame from "@/components/case-study/NewsletterFrame";
import ProjectVideoPlayer from "@/components/ProjectVideoPlayer";
import type { CuratedAsset, EditorialChapter as EditorialChapterData } from "@/lib/case-studies/types";

function SocialGrid({
  title,
  assets,
  brand,
}: {
  title: string;
  assets: CuratedAsset[];
  brand: string;
}) {
  if (!assets.length) return null;

  return (
    <div>
      <div className="mb-5 flex items-center gap-4">
        <h4 className="text-sm uppercase tracking-[0.28em] text-bone">{title}</h4>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      <div
        className={`grid min-w-0 gap-4 sm:gap-5 ${
          assets.length === 1
            ? "grid-cols-1"
            : assets.length === 2
              ? "grid-cols-2"
              : "grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {assets.map((asset, index) => (
          <Reveal key={asset.src} delay={Math.min(index * 0.04, 0.16)}>
            <figure className="group relative min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#111] sm:rounded-2xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src={asset.src}
                  alt={`${asset.alt} — ${brand}`}
                  fill
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 22vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
                />
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function EditorialChapter({
  chapter,
  brand,
}: {
  chapter: EditorialChapterData;
  brand: string;
}) {
  const hasSecondaryColumn = chapter.spotlight || chapter.newsletter;

  return (
    <article id={chapter.slug} className="mt-24 scroll-mt-32 sm:mt-36">
      <Reveal>
        <header className="mb-10 grid gap-5 border-t border-white/10 pt-7 sm:mb-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.5fr)] lg:items-end">
          <div>
            <p className="eyebrow mb-3">{chapter.eyebrow}</p>
            <h2 className="max-w-4xl break-words text-[clamp(2.35rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-paper">
              {chapter.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-bone sm:text-base">{chapter.intro}</p>
        </header>
      </Reveal>

      <Reveal>
        <div className="mb-12 overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:mb-16 sm:rounded-[32px]">
          <div className="relative aspect-[16/10] sm:aspect-[16/9]">
            <Image
              src={chapter.hero.src}
              alt={chapter.hero.alt}
              fill
              sizes="(max-width: 1536px) 92vw, 1440px"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>

      {chapter.featureVisual && (
        <Reveal>
          <div className="mb-12 sm:mb-16">
            {chapter.featureVisual.label && (
              <div className="mb-5 flex items-center gap-4">
                <h4 className="text-sm uppercase tracking-[0.28em] text-bone">{chapter.featureVisual.label}</h4>
                <span className="h-px flex-1 bg-white/10" />
              </div>
            )}
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-[28px]">
              <Image
                src={chapter.featureVisual.src}
                alt={chapter.featureVisual.alt}
                width={chapter.featureVisual.width}
                height={chapter.featureVisual.height}
                sizes="(max-width: 1024px) 92vw, 1200px"
                className="h-auto w-full"
              />
            </figure>
          </div>
        </Reveal>
      )}

      {hasSecondaryColumn && (
        // Only split into two columns when both a spotlight image and a newsletter exist side
        // by side. A chapter with just one of the two (e.g. newsletter alone) would otherwise
        // still reserve a lg:grid-cols-2 track for the missing element, leaving an empty column
        // beside the email — the "unused black area" the desktop layout pass was fixing.
        <div className={`grid min-w-0 gap-6 sm:gap-8 ${chapter.spotlight && chapter.newsletter ? "lg:grid-cols-2" : ""}`}>
          {chapter.spotlight && (
            <Reveal delay={0.05}>
              <figure className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-[28px]">
                <div className="relative aspect-square">
                  <Image
                    src={chapter.spotlight.src}
                    alt={chapter.spotlight.alt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    className="object-contain p-6"
                  />
                </div>
                <figcaption className="border-t border-white/10 px-5 py-4 text-sm text-bone">
                  {chapter.spotlight.label}
                </figcaption>
              </figure>
            </Reveal>
          )}

          {chapter.newsletter && (
            <Reveal delay={0.1}>
              <NewsletterFrame
                src={chapter.newsletter.src}
                alt={chapter.newsletter.alt}
                note={chapter.newsletter.note}
                campaign={chapter.title}
                width={chapter.newsletter.width}
                height={chapter.newsletter.height}
              />
            </Reveal>
          )}
        </div>
      )}

      {chapter.social && chapter.social.length > 0 && (
        <div className="mt-14 sm:mt-20">
          <SocialGrid title="Social Campaign Assets" assets={chapter.social} brand={brand} />
        </div>
      )}

      {chapter.videos && chapter.videos.length > 0 && (
        <Reveal>
          <div className="mt-14 sm:mt-20">
            <div className="mb-6 flex items-center gap-4 sm:mb-8">
              <h4 className="text-sm uppercase tracking-[0.28em] text-bone">Motion & Video</h4>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div
              className={`grid min-w-0 gap-6 sm:gap-8 ${
                chapter.videos.length > 1 ? "lg:grid-cols-2" : "max-w-2xl"
              }`}
            >
              {chapter.videos.map((video) => (
                <ProjectVideoPlayer key={video.src} src={video.src} caption={video.caption} orientation={video.orientation} />
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </article>
  );
}
