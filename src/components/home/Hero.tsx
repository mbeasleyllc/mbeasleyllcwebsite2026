import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SystemsHub from "./SystemsHub";
import { homeSystems } from "@/lib/systems";
import { REVIEW_HREF } from "@/lib/nav";

const proof = [
  { label: "Efficient", note: "No double entry, no chasing, no waiting" },
  { label: "Lean", note: "A small team with the capacity of a larger one" },
  { label: "High-performing", note: "Faster, more accurate, always available" },
  { label: "In control", note: "People approve; systems are secure and monitored" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Warm wash behind the hero: pure CSS, no image payload. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-champagne/10 blur-3xl"
      />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Copy ─────────────────────────────────────────── */}
          <div>
            <p className="type-eyebrow text-champagne">
              Digital transformation partner
            </p>

            <h1 className="type-display mt-4 text-ivory">
              Automate how your business runs.
              <span className="block text-champagne">
                Do more with a leaner team.
              </span>
            </h1>

            <p className="type-lead mt-6 max-w-prose text-mist">
              We connect your website, donor system, client portal and AI agents
              into one operation, so your team can do the work only people can
              do.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={REVIEW_HREF}
                className="inline-flex items-center gap-2 rounded-md bg-champagne px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-gold-soft"
              >
                Book a free review
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-base font-medium text-ivory transition-colors hover:border-champagne hover:text-champagne"
              >
                See what we automate
              </Link>
            </div>

            <p className="mt-4 text-sm text-mist">
              A 30-minute review to map your most repetitive processes. A
              15-minute intro is also available if you just want to talk.
            </p>
          </div>

          {/* ── Visual ───────────────────────────────────────── */}
          <SystemsHub core={homeSystems.core} nodes={homeSystems.nodes} />
        </div>

        {/* ── Proof strip ────────────────────────────────────── */}
        <ul className="mt-16 grid gap-x-8 gap-y-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((p) => (
            <li key={p.label}>
              <p className="flex items-center gap-2 font-display text-base font-semibold text-ivory">
                <Check size={16} className="text-champagne" aria-hidden="true" />
                {p.label}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-mist">{p.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
