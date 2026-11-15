import React from "react";
import { WorkflowTagRow, type TagKind } from "@/components/ui/workflow-tag";

/**
 * Signature automations: four concrete workflows showing how the work
 * moves without hand-offs. The AUTO / AI / PERSON tags make the human
 * control point visible, which is the main objection to automation.
 *
 * Illustrative only: replace with real client workflows once pilots exist.
 */

type Step = { text: string; kind: TagKind };

const automations: { title: string; trigger: string; steps: Step[] }[] = [
  {
    title: "Enquiry to booked call",
    trigger: "Someone submits the website form",
    steps: [
      { text: "Qualify and tag the enquiry", kind: "ai" },
      { text: "Draft a reply with the right booking link", kind: "ai" },
      { text: "Mike reviews and sends", kind: "person" },
      { text: "Reminders until the call happens", kind: "auto" },
    ],
  },
  {
    title: "Gift to acknowledgment",
    trigger: "A donation is received",
    steps: [
      { text: "Receipt issued with the required wording", kind: "auto" },
      { text: "Donor record and campaign updated", kind: "auto" },
      { text: "Stewardship follow-up scheduled", kind: "auto" },
      { text: "Anything unusual flagged for review", kind: "person" },
    ],
  },
  {
    title: "Client onboarding",
    trigger: "A proposal is accepted",
    steps: [
      { text: "Portal account created and populated", kind: "auto" },
      { text: "Welcome pack and document requests sent", kind: "auto" },
      { text: "Kickoff scheduled and briefed", kind: "ai" },
      { text: "Owner confirms the plan", kind: "person" },
    ],
  },
  {
    title: "Month-end reporting",
    trigger: "The reporting period closes",
    steps: [
      { text: "Pull figures from every connected system", kind: "auto" },
      { text: "Draft the summary and flag anomalies", kind: "ai" },
      { text: "Assemble the board-ready report", kind: "auto" },
      { text: "Reviewed before it goes out", kind: "person" },
    ],
  },
];

export default function Automations() {
  return (
    <section className="section surface-dark">
      <div className="container">
        <div className="max-w-2xl">
          <p className="type-eyebrow text-champagne">Signature automations</p>
          <h2 className="type-h2 mt-3 text-ivory">
            What automation actually looks like.
          </h2>
          <p className="type-lead mt-5 text-mist">
            Four typical workflows. The tags show where a machine acts, where an
            agent drafts, and where a person still approves.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {automations.map((a) => (
            <div
              key={a.title}
              className="rounded-xl border border-white/10 bg-midnight p-6"
            >
              <h3 className="type-h3 text-ivory">{a.title}</h3>
              <p className="mt-2 text-sm text-mist">
                <span className="text-champagne">Trigger:</span> {a.trigger}
              </p>

              <ol className="mt-5 space-y-4">
                {a.steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-[11px] font-semibold text-mist">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-ivory">{s.text}</p>
                      <div className="mt-1.5">
                        <WorkflowTagRow kinds={[s.kind]} />
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-mist">
          Illustrative workflows. Real client examples will replace these once
          the first pilots report their results.
        </p>
      </div>
    </section>
  );
}
