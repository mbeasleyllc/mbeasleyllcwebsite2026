import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin, Mail, MapPin, Search, Hammer, LifeBuoy } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ClosingCta from "@/components/home/ClosingCta";
import { CONTACT_EMAIL } from "@/lib/nav";

/**
 * /about — the prototype's frame: "Mike as the differentiator. A named,
 * hands-on partner; the chips reflect the new service list."
 *
 * The bio uses only facts carried over from the previous site (founded the
 * firm, 15+ years in complex business projects, prior senior roles in
 * Healthcare and Education). The old page's "95% Client Satisfaction" figure
 * is deliberately dropped — the prototype says to avoid numeric claims and
 * "use only facts that are true today".
 *
 * Confirm the 15+ years figure and which headshot is current before launch.
 */

const SITE_URL = "https://mbeasleyllc.com";
const TITLE = "About Mike Beasley | Business Automation & AI";
const DESCRIPTION =
  "Mike Beasley is a Virginia-based automation and IT integration partner with 15+ years in complex business projects. Meet the person behind the work.";

const LINKEDIN = "https://www.linkedin.com/in/mike-beasley-04a8389/";

/** Chips mirror the current service list, per the prototype. */
const chips = [
  "Business automation",
  "AI agents",
  "Donor management",
  "Client portals",
  "Managed hosting & VPS",
  "IT integration",
  "Reporting & dashboards",
];

const approach = [
  {
    icon: Search,
    title: "We start with a free review",
    body: "Thirty minutes to map your most repetitive processes and pick a starting point. No cost, and no obligation to continue.",
  },
  {
    icon: Hammer,
    title: "We build one thing properly",
    body: "A single workflow or system, built, tested and measured against a baseline — rather than a large programme that stalls.",
  },
  {
    icon: LifeBuoy,
    title: "We stay to run it",
    body: "Hosting, monitoring, support and improvement, so what we build keeps working after launch.",
  },
];

export default function AboutPage() {
  const aboutPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
    mainEntity: { "@id": `${SITE_URL}/#mike` },
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#mike`,
    name: "Mike Beasley",
    jobTitle: "Founder",
    worksFor: {
      "@type": "ProfessionalService",
      name: "Mike Beasley & Associates LLC",
      url: `${SITE_URL}/`,
    },
    email: CONTACT_EMAIL,
    sameAs: [LINKEDIN],
    knowsAbout: [
      "Business automation",
      "AI agents",
      "Donor management",
      "Managed hosting",
      "IT integration",
    ],
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    ],
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/about`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
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
                <li className="text-ivory">About</li>
              </ol>
            </nav>

            <div className="mt-10 max-w-3xl">
              <p className="type-eyebrow text-champagne">About</p>
              <h1 className="type-display mt-4 text-ivory">
                A named partner, not a ticket queue.
              </h1>
              <p className="type-lead mt-6 text-mist">
                Mike Beasley &amp; Associates is a small, founder-led firm. The
                person who scopes your work is the person who builds it and
                supports it — which is the point, not a limitation.
              </p>
            </div>
          </div>
        </section>

        {/* ── Mike ─────────────────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Portrait — real asset carried over from the previous site. */}
              <div className="lg:col-span-2">
                <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-xl border border-ink/10 bg-ink/5">
                  <Image
                    src="/headshot-1731700227635-11-maof4udv.png"
                    alt="Mike Beasley, founder of Mike Beasley & Associates LLC"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mt-3 text-xs text-graphite">
                  Confirm this is the current headshot before launch.
                </p>
              </div>

              <div className="lg:col-span-3">
                <p className="type-eyebrow text-gold-deep">Who you work with</p>
                <h2 className="type-h2 mt-3 text-ink">Mike Beasley</h2>
                <p className="mt-2 font-display text-lg text-gold-deep">
                  Founder
                </p>

                <div className="mt-6 space-y-5 text-graphite">
                  <p>
                    Mike has spent more than fifteen years delivering complex
                    business solution projects and programmes, before founding
                    Mike Beasley &amp; Associates LLC. His background includes
                    senior leadership roles in the healthcare and education
                    sectors — both environments where systems have to work, and
                    where a failed process is felt by real people.
                  </p>
                  <p>
                    That is the perspective behind this firm. The work is
                    practical: find the process that is costing the most time,
                    connect the systems around it, automate what can be
                    automated, and leave a person in control of anything that
                    matters.
                  </p>
                  <p>
                    We work with organisations in Virginia and North Carolina,
                    and remotely with clients anywhere in the US.
                  </p>
                </div>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-ink/15 px-3.5 py-1.5 text-sm text-ink"
                    >
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 text-base font-semibold text-ivory transition-colors hover:bg-midnight"
                  >
                    <Linkedin size={17} />
                    Connect on LinkedIn
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-md border border-ink/20 px-6 py-3.5 text-base font-medium text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
                  >
                    <Mail size={17} />
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <p className="mt-6 inline-flex items-start gap-2 text-sm text-graphite">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" />
                  Based in Fairfax, Virginia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── How we work ──────────────────────────────────────── */}
        <section className="section surface-dark">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-champagne">How we work</p>
              <h2 className="type-h2 mt-3 text-ivory">
                A low-risk way in, then we stay.
              </h2>
              <p className="type-lead mt-5 text-mist">
                Nobody should hand over their operations on a promise. The
                sequence is deliberate, and you can stop at any stage.
              </p>
            </div>

            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {approach.map((a, i) => (
                <li key={a.title}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-midnight">
                    <a.icon size={20} className="text-champagne" aria-hidden="true" />
                  </span>
                  <p className="type-eyebrow mt-4 text-champagne">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-ivory">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {a.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Honesty ──────────────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-3xl rounded-xl border border-ink/10 bg-white p-8">
              <p className="type-eyebrow text-gold-deep">Straight answers</p>
              <h2 className="type-h2 mt-3 text-ink">
                What we will not do.
              </h2>
              <ul className="mt-6 space-y-4 text-graphite">
                <li>
                  <span className="font-semibold text-ink">
                    Promise numbers in advance.
                  </span>{" "}
                  Baselines come from the free review, and targets are set per
                  project. We do not quote savings we have not measured.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Sell you software you do not need.
                  </span>{" "}
                  If the tools you own already do the job, the work is
                  connecting them.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Automate something you cannot see.
                  </span>{" "}
                  Approval gates, permissions and logs are part of every build,
                  not an upgrade.
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-champagne px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-gold-soft"
                >
                  Book a free review
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold-deep underline-offset-4 hover:underline"
                >
                  See the services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ClosingCta />
      </Layout>
    </>
  );
}
