import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { serviceAreas } from "@/lib/services";

export default function RGEServices() {
  return (
    <section id="services" className="py-28 md:py-40 border-t border-line">
      <div className="container-px max-w-content mx-auto">
        <Reveal>
          <p className="eyebrow mb-5">Services</p>
          <h2 className="font-sans text-[clamp(2.4rem,7vw,4rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-paper max-w-3xl">
            Start, renew<br />or run your business.
          </h2>
          <p className="mt-6 max-w-2xl text-bone text-lg leading-8">
            Branding, websites, social media, ads and connected systems for a new business, a brand that needs renewing or a company that wants its marketing handled every month.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <div className="h-full border-t border-line pt-6">
                <p className="text-xs tracking-[0.2em] text-gold">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-semibold text-paper">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-bone">{service.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Link href="/services" className="mt-14 inline-flex min-h-11 items-center gap-3 border-b border-gold py-3 text-paper hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
          Explore services & plans <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
