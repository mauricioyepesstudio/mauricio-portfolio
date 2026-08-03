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

const channels = [
  {
    label: "Email",
    value: "rgentertainmentmanagement@gmail.com",
    href: "mailto:rgentertainmentmanagement@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
  value: "linkedin.com/in/mauricio-yepes-lotero",
  href: "https://www.linkedin.com/in/mauricio-yepes-lotero/?locale=en",
  icon: Linkedin,
  },
  {
    label: "Behance",
    value: "behance.net/mauricioyepes01",
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

          {/* LEFT */}

          <Reveal className="lg:col-span-5">

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
              Whether you're looking for a Creative Director,
              Senior Designer or Brand Strategist, I'd love to
              hear about your next project or opportunity.
            </p>

            <div className="mt-14 space-y-5">

              {channels.map((c) => (

                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === "Email" ? undefined : "_blank"}
                  rel={
                    c.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center gap-4"
                >

                  <div className="rounded-full border border-line p-3 transition group-hover:border-gold">

                    <c.icon
                      size={18}
                      className="text-paper"
                    />

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-bone">
                      {c.label}
                    </p>

                    <p className="text-paper transition group-hover:text-gold">
                      {c.value}
                    </p>

                  </div>

                </a>

              ))}

            </div>

            <div className="mt-16 rounded-[28px] border border-line p-8">

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

          {/* RIGHT */}

          <Reveal
            delay={0.1}
  className="lg:col-span-7 lg:pl-6 xl:pl-12"
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

        </div>

      </div>

    </div>
  );
}