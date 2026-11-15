import React from "react";
import Head from "next/head";
import { ShieldCheck, Lock, ScrollText, LifeBuoy, Inbox, Headphones, CalendarClock, FileCog, Repeat, BarChart3 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero, { ServiceJsonLd } from "@/components/services/ServiceHero";
import ClosingCta from "@/components/home/ClosingCta";
import WorkflowTag, { type TagKind } from "@/components/ui/workflow-tag";
import { getService, SERVICE_SITE_URL } from "@/lib/services";

/**
 * AI Agents & Business Automation (prototype p.29–30).
 * Workflow visual (trigger → agent → approval → action), six use cases,
 * the automation ladder, and the "safe by design" answers to the main objection.
 *
 * AI agents and business automation share one page at launch; split them
 * when each has enough content to rank on its own.
 */

const service = getService("/services/ai-agents-automation");

const pipeline: { text: string; kind: TagKind }[] = [
  { text: "Something happens: a form, an email, a gift, a deadline", kind: "auto" },
  { text: "An agent reads it, decides what it is and drafts the response", kind: "ai" },
  { text: "A person approves anything that matters", kind: "person" },
  { text: "The system acts: sends, files, updates, schedules, reports", kind: "auto" },
];

const useCases = [
  { icon: Inbox, title: "Intake & qualification", body: "Enquiries triaged on arrival, tagged and routed, with a drafted reply waiting for approval." },
  { icon: Headphones, title: "Support triage", body: "Common questions answered from your own material; anything unusual escalated to a person." },
  { icon: CalendarClock, title: "Scheduling", body: "Calls booked, reminders sent and no-shows followed up without anyone watching a calendar." },
  { icon: FileCog, title: "Document processing", body: "Forms, applications and invoices read, checked and entered into the right system." },
  { icon: Repeat, title: "Back-office workflows", body: "Onboarding, renewals and approvals that move themselves to the next step." },
  { icon: BarChart3, title: "Reporting", body: "Monthly summaries assembled from live data, with anomalies flagged before they are published." },
];

const ladder = [
  { step: "Rules", body: "Start with the deterministic wins: if this, then that. No AI, no risk, immediate hours saved." },
  { step: "AI-assisted", body: "Agents draft, summarise and classify, but a person still sends and approves everything." },
  { step: "Agents", body: "Agents act within defined limits, with permissions, logs and a clear list of what they may never do." },
  { step: "Measurement", body: "Every step is measured against the baseline, so you can see what the automation actually returned." },
];

const guardrails = [
  { icon: ShieldCheck, title: "Approval gates", body: "You define which actions an agent may take alone and which always need a person, including sending to key contacts, moving money, deleting data." },
  { icon: Lock, title: "Permissions", body: "Least-privilege access, role-based permissions and a decision on which data agents may see and where it is processed." },
  { icon: ScrollText, title: "Logs", body: "Every agent action is recorded, so you can answer \u201cwhy did that happen?\u201d months later." },
  { icon: LifeBuoy, title: "Fallbacks", body: "When an agent is unsure, the work goes to a person rather than being guessed at." },
];

export default function AiAgentsAutomation() {
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

        {/* ── How every automation is shaped ───────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-gold-deep">The model</p>
              <h2 className="type-h2 mt-3 text-ink">
                Trigger, agent, approval, action.
              </h2>
              <p className="type-lead mt-5 text-graphite">
                Every automation we build follows the same shape. That is what
                keeps it predictable, and what makes the human control point
                visible rather than implied.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-4">
              {pipeline.map((p, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-ink/10 bg-white p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="type-eyebrow text-gold-deep">
                      Step {i + 1}
                    </span>
                    <WorkflowTag kind={p.kind} />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink">
                    {p.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Six use cases ────────────────────────────────────── */}
        <section className="section surface-dark">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-champagne">Where it starts</p>
              <h2 className="type-h2 mt-3 text-ivory">
                Six places automation pays back first.
              </h2>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((u) => (
                <div key={u.title}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-midnight">
                    <u.icon size={20} className="text-champagne" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ivory">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {u.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The ladder ───────────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-gold-deep">The automation ladder</p>
              <h2 className="type-h2 mt-3 text-ink">
                A low-risk path, one rung at a time.
              </h2>
              <p className="type-lead mt-5 text-graphite">
                Nobody should hand their operations to an agent on day one. We
                climb deliberately, and stop wherever the return stops.
              </p>
            </div>

            <ol className="mt-12 grid gap-8 md:grid-cols-4">
              {ladder.map((l, i) => (
                <li key={l.step}>
                  <span className="type-eyebrow text-gold-deep">
                    Rung {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                    {l.step}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">
                    {l.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Safe by design ───────────────────────────────────── */}
        <section className="section surface-dark">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-champagne">Safe by design</p>
              <h2 className="type-h2 mt-3 text-ivory">
                The objection is fair. Here is the answer.
              </h2>
              <p className="type-lead mt-5 text-mist">
                {"\u201c"}What if it does something wrong?{"\u201d"} is the right
                question, and it has a concrete answer.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {guardrails.map((g) => (
                <div
                  key={g.title}
                  className="flex gap-4 rounded-xl border border-white/10 bg-midnight p-5"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink">
                    <g.icon size={18} className="text-champagne" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ivory">
                      {g.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">
                      {g.body}
                    </p>
                  </div>
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
