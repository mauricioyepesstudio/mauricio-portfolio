import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { serviceAreas, engagementPlans, pilotProgram, contactHref, type Package } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Services & Development Plans",
  description: "Start, renew or run your business with Mauricio Yepes and Real Group Entertainment: four packages for brand, websites, apps and monthly marketing, shown with real work. Pilot projects now open at no fee.",
  path: "/services",
});

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";
const ctaClass = `inline-flex min-h-11 items-center gap-3 border-b border-gold py-3 text-paper hover:text-gold ${focus}`;

function Poster({ plan, priority }: { plan: Package; priority?: boolean }) {
  return (
    <article id={plan.id} aria-labelledby={`${plan.id}-title`} className="scroll-mt-28">
      <h3 id={`${plan.id}-title`} className="sr-only">{plan.title}</h3>
      <div className="relative aspect-[4/5] overflow-hidden bg-[#050505]" style={{ containerType: "inline-size" }}>
        <div className="absolute inset-x-0 bottom-0 h-[60%] [mask-image:linear-gradient(to_bottom,transparent,black_35%)]">
          <Image src={plan.poster} alt="" fill priority={priority} sizes="(min-width: 768px) 45vw, 100vw" className="object-cover object-bottom" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent" aria-hidden="true" />
        <div className="relative flex h-full flex-col items-center px-[7%] pt-[7%] pb-[6%] text-center">
          <p className="text-[max(11px,2.6cqw)] tracking-[0.42em] text-gold" aria-hidden="true">{plan.title.toUpperCase()} · {plan.format.toUpperCase()}</p>
          <span className="mt-[2cqw] block h-px w-[7cqw] bg-gold" aria-hidden="true" />
          <p className="mt-[4.5cqw] font-serif text-[11.5cqw] leading-[0.98] text-paper">
            {plan.headline[0]}<br /><span className="bg-gradient-to-b from-[#e6c58e] to-[#a9824c] bg-clip-text text-transparent">{plan.headline[1]}</span>
          </p>
          <p className="mt-[4cqw] font-serif text-[4.2cqw] leading-[1.3] text-paper/90">{plan.sub[0]}<br />{plan.sub[1]}</p>
          <Link
            href={contactHref(plan.id)}
            className={`mt-[5cqw] inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/80 bg-black/40 px-[5cqw] text-[max(14px,3.2cqw)] text-paper backdrop-blur-sm hover:bg-gold hover:text-ink ${focus}`}
          >
            {plan.cta} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <p className="mt-auto max-w-[90%] border-t border-gold/60 pt-[3cqw] font-serif text-[max(12px,3cqw)] tracking-[0.06em] text-paper/90">
            {plan.gets.join(" · ")}
          </p>
        </div>
      </div>
      <Link href={plan.example.href} className={`mt-3 inline-flex min-h-11 items-center text-sm text-bone underline decoration-gold underline-offset-4 hover:text-gold ${focus}`}>
        {plan.example.label}
      </Link>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <div className="container-px mx-auto max-w-content pb-24 pt-32 sm:pt-40 md:pb-40">
      <header>
        <h1 className="max-w-4xl font-serif text-[clamp(2.75rem,7.5vw,6rem)] leading-[1] text-paper">
          Pick where your<br />business is.<br /><span className="text-gold">See what you get.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-bone">Four packages. Pick one and we shape it to your business.</p>

        
      </header>

      

      <section aria-labelledby="plans-heading" className="mt-14">
        <h2 id="plans-heading" className="sr-only">Packages</h2>
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:gap-x-10">
          {engagementPlans.map((plan, i) => <Poster key={plan.id} plan={plan} priority={i < 2} />)}
        </div>
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
