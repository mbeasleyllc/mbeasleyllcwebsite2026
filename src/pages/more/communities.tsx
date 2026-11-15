import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Users, MessageSquare, FolderOpen, CalendarClock, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ClosingCta from "@/components/home/ClosingCta";

/**
 * /more/communities: the prototype moves community and membership content
 * here specifically to preserve earlier SEO value:
 *
 *   "Community and membership content moves to /more/communities/ so earlier
 *    SEO value is preserved."
 *
 * So this page keeps the community/membership vocabulary (community platform,
 * member engagement, forums, groups) rather than folding it silently into
 * /services/client-portals.
 */

const SITE_URL = "https://mbeasleyllc.com";
const TITLE = "Community & Membership Platforms | Mike Beasley";
const DESCRIPTION =
  "Online community and membership platforms: member directories, groups, resources and events, built on the same infrastructure as our client portals.";

const parts = [
  {
    icon: Users,
    title: "Member directory & profiles",
    body: "Searchable membership with the fields your members actually want to be found by, and permissions to match.",
  },
  {
    icon: MessageSquare,
    title: "Groups & discussion",
    body: "Topic groups and threaded discussion, so conversation lives somewhere you can find it again.",
  },
  {
    icon: FolderOpen,
    title: "Resources & documents",
    body: "Member-only files, templates and recordings, versioned and permissioned by tier.",
  },
  {
    icon: CalendarClock,
    title: "Events & registration",
    body: "Registrations, reminders and post-event follow-up connected to the member record.",
  },
  {
    icon: ShieldCheck,
    title: "Access & tiers",
    body: "Tiered access, renewals and lapsed-member handling, driven by the same automation as everything else.",
  },
];

export default function Communities() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Community & Membership Platforms",
    description: DESCRIPTION,
    url: `${SITE_URL}/more/communities`,
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
      { "@type": "ListItem", position: 3, name: "Communities", item: `${SITE_URL}/more/communities` },
    ],
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/more/communities`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/more/communities`} />
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
                <li className="text-ivory">Communities</li>
              </ol>
            </nav>

            <div className="mt-10 max-w-3xl">
              <p className="type-eyebrow text-champagne">Communities</p>
              <h1 className="type-display mt-4 text-ivory">
                Community platforms that stay useful after launch.
              </h1>
              <p className="type-lead mt-6 text-mist">
                Most community software is easy to switch on and hard to keep
                alive. The difference is the plumbing behind it: membership
                records, permissions, renewals and follow-up, all automated.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-gold-deep">What it covers</p>
              <h2 className="type-h2 mt-3 text-ink">
                Built on the same infrastructure as the portals.
              </h2>
              <p className="type-lead mt-5 text-graphite">
                A community platform and a client portal are the same problem
                wearing different clothes: the right people seeing the right
                things, without someone administering it by hand.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {parts.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink">
                    <p.icon size={20} className="text-champagne" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-graphite">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 max-w-3xl rounded-xl border border-ink/10 bg-white p-6">
              <p className="text-graphite">
                Associations and membership bodies:{" "}
                <Link
                  href="/solutions/associations"
                  className="font-medium text-gold-deep underline underline-offset-4"
                >
                  see the membership solutions page
                </Link>{" "}
                for renewals, member portals and board reporting.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep underline-offset-4 hover:underline"
              >
                Ask about a community platform
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
