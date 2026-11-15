import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/nav";

/**
 * About Mike — the differentiator is a named, hands-on partner rather than
 * an agency. The chips mirror the new service list.
 *
 * NOTE: the bio below is a placeholder built only from facts already true.
 * Replace with Mike's real credentials and background before launch.
 */

const chips = [
  "Business automation",
  "AI agents",
  "Donor management",
  "Managed hosting",
  "IT integration",
  "Reporting",
];

export default function AboutMike() {
  return (
    <section className="section bg-ivory">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="type-eyebrow text-gold-deep">Who you work with</p>
            <h2 className="type-h2 mt-3 text-ink">
              A named partner, not a ticket queue.
            </h2>

            <div className="mt-6 space-y-5 text-graphite">
              <p>
                Mike Beasley &amp; Associates is a small, founder-led firm. The
                person who scopes your work is the person who builds it and
                supports it — which is the point, not a limitation.
              </p>
              <p>
                We work with organisations in Virginia and North Carolina, and
                remotely with clients anywhere in the US. Engagements start with
                a free review, so you can see whether there is a sensible first
                workflow before committing to anything.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {chips.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-ink/15 px-3.5 py-1.5 text-sm text-ink"
                >
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 text-base font-semibold text-ivory transition-colors hover:bg-midnight"
              >
                More about Mike
                <ArrowRight size={17} />
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center rounded-md border border-ink/20 px-6 py-3.5 text-base font-medium text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Portrait placeholder — swap for Mike's headshot. */}
          <div className="lg:col-span-2">
            <div className="flex aspect-[4/5] items-center justify-center rounded-xl border border-ink/10 bg-ink/5">
              <p className="px-6 text-center text-sm text-graphite">
                Mike&rsquo;s headshot goes here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
