import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { insightsNewestFirst } from "@/lib/insights";

/**
 * /insights: the hub.
 *
 * Rebuilt on the v2 design system. The previous version was the old template:
 * "Beasley Consulting" branding, a fake author ("Sarah Johnson, Chief Strategy
 * Officer"), Unsplash stock photos, and a topic section whose six pages invented
 * staff and linked to articles that did not exist. All of that is gone.
 *
 * The honest framing below is deliberate. This is a new section with three
 * articles in it, and it says so rather than padding the grid with placeholder
 * cards to look established.
 */

const SITE_URL = "https://mbeasleyllc.com";
const TITLE = "Insights | Mike Beasley & Associates";
const DESCRIPTION =
  "Practical writing on business automation, AI agents and connecting systems. Written by a firm that builds them, for organisations deciding what to change first.";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function InsightsPage() {
  const articles = insightsNewestFirst;

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/insights`,
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/insights/${a.slug}`,
        name: a.title,
      })),
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
    ],
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/insights`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/insights`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }}
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
                <li>
                  <Link href="/" className="hover:text-champagne">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ivory">Insights</li>
              </ol>
            </nav>

            <div className="mt-10 max-w-3xl">
              <p className="type-eyebrow text-champagne">Insights</p>
              <h1 className="type-display mt-4 text-ivory">
                Notes from inside the work.
              </h1>
              <p className="type-lead mt-6 text-mist">
                Practical writing on automation, AI agents and getting systems to
                talk to each other. Written for the person deciding what to
                change first, not for a procurement committee.
              </p>
            </div>
          </div>
        </section>

        {/* ── Articles ─────────────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:gap-14">
              <div>
                <div className="grid gap-6">
                  {articles.map((a) => (
                    <article
                      key={a.slug}
                      className="group rounded-xl border border-ink/10 bg-white p-6 transition-colors hover:border-champagne md:p-8"
                    >
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                        <span className="type-eyebrow text-gold-deep">
                          {a.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-graphite">
                          <Clock size={12} aria-hidden="true" />
                          {a.readingMinutes} min read
                        </span>
                        <span className="text-graphite">
                          {formatDate(a.published)}
                        </span>
                      </div>

                      <h2 className="type-h3 mt-4 text-ink">
                        <Link href={`/insights/${a.slug}`} className="hover:text-gold-deep">
                          {a.title}
                        </Link>
                      </h2>

                      <p className="mt-3 text-graphite">{a.excerpt}</p>

                      <Link
                        href={`/insights/${a.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep underline-offset-4 hover:underline"
                      >
                        Read it
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

              {/* Sidebar: honest about the state of the section. */}
              <aside className="lg:pt-2">
                <div className="rounded-xl border border-ink/10 bg-white p-6">
                  <h2 className="type-eyebrow text-gold-deep">About this section</h2>
                  <p className="mt-4 text-sm leading-relaxed text-graphite">
                    This is new. There are{" "}
                    <strong className="font-semibold text-ink">
                      {articles.length} articles
                    </strong>{" "}
                    here because there are {articles.length} worth publishing. We would rather it look thin than pad it out with pieces
                    nobody wrote.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-graphite">
                    Everything is written by Mike, from the same work that shows
                    up in the services. No ghostwritten thought leadership, no
                    invented case studies.
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-ink/10 bg-ink p-6">
                  <h2 className="type-eyebrow text-champagne">
                    Something you want covered?
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-mist">
                    If there is a question about automation you cannot find a
                    straight answer to, ask it. Good ones turn into articles.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-md bg-champagne px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-soft"
                  >
                    Ask a question
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="section-tight surface-dark">
          <div className="container">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h2 className="type-h2 text-ivory">
                  Reading is cheap. Finding out is better.
                </h2>
                <p className="type-lead mt-4 text-mist">
                  A free 30-minute review maps your most repetitive processes and
                  picks the top three candidates. No cost, no obligation.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-champagne px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-gold-soft"
              >
                Book the review
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
