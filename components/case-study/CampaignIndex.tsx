export default function CampaignIndex({ chapters }: { chapters: readonly { slug: string; title: string }[] }) {
  if (chapters.length < 2) return null;
  return <nav aria-label="Campaigns in this case study" className="mt-14 border-y border-white/10 py-6">
    <p className="eyebrow mb-4">Explore the campaigns</p>
    <ul className="flex flex-wrap gap-x-6 gap-y-2">{chapters.map((chapter) => <li key={chapter.slug}><a href={`#${chapter.slug}`} className="inline-flex min-h-11 items-center text-sm text-bone transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">{chapter.title}</a></li>)}</ul>
  </nav>;
}
