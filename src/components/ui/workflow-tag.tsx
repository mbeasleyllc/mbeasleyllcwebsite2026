import React from "react";

/**
 * Workflow status pill: AUTO / AI / PERSON.
 * Shows at a glance what runs itself, what an agent drafts, and where a
 * person approves. Colours come from the design system and all clear
 * WCAG AA on Midnight (9.4:1, 6.6:1, 8.2:1).
 */
export type TagKind = "auto" | "ai" | "person";

const LABEL: Record<TagKind, string> = {
  auto: "AUTO",
  ai: "AI",
  person: "PERSON",
};

const STYLE: Record<TagKind, string> = {
  auto: "border-tag-auto/45 bg-tag-auto/10 text-tag-auto",
  ai: "border-tag-ai/45 bg-tag-ai/10 text-tag-ai",
  person: "border-tag-person/45 bg-tag-person/10 text-tag-person",
};

const TITLE: Record<TagKind, string> = {
  auto: "Runs automatically, no one needed",
  ai: "An AI agent drafts or triages it",
  person: "A person reviews and approves",
};

export default function WorkflowTag({ kind }: { kind: TagKind }) {
  return (
    <span
      title={TITLE[kind]}
      className={`inline-flex items-center rounded border px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] ${STYLE[kind]}`}
    >
      {LABEL[kind]}
    </span>
  );
}

export function WorkflowTagRow({ kinds }: { kinds: TagKind[] }) {
  return (
    <span className="inline-flex flex-wrap gap-1.5">
      {kinds.map((k) => (
        <WorkflowTag key={k} kind={k} />
      ))}
    </span>
  );
}
