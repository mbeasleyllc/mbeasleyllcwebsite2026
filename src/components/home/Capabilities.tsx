import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { capabilities, moreServices } from "@/lib/nav";

/**
 * Eight capabilities in one grid, laid out in the prototype's four layers:
 * Foundation, Applications, Intelligence, Connection.
 * The two growth offers (donor system, AI agents) get the dark treatment.
 */

const layers = [
  {
    layer: "Layer 1",
    name: "Foundation",
    items: [
      { name: "Websites", href: "/services/websites-hosting-vps", featured: false },
      { name: "Managed Hosting", href: "/services/websites-hosting-vps", featured: false },
      { name: "Managed VPS", href: "/services/websites-hosting-vps", featured: false },
    ],
  },
  {
    layer: "Layer 2",
    name: "Applications",
    items: [
      { name: "Client Portals", href: "/services/client-portals", featured: false },
      { name: "Donor Management", href: "/services/donor-management-system", featured: true },
    ],
  },
  {
    layer: "Layer 3",
    name: "Intelligence",
    items: [
      { name: "AI Agents", href: "/services/ai-agents-automation", featured: true },
      { name: "Business Automation", href: "/services/ai-agents-automation", featured: false },
    ],
  },
  {
    layer: "Layer 4",
    name: "Connection",
    items: [
      { name: "IT Integration", href: "/services/it-integration", featured: false },
      { name: "Reporting & Dashboards", href: "/services/it-integration", featured: false },
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="section surface-dark">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="type-eyebrow text-champagne">What we do</p>
            <h2 className="type-h2 mt-3 text-ivory">
              Eight capabilities, one connected stack.
            </h2>
            <p className="type-lead mt-5 text-mist">
              Most firms sell you one piece. We build the whole path — the
              website, the systems behind it, the agents that remove the routine,
              and the plumbing that holds it together.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-champagne underline-offset-4 hover:underline"
          >
            All services
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((l) => (
            <div key={l.name} className="flex flex-col">
              <p className="type-eyebrow text-mist">{l.layer}</p>
              <h3 className="mt-1.5 font-display text-xl font-semibold text-ivory">
                {l.name}
              </h3>

              <ul className="mt-5 space-y-3">
                {l.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`group flex items-center justify-between gap-3 rounded-lg border p-4 transition-colors ${
                        item.featured
                          ? "border-champagne/40 bg-midnight hover:border-champagne"
                          : "border-white/10 bg-midnight/60 hover:border-white/25"
                      }`}
                    >
                      <span className="text-sm font-semibold text-ivory">
                        {item.name}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-mist transition-colors group-hover:text-champagne"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Supporting service — deliberately small, per the prototype. */}
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6">
          <span className="type-eyebrow text-mist">Also from us</span>
          {moreServices.map((m) => (
            <Link
              key={m.name}
              href={m.href}
              className="text-sm text-mist underline-offset-4 hover:text-champagne hover:underline"
            >
              {m.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
