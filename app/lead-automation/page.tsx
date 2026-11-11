import Link from "next/link";
import { ArrowRight, Check, CircleCheck, Gauge, Inbox, Route, ShieldCheck, Workflow } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Lead Automation & CRM | Real Group",
  description:
    "Lead capture, private assignment, follow-up and measurable sales reporting for service businesses. Request a Real Group automation proposal.",
  path: "/lead-automation",
});

const outcomes = [
  { icon: Inbox, title: "Capture every request", description: "Connect your website form and eligible ad lead sources to a single intake." },
  { icon: Route, title: "Route privately", description: "Assign each request by category, area or team rule. Every recipient receives a private notification." },
  { icon: Workflow, title: "Follow up", description: "Track owner, next action, quote and outcome in your commercial pipeline." },
  { icon: Gauge, title: "Measure revenue", description: "See the number of requests, response status, closed jobs and recorded sales—not invented ROI." },
] as const;

const packages = [
  {
    label: "Launch",
    headline: "Stop losing enquiries.",
    price: "Starting estimate: $500–$1,500",
    description: "For a local service company that wants a clean first lead workflow.",
    includes: ["One lead capture source", "Email alerts and a lead ledger", "Duplicate protection", "Delivery and failure checklist"],
  },
  {
    label: "Growth",
    headline: "Build the full lead flow.",
    price: "Quoted after discovery",
    description: "For teams who need assignments, different categories and follow-up.",
    includes: ["Multiple lead sources", "Category / territory routing", "Private notifications by recipient", "Pipeline stages and commercial reporting"],
  },
  {
    label: "Managed",
    headline: "Keep it running.",
    price: "Starting estimate: $150–$500 / month",
    description: "Optional ongoing improvements after installation.",
    includes: ["Flow monitoring and incident review", "Lead quality and conversion reports", "Monthly optimization proposals", "Ongoing support within an agreed scope"],
  },
] as const;

const process = [
  ["01", "Map the workflow", "We confirm your categories, audience, responsibilities and approved integrations."],
  ["02", "Build and connect", "We configure intake, routing and notifications with isolated client data."],
  ["03", "Verify the handoff", "We check whether the request is logged, assigned and delivered; receipt is not a closed sale."],
  ["04", "Track opportunities", "Your team records contact, quote, won/lost and actual revenue over time."],
] as const;

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

export default function LeadAutomationPage() {
  return (
    <main className="container-px mx-auto max-w-content pb-28 pt-32 text-paper sm:pt-40">
      <header className="max-w-5xl">
        <p className="eyebrow text-gold">Real Group · Business Automation</p>
        <h1 className="mt-5 max-w-5xl font-serif text-[clamp(3.2rem,8.2vw,7.2rem)] leading-[0.98] tracking-tight">
          Turn inquiries into <span className="italic text-gold">opportunities.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-bone sm:text-xl">
          From the first form submission to the sale: capture requests, route them to the right
          person, follow up and see what your business actually closes.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <Link href="/contact?topic=automation" className={`inline-flex min-h-12 items-center gap-3 rounded-full bg-gold px-7 font-semibold text-ink transition hover:bg-paper ${focus}`}>
            Request a proposal <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link href="/lead-automation/demo" className={`inline-flex min-h-12 items-center border-b border-gold text-bone hover:text-paper ${focus}`}>Try the interactive demo</Link>
          <a href="#how-it-works" className={`inline-flex min-h-12 items-center border-b border-gold text-bone hover:text-paper ${focus}`}>How it works</a>
        </div>
      </header>

      <section aria-labelledby="workflow-title" className="mt-24 border-y border-line py-12 sm:mt-32">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 id="workflow-title" className="font-serif text-3xl sm:text-4xl">One connected workflow.</h2>
          <ShieldCheck className="text-gold" aria-hidden="true" />
        </div>
        <ol className="grid gap-4 md:grid-cols-4">
          {["Customer request", "Smart assignment", "Private notification", "Follow-up & sale"].map((item, index) => (
            <li key={item} className="border border-line bg-[#101010] p-5">
              <span className="text-xs font-semibold tracking-[0.2em] text-gold">STEP 0{index + 1}</span>
              <p className="mt-5 text-lg font-semibold">{item}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-bone">
          Internal demonstration of the workflow; not a live feed of customer or contractor data.
          Every client has separate access and its own operating rules.
        </p>
      </section>

      <section aria-labelledby="benefits-title" className="mt-24">
        <p className="eyebrow">What you get</p>
        <h2 id="benefits-title" className="mt-4 font-serif text-4xl sm:text-5xl">Built to move a lead forward.</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {outcomes.map(({ icon: Icon, title, description }) => (
            <article key={title} className="border-t border-gold/60 pt-6">
              <Icon size={28} className="text-gold" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 max-w-md leading-7 text-bone">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="packages-title" className="mt-28">
        <p className="eyebrow">Service packages</p>
        <h2 id="packages-title" className="mt-4 font-serif text-4xl sm:text-5xl">Start where you are.</h2>
        <p className="mt-4 max-w-3xl leading-7 text-bone">
          These are indicative planning ranges, not final published rates or guaranteed results.
          Your proposal defines scope, delivery and cost before any work begins.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.label} className="flex flex-col border border-line bg-[#101010] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{item.label}</p>
              <h3 className="mt-5 font-serif text-3xl">{item.headline}</h3>
              <p className="mt-4 text-sm font-semibold text-paper">{item.price}</p>
              <p className="mt-4 leading-7 text-bone">{item.description}</p>
              <ul className="mt-7 space-y-4">
                {item.includes.map((benefit) => <li key={benefit} className="flex gap-3 text-sm leading-6 text-bone"><Check size={17} className="mt-1 shrink-0 text-gold" aria-hidden="true" />{benefit}</li>)}
              </ul>
              <Link href="/contact?topic=automation" className={`mt-9 inline-flex min-h-12 items-center gap-3 border-t border-line pt-5 font-semibold text-paper hover:text-gold lg:mt-auto ${focus}`}>Discuss {item.label.toLowerCase()} <ArrowRight size={17} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" aria-labelledby="process-title" className="mt-28 scroll-mt-32 border-t border-line pt-12">
        <h2 id="process-title" className="font-serif text-4xl sm:text-5xl">How we deliver it.</h2>
        <ol className="mt-10 grid gap-7 md:grid-cols-2">
          {process.map(([number, title, detail]) => (
            <li key={number} className="flex gap-5">
              <span className="font-serif text-2xl text-gold">{number}</span>
              <div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-bone">{detail}</p></div>
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-3xl border-l-2 border-gold pl-5 text-sm leading-7 text-bone">
          Advertising spend, domains, hosting, email/WhatsApp provider charges and other third-party tools are quoted separately.
          The service does not guarantee lead volume, booked jobs or revenue.
        </p>
        <Link href="/contact?topic=automation" className={`mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-gold px-7 font-semibold text-ink transition hover:bg-paper ${focus}`}>
          Build my automation <CircleCheck size={18} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
