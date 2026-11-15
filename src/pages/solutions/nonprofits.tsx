import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Gift, MailCheck, BarChart3, Users, ShieldCheck, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero, { ServiceJsonLd, SOLUTIONS_SECTION } from "@/components/services/ServiceHero";
import ClosingCta from "@/components/home/ClosingCta";
import { getSolution, SOLUTION_SITE_URL } from "@/lib/solutions";

/**
 * /solutions/nonprofits — the first audience entry point, and the one the
 * prototype leads with ("Nonprofits first — matches the strongest
 * differentiator, donor management and acknowledgments").
 */

const solution = getSolution("/solutions/nonprofits");

const pains = [
  {
    icon: Clock,
    title: "Acknowledgments go out late",
    body: "A gift arrives, and the thank-you waits until someone has time. That gap is where donors quietly stop giving.",
  },
  {
    icon: Users,
    title: "Donor history lives in three places",
    body: "A spreadsheet, an inbox and someone's memory. Nobody can answer \u201cwhen did they last give?\u201d without digging.",
  },
  {
    icon: BarChart3,
    title: "Board reports are rebuilt by hand",
    body: "Every month someone exports, tidies and reformats the same numbers — and they never quite match last month's.",
  },
  {
    icon: ShieldCheck,
    title: "Receipt compliance is a worry",
    body: "Gifts of $250 or more need a written acknowledgment with specific contents, and getting it wrong is a real risk.",
  },
];

const putInPlace = [
  {
    icon: Gift,
    title: "Online giving that records itself",
    body: "Card and one-off gifts land against the right donor and campaign, with no re-typing.",
    href: "/services/donor-management-system",
    linkLabel: "Donor management system",
  },
  {
    icon: MailCheck,
    title: "Acknowledgments that send themselves",
    body: "Issued at the point of giving, with the contents a written acknowledgment needs.",
    href: "/services/donor-management-system",
    linkLabel: "Gift-to-stewardship automation",
  },
  {
    icon: BarChart3,
    title: "Reports built from live data",
    body: "Board-ready figures assembled from the system, so the numbers agree.",
    href: "/services/it-integration",
    linkLabel: "BI and dashboards",
  },
  {
    icon: Users,
    title: "A donor portal that answers questions",
    body: "Giving history and receipts visible to the donor, so fewer emails reach you.",
    href: "/services/client-portals",
    linkLabel: "Client portals",
  },
];

const steps = [
  { step: "Assess", body: "We map how gifts actually flow today, and where the gaps are." },
  { step: "Architect", body: "You choose: configure a platform, build custom, or integrate what you have." },
  { step: "Automate", body: "Giving, receipts, records and follow-ups connected one workflow at a time." },
  { step: "Operate", body: "Hosting, monitoring and improvement keep it running after launch." },
];

export default function Nonprofits() {
  return (
    <>
      <Head>
        <title>{solution.title}</title>
        <meta name="description" content={solution.description} />
        <link rel="canonical" href={`${SOLUTION_SITE_URL}${solution.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={solution.title} />
        <meta property="og:description" content={solution.description} />
        <meta property="og:url" content={`${SOLUTION_SITE_URL}${solution.slug}`} />
        <ServiceJsonLd
          service={solution}
          section={SOLUTIONS_SECTION}
          siteUrl={SOLUTION_SITE_URL}
        />
      </Head>

      <Layout>
        <ServiceHero service={solution} section={SOLUTIONS_SECTION} />

        {/* ── The day-to-day ───────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-gold-deep">What goes wrong</p>
              <h2 className="type-h2 mt-3 text-ink">
                It is rarely the fundraising. It is the admin around it.
              </h2>
              <p className="type-lead mt-5 text-graphite">
                Small development teams lose donors to process, not to
                competition. These are the four we see most.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {pains.map((p) => (
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
          </div>
        </section>

        {/* ── What we put in place ─────────────────────────────── */}
        <section className="section surface-dark">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-champagne">What we put in place</p>
              <h2 className="type-h2 mt-3 text-ivory">
                One system, from the gift to the thank-you.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {putInPlace.map((p) => (
                <div
                  key={p.title}
                  className="flex flex-col rounded-xl border border-white/10 bg-midnight p-6"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-ink">
                    <p.icon size={20} className="text-champagne" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ivory">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">
                    {p.body}
                  </p>
                  <Link
                    href={p.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-champagne"
                  >
                    {p.linkLabel}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it runs ──────────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-gold-deep">How it runs</p>
              <h2 className="type-h2 mt-3 text-ink">
                One workflow at a time.
              </h2>
              <p className="type-lead mt-5 text-graphite">
                Nobody should replace their donor system in a single leap. We
                stage it so fundraising continues throughout.
              </p>
            </div>

            <ol className="mt-12 grid gap-8 md:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.step}>
                  <span className="type-eyebrow text-gold-deep">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                    {s.step}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-12 max-w-3xl text-sm text-graphite">
              You keep your current donor system if it works. Configuring a
              platform, building custom, and integrating what you already have
              are all options —{" "}
              <Link
                href="/services/donor-management-system"
                className="font-medium text-gold-deep underline underline-offset-4"
              >
                see the three routes
              </Link>
              .
            </p>
          </div>
        </section>

        <ClosingCta />
      </Layout>
    </>
  );
}
