import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Webhook,
  ArrowLeftRight,
  Fingerprint,
  BarChart3,
  LifeBuoy,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SystemsHub from "@/components/home/SystemsHub";
import ClosingCta from "@/components/home/ClosingCta";
import { integrationSystems } from "@/lib/systems";

/**
 * IT Integration — above-the-fold diagram is the SAME component as the
 * homepage hero, driven by integrationSystems (prototype p.31): "CRM,
 * accounting, database, email and calendar, donor or client system, and
 * forms around one connected core".
 */

const SITE_URL = "https://mbeasleyllc.com";
const PATH = "/services/it-integration";
const TITLE = "IT Integration Services for Small Business | Mike Beasley & Associates";
const DESCRIPTION =
  "Connect your CRM, accounting, payments, email and data into one system with monitored integrations. Book an integration review.";

const glue = [
  {
    icon: Search,
    title: "Integration audit",
    body: "Find out what actually talks to what today, where data is re-typed, and where it disagrees with itself.",
  },
  {
    icon: Webhook,
    title: "API & webhook work",
    body: "Real-time connections between the tools you already own, so events flow instead of being polled by hand.",
  },
  {
    icon: ArrowLeftRight,
    title: "Data migration",
    body: "Moving records between systems without losing history — mapped, dry-run and reconciled before the switch.",
  },
  {
    icon: Fingerprint,
    title: "Identity & access",
    body: "One login, correct permissions, and an audit trail of who changed what.",
  },
  {
    icon: BarChart3,
    title: "BI & dashboards",
    body: "Reporting built on live data, so the numbers agree and nobody rebuilds them in a spreadsheet.",
  },
  {
    icon: LifeBuoy,
    title: "Monitoring & support",
    body: "Integrations are watched, and someone is accountable when a connection breaks.",
  },
];

const staged = [
  {
    step: "Audit",
    body: "Map every system, who uses it, and where the manual hand-offs are.",
  },
  {
    step: "Map",
    body: "Define the canonical record for each piece of data, and who owns it.",
  },
  {
    step: "Connect",
    body: "Build the integrations in order of value, testing each against real records.",
  },
  {
    step: "Monitor",
    body: "Watch the connections, alert on failures, and keep the data clean.",
  },
];

export default function ItIntegration() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IT Integration",
    serviceType: "Systems integration for small business and nonprofits",
    provider: {
      "@type": "ProfessionalService",
      name: "Mike Beasley & Associates LLC",
      url: `${SITE_URL}/`,
    },
    areaServed: "US",
    url: `${SITE_URL}${PATH}`,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "IT Integration", item: `${SITE_URL}${PATH}` },
    ],
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}${PATH}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}${PATH}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        />
      </Head>

      <Layout>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-[-10%] h-[32rem] w-[32rem] rounded-full bg-champagne/10 blur-3xl"
          />

          <div className="container relative">
            <nav aria-label="Breadcrumb" className="text-sm text-mist">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-champagne">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="hover:text-champagne">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-ivory">IT Integration</li>
              </ol>
            </nav>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="type-eyebrow text-champagne">IT Integration</p>
                <h1 className="type-display mt-4 text-ivory">
                  Connect your tools into one efficient system.
                </h1>
                <p className="type-lead mt-6 max-w-prose text-mist">
                  Your CRM, accounting, database, email and calendar, donor or
                  client records and your forms — connected to one core, so
                  information is entered once and trusted everywhere.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-champagne px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-gold-soft"
                  >
                    Book an integration review
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-base font-medium text-ivory transition-colors hover:border-champagne hover:text-champagne"
                  >
                    All services
                  </Link>
                </div>
              </div>

              {/* Same component as the homepage hero — different config. */}
              <SystemsHub
                core={integrationSystems.core}
                nodes={integrationSystems.nodes}
              />
            </div>
          </div>
        </section>

        {/* ── The glue between everything ──────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-gold-deep">What it covers</p>
              <h2 className="type-h2 mt-3 text-ink">
                The glue between everything you already own.
              </h2>
              <p className="type-lead mt-5 text-graphite">
                Most organisations do not need another tool. They need the ones
                they have to agree with each other.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {glue.map((g) => (
                <div key={g.title}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-ink">
                    <g.icon size={20} className="text-champagne" aria-hidden="true" />
                  </span>
                  <h3 className="type-h3 mt-5 text-ink">{g.title}</h3>
                  <p className="mt-3 text-graphite">{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Staged approach ──────────────────────────────────── */}
        <section className="section surface-dark">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-champagne">How it runs</p>
              <h2 className="type-h2 mt-3 text-ivory">
                Audit, map, connect and monitor.
              </h2>
              <p className="type-lead mt-5 text-mist">
                Integration work fails when it is done all at once. We stage it
                so daily operations keep running throughout.
              </p>
            </div>

            <ol className="mt-14 grid gap-8 md:grid-cols-4">
              {staged.map((s, i) => (
                <li key={s.step}>
                  <span className="type-eyebrow text-champagne">Step {i + 1}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ivory">
                    {s.step}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ClosingCta />
      </Layout>
    </>
  );
}
