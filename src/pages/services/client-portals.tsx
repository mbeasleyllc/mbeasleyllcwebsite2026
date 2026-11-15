import React from "react";
import Head from "next/head";
import { Check, X, FileText, PenLine, Receipt, MessageSquare, Workflow } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero, { ServiceJsonLd } from "@/components/services/ServiceHero";
import ClosingCta from "@/components/home/ClosingCta";
import { getService, SERVICE_SITE_URL } from "@/lib/services";

/**
 * Client Portals (prototype p.25–26).
 * Pain-first headline ("without the email chain"), a with/without onboarding
 * comparison, and the connection to the rest of the stack.
 */

const service = getService("/services/client-portals");

const comparison = [
  {
    without: "Documents scattered across email threads and someone's desktop.",
    with: "One portal per client, with everything in it and nothing lost.",
  },
  {
    without: "Chasing signatures by email and printing to PDF.",
    with: "E-signatures requested, tracked and filed automatically.",
  },
  {
    without: "\u201cCan you resend that invoice?\u201d — three times.",
    with: "Invoices, statements and history visible whenever they look.",
  },
  {
    without: "Onboarding means a dozen back-and-forth messages.",
    with: "A guided checklist that collects what you need once.",
  },
  {
    without: "Status updates live in whoever answered last.",
    with: "Progress visible to you and the client, without a phone call.",
  },
];

const features = [
  { icon: FileText, title: "Documents", body: "Contracts, deliverables and records, versioned and permissioned." },
  { icon: PenLine, title: "E-signatures", body: "Requested, tracked and stored against the right record." },
  { icon: Receipt, title: "Invoices & payments", body: "Visible, downloadable, and connected to your accounting." },
  { icon: MessageSquare, title: "Messages", body: "Threaded conversation that stays with the client, not an inbox." },
  { icon: Workflow, title: "Forms & requests", body: "Intake that feeds straight into your workflows." },
];

const audiences = [
  { name: "Professional services", body: "Onboarding, deliverables and billing in one place per client." },
  { name: "Associations", body: "Member documents, renewals and resources behind a login." },
  { name: "Nonprofits", body: "Grant and programme documentation, and donor-facing self-service." },
];

export default function ClientPortals() {
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

        {/* ── With / without ───────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-gold-deep">Onboarding</p>
              <h2 className="type-h2 mt-3 text-ink">
                What changes on day one.
              </h2>
            </div>

            <div className="mt-12 overflow-hidden rounded-xl border border-ink/10">
              <div className="hidden bg-ink md:grid md:grid-cols-2">
                <p className="type-eyebrow px-6 py-4 text-mist">Without a portal</p>
                <p className="type-eyebrow border-l border-white/10 px-6 py-4 text-champagne">
                  With a portal
                </p>
              </div>

              <ul className="divide-y divide-ink/10">
                {comparison.map((c, i) => (
                  <li key={i} className="grid md:grid-cols-2">
                    <div className="flex items-start gap-3 bg-white px-6 py-5">
                      <X size={18} className="mt-0.5 shrink-0 text-graphite/60" aria-hidden="true" />
                      <p className="text-graphite">{c.without}</p>
                    </div>
                    <div className="flex items-start gap-3 border-t border-ink/10 bg-white px-6 py-5 md:border-l md:border-t-0">
                      <Check size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" />
                      <p className="font-medium text-ink">{c.with}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── What is in it ────────────────────────────────────── */}
        <section className="section surface-dark">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-champagne">Inside the portal</p>
              <h2 className="type-h2 mt-3 text-ivory">
                One place your clients can actually find.
              </h2>
              <p className="type-lead mt-5 text-mist">
                Portal activity starts workflows and syncs to your CRM and
                accounting, so nothing needs re-entering on your side either.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="rounded-xl border border-white/10 bg-midnight p-5">
                  <f.icon size={20} className="text-champagne" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-ivory">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Audiences ────────────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-gold-deep">Who it suits</p>
              <h2 className="type-h2 mt-3 text-ink">Three common shapes.</h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {audiences.map((a) => (
                <div key={a.name} className="rounded-xl border border-ink/10 bg-white p-6">
                  <h3 className="type-h3 text-ink">{a.name}</h3>
                  <p className="mt-3 text-graphite">{a.body}</p>
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
