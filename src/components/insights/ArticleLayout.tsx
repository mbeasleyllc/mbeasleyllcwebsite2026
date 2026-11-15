import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import type { Insight } from "@/lib/insights";

/**
 * Shared shell for every article under /insights.
 *
 * One component so the three articles cannot drift apart, and so a new article
 * is a content file rather than a copy of another article's markup.
 *
 * Carries the Article schema with Mike as the author and the organisation as the
 * publisher: the previous article pages had no schema at all.
 */

const SITE_URL = "https://mbeasleyllc.com";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function ArticleLayout({
  insight,
  children,
}: {
  insight: Insight;
  children: React.ReactNode;
}) {
  const url = `${SITE_URL}/insights/${insight.slug}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.h1,
    description: insight.description,
    url,
    datePublished: insight.published,
    dateModified: insight.published,
    articleSection: insight.category,
    author: {
      "@type": "Person",
      name: "Mike Beasley",
      url: `${SITE_URL}/about`,
      jobTitle: "Founder",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
      { "@type": "ListItem", position: 3, name: insight.title, item: url },
    ],
  };

  return (
    <>
      <Head>
        <title>{`${insight.title} | Mike Beasley & Associates`}</title>
        <meta name="description" content={insight.description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={insight.title} />
        <meta property="og:description" content={insight.description} />
        <meta property="og:url" content={url} />
        <meta property="article:published_time" content={insight.published} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        />
      </Head>

      <Layout>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-ink pt-32 pb-14 md:pt-40 md:pb-16">
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
                <li>
                  <Link href="/insights" className="hover:text-champagne">
                    Insights
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ivory">{insight.category}</li>
              </ol>
            </nav>

            <div className="mt-10 max-w-3xl">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                <span className="type-eyebrow text-champagne">
                  {insight.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-mist">
                  <Clock size={12} aria-hidden="true" />
                  {insight.readingMinutes} min read
                </span>
                <span className="text-mist">{formatDate(insight.published)}</span>
              </div>

              <h1 className="type-display mt-5 text-ivory">{insight.h1}</h1>
              <p className="type-lead mt-6 text-mist">{insight.excerpt}</p>

              <p className="mt-8 text-sm text-mist">
                By{" "}
                <Link href="/about" className="text-champagne underline-offset-4 hover:underline">
                  Mike Beasley
                </Link>
                , Founder, Mike Beasley &amp; Associates
              </p>
            </div>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              {/* Takeaways: the claims the piece actually makes, up front. */}
              {insight.takeaways.length > 0 && (
                <div className="mb-12 rounded-xl border border-ink/10 bg-white p-6 md:p-8">
                  <h2 className="type-eyebrow text-gold-deep">
                    What this says
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {insight.takeaways.map((t) => (
                      <li key={t} className="flex gap-3 text-graphite">
                        <Check
                          size={18}
                          className="mt-1 shrink-0 text-gold-deep"
                          aria-hidden="true"
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-6 text-graphite [&_a]:text-gold-deep [&_a]:underline [&_a]:underline-offset-4">
                {children}
              </div>

              {/* Author */}
              <div className="mt-14 rounded-xl border border-ink/10 bg-white p-6 md:p-8">
                <h2 className="type-eyebrow text-gold-deep">Written by</h2>
                <p className="mt-4 font-display text-xl font-semibold text-ink">
                  Mike Beasley
                </p>
                <p className="mt-1 text-sm text-champagne">
                  Founder, Mike Beasley &amp; Associates LLC
                </p>
                <p className="mt-4 text-sm leading-relaxed text-graphite">
                  Mike has spent more than fifteen years leading complex business
                  and technology projects, including senior roles in healthcare
                  and education, and now builds automation, donor systems and
                  client portals for nonprofits, associations and small
                  businesses across Virginia, North Carolina and the rest of the
                  US.
                </p>
              </div>

              {/* Nav */}
              <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-graphite hover:text-ink"
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                  All insights
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-champagne px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-gold-soft"
                >
                  Book a free review
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

/** Shared body typography so article prose stays consistent. */
export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="type-h3 mt-12 text-ink">{children}</h2>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-graphite">{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="ml-1 space-y-2.5 text-graphite">{children}</ul>;
}

export function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
      <span>{children}</span>
    </li>
  );
}
