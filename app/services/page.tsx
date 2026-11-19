import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { serviceAreas, engagementPlans, pilotProgram, contactHref, type Package } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Services & Development Plans",
  description: "Real Group Entertainment offers brand design, websites, apps, monthly marketing and lead automation. Explore deliverables and examples from the portfolio.",
  path: "/services",
});

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";
const ctaClass = `inline-flex min-h-11 items-center gap-3 border-b border-gold py-3 text-paper hover:text-gold ${focus}`;

const packageTitles: Record<string, string> = {
  start: "Launch a business",
  renew: "Refresh your brand",
  run: "Get monthly marketing support",
  build: "Build an app or portal",
};

function ServicePackage({ plan }: { plan: Package }) {
  const image = plan.media[0];

  return (
    <article id={plan.id} className="grid scroll-mt-28 gap-6 border-t border-line py-8 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:items-center sm:gap-10 sm:py-12">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">{packageTitles[plan.id] ?? plan.title}</h3>
        <p className="mt-3 leading-7 text-bone">{plan.tagline}</p>
        <ul className="mt-5 grid gap-x-5 gap-y-2 text-sm text-paper min-[400px]:grid-cols-2">
          {plan.gets.map(item => (
            <li key={item} className="border-l border-gold/70 pl-3">{item}</li>
          ))}
        </ul>
        <Link href={contactHref(plan.id)} className={ctaClass + " mt-5"}>
          {plan.cta} <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <Link href={plan.example.href} className={`group block rounded-xl border border-line bg-[#151515] p-3 ${focus}`}>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-[#222]">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1440px) 560px, (min-width: 640px) 45vw, 90vw" className="object-cover object-top" />
        </div>
        <span className="flex min-h-11 items-center justify-between gap-2 px-1 pt-2 text-sm font-medium text-paper group-hover:text-gold">
          {plan.example.label} <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </Link>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <div className="container-px mx-auto max-w-content pb-24 pt-32 sm:pt-40 md:pb-40">
      <header className="rounded-2xl bg-[#f4f2ee] p-7 text-[#171614] sm:p-12 lg:p-16">
        <h1 className="max-w-4xl text-[clamp(2.4rem,6vw,5.5rem)] font-semibold leading-[1.04] tracking-tight">
          Brand, marketing &amp; digital products
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#514b43] sm:text-lg">
          Work with Real Group to launch a brand, build a website or app, or get ongoing help with campaigns and lead follow-up.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/contact" className={`inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#171614] px-5 font-medium text-white hover:bg-[#403930] ${focus}`}>
            Request a proposal <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <a href="#services" className={`inline-flex min-h-11 items-center font-medium underline underline-offset-4 ${focus}`}>Explore services</a>
        </div>
      </header>

      <section id="services" aria-labelledby="plans-heading" className="mt-16 scroll-mt-28 sm:mt-24">
        <h2 id="plans-heading" className="mb-6 text-3xl font-semibold tracking-tight text-paper sm:text-4xl">How we can help</h2>
        {engagementPlans.map(plan => <ServicePackage key={plan.id} plan={plan} />)}
      </section>

      <section aria-labelledby="automation-heading" className="mt-20 border border-gold/60 bg-[#101010] p-7 sm:p-10">
        <p className="eyebrow">Lead automation</p>
        <h2 id="automation-heading" className="mt-4 font-serif text-3xl text-paper sm:text-4xl">Follow up on every lead</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-bone">Capture inquiries from forms and campaigns, assign them to the right person, and track follow-up, quotes and sales.</p>
        <Link href="/lead-automation" className={`mt-6 inline-flex min-h-11 items-center gap-3 border-b border-gold py-2 font-semibold text-paper hover:text-gold ${focus}`}>Explore lead automation <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </section>

      <section id="pilot" aria-labelledby="pilot-heading" className="mt-20 flex flex-col gap-4 border border-gold/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 id="pilot-heading" className="text-2xl font-semibold text-paper">Pilot projects at no fee</h2>
          <p className="mt-2 max-w-xl text-base leading-7 text-bone">A few spots while we test every step with real businesses. You only cover approved third-party costs.</p>
        </div>
        <Link href={contactHref("pilot")} className={ctaClass + " shrink-0 self-start sm:self-auto"}>
          {pilotProgram.cta} <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section aria-labelledby="capabilities-heading" className="mt-32 border-t border-line pt-12">
        <h2 id="capabilities-heading" className="text-3xl font-semibold text-paper">Need just one thing?</h2>
        <p className="mt-3 text-base text-bone">Add it to a package or ask for it on its own.</p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {serviceAreas.map(service => (
            <li key={service.id}>
              <Link
                href={contactHref(service.id)}
                aria-label={`Ask about ${service.title}`}
                className={`inline-flex min-h-11 items-center gap-2 border border-line px-4 text-sm text-paper hover:border-gold hover:text-gold ${focus}`}
              >
                {service.title} <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="process-heading" className="mt-24 border-t border-line pt-12">
        <h2 id="process-heading" className="text-3xl font-semibold text-paper">How it works</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-3">
          {["We agree the scope and price", "You review the work at each step", "We launch and hand it over"].map((step, i) => (
            <li key={step} className="flex items-baseline gap-4 text-lg text-paper">
              <span className="text-gold">{i + 1}</span>{step}
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl text-sm leading-6 text-bone/80">
          Domains, hosting, subscriptions, ad spend and store fees are quoted separately. Results depend on the offer, audience and budget. Legal, accounting and tax work stays with your attorney or accountant.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2">
          <Link href="/contact" className={ctaClass}>Request a proposal <ArrowUpRight size={18} aria-hidden="true" /></Link>
          <Link href="/resume" className={`inline-flex min-h-11 items-center text-sm text-bone underline decoration-gold underline-offset-4 hover:text-gold ${focus}`}>
            Hiring in-house? View resume
          </Link>
        </div>
      </section>
    </div>
  );
}
