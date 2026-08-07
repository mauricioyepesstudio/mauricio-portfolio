import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import SelectedClients from "@/components/SelectedClients";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <Experience />
      <SelectedClients />
      <ContactCTA />
    </>
  );
}
