import Link from "next/link";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section className="py-28 md:py-40 border-t border-line" id="contact">
      <div className="container-px max-w-content mx-auto text-center">
        <Reveal>
          <p className="eyebrow mb-6">Let&apos;s Work Together</p>
          <h2 className="font-sans font-semibold text-display-lg text-paper max-w-4xl mx-auto">
            Have a brand that&apos;s ready to{" "}
            <span className="font-serif italic text-gold">grow</span>?
          </h2>
          <p className="text-bone text-lg mt-8 max-w-xl mx-auto">
            Available for select creative direction, branding, and campaign
            engagements — remote or on-site across the United States.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-paper text-ink px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-gold transition-colors duration-300"
            >
              Start a Conversation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
