import RGEHero from "@/components/rge/Hero";
import RGEServices from "@/components/rge/Services";
import RGEVentures from "@/components/rge/Ventures";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <RGEHero />
      <RGEServices />
      <RGEVentures />
      <ContactCTA />
    </>
  );
}
