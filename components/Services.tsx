import Reveal from "./Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section className="py-28 md:py-40 border-t border-line" id="services">
      <div className="container-px max-w-content mx-auto">
        <Reveal>
          <p className="eyebrow mb-4">What I Do</p>
          <h2 className="font-sans font-semibold text-display-md text-paper mb-16 max-w-2xl">
            Twelve years of creative direction, compressed into eight disciplines I still do myself.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="bg-ink p-8 h-full group transition-all duration-500 hover:bg-[#111111] hover:-translate-y-2 hover:shadow-2xl">
                <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl text-paper font-semibold mt-5 mb-4">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-7 text-bone">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
