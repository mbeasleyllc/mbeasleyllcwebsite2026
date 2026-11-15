import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONTACT_EMAIL, REVIEW_HREF } from "@/lib/nav";

/**
 * Closing CTA — repeats the single main action (free automation review)
 * with email as the fallback for people who would rather not book.
 */
export default function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-champagne/10 blur-3xl"
      />

      <div className="container relative text-center">
        <p className="type-eyebrow text-champagne">Next step</p>
        <h2 className="type-h2 mx-auto mt-4 max-w-3xl text-ivory">
          Find the first thing worth automating.
        </h2>
        <p className="type-lead mx-auto mt-6 max-w-2xl text-mist">
          Thirty minutes, no cost, and you leave with your top three automation
          candidates whether or not we work together.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={REVIEW_HREF}
            className="inline-flex items-center gap-2 rounded-md bg-champagne px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-gold-soft"
          >
            Book a free review
            <ArrowRight size={18} />
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center rounded-md border border-white/20 px-7 py-4 text-base font-medium text-ivory transition-colors hover:border-champagne hover:text-champagne"
          >
            Email {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
