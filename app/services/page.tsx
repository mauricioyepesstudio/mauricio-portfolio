import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { serviceAreas, engagementPlans } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Services & Development Plans",
  description: "Branding, websites, apps, CRM, automations, social media and creative production by Mauricio Yepes. Explore project and monthly engagements.",
  path: "/services",
});

const ctaClass = "inline-flex min-h-11 items-center gap-3 border-b border-gold py-3 text-paper hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

export default function ServicesPage() {
  return (
    <div className="container-px mx-auto max-w-content pb-24 pt-32 sm:pt-40 md:pb-40">
      <header className="max-w-4xl">
        <p className="eyebrow mb-6">Services & Development Plans</p>
        <h1 className="font-sans text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-paper">
          From brand idea<br />to working business tools.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-bone">
          One creative and technical partner for your identity, digital presence and day-to-day systems. Choose a focused project or an ongoing engagement around what your business needs.
        </p>
        <Link href="/contact" className={ctaClass + " mt-7"}>
          Tell me about your project <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </header>

      <section aria-labelledby="capabilities-heading" className="mt-24 border-t border-line pt-10">
        <h2 id="capabilities-heading" className="text-3xl font-semibold text-paper">What we can build together</h2>
        <div className="mt-12 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((service, index) => (
            <article key={service.title} className="min-w-0">
              <p className="text-xs tracking-[0.2em] text-gold">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-semibold text-paper">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-bone">{service.summary}</p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-bone">
                {service.items.map(item => <li key={item} className="border-t border-line pt-3">{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="plans-heading" className="mt-24 border-t border-line pt-10">
        <p className="eyebrow mb-4">Ways to work together</p>
        <h2 id="plans-heading" className="text-3xl font-semibold text-paper">A plan built around your next step.</h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-bone">
          Every proposal defines deliverables, milestones, revisions and price before work begins. These are starting points for scope, not unlimited bundles.
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {engagementPlans.map(plan => (
            <article key={plan.id} id={plan.id} className="flex min-w-0 flex-col border-t border-gold pt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-gold">{plan.format}</p>
              <h3 className="mt-4 text-3xl font-semibold text-paper">{plan.title}</h3>
              <p className="mt-5 text-base leading-7 text-bone">{plan.description}</p>
              <ul className="my-6 space-y-3 text-base leading-7 text-bone">
                {plan.items.map(item => <li key={item} className="border-t border-line pt-3">{item}</li>)}
              </ul>
              <Link href="/contact" className={ctaClass + " mt-auto self-start"}>
                {plan.cta} <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-7 text-bone">
          Domains, hosting, software subscriptions, ad spend and app-store fees are quoted separately where needed. Store releases depend on platform review. Campaign results depend on the offer, audience and budget.
        </p>
      </section>

      <section aria-labelledby="process-heading" className="mt-24 border-t border-line pt-10">
        <h2 id="process-heading" className="text-3xl font-semibold text-paper">A clear process, from brief to handover.</h2>
        <ol className="mt-8 grid gap-8 text-base leading-7 text-bone sm:grid-cols-3">
          <li><span className="block font-semibold text-paper">01 / Define</span>Agree the business need, scope, budget and what a successful delivery looks like.</li>
          <li><span className="block font-semibold text-paper">02 / Create & test</span>Review the work at agreed milestones and test the actual customer journey.</li>
          <li><span className="block font-semibold text-paper">03 / Launch & improve</span>Hand over the agreed deliverables, then prioritize any ongoing support separately.</li>
        </ol>
        <Link href="/contact" className={ctaClass + " mt-10"}>Request a proposal <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </section>
    </div>
  );
}
