import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { CONTACT_EMAIL } from "@/lib/nav";

/**
 * /accessibility — the prototype lists this under Legal alongside privacy and
 * terms: "Legal /privacy-policy/ · /terms/ · /accessibility/".
 *
 * Written to state what is actually true of the site today rather than
 * claiming formal conformance we have not audited. Update the date when the
 * page changes.
 */

const SITE_URL = "https://mbeasleyllc.com";
const TITLE = "Accessibility Statement | Mike Beasley & Associates";
const DESCRIPTION =
  "How this website approaches accessibility: what we have built in, what we know is outstanding, and how to report a problem.";
const LAST_REVIEWED = "November 2026";

export default function Accessibility() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Accessibility", item: `${SITE_URL}/accessibility` },
    ],
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/accessibility`} />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        />
      </Head>

      <Layout>
        <section className="relative overflow-hidden bg-ink pt-32 pb-14 md:pt-40 md:pb-16">
          <div className="container relative">
            <nav aria-label="Breadcrumb" className="text-sm text-mist">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-champagne">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ivory">Accessibility</li>
              </ol>
            </nav>

            <div className="mt-10 max-w-3xl">
              <p className="type-eyebrow text-champagne">Accessibility</p>
              <h1 className="type-display mt-4 text-ivory">
                Accessibility statement.
              </h1>
              <p className="type-lead mt-6 text-mist">
                Last reviewed {LAST_REVIEWED}.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-3xl space-y-10">
              <div>
                <h2 className="type-h3 text-ink">Our approach</h2>
                <p className="mt-3 text-graphite">
                  We aim to meet the Web Content Accessibility Guidelines
                  (WCAG) 2.2 at Level AA. We have not commissioned an
                  independent audit, so we describe what we have built rather
                  than claiming certified conformance.
                </p>
              </div>

              <div>
                <h2 className="type-h3 text-ink">What we have built in</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-graphite">
                  <li>
                    Colour pairings checked against WCAG AA contrast ratios.
                    The palette was chosen with this constraint, not adjusted
                    afterwards.
                  </li>
                  <li>
                    A single H1 per page, with headings in a logical order
                    beneath it.
                  </li>
                  <li>
                    Text alternatives on images, and decorative elements hidden
                    from assistive technology.
                  </li>
                  <li>
                    Visible focus states and full keyboard operation of
                    navigation, menus and forms.
                  </li>
                  <li>
                    Form fields with associated labels, and errors announced to
                    assistive technology rather than shown by colour alone.
                  </li>
                  <li>
                    Body text sized in relative units so it responds to browser
                    zoom and user font settings.
                  </li>
                  <li>
                    Motion limited to subtle transitions, with nothing that
                    depends on animation to be understood.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="type-h3 text-ink">What we know is outstanding</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-graphite">
                  <li>
                    The site has not been tested with a screen reader on every
                    page, or with every browser and assistive-technology
                    combination.
                  </li>
                  <li>
                    Embedded third-party content — the video conferencing page
                    in particular — is controlled by its provider and may not
                    meet the same standard.
                  </li>
                  <li>
                    Older documents and PDFs inherited from the previous site
                    have not been remediated.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="type-h3 text-ink">Reporting a problem</h2>
                <p className="mt-3 text-graphite">
                  If something on this site is difficult or impossible to use,
                  tell us and we will fix it. Describe the page and what
                  happened, and if it helps, the browser or assistive
                  technology you were using.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Accessibility%20issue`}
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 text-base font-semibold text-ivory transition-colors hover:bg-midnight"
                >
                  <Mail size={17} />
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
