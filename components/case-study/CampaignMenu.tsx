"use client";

type Chapter = { slug: string; title: string };

export default function CampaignMenu({ chapters }: { chapters: readonly Chapter[] }) {
  if (!chapters.length) return null;
  return (
    <nav aria-label="Campaign menu" className="sticky top-24 z-30 mt-12 min-w-0 rounded-xl border border-white/10 bg-[#0a0a0a]/95 px-4 py-3 backdrop-blur-md sm:top-28 sm:mt-16">
      <div className="md:hidden">
        <label htmlFor="campaign-picker" className="mb-2 block text-xs uppercase tracking-[0.18em] text-bone">Jump to a campaign</label>
        <select id="campaign-picker" defaultValue="" onChange={(event) => { if (event.target.value) window.location.hash = event.target.value; }}
          className="min-h-11 w-full min-w-0 rounded-lg border border-white/20 bg-[#111] px-3 text-sm text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
          <option value="" disabled>Select a campaign</option>
          {chapters.map((chapter) => <option key={chapter.slug} value={chapter.slug}>{chapter.title}</option>)}
        </select>
      </div>
      <div className="hidden min-w-0 items-center gap-4 md:flex">
        <span className="shrink-0 text-xs uppercase tracking-[0.18em] text-gold">Campaigns</span>
        <ul className="flex min-w-0 flex-1 gap-2 overflow-x-auto">
          {chapters.map((chapter) => <li key={chapter.slug} className="shrink-0"><a href={`#${chapter.slug}`} className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm text-bone transition-colors hover:bg-white/5 hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold">{chapter.title}</a></li>)}
        </ul>
      </div>
    </nav>
  );
}
