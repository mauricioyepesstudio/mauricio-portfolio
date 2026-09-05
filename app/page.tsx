import RGEHero from "@/components/rge/Hero";
import SelectedClients from "@/components/SelectedClients";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import RGEServices from "@/components/rge/Services";
import RGEVentures from "@/components/rge/Ventures";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <RGEHero />
      <SelectedClients />
      <SelectedWork />
      <Experience />
      <RGEServices />
      <RGEVentures />
      <ContactCTA />
    </>
  );
}
