import Reveal from "./Reveal";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section className="py-28 md:py-40 border-t border-line" id="experience">
      <div className="container-px max-w-content mx-auto">
        <Reveal>
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="font-sans font-semibold text-display-md text-paper mb-16 max-w-2xl">
            12+ years directing brands across two continents.
          </h2>
        </Reveal>

        <div className="divide-y divide-line border-t border-b border-line">
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.08}>
              <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 items-baseline">
                <span className="md:col-span-2 text-sm text-gold font-medium">
                  {item.period}
                </span>
                <div className="md:col-span-4">
                  <h3 className="text-xl text-paper font-medium">
                    {item.role}
                  </h3>
                  <p className="text-sm text-bone mt-1">
                    {item.org} · {item.location}
                  </p>
                </div>
                <p className="md:col-span-6 text-bone leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
