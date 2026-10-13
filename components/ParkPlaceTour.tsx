"use client";
import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, FileText, LayoutDashboard, Upload, ShieldCheck, Users } from "lucide-react";

const steps = [
  { title: "Owner dashboard", detail: "Monthly and year-to-date reporting by assigned unit.", Icon: LayoutDashboard },
  { title: "Monthly statements", detail: "Rent, Service Fee, Refund / Claim, Total Expenses and Due to Owner.", Icon: FileText },
  { title: "Admin imports", detail: "Bulk Excel intake and PDF attachments per unit and month.", Icon: Upload },
  { title: "1099 documents", detail: "Annual tax documents uploaded by admin and visible to the relevant owner.", Icon: FileText },
  { title: "Privacy and roles", detail: "Owner access is restricted by unit. Commission is hidden in the owner summary.", Icon: ShieldCheck },
];
export default function ParkPlaceTour() {
  const [active, setActive] = useState(0);
  const [role, setRole] = useState<"owner" | "admin">("owner");
  const step = steps[active];
  const Icon = step.Icon;
  const metrics = role === "owner"
    ? ["Rent", "Total Expenses", "Due to Owner"]
    : ["Unit records", "Monthly statements", "1099 documents"];
  return (
    <section className="mt-14 overflow-hidden rounded-3xl border border-line bg-white/[0.02]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-6 py-5">
        <div>
          <p className="eyebrow">Interactive product walkthrough</p>
          <p className="mt-2 text-xs text-bone">Illustrative interface · No client data</p>
        </div>
        <div className="flex gap-2">
          {(["owner", "admin"] as const).map((r) => (
            <button key={r} type="button" onClick={() => setRole(r)}
              aria-pressed={role === r}
              className={`rounded-full px-5 py-2 text-sm ${role === r ? "bg-paper text-black" : "border border-line text-bone"}`}>
              {r === "owner" ? "Owner" : "Admin"}
            </button>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-[230px_1fr]">
        <nav aria-label="Park Place walkthrough" className="border-b border-line p-4 lg:border-b-0 lg:border-r">
          {steps.map((item, i) => (
            <button key={item.title} type="button" onClick={() => setActive(i)}
              aria-current={active === i ? "step" : undefined}
              className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm ${active === i ? "bg-white/10 text-paper" : "text-bone hover:bg-white/5"}`}>
              <item.Icon size={18} /><span>{item.title}</span>
            </button>
          ))}
        </nav>
        <div className="min-w-0 p-5 sm:p-9">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold">Step {active + 1} / {steps.length}</p>
              <h3 className="mt-3 text-2xl font-semibold text-paper">{step.title}</h3>
            </div>
            <Icon size={28} className="text-gold" />
          </div>
          <p className="mt-4 text-sm leading-7 text-bone">{step.detail}</p>
          <div className="mt-7 rounded-2xl bg-[#F5F7FA] p-5 text-[#182C42] sm:p-7">
            <div className="flex items-center gap-3 border-b border-[#DDE4EC] pb-5">
              <Users size={22} />
              <div>
                <p className="font-semibold">Park Place</p>
                <p className="text-xs text-[#60738A]">{role === "owner" ? "Owner portal" : "Admin console"} · Concept</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {metrics.map((name) => (
                <div key={name} className="rounded-xl bg-white p-4">
                  <p className="text-xs text-[#60738A]">{name}</p>
                  <p className="mt-3 text-2xl font-semibold">—</p>
                  <p className="mt-2 text-xs text-[#60738A]">Illustrative only</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-white p-5">
              <p className="font-semibold">{role === "owner" ? "Monthly statement" : "Monthly administration"}</p>
              <div className="mt-4 space-y-3">
                {(role === "owner" ? ["Rent", "Service Fee", "Refund / Claim", "Total Expenses", "Due to Owner"] : ["Import Excel", "Attach PDF", "Attach 1099"]).map((item) => (
                  <div key={item} className="flex justify-between border-b border-[#EDF0F4] pb-3 text-sm">
                    <span>{item}</span><span>—</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between gap-3">
            <button type="button" onClick={() => setActive((active + steps.length - 1) % steps.length)}
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-3 text-sm text-paper">
              <ChevronLeft size={16} /> Previous
            </button>
            <span className="text-xs text-bone">{active + 1} / {steps.length}</span>
            <button type="button" onClick={() => setActive((active + 1) % steps.length)}
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-3 text-sm text-paper">
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-line px-6 py-5">
        <a href="https://park-place-owner-portal.myepes01.chatgpt.site" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gold">
          Open external demo <ArrowUpRight size={16} />
        </a>
        <p className="mt-2 text-xs text-bone">External demo and production data connections are not verified.</p>
      </div>
    </section>
  );
}
