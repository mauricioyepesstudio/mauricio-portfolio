"use client";

import Reveal from "./Reveal";
import ClientLogoWall from "./ClientLogoWall";

export default function SelectedClients() {
  return (
    <section
      className="border-t border-line pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-28 lg:pb-36"
      id="clients"
    >
      <div className="container-px mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow mb-4">Selected Clients</p>

          <h2 className="mb-6 max-w-3xl font-sans text-display-md font-semibold leading-[1.02] text-paper">
            Client work
            <br />
            across the U.S. and
            <br />
            <span className="font-serif italic text-gold">Latin America.</span>
          </h2>

          <p className="mb-12 max-w-2xl text-lg leading-8 text-bone md:mb-14">
            More than 12 years creating brand systems, campaigns, editorial
            experiences and digital marketing for manufacturers, publishers and
            growing businesses across the U.S. and Latin America.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ClientLogoWall />
        </Reveal>
      </div>
    </section>
  );
}
