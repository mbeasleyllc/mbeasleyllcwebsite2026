import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQ — answers the real objections (what digital transformation means,
 * whether automation means job cuts, whether you need a VPS, and whether
 * it works with the tools they already own).
 *
 * Deliberately no FAQPage markup: Google limits FAQ rich results to a small
 * set of sites, so the value here is clear answers and long-tail coverage.
 */

const faqs = [
  {
    q: "What does “digital transformation” actually mean here?",
    a: "It means replacing manual, disconnected processes with connected, automated ones. In practice: your website, donor or client records, portal and reporting stop being separate things you re-enter data into, and start behaving like one system.",
  },
  {
    q: "Does automation mean cutting staff?",
    a: "No — and we are careful about this. Automation takes over the routine so the people you have can carry more, with less chasing and fewer errors. Lean means capacity and efficiency, not job losses.",
  },
  {
    q: "Do we need a VPS?",
    a: "Usually not at the start. Most organisations are fine on managed website hosting. A VPS becomes worthwhile when you are running portals, donor systems or automations that need dedicated resources, predictable performance or specific software. We will tell you honestly which side of that line you are on.",
  },
  {
    q: "Will it work with the tools we already use?",
    a: "Often yes. We can configure and automate a platform you already own, or connect what you have to new forms, payments, email and dashboards. If your current system works but the processes around it do not, integration is usually the faster and cheaper route.",
  },
  {
    q: "What happens in the free review?",
    a: "Thirty minutes to map your most repetitive processes, identify the top three automation candidates, and give you a rough sense of effort and impact. You leave with something useful whether or not you hire us.",
  },
  {
    q: "How is this priced?",
    a: "Every implementation is scoped individually, because no two are the same size. The review is free; after it you get a written proposal with a fixed scope and a clear price for the pilot.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-ivory">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div>
            <p className="type-eyebrow text-gold-deep">Questions</p>
            <h2 className="type-h2 mt-3 text-ink">
              The things people ask first.
            </h2>
            <p className="mt-5 text-graphite">
              If yours is not here, ask it on the review call — that is what it
              is for.
            </p>
          </div>

          <div className="lg:col-span-2">
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    >
                      <span className="font-display text-lg font-semibold text-ink">
                        {f.q}
                      </span>
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className={`mt-1 shrink-0 text-gold-deep transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="pb-6 pr-10 leading-relaxed text-graphite">
                        {f.a}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
