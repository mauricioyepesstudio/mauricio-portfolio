"use client";

import ClientLogo from "@/components/ClientLogo";
import { getVisibleClientLogos } from "@/lib/client-logos";

export default function ClientLogoWall() {
  const visibleClients = getVisibleClientLogos();

  return (
    <div
      className="grid grid-cols-2 border-l border-t border-line md:grid-cols-3 lg:grid-cols-4"
      role="list"
      aria-label="Selected client logos"
    >
      {visibleClients.map((client) => (
        <div
          key={client.name}
          role="listitem"
          className="min-w-0 border-b border-r border-line"
        >
          <ClientLogo client={client} />
        </div>
      ))}
    </div>
  );
}
