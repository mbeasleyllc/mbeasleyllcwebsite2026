import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Check, Server, ShieldCheck, RefreshCw, Activity } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero, { ServiceJsonLd } from "@/components/services/ServiceHero";
import ClosingCta from "@/components/home/ClosingCta";
import { getService, SERVICE_SITE_URL } from "@/lib/services";

/**
 * Websites, Hosting & VPS (prototype p.23–24).
 * Search intent: managed hosting and VPS. The dashboard visual is built in
 * CSS rather than shipped as an image; replace with a real client dashboard
 * screenshot once one exists.
 */

const service = getService("/services/websites-hosting-vps");

const tiers = [
  {
    name: "Website hosting",
    best: "Most organisations start here",
    features: [
      "Managed, SEO-ready website hosting",
      "SSL, CDN and daily backups",
      "Security patching handled for you",
      "Uptime monitoring with someone accountable",
    ],
    highlight: false,
  },
  {
    name: "Managed VPS",
    best: "Portals, donor systems and automations",
    features: [
      "Dedicated resources, predictable performance",
      "Backups and restore testing on a schedule",
      "Monitoring, alerting and log retention",
      "Room to grow without a migration later",
    ],
    highlight: true,
  },
  {
    name: "Private VPS",
    best: "Specific software or compliance needs",
    features: [
      "Isolated environment for sensitive data",
      "Custom software and integrations",
      "Hardened configuration and access control",
      "Named support and change control",
    ],
    highlight: false,
  },
];

const whyVps = [
  {
    icon: Server,
    title: "Shared hosting has a ceiling",
    body: "Fine for a brochure site. It struggles the moment you run a portal, a donor database or scheduled automations alongside it.",
  },
  {
    icon: Activity,
    title: "Predictable performance",
    body: "A VPS gives your systems their own resources, so a neighbour's traffic spike is not your outage.",
  },
  {
    icon: RefreshCw,
    title: "Room to grow",
    body: "Adding a workflow or an integration does not mean migrating hosts again six months later.",
  },
  {
    icon: ShieldCheck,
    title: "Still managed",
    body: "You are not handed a root password and wished luck. We run it, patch it, back it up and answer when it breaks.",
  },
];

function DashboardVisual() {
  const rows = [
    { label: "Server health", value: "Operational", tone: "ok" },
    { label: "Last backup", value: "Today, 02:00", tone: "ok" },
    { label: "Restore tested", value: "12 days ago", tone: "ok" },
    { label: "Security patches", value: "Up to date", tone: "ok" },
    { label: "Uptime, 30 days", value: "99.98%", tone: "ok" },
    { label: "SSL certificate", value: "Valid, 74 days", tone: "warn" },
  ];

  return (
    <div className="surface-dark rounded-xl border border-white/10 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="type-eyebrow text-champagne">Client dashboard</p>
        <span className="inline-flex items-center gap-1.5 text-xs text-mist">
          <span className="h-2 w-2 rounded-full bg-tag-auto" aria-hidden="true" />
          Live
        </span>
      </div>

      <ul className="mt-5 divide-y divide-white/10">
        {rows.map((r) => (
          <li key={r.label} className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-mist">{r.label}</span>
            <span
              className={`text-sm font-semibold ${
                r.tone === "ok" ? "text-tag-auto" : "text-champagne"
              }`}
            >
              {r.value}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-xs leading-relaxed text-mist">
        Illustrative dashboard. Replace with a real client screenshot before
        launch.
      </p>
    </div>
  );
}

export default function WebsitesHostingVps() {
  return (
    <>
      <Head>
        <title>{service.title}</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`${SERVICE_SITE_URL}${service.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content={`${SERVICE_SITE_URL}${service.slug}`} />
        <ServiceJsonLd service={service} siteUrl={SERVICE_SITE_URL} />
      </Head>

      <Layout>
        <ServiceHero service={service} visual={<DashboardVisual />} />

        {/* ── Tiers ────────────────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-gold-deep">Choose your foundation</p>
              <h2 className="type-h2 mt-3 text-ink">
                Three levels, matched to what you run.
              </h2>
              <p className="type-lead mt-5 text-graphite">
                Start where you are. Moving up later is a planned change, not an
                emergency.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={`flex flex-col rounded-xl border p-6 ${
                    t.highlight
                      ? "border-champagne bg-ink text-ivory"
                      : "border-ink/10 bg-white"
                  }`}
                >
                  <h3
                    className={`type-h3 ${t.highlight ? "text-ivory" : "text-ink"}`}
                  >
                    {t.name}
                  </h3>
                  <p
                    className={`mt-2 text-sm ${
                      t.highlight ? "text-champagne" : "text-gold-deep"
                    }`}
                  >
                    {t.best}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          className="mt-1 shrink-0 text-champagne"
                          aria-hidden="true"
                        />
                        <span
                          className={`text-sm leading-relaxed ${
                            t.highlight ? "text-mist" : "text-graphite"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className={`mt-6 border-t pt-5 text-sm ${
                      t.highlight
                        ? "border-white/10 text-mist"
                        : "border-ink/10 text-graphite"
                    }`}
                  >
                    <span className="font-semibold">Custom quote.</span> Scoped
                    in your free review.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why a VPS ────────────────────────────────────────── */}
        <section className="section surface-dark">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-champagne">Why a VPS</p>
              <h2 className="type-h2 mt-3 text-ivory">
                When shared hosting stops being enough.
              </h2>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {whyVps.map((w) => (
                <div key={w.title} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-midnight">
                    <w.icon size={20} className="text-champagne" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ivory">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {w.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services/it-integration"
              className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-champagne underline-offset-4 hover:underline"
            >
              See how hosting connects to everything else →
            </Link>
          </div>
        </section>

        <ClosingCta />
      </Layout>
    </>
  );
}
