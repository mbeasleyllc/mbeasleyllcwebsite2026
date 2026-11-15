import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Audiences first (nonprofits lead, matching the strongest differentiator),
 * then the four-step process: Assess, Architect, Automate, Operate.
 */

const audiences = [
  {
    name: "Nonprofits & Foundations",
    href: "/solutions/nonprofits",
    body: "Donor management, giving, acknowledgments, board dashboards and member portals.",
  },
  {
    name: "Associations & Membership",
    href: "/solutions/associations",
    body: "Member portals, communities, renewals and managed hosting.",
  },
  {
    name: "Small & Midsize Business",
    href: "/solutions/business",
    body: "Client portals, AI intake, workflow automation and integrated IT.",
  },
];

const process = [
  {
    step: "Assess",
    body: "Map what actually happens now, and baseline the manual hours and response times.",
  },
  {
    step: "Architect",
    body: "Choose the smallest change that removes the most routine. One workflow at a time.",
  },
  {
    step: "Automate",
    body: "Build it with approval gates and logs, then measure against the baseline.",
  },
  {
    step: "Operate",
    body: "Host it, monitor it, patch it and keep improving it as the business changes.",
  },
];

export default function Audiences() {
  return (
    <section className="section bg-ivory">
      <div className="container">
        <div className="max-w-2xl">
          <p className="type-eyebrow text-gold-deep">Who we work with</p>
          <h2 className="type-h2 mt-3 text-ink">
            Nonprofits first. Then associations and small business.
          </h2>
          <p className="type-lead mt-5 text-graphite">
            The same connected stack serves all three. What changes is which
            piece matters most to you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((a) => (
            <Link
              key={a.name}
              href={a.href}
              className="group flex flex-col rounded-xl border border-ink/10 bg-white p-6 transition-colors hover:border-gold-deep"
            >
              <h3 className="type-h3 text-ink">{a.name}</h3>
              <p className="mt-3 flex-1 text-graphite">{a.body}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep">
                Explore
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>

        {/* ── Process ──────────────────────────────────────────── */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-semibold text-ink">
            Assess, Architect, Automate, Operate
          </h3>
          <p className="mt-3 max-w-2xl text-graphite">
            One workflow at a time. Results arrive early, risk stays low, and
            Operate keeps it running once it is live.
          </p>

          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.step}>
                <span className="type-eyebrow text-gold-deep">
                  Step {i + 1}
                </span>
                <h4 className="mt-2 font-display text-xl font-semibold text-ink">
                  {p.step}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
