import React from "react";
import {
  Globe,
  HeartHandshake,
  Users,
  Bot,
  Plug,
  Server,
  Contact,
  Receipt,
  Database,
  Mail,
  ClipboardList,
} from "lucide-react";
import type { SystemDiagram, IconKey } from "@/lib/systems";

/**
 * Connected-systems diagram: one component, driven by a config from
 * src/lib/systems.ts. Used by the homepage hero and the IT Integration hero
 * so the two cannot drift apart: there is only ever one piece of markup.
 *
 * Built in CSS rather than shipped as an image, per the prototype's
 * performance note ("dashboards are built in CSS, not images"). Desktop lays
 * out as spokes around a central hub; mobile collapses to a stacked list with
 * the core on top.
 */

const ICONS: Record<IconKey, React.ElementType> = {
  globe: Globe,
  heart: HeartHandshake,
  users: Users,
  bot: Bot,
  plug: Plug,
  server: Server,
  crm: Contact,
  ledger: Receipt,
  database: Database,
  mail: Mail,
  forms: ClipboardList,
};

function Node({
  icon,
  label,
  note,
  align = "left",
}: {
  icon: IconKey;
  label: string;
  note: string;
  align?: "left" | "right";
}) {
  const Icon = ICONS[icon];
  return (
    <div
      className={`flex items-start gap-3 rounded-lg border border-white/10 bg-midnight p-3 ${
        align === "right" ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <Icon size={18} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-ivory">{label}</p>
        <p className="text-xs leading-snug text-mist">{note}</p>
      </div>
    </div>
  );
}

export default function SystemsHub({
  core,
  nodes,
  className = "",
}: SystemDiagram & { className?: string }) {
  const split = Math.ceil(nodes.length / 2);
  const left = nodes.slice(0, split);
  const right = nodes.slice(split);

  return (
    <div
      className={`surface-dark rounded-xl border border-white/10 p-4 sm:p-6 ${className}`}
    >
      {/* ── Desktop: spokes around the hub ───────────────────── */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-4">
        <div className="space-y-3">
          {left.map((n) => (
            <Node key={n.label} {...n} align="right" />
          ))}
        </div>

        {/* Hub */}
        <div className="relative px-2">
          {/* connector rails */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-4 border-y border-l border-champagne/25"
          />
          <span
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-4 border-y border-r border-champagne/25"
          />
          <div className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full border border-champagne/40 bg-ink px-3 text-center shadow-[0_0_60px_-15px_rgba(201,169,97,0.5)]">
            <span className="type-eyebrow text-champagne">{core.eyebrow}</span>
            <span className="mt-1 font-display text-lg font-semibold leading-tight text-ivory">
              {core.label}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {right.map((n) => (
            <Node key={n.label} {...n} />
          ))}
        </div>
      </div>

      {/* ── Mobile / tablet: core first, then the stack ──────── */}
      <div className="lg:hidden">
        <div className="mx-auto flex w-fit flex-col items-center rounded-lg border border-champagne/40 bg-ink px-5 py-3 text-center">
          <span className="type-eyebrow text-champagne">{core.eyebrow}</span>
          <span className="mt-0.5 font-display text-base font-semibold text-ivory">
            {core.label}
          </span>
        </div>
        <ul className="mt-4 space-y-2.5">
          {nodes.map((n) => (
            <li key={n.label}>
              <Node {...n} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
