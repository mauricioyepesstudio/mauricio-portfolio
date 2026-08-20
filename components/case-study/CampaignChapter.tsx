import Image from "next/image";
import Reveal from "@/components/Reveal";
import NewsletterFrame from "@/components/case-study/NewsletterFrame";
import ProjectVideoPlayer from "@/components/ProjectVideoPlayer";
import type { CampaignChapter as CampaignChapterData } from "@/lib/case-studies/evenflo";

function SocialRow({
  title,
  assets,
  aspect,
  brand,
}: {
  title: string;
  assets: { src: string; alt: string }[];
  aspect: string;
  brand: string;
  }) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-4">
        <h4 className="text-sm uppercase tracking-[0.28em] text-bone">{title}</h4>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      <div className={`grid gap-4 sm:gap-5 ${assets.length > 3 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 sm:grid-cols-3"}`}>
        {assets.map((asset, index) => (
          <Reveal key={asset.src} delay={Math.min(index * 0.04, 0.16)}>
            <figure className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[#111] sm:rounded-2xl ${aspect}`}>
              <Image
                src={asset.src}
                alt={`${asset.alt} — ${brand}`}
                fill
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 22vw"
                className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function CampaignChapter({
  chapter,
  brand,
}: {
  chapter: CampaignChapterData;
  brand: string;
}) {
  return (
    <article id={chapter.slug} className="mt-24 scroll-mt-32 sm:mt-36">
      <Reveal>
        <header className="mb-10 grid gap-5 border-t border-white/10 pt-7 sm:mb-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.5fr)] lg:items-end">
          <div>
            <p className="eyebrow mb-3">{chapter.eyebrow}</p>
            <h2 className="max-w-4xl break-words text-[clamp(2.35rem,7vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-paper">
              {chapter.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-bone sm:text-base">{chapter.intro}</p>
        </header>
      </Reveal>

      <Reveal>
        <div className="mb-12 overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:mb-16 sm:rounded-[32px]">
          <div className="relative aspect-[16/9]">
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

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        <Reveal delay={0.05}>
          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-[28px]">
            <div className="relative aspect-square">
              <Image
                src={chapter.packaging.src}
                alt={chapter.packaging.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover"
              />
            </div>
            <figcaption className="border-t border-white/10 px-5 py-4 text-sm text-bone">Packaging Mockup</figcaption>
          </figure>
        </Reveal>

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
      </div>

      <div className="mt-14 space-y-12 sm:mt-20 sm:space-y-16">
        <SocialRow title="Social — Feed" assets={chapter.posts} aspect="aspect-[4/5]" brand={brand} />
        <SocialRow title="Social — Stories" assets={chapter.stories} aspect="aspect-[9/16]" brand={brand} />
      </div>

      <Reveal>
        <div className="mt-14 sm:mt-20">
          <div className="mb-6 flex items-center gap-4 sm:mb-8">
            <h4 className="text-sm uppercase tracking-[0.28em] text-bone">Motion</h4>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="max-w-2xl">
            <ProjectVideoPlayer src={chapter.video.src} caption={chapter.video.caption} />
          </div>
        </div>
      </Reveal>
    </article>
  );
}
