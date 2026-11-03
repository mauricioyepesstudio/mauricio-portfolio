import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { serviceAreas, engagementPlans, pilotProgram, contactHref, type PackageMedia } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Services & Development Plans",
  description: "Start, renew or run your business with Mauricio Yepes and Real Group Entertainment: four packages for brand, websites, apps and monthly marketing, shown with real work. Pilot projects now open at no fee.",
  path: "/services",
});

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";
const ctaClass = `inline-flex min-h-11 items-center gap-3 border-b border-gold py-3 text-paper hover:text-gold ${focus}`;

function Tile({ item, className, sizes, priority }: { item: PackageMedia; className: string; sizes: string; priority?: boolean }) {
  const bg = item.bg;
  const contain = item.fit === "contain";
  return (
    <figure className={`group relative overflow-hidden bg-white/5 ${className}`} style={bg ? { backgroundColor: bg } : undefined}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes={sizes}
        priority={priority}
        style={item.pos ? { objectPosition: item.pos } : undefined}
        className={`${contain ? "object-contain p-[8%]" : "object-cover"} motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-apple motion-safe:group-hover:scale-[1.03]`}
      />
      <figcaption className="absolute bottom-3 left-3 bg-ink/80 px-2.5 py-1 text-xs text-paper backdrop-blur-sm">{item.label}</figcaption>
    </figure>
  );
}

export default function ServicesPage() {
  return (
    <div className="container-px mx-auto max-w-content pb-24 pt-32 sm:pt-40 md:pb-40">
      <header>
        <h1 className="max-w-4xl font-sans text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-paper">
          Pick where your business is.<br />See what you get.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-bone">Four packages, each shown with work we actually delivered.</p>

        <nav aria-label="Packages" className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {engagementPlans.map((plan, i) => (
            <a key={plan.id} href={`#${plan.id}`} className={`group block ${focus}`}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={plan.cover}
                  alt=""
                  fill
                  priority={i < 2}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-apple motion-safe:group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink from-15% via-ink/85 via-40% to-transparent to-75%" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="text-xs text-gold">{plan.format}</p>
                  <p className="mt-1 text-2xl font-semibold text-paper sm:text-3xl">{plan.title}</p>
                  <p className="mt-2 hidden text-sm leading-5 text-bone sm:block">{plan.tagline}</p>
                </div>
              </div>
            </a>
          ))}
        </nav>
      </header>

      <section id="pilot" aria-labelledby="pilot-heading" className="mt-16 flex flex-col gap-4 border border-gold/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 id="pilot-heading" className="text-2xl font-semibold text-paper">Pilot projects at no fee</h2>
          <p className="mt-2 max-w-xl text-base leading-7 text-bone">A few spots while we test every step with real businesses. You only cover approved third-party costs.</p>
        </div>
        <Link href={contactHref("pilot")} className={ctaClass + " shrink-0 self-start sm:self-auto"}>
          {pilotProgram.cta} <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section aria-labelledby="plans-heading" className="mt-24">
        <h2 id="plans-heading" className="sr-only">Packages</h2>
        <div className="space-y-24 md:space-y-36">
          {engagementPlans.map((plan, i) => {
            const [lead, ...rest] = plan.media;
            return (
              <article key={plan.id} id={plan.id} className="grid scroll-mt-28 gap-10 lg:grid-cols-12 lg:gap-14">
                <div className={`flex flex-col lg:col-span-4 ${i % 2 ? "lg:order-2" : ""}`}>
                  <p className="text-sm text-gold">{plan.format}</p>
                  <h3 className="mt-3 text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.03em] text-paper">{plan.title}</h3>
                  <p className="mt-5 text-xl leading-8 text-bone">{plan.tagline}</p>
                  <ul className="mt-8 space-y-3" aria-label={`${plan.title} includes`}>
                    {plan.gets.map(item => (
                      <li key={item} className="flex items-center gap-3 text-base text-paper">
                        <Check size={18} className="shrink-0 text-gold" aria-hidden="true" />{item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 lg:mt-auto lg:pt-10">
                    <Link href={contactHref(plan.id)} className={ctaClass}>{plan.cta} <ArrowUpRight size={18} aria-hidden="true" /></Link>
                    <Link href={plan.example.href} className={`inline-flex min-h-11 items-center text-sm text-bone underline decoration-gold underline-offset-4 hover:text-gold ${focus}`}>
                      {plan.example.label}
                    </Link>
                  </div>
                </div>
                <div className={`grid grid-cols-3 gap-3 sm:gap-4 lg:col-span-8 ${i % 2 ? "lg:order-1" : ""}`}>
                  <Tile item={lead} className="col-span-3 aspect-[16/10]" sizes="(min-width: 1024px) 60vw, 100vw" />
                  {rest.map(item => (
                    <Tile key={item.src} item={item} className="aspect-[4/5]" sizes="(min-width: 1024px) 20vw, 33vw" />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
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
