import type { Metadata } from "next";
import {
  Mail,
  Linkedin,
  ExternalLink,
  MapPin,
  Briefcase,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mauricio Yepes for Creative Direction, Branding, Marketing and Design opportunities.",
};

const email = {
  label: "Email",
  value: "rgentertainmentmanagement@gmail.com",
  href: "mailto:rgentertainmentmanagement@gmail.com",
  icon: Mail,
};

const iconLinks = [
  {
    label: "LinkedIn",
    title: "LinkedIn profile (opens in a new tab)",
    href: "https://www.linkedin.com/in/mauricio-yepes-lotero/?locale=en",
    icon: Linkedin,
  },
  {
    label: "Behance",
    title: "Behance portfolio (opens in a new tab)",
    href: "https://www.behance.net/mauricioyepes01",
    icon: ExternalLink,
  },
];

const services = [
  "Creative Direction",
  "Brand Strategy",
  "Marketing Campaigns",
  "Editorial Design",
  "Digital Marketing",
  "Website Design",
  "AI Creative Workflows",
  "Senior Graphic Design",
];

export default function ContactPage() {
  return (
    <div className="pt-40 pb-32 md:pb-40">

      <div className="container-px max-w-content mx-auto">

        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-start">

          {/* HERO / INTRO — first on every breakpoint */}

          <Reveal className="order-1 lg:order-1 lg:col-span-5 lg:row-start-1">

            <p className="eyebrow mb-4">
              Contact
            </p>

            <h1 className="font-sans font-semibold text-display-lg text-paper leading-[0.92]">
              Let's build
              <br />
              something
              <span className="font-serif italic text-gold">
                {" "}exceptional.
              </span>
            </h1>

            <p className="mt-8 max-w-md text-xl leading-9 text-bone">
              Whether you&apos;re looking for a Creative Director,
              Marketing Specialist or Multidisciplinary Designer, I&apos;d love to
              hear about your next project or opportunity.
            </p>

          </Reveal>

          {/* FORM — second on mobile (before email/social/availability); right column on desktop */}

          <Reveal
            delay={0.1}
            className="order-2 lg:order-2 lg:col-span-7 lg:row-start-1 lg:row-span-2 lg:pl-6 xl:pl-12"
          >

            <div className="rounded-[36px] border border-line bg-[#101010] p-8 md:p-12">

              <p className="eyebrow mb-6">
                Services
              </p>

              <div className="mb-12 flex flex-wrap gap-3">

                {services.map((service) => (

                  <span
                    key={service}
                    className="rounded-full border border-line px-5 py-2 text-sm text-paper"
                  >
                    {service}
                  </span>

                ))}

              </div>

              <ContactForm />

            </div>

          </Reveal>

          {/* EMAIL / LINKEDIN / BEHANCE / AVAILABILITY — third on mobile; left column below the intro on desktop */}

          <Reveal delay={0.05} className="order-3 lg:order-1 lg:col-span-5 lg:row-start-2">

            <div className="space-y-5">

              <a
                href={email.href}
                className="group flex items-center gap-4"
              >

                <div className="rounded-full border border-line p-3 transition group-hover:border-gold">

                  <email.icon
                    size={18}
                    className="text-paper"
                  />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.25em] text-bone">
                    {email.label}
                  </p>

                  <p className="text-paper transition group-hover:text-gold break-all">
                    {email.value}
                  </p>

                </div>

              </a>

              <div className="flex items-center gap-3">

                {iconLinks.map((l) => (

                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={l.title}
                    title={l.title}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-paper transition hover:border-gold hover:text-gold"
                  >

                    <l.icon size={18} aria-hidden="true" />

                  </a>

                ))}

              </div>

            </div>

            <div className="mt-10 rounded-[28px] border border-line p-8">

              <div className="flex items-center gap-3">

                <MapPin
                  size={18}
                  className="text-gold"
                />

                <span className="text-paper">
                  Miami, Florida
                </span>

              </div>

              <div className="mt-5 flex items-center gap-3">

                <Briefcase
                  size={18}
                  className="text-gold"
                />

                <span className="text-paper">
                  Available for Full-Time & Freelance
                </span>

              </div>

              <p className="mt-6 text-bone leading-7">
                Usually replies within one business day.
              </p>

            </div>

          </Reveal>

        </div>

      </div>

    </div>
  );
}