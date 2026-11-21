// Step-by-step explainers for the systems Real Group runs. Copy describes how
// each workflow works, never results: no lead counts, spend or conversion figures.

export type FlowVisual =
  | { kind: "image"; src: string; alt: string; label?: string }
  | { kind: "form" }
  | { kind: "clock"; label: string }
  | { kind: "email" }
  | { kind: "pipeline" }
  | { kind: "library"; srcs: readonly string[] }
  | { kind: "check"; items: readonly string[] }
  | { kind: "social"; src: string }
  | { kind: "formats"; post: string; story: string }
  | { kind: "calendar"; slots: readonly string[] }
  | { kind: "brief"; heading: string; rows: readonly { label: string; value: string; quote?: boolean }[] };

export type FlowStep = { title: string; short: string; detail: string; visual: FlowVisual };
export type SystemFlow = { id: string; label: string; title: string; intro: string; steps: readonly FlowStep[] };

const CATEGORIES = "/projects/resource-living/campaigns/08-service-categories-nov-2026";
const OCT = "/projects/resource-living/campaigns/06-broward-palm-beach-oct-2026";

export const leadFlow: SystemFlow = {
  id: "leads",
  label: "Lead follow-up",
  title: "From an ad to a phone call, without a lead slipping through.",
  intro: "A homeowner sees an ad, asks for a quote, and the right person on the team hears about it within minutes.",
  steps: [
    {
      title: "The ad",
      short: "A homeowner sees a service ad on Facebook or Instagram.",
      detail: "Each service category has its own ad, photography and offer, so the request already says what the homeowner needs.",
      visual: { kind: "image", src: `${CATEGORIES}/social/pools-patios-pergolas-post.jpg`, alt: "Pools, patios and pergolas ad", label: "Sponsored" },
    },
    {
      title: "The form",
      short: "They tap Get Quote and fill in a short form.",
      detail: "Name, phone, ZIP code and project type are captured inside the platform, so nobody has to leave the app.",
      visual: { kind: "form" },
    },
    {
      title: "The check",
      short: "The system looks for new requests every 15 minutes.",
      detail: "Only new requests are picked up. A request that was already sent is never sent twice.",
      visual: { kind: "clock", label: "Every 15 min" },
    },
    {
      title: "The email",
      short: "The team gets one email per request.",
      detail: "Each email carries the homeowner's details and the service they asked for, ready to call back.",
      visual: { kind: "email" },
    },
    {
      title: "The follow-up",
      short: "The team calls, quotes and records the outcome.",
      detail: "Every request moves through contacted, quoted and won or lost, so the business sees what really closes.",
      visual: { kind: "pipeline" },
    },
  ],
};

export const publishingFlow: SystemFlow = {
  id: "publishing",
  label: "Daily publishing",
  title: "Advertisers appear on social media every day, on schedule.",
  intro: "Ads already designed for the magazine get a second life on Facebook and Instagram, without anyone posting by hand.",
  steps: [
    {
      title: "The library",
      short: "Finished magazine ads are loaded by edition.",
      detail: "Every advertiser's final ad from the current edition goes into one organized library.",
      visual: { kind: "library", srcs: [`${OCT}/advertising/pavers-a-beautiful-first-impression.jpg`, `${OCT}/advertising/roofing-beauty-above-it-all.jpg`, `${OCT}/advertising/kitchens-baths-beautifully-lived-in.jpg`] },
    },
    {
      title: "The queue",
      short: "Two ads are picked for each day.",
      detail: "The system rotates through the edition so every advertiser gets their turn.",
      visual: { kind: "calendar", slots: ["Ad 1", "Ad 2"] },
    },
    {
      title: "The check",
      short: "Caption, image and brand are checked first.",
      detail: "A test run confirms the image, caption and logo before anything is posted.",
      visual: { kind: "check", items: ["Image ready", "Caption written", "Logo on brand"] },
    },
    {
      title: "The post",
      short: "It goes live on Facebook and Instagram.",
      detail: "Posts go out in the evening slot, on both networks, from the magazine's own pages.",
      visual: { kind: "social", src: `${OCT}/advertising/impact-windows-light-meets-strength.jpg` },
    },
    {
      title: "The record",
      short: "Every post is logged as sent or failed.",
      detail: "Anything that fails is listed for a person to review. Nothing is retried blindly.",
      visual: { kind: "check", items: ["Sent", "Sent", "Needs review"] },
    },
  ],
};

export const contentFlow: SystemFlow = {
  id: "content",
  label: "Content production",
  title: "One idea becomes a post, a Story and a reel.",
  intro: "Each service category gets a full set of pieces in the same premium look, reviewed before it is scheduled.",
  steps: [
    {
      title: "The brief",
      short: "Pick the service and the homeowner's question.",
      detail: "Every piece starts from one service and the question a homeowner is actually asking.",
      visual: { kind: "brief", heading: "Brief", rows: [{ label: "Service", value: "Kitchens & cabinets" }, { label: "Homeowner's question", value: "Is it time to redo my kitchen?", quote: true }, { label: "Offer", value: "Free estimate" }] },
    },
    {
      title: "The image",
      short: "A South Florida luxury photo is created for it.",
      detail: "AI-assisted photography in one consistent style: golden hour, real architecture, no stock look.",
      visual: { kind: "image", src: `${OCT}/social/kitchen-dusk-pool.jpg`, alt: "Kitchen at dusk overlooking a pool" },
    },
    {
      title: "The formats",
      short: "One layout produces a post, a Story and a reel.",
      detail: "The same headline, offer and brand carry across feed, Story and short vertical video.",
      visual: { kind: "formats", post: `${CATEGORIES}/social/kitchens-post.jpg`, story: `${CATEGORIES}/video/bathrooms-reel-poster.jpg` },
    },
    {
      title: "The approval",
      short: "A person reviews every piece.",
      detail: "Nothing is published or paid for until it has been approved.",
      visual: { kind: "check", items: ["Copy approved", "Design approved", "Budget approved"] },
    },
    {
      title: "The calendar",
      short: "Approved pieces are scheduled.",
      detail: "A photo at midday and a reel in the afternoon keep the page active every day.",
      visual: { kind: "calendar", slots: ["12:00 Photo", "17:00 Reel"] },
    },
  ],
};

export const agencyFlows = [leadFlow, publishingFlow, contentFlow] as const;

// How a package engagement runs, for /services.
export const engagementFlow: SystemFlow = {
  id: "engagement",
  label: "Working with us",
  title: "Five steps from first call to launch.",
  intro: "The same path for every package: you see and approve the work before anything goes live.",
  steps: [
    {
      title: "The call",
      short: "We listen to where the business is and what it needs.",
      detail: "One conversation to understand your customers, your offer and what is not working today.",
      visual: { kind: "brief", heading: "First call", rows: [{ label: "Where you are", value: "New, growing or established" }, { label: "What you need", value: "More of the right customers", quote: true }, { label: "Package", value: "Start · Renew · Run · Build" }] },
    },
    {
      title: "The proposal",
      short: "You get a clear scope, price and timeline.",
      detail: "Third-party costs such as ads, domains or subscriptions are listed separately, so there are no surprises.",
      visual: { kind: "check", items: ["Scope", "Price", "Timeline"] },
    },
    {
      title: "The design",
      short: "We create the pieces in one consistent look.",
      detail: "Logo, website, posts, Stories, reels or print, all built from the same visual direction.",
      visual: { kind: "formats", post: `${CATEGORIES}/social/kitchens-post.jpg`, story: `${CATEGORIES}/video/bathrooms-reel-poster.jpg` },
    },
    {
      title: "The review",
      short: "You approve every piece before it goes out.",
      detail: "Changes happen here, not after launch.",
      visual: { kind: "check", items: ["Copy approved", "Design approved", "Budget approved"] },
    },
    {
      title: "The launch",
      short: "We publish, hand over and keep it running if you want.",
      detail: "You keep the files and accounts. Monthly support is optional.",
      visual: { kind: "calendar", slots: ["Launch day", "Monthly check-in"] },
    },
  ],
};
