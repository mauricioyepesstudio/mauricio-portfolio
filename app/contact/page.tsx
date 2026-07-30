import type { Metadata } from "next";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mauricio Yepes for creative direction, branding, marketing campaigns, and website design engagements.",
};

const channels = [
  {
    label: "Email",
    value: "hello@mauricioyepes.com",
    href: "mailto:hello@mauricioyepes.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "in/mauricioyepes",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "Behance",
    value: "behance.net/mauricioyepes",
    href: "https://www.behance.net/",
    icon: ExternalLink,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-40 pb-28 md:pb-40">
      <div className="container-px max-w-content mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="font-sans font-semibold text-display-lg text-paper">
              Let&apos;s build
              <br />
              something <span className="font-serif italic text-gold">worth</span>{" "}
              remembering.
            </h1>
            <p className="text-bone text-lg mt-8 max-w-sm">
              Tell me about your brand, timeline, and goals. I typically
              respond within one business day.
            </p>

            <ul className="mt-12 space-y-5">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.label === "Email" ? undefined : "_blank"}
                    rel={c.label === "Email" ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-3 group"
                  >
                    <span className="border border-line rounded-full p-2.5 group-hover:border-gold transition-colors">
                      <c.icon size={18} className="text-paper" />
                    </span>
                    <span>
                      <span className="block text-xs text-bone uppercase tracking-widest2">
                        {c.label}
                      </span>
                      <span className="block text-paper group-hover:text-gold transition-colors">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <div className="border border-line rounded-3xl p-8 md:p-12">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
