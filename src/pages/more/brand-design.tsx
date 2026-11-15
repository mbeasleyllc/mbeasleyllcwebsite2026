import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Palette, Type, Droplet, LayoutTemplate } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ClosingCta from "@/components/home/ClosingCta";

/**
 * /more/brand-design: deliberately kept out of the main navigation. The
 * prototype demotes it to a one-line "Also from us" row:
 *
 *   "Course content removed, design kept small. Brand design stays as a
 *    one-line 'Also from us' row."
 */

const SITE_URL = "https://mbeasleyllc.com";
const TITLE = "Brand & Logo Design | Mike Beasley & Associates";
const DESCRIPTION =
  "Logo, typography and colour work for organisations that need a brand matching the systems underneath it. Available alongside our main services.";

const offerings = [
  {
    icon: Palette,
    title: "Logo & identity",
    body: "A mark that survives being shrunk to a favicon and blown up to a banner, with the variants you actually need.",
  },
  {
    icon: Type,
    title: "Typography & hierarchy",
    body: "Typefaces and a scale that make the right things loud and the rest quiet, on screen and in print.",
  },
  {
    icon: Droplet,
    title: "Colour systems",
    body: "A palette with contrast checked against WCAG AA, so it holds up for accessibility rather than just looking good.",
  },
  {
    icon: LayoutTemplate,
    title: "Applied to the web",
    body: "The identity built into the actual site and portal, not delivered as a PDF and left for someone else to interpret.",
  },
];

export default function BrandDesign() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brand & Logo Design",
    description: DESCRIPTION,
    url: `${SITE_URL}/more/brand-design`,
    provider: {
      "@type": "ProfessionalService",
      name: "Mike Beasley & Associates LLC",
      url: `${SITE_URL}/`,
    },
    areaServed: "US",
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Also from us", item: `${SITE_URL}/more` },
      { "@type": "ListItem", position: 3, name: "Brand & Logo Design", item: `${SITE_URL}/more/brand-design` },
    ],
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/more/brand-design`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/more/brand-design`} />
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
                <li>
                  <Link href="/more" className="hover:text-champagne">
                    Also from us
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ivory">Brand &amp; Logo Design</li>
              </ol>
            </nav>

            <div className="mt-10 max-w-3xl">
              <p className="type-eyebrow text-champagne">Brand &amp; logo design</p>
              <h1 className="type-display mt-4 text-ivory">
                A brand that matches the systems underneath it.
              </h1>
              <p className="type-lead mt-6 text-mist">
                Plenty of organisations end up with a new logo bolted onto old,
                inconsistent software. We do the identity and the platform in
                the same pass, so they agree with each other.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-gold-deep">What it covers</p>
              <h2 className="type-h2 mt-3 text-ink">
                Four pieces, applied rather than delivered.
              </h2>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {offerings.map((o) => (
                <div key={o.title} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink">
                    <o.icon size={20} className="text-champagne" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-graphite">
                      {o.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 max-w-3xl rounded-xl border border-ink/10 bg-white p-6">
              <p className="text-graphite">
                <span className="font-semibold text-ink">Honest note.</span>{" "}
                Brand and logo work is not what we lead with: automation,
                hosting, portals and donor systems are. If a designer is the
                better fit for a project, we will say so.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep underline-offset-4 hover:underline"
              >
                Ask about a brand project
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <ClosingCta />
      </Layout>
    </>
  );
}
