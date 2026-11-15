import React from "react";
import { TrendingUp, Users2, Gauge } from "lucide-react";

/**
 * Mission — digital transformation defined, then the three outcomes
 * in the owner's own words (efficiency, lean operations, performance).
 */

const outcomes = [
  {
    icon: Gauge,
    title: "Efficient",
    body: "The routine stops eating the week. Receipts, reminders, follow-ups and data entry happen without anyone chasing them.",
  },
  {
    icon: Users2,
    title: "Lean",
    body: "Your existing team carries more, because automation takes the repetitive work instead of another hire.",
  },
  {
    icon: TrendingUp,
    title: "High-performing",
    body: "Faster responses, cleaner records and reporting you can trust — measured against the baseline we set together.",
  },
];

export default function Mission() {
  return (
    <section className="section bg-ivory">
      <div className="container">
        <div className="max-w-3xl">
          <p className="type-eyebrow text-gold-deep">Our mission</p>
          <h2 className="type-h2 mt-3 text-ink">
            Automate businesses to run efficiently, with lean staffing and
            higher performance.
          </h2>
          <p className="type-lead mt-6 text-graphite">
            Digital transformation means replacing manual, disconnected
            processes with connected, automated ones. Not a new tool to learn —
            the same work, done without the re-typing, the waiting and the
            chasing. Automation takes over the routine so your people can focus
            on relationships, judgment and growth.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {outcomes.map((o) => (
            <div key={o.title}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-ink">
                <o.icon size={20} className="text-champagne" aria-hidden="true" />
              </span>
              <h3 className="type-h3 mt-5 text-ink">{o.title}</h3>
              <p className="mt-3 text-graphite">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
