import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ClosingCta from "@/components/home/ClosingCta";
import { solutions, SOLUTION_SITE_URL } from "@/lib/solutions";

/**
 * /solutions: the audience hub. The prototype frames these as entry points:
 *
 *   "Audience pages (/solutions/) give nonprofits, associations and businesses
 *    their own entry points."
 *
 * Rendered from src/lib/solutions.ts so it cannot disagree with the nav.
 */

const TITLE = "Solutions by Audience | Mike Beasley & Associates";
const DESCRIPTION =
  "Automation and systems for nonprofits, associations and small business, including donor management, member portals and workflow automation. Book a free review.";

export default function SolutionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Solutions by audience",
    url: `${SOLUTION_SITE_URL}/solutions`,
    itemListElement: solutions.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SOLUTION_SITE_URL}${s.slug}`,
    })),
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SOLUTION_SITE_URL}/solutions`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SOLUTION_SITE_URL}/solutions`} />
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
                <li className="text-ivory">Solutions</li>
              </ol>
            </nav>

            <div className="mt-10 max-w-3xl">
              <p className="type-eyebrow text-champagne">Solutions</p>
              <h1 className="type-display mt-4 text-ivory">
                Find your own way in.
              </h1>
              <p className="type-lead mt-6 text-mist">
                The same systems serve very different organisations. These pages
                start from your day-to-day rather than from the software: what is eating the time, and what changes first.
              </p>
            </div>
          </div>
        </section>

        {/* ── Audience cards ───────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-3">
              {solutions.map((s) => (
                <Link
                  key={s.slug}
                  href={s.slug}
                  className="group flex flex-col rounded-xl border border-ink/10 bg-white p-6 transition-colors hover:border-champagne"
                >
                  <p className="type-eyebrow text-gold-deep">{s.eyebrow}</p>
                  <h2 className="type-h3 mt-3 text-ink">{s.name}</h2>
                  <p className="mt-3 flex-1 text-graphite">{s.lead}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep">
                    Read more
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-12 max-w-3xl text-graphite">
              Not sure which fits?{" "}
              <Link
                href="/services"
                className="font-medium text-gold-deep underline underline-offset-4"
              >
                Browse the services
              </Link>{" "}
              or{" "}
              <Link
                href="/contact"
                className="font-medium text-gold-deep underline underline-offset-4"
              >
                book a free review
              </Link>{" "}
              and we will work it out together.
            </p>
          </div>
        </section>

        <ClosingCta />
      </Layout>
    </>
  );
}
