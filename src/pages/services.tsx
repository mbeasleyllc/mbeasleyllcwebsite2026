import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ClosingCta from "@/components/home/ClosingCta";
import { services, SERVICE_SITE_URL, type ServiceMeta } from "@/lib/services";
import { serviceGroups, moreServices } from "@/lib/nav";

/**
 * Services index. Rendered directly from serviceGroups (src/lib/nav.ts) and
 * enriched from src/lib/services.ts, so the hub, the mega-menu and the footer
 * can never disagree about what is on offer.
 *
 * Courses / LMS are deliberately absent — dropped from the offer in v2.
 */

const TITLE = "Services | Mike Beasley & Associates";
const DESCRIPTION =
  "Websites and hosting, client portals, donor management, AI agents and IT integration — built and managed for nonprofits and small business.";

const bySlug = new Map<string, ServiceMeta>(services.map((s) => [s.slug, s]));

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services",
    url: `${SERVICE_SITE_URL}/services`,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        url: `${SERVICE_SITE_URL}${s.slug}`,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SERVICE_SITE_URL}/services`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SERVICE_SITE_URL}/services`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
                <li>
                  <Link href="/" className="hover:text-champagne">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ivory">Services</li>
              </ol>
            </nav>

            <div className="mt-10 max-w-3xl">
              <p className="type-eyebrow text-champagne">Services</p>
              <h1 className="type-display mt-4 text-ivory">
                One partner for the systems your business runs on.
              </h1>
              <p className="type-lead mt-6 text-mist">
                Websites and hosting, the portals and donor systems behind them,
                and the automation that removes the routine. Built for
                nonprofits, associations and small business — and managed, so
                you are not left holding it.
              </p>
            </div>
          </div>
        </section>

        {/* ── Services, grouped by journey ─────────────────────── */}
        <section className="section bg-ivory">
          <div className="container space-y-16">
            {serviceGroups.map((grp) => {
              const items = grp.items
                .map((i) => bySlug.get(i.href))
                .filter((s): s is ServiceMeta => Boolean(s));

              if (items.length === 0) return null;

              return (
                <div key={grp.label}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="type-h2 text-ink">{grp.label}</h2>
                    <span className="text-sm text-gold-deep">{grp.blurb}</span>
                  </div>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {items.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.slug}
                        className="group flex flex-col rounded-xl border border-ink/10 bg-white p-6 transition-colors hover:border-champagne"
                      >
                        <h3 className="type-h3 text-ink">{s.name}</h3>
                        <p className="mt-3 flex-1 text-graphite">{s.lead}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep">
                          Learn more
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Kept findable, out of the main journey. */}
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="type-h2 text-ink">Also from us</h2>
                <span className="text-sm text-gold-deep">
                  Outside the core offer
                </span>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {moreServices.map((m) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    className="group flex flex-col rounded-xl border border-ink/10 bg-white p-6 transition-colors hover:border-champagne"
                  >
                    <h3 className="type-h3 text-ink">{m.name}</h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep">
                      Learn more
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ClosingCta />
      </Layout>
    </>
  );
}
