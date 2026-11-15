import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Inbox, FileText, Receipt, Repeat, Users, BarChart3 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero, { ServiceJsonLd, SOLUTIONS_SECTION } from "@/components/services/ServiceHero";
import ClosingCta from "@/components/home/ClosingCta";
import { getSolution, SOLUTION_SITE_URL } from "@/lib/solutions";

/**
 * /solutions/business — small and midsize business. Growth without admin
 * headcount: AI intake, portals, automation and integration.
 */

const solution = getSolution("/solutions/business");

const pains = [
  {
    icon: Inbox,
    title: "Enquiries wait for someone to be free",
    body: "A lead arrives and sits in a shared inbox until the person who knows the answer gets to it.",
  },
  {
    icon: FileText,
    title: "The same details typed again and again",
    body: "From the form to the CRM to the quote to the invoice — three chances for a typo, no single source.",
  },
  {
    icon: Repeat,
    title: "Follow-up depends on memory",
    body: "Nothing chases a quiet quote or an unanswered question, because nobody owns the reminder.",
  },
  {
    icon: BarChart3,
    title: "Reporting means a spreadsheet night",
    body: "Month-end is an export, a tidy-up and a reconciliation, and the figures still do not agree.",
  },
];

const putInPlace = [
  {
    icon: Inbox,
    title: "AI intake that qualifies and drafts",
    body: "Enquiries triaged on arrival, tagged and routed, with a drafted reply waiting for your approval.",
    href: "/services/ai-agents-automation",
    linkLabel: "AI agents & automation",
  },
  {
    icon: Users,
    title: "A client portal instead of an email chain",
    body: "Documents, quotes, invoices and messages in one place your client can find.",
    href: "/services/client-portals",
    linkLabel: "Client portals",
  },
  {
    icon: Receipt,
    title: "Quotes, invoices and payments connected",
    body: "Raised from the same record, so accounting and the client see the same thing.",
    href: "/services/it-integration",
    linkLabel: "IT integration",
  },
  {
    icon: Repeat,
    title: "Follow-up that happens on its own",
    body: "Reminders, check-ins and renewals scheduled and sent, with exceptions surfaced to a person.",
    href: "/services/ai-agents-automation",
    linkLabel: "Business automation",
  },
];

const guardrails = [
  { label: "Human approval", body: "You decide what an agent may do alone and what always needs a person." },
  { label: "Permissions", body: "Least-privilege access and a decision on what data agents may see." },
  { label: "Logs", body: "Every automated action recorded, so you can explain what happened." },
  { label: "Fallbacks", body: "When the system is unsure, the work goes to a person rather than being guessed." },
];

export default function Business() {
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
                Growth exposes the manual work you tolerated at ten clients.
              </h2>
              <p className="type-lead mt-5 text-graphite">
                The processes that were fine when it was just you become the
                reason you need to hire an administrator.
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
                Scale the system, not the headcount.
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

        {/* ── Guardrails ───────────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-gold-deep">Safe by design</p>
              <h2 className="type-h2 mt-3 text-ink">
                Automating a business you cannot see is not the offer.
              </h2>
              <p className="type-lead mt-5 text-graphite">
                You stay in control of anything that matters. These four
                controls are part of every build, not an upgrade.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {guardrails.map((g) => (
                <div key={g.label} className="rounded-xl border border-ink/10 bg-white p-5">
                  <h3 className="font-display text-base font-semibold text-ink">
                    {g.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">
                    {g.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ClosingCta />
      </Layout>
    </>
  );
}
