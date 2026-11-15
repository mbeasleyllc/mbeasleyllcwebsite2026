import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, RefreshCw, FolderOpen, KeyRound, CalendarClock, MessageSquare, BarChart3 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero, { ServiceJsonLd, SOLUTIONS_SECTION } from "@/components/services/ServiceHero";
import ClosingCta from "@/components/home/ClosingCta";
import { getSolution, SOLUTION_SITE_URL } from "@/lib/solutions";

/**
 * /solutions/associations — membership bodies. Renewals, member documents and
 * one login for every member.
 */

const solution = getSolution("/solutions/associations");

const pains = [
  {
    icon: RefreshCw,
    title: "Renewals chased by hand",
    body: "Every cycle means a list, a stack of reminder emails and a spreadsheet to track who has paid.",
  },
  {
    icon: FolderOpen,
    title: "Member documents scattered",
    body: "Bylaws, certificates and resources live in shared drives and email attachments nobody can find twice.",
  },
  {
    icon: KeyRound,
    title: "Members have no single login",
    body: "Different systems, different passwords, and a phone call to you every time someone forgets.",
  },
  {
    icon: MessageSquare,
    title: "Admin absorbs the board's time",
    body: "Volunteer officers spend their term on administration rather than on the mission.",
  },
];

const putInPlace = [
  {
    icon: KeyRound,
    title: "A member portal with one login",
    body: "Profile, dues, documents and history in one place each member can reach without calling you.",
    href: "/services/client-portals",
    linkLabel: "Client portals",
  },
  {
    icon: RefreshCw,
    title: "Renewals that run themselves",
    body: "Reminders, dues and status updates handled by the system, with exceptions flagged to a person.",
    href: "/services/ai-agents-automation",
    linkLabel: "Business automation",
  },
  {
    icon: FolderOpen,
    title: "Documents with permissions",
    body: "Board papers, resources and certificates versioned, permissioned and findable.",
    href: "/services/client-portals",
    linkLabel: "Documents and e-signatures",
  },
  {
    icon: CalendarClock,
    title: "Events and follow-up connected",
    body: "Registrations, reminders and post-event follow-up without a manual list.",
    href: "/services/it-integration",
    linkLabel: "IT integration",
  },
];

export default function Associations() {
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
                Membership admin is nobody's job, so it lands on everyone.
              </h2>
              <p className="type-lead mt-5 text-graphite">
                Associations usually run lean, often with volunteer officers.
                The work does not disappear — it just moves to whoever is
                willing.
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
                Membership that renews itself.
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

        {/* ── Reporting ────────────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="type-eyebrow text-gold-deep">For the board</p>
                <h2 className="type-h2 mt-3 text-ink">
                  Numbers your board can trust.
                </h2>
                <p className="type-lead mt-5 text-graphite">
                  Membership counts, retention, renewal status and event
                  attendance assembled from live data — not rebuilt in a
                  spreadsheet the night before the meeting.
                </p>
                <Link
                  href="/services/it-integration"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep underline-offset-4 hover:underline"
                >
                  See how reporting is connected
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="rounded-xl border border-ink/10 bg-white p-6">
                <p className="type-eyebrow text-gold-deep">Reported monthly</p>
                <ul className="mt-5 divide-y divide-ink/10">
                  {[
                    { label: "Active members", value: "Reported" },
                    { label: "Renewals due this month", value: "Reported" },
                    { label: "Renewal rate, rolling 12 months", value: "Reported" },
                    { label: "Event attendance", value: "Reported" },
                    { label: "Admin hours saved", value: "Baseline vs. actual" },
                  ].map((r) => (
                    <li key={r.label} className="flex items-center justify-between gap-4 py-3">
                      <span className="text-sm text-graphite">{r.label}</span>
                      <span className="text-sm font-semibold text-ink">{r.value}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-graphite">
                  Targets are set per client after the free review. No results
                  are promised in advance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClosingCta />
      </Layout>
    </>
  );
}
