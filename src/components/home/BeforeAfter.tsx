import React from "react";
import { X, Check } from "lucide-react";

/**
 * Before and after: makes the problem tangible by naming the specific
 * daily friction (re-typing, waiting, manual reminders, month-end reports)
 * rather than talking about "inefficiency" in the abstract.
 */

const rows = [
  {
    before: "The same details typed into the website, the spreadsheet and the donor system.",
    after: "Entered once. Every system updates itself.",
  },
  {
    before: "A gift arrives and the receipt waits until someone has time.",
    after: "Receipt sent, record updated and follow-up queued. Same day.",
  },
  {
    before: "An enquiry sits in an inbox until someone notices it.",
    after: "Triaged on arrival, drafted and routed for approval.",
  },
  {
    before: "Month-end means chasing numbers from three places by hand.",
    after: "Reports build themselves from live data.",
  },
  {
    before: "Answers to \"where is this?\" live in someone's memory.",
    after: "Status is visible in the portal, to you and the client.",
  },
];

export default function BeforeAfter() {
  return (
    <section className="section bg-ivory">
      <div className="container">
        <div className="max-w-2xl">
          <p className="type-eyebrow text-gold-deep">Before and after</p>
          <h2 className="type-h2 mt-3 text-ink">
            The work you already recognise.
          </h2>
          <p className="type-lead mt-5 text-graphite">
            None of this is unusual. It is what running a lean operation
            actually looks like. Here is the same week, automated.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-ink/10">
          {/* Header row (desktop) */}
          <div className="hidden bg-ink md:grid md:grid-cols-2">
            <p className="type-eyebrow px-6 py-4 text-mist">Today, by hand</p>
            <p className="type-eyebrow border-l border-white/10 px-6 py-4 text-champagne">
              With automation
            </p>
          </div>

          <ul className="divide-y divide-ink/10">
            {rows.map((r, i) => (
              <li key={i} className="grid md:grid-cols-2">
                <div className="flex items-start gap-3 bg-white px-6 py-5">
                  <X
                    size={18}
                    className="mt-0.5 shrink-0 text-graphite/60"
                    aria-hidden="true"
                  />
                  <p className="text-graphite">{r.before}</p>
                </div>
                <div className="flex items-start gap-3 border-t border-ink/10 bg-white px-6 py-5 md:border-l md:border-t-0">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-gold-deep"
                    aria-hidden="true"
                  />
                  <p className="font-medium text-ink">{r.after}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
