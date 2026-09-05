import Reveal from "@/components/Reveal";
import { Video, PenTool, Code2, Camera } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Services",
    items: [
      "Explainer videos",
      "Interview videos",
      "Company overview / \"About\" videos",
      "Testimonial videos",
      "Advertisements & fundraising campaigns",
      "Commercials & short promos",
      "Product videos",
    ],
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    items: [
      "Brand identity & logo design",
      "Social media graphics",
      "Print & packaging",
      "Advertising creative",
    ],
  },
  {
    icon: Code2,
    title: "Web Development",
    items: [
      "Digital marketing",
      "Web design",
      "Social media marketing",
      "Reputation management",
      "eCommerce marketing",
      "Amazon marketing",
    ],
  },
  {
    icon: Camera,
    title: "Photography",
    items: [
      "Corporate team photography",
      "Product photography",
      "Commercial photography",
      "Event photography",
      "Location & architectural photography",
      "Lifestyle & food photography",
    ],
  },
];

export default function RGEServices() {
  return (
    <section id="services" className="py-28 md:py-40 border-t border-line">
      <div className="container-px max-w-content mx-auto">
        <Reveal>
          <p className="eyebrow mb-5">Our Services</p>
          <h2 className="font-sans text-[clamp(2.4rem,7vw,4rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-paper max-w-3xl">
            Four disciplines, one team.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line p-6">
                <s.icon className="text-gold" size={28} />
                <h3 className="mt-4 text-lg font-semibold text-paper">
                  {s.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm leading-6 text-bone">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
