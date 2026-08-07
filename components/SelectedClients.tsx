"use client";

import Reveal from "./Reveal";

const clients = [
  "FK Irons",
  "Microbeau",
  "Grupo Nutresa",
  "Evenflo Colours",
  "Landers",
  "LeBon",
  "Resource Living",
  "C2 Multimedia",
  "DB Distro",
  "Oakley Colombia",
  "Mariana Pajón",
  "Real Group Entertainment",
];

export default function SelectedClients() {
  return (
    <section className="py-28 md:py-40 border-t border-line" id="clients">
      <div className="container-px max-w-content mx-auto">
        <Reveal>
          <p className="eyebrow mb-4">Selected Clients</p>

          <h2 className="font-sans font-semibold text-display-md text-paper mb-6 max-w-3xl">
  Trusted by leading brands across the U.S. and Latin America.
</h2>

          <p className="text-bone text-lg max-w-2xl mb-16">
            More than two decades collaborating with startups, international
            brands and industry leaders across branding, editorial design,
            advertising, digital marketing and creative direction.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <Reveal key={client} delay={index * 0.05}>
              <div className="group rounded-2xl border border-line bg-transparent hover:bg-white/[0.03] transition-all duration-300 p-8 h-32 flex items-center justify-center">
                <h3 className="text-center text-paper font-medium text-lg group-hover:text-gold transition-colors duration-300">
                  {client}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
