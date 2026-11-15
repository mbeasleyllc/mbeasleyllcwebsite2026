import React from "react";
import Link from "next/link";
import { ArrowRight, Server, ShieldCheck, RefreshCw, Activity, Eye } from "lucide-react";

/**
 * Hosting as the foundation: explains why portals and donor systems run on
 * managed infrastructure rather than cheap shared hosting, and puts the
 * trust cues (backups, patching, monitoring, human approval) on the page.
 */

const cues = [
  {
    icon: RefreshCw,
    title: "Backups",
    body: "Taken on a schedule and restore-tested, not just configured and assumed.",
  },
  {
    icon: ShieldCheck,
    title: "Patching",
    body: "Security updates applied for you. No version quietly ageing for two years.",
  },
  {
    icon: Activity,
    title: "Monitoring",
    body: "Uptime and errors watched continuously, with someone accountable when something moves.",
  },
  {
    icon: Eye,
    title: "Human approval",
    body: "AI agents propose; people approve anything that matters. Every action is logged.",
  },
];

export default function Hosting() {
  return (
    <section className="section surface-dark">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="type-eyebrow text-champagne">The foundation</p>
            <h2 className="type-h2 mt-3 text-ivory">
              Portals and donor systems need somewhere serious to live.
            </h2>
            <p className="type-lead mt-5 text-mist">
              A client portal or a donor database holds the records your
              organisation runs on. Shared hosting at a few dollars a month is
              not built for that, and when it fails, nobody is on the hook.
            </p>
            <p className="mt-5 text-mist">
              We host on managed infrastructure with real backups, patching and
              monitoring, and a named person accountable when something goes
              wrong. One partner instead of five vendors.
            </p>

            <Link
              href="/services/websites-hosting-vps"
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-base font-medium text-ivory transition-colors hover:border-champagne hover:text-champagne"
            >
              Hosting, websites and VPS
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cues.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-white/10 bg-midnight p-5"
              >
                <c.icon size={20} className="text-champagne" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold text-ivory">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
