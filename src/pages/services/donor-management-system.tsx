import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Check, Gift, ReceiptText, MailCheck, BarChart3 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero, { ServiceJsonLd } from "@/components/services/ServiceHero";
import ClosingCta from "@/components/home/ClosingCta";
import { getService, SERVICE_SITE_URL } from "@/lib/services";

/**
 * Donor Management System (prototype p.27–28).
 * Gift-to-stewardship automation, the three delivery options from p.7, and
 * the IRS acknowledgment note with a source link and a not-legal-advice caveat.
 */

const service = getService("/services/donor-management-system");

const flow = [
  {
    icon: Gift,
    title: "Gift received",
    body: "Online, by card, by cheque or in person — recorded against the right donor and campaign.",
  },
  {
    icon: ReceiptText,
    title: "Receipt issued",
    body: "Sent automatically with the details a written acknowledgment needs. No waiting for someone to have time.",
  },
  {
    icon: MailCheck,
    title: "Record updated",
    body: "Giving history, campaign totals and the donor's record update themselves.",
  },
  {
    icon: BarChart3,
    title: "Stewardship and reporting",
    body: "Follow-ups scheduled, and board-ready reports built from live data.",
  },
];

const options = [
  {
    name: "Configure & automate a leading platform",
    best: "Best for most small nonprofits",
    body: "We set up an established donor platform, then add the automations, portal and reporting around it. Faster to launch, lower maintenance, integrated with your website and accounting.",
    highlight: true,
  },
  {
    name: "Custom donor system",
    best: "For unusual workflows",
    body: "A system built around a process off-the-shelf tools do not fit — donor records, gifts, campaigns and reports shaped to how you actually work, hosted on your managed VPS.",
    highlight: false,
  },
  {
    name: "Integrate what you already have",
    best: "When the system works but the process does not",
    body: "Keep your current donor system and connect it to your forms, payments, email and dashboards. No migration risk, quick wins, clean data and fewer manual steps.",
    highlight: false,
  },
];

export default function DonorManagementSystem() {
  return (
    <>
      <Head>
        <title>{service.title}</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`${SERVICE_SITE_URL}${service.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content={`${SERVICE_SITE_URL}${service.slug}`} />
        <ServiceJsonLd service={service} siteUrl={SERVICE_SITE_URL} />
      </Head>

      <Layout>
        <ServiceHero service={service} />

        {/* ── Gift to stewardship ──────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-gold-deep">Gift to stewardship</p>
              <h2 className="type-h2 mt-3 text-ink">
                From the gift to the thank-you, without a manual step.
              </h2>
              <p className="type-lead mt-5 text-graphite">
                The gap between a gift arriving and a donor being thanked is
                where small fundraising teams lose people. Automation closes it.
              </p>
            </div>

            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {flow.map((f, i) => (
                <li key={f.title}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-ink">
                    <f.icon size={20} className="text-champagne" aria-hidden="true" />
                  </span>
                  <p className="type-eyebrow mt-4 text-gold-deep">Step {i + 1}</p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">
                    {f.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Delivery options ─────────────────────────────────── */}
        <section className="section surface-dark">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-champagne">How we deliver it</p>
              <h2 className="type-h2 mt-3 text-ivory">
                Three ways in. We recommend the one that serves you.
              </h2>
              <p className="type-lead mt-5 text-mist">
                The donor management market is crowded, and competing on
                features is not the point. The honest question is which route
                fits your workflow.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {options.map((o) => (
                <div
                  key={o.name}
                  className={`flex flex-col rounded-xl border p-6 ${
                    o.highlight
                      ? "border-champagne bg-midnight"
                      : "border-white/10 bg-midnight/60"
                  }`}
                >
                  {o.highlight && (
                    <span className="type-eyebrow mb-3 text-champagne">
                      Recommended
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold text-ivory">
                    {o.name}
                  </h3>
                  <p className="mt-2 text-sm text-champagne">{o.best}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-mist">
                    {o.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Acknowledgment compliance ────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-3xl rounded-xl border border-ink/10 bg-white p-8">
              <p className="type-eyebrow text-gold-deep">Compliance</p>
              <h2 className="type-h2 mt-3 text-ink">
                Acknowledgment letters that meet the requirement.
              </h2>
              <p className="mt-5 text-graphite">
                In the United States, a donor claiming a charitable deduction
                for a gift of <strong>$250 or more</strong> needs a written
                acknowledgment from the organisation. It has to state whether
                any goods or services were provided in return, and describe
                them if so. Our templates cover that, and the system issues them
                automatically at the point of giving.
              </p>
              <p className="mt-5 text-graphite">
                We build the templates; your finance lead reviews them, and
                counsel signs off for your state.
              </p>
              <p className="mt-6 text-sm text-graphite">
                Source:{" "}
                <a
                  href="https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contributions-written-acknowledgments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold-deep underline underline-offset-4"
                >
                  IRS — Charitable contributions: Written acknowledgments
                </a>
                . This is general guidance, not legal advice.
              </p>
            </div>
          </div>
        </section>

        {/* ── Demo ─────────────────────────────────────────────── */}
        <section className="section-tight surface-dark">
          <div className="container">
            <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-white/10 bg-midnight p-8 md:flex-row md:items-center">
              <div>
                <h2 className="type-h3 text-ivory">See it with real data.</h2>
                <p className="mt-2 max-w-xl text-sm text-mist">
                  We can walk you through a donor dashboard and portal with
                  sample data, so you can judge the fit before committing to
                  anything.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-champagne px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-gold-soft"
              >
                Book a demo
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <ClosingCta />
      </Layout>
    </>
  );
}
