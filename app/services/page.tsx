import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { serviceAreas, engagementPlans, pilotProgram, contactHref } from "@/lib/services";
import PackageJourney from "@/components/PackageJourney";
import SystemFlowExplainer from "@/components/SystemFlowExplainer";
import { agencyFlows, engagementFlow } from "@/lib/system-flows";

export const metadata = pageMetadata({
  title: "Services & Development Plans",
  description: "Start, renew or run your business with Mauricio Yepes and Real Group Entertainment: four packages for brand, websites, apps and monthly marketing, shown with real work. Pilot projects now open at no fee.",
  path: "/services",
});

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";
const ctaClass = `inline-flex min-h-11 items-center gap-3 border-b border-gold py-3 text-paper hover:text-gold ${focus}`;

export default function ServicesPage() {
  return (
    <div className="container-px mx-auto max-w-content pb-24 pt-32 sm:pt-40 md:pb-40">
      <header>
        <h1 className="max-w-4xl font-serif text-[clamp(2.75rem,7.5vw,6rem)] leading-[1] text-paper">
          Pick where your<br />business is.<br /><span className="text-gold">See what you get.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-bone">Four packages. Each one is a clear path: these are the steps, and this is what you receive at each one.</p>
      </header>

      <section aria-labelledby="plans-heading" className="mt-14">
        <h2 id="plans-heading" className="sr-only">Packages</h2>
        <div className="space-y-16 lg:space-y-24">
          {engagementPlans.map((plan, i) => <PackageJourney key={plan.id} plan={plan} index={i} />)}
        </div>
      </section>

      <section aria-label="Systems we run" className="mt-20">
        <SystemFlowExplainer
          flows={agencyFlows}
          eyebrow="Real Group · Systems we run"
          heading="See how it works, step by step."
        />
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
        <h2 id="process-heading" className="mb-8 text-3xl font-semibold text-paper">How it works</h2>
        <SystemFlowExplainer flows={[engagementFlow]} />
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
