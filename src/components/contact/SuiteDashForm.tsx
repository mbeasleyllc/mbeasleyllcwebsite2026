import React, { useState } from "react";
import { ArrowUpRight, Loader2, ShieldCheck } from "lucide-react";
import {
  SUITEDASH_FORM_URL,
  SUITEDASH_FALLBACK_URL,
  SUITEDASH_FORM_HEIGHT,
} from "@/lib/suitedash";

/**
 * The SuiteDash "Let's talk" form inside a styled wrapper.
 *
 * Option 2 of the three integration choices: the form is a SuiteDash iframe, so
 * submissions land in SuiteDash and can fire an automation, but it sits inside
 * our own card so the surrounding page still reads as mbeasleyllc.com rather
 * than dropping the visitor onto a bare vendor page.
 *
 * The iframe cannot be styled from here — cross-origin. The wrapper is what we
 * control, so the wrapper carries the design: the frame is inset in a bordered
 * panel with our own heading and a persistent escape hatch underneath.
 *
 * That escape hatch is deliberate. If SuiteDash sends X-Frame-Options: DENY or
 * a restrictive frame-ancestors, the browser renders an empty box and the
 * visitor sees nothing. The "open in a new tab" link means a blocked frame
 * degrades to a working link instead of a dead end.
 *
 * Renders nothing when no public embed URL is configured — the caller decides
 * what to show instead, so an unconfigured build never ships a broken frame.
 */
export default function SuiteDashForm() {
  const [loaded, setLoaded] = useState(false);

  if (!SUITEDASH_FORM_URL) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-midnight">
      {/* Header strip — our design, our words. */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-ink px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-midnight">
            <ShieldCheck size={17} className="text-champagne" aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-base font-semibold text-ivory">
              Let&rsquo;s talk
            </p>
            <p className="text-xs text-mist">
              Secure form — goes straight into our system
            </p>
          </div>
        </div>

        <a
          href={SUITEDASH_FALLBACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-champagne underline-offset-4 hover:underline"
        >
          Open in a new tab
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>

      {/* The frame. Relative container so the loader can sit over it. */}
      <div className="relative bg-white" style={{ minHeight: SUITEDASH_FORM_HEIGHT }}>
        {!loaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white">
            <Loader2
              size={22}
              className="animate-spin text-gold-deep"
              aria-hidden="true"
            />
            <p className="text-sm text-graphite">Loading the form…</p>
          </div>
        )}

        <iframe
          src={SUITEDASH_FORM_URL}
          title="Contact form — Mike Beasley & Associates"
          onLoad={() => setLoaded(true)}
          loading="lazy"
          className="block h-full w-full border-0"
          style={{ height: SUITEDASH_FORM_HEIGHT }}
        />
      </div>

      {/* If the frame is blocked this is the only thing that works. */}
      <div className="border-t border-white/10 bg-ink px-5 py-3">
        <p className="text-xs leading-relaxed text-mist">
          Trouble seeing the form?{" "}
          <a
            href={SUITEDASH_FALLBACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-champagne underline-offset-4 hover:underline"
          >
            Open it in a new tab
          </a>{" "}
          or email{" "}
          <a
            href="mailto:mike@mbeasleyllc.com"
            className="text-champagne underline-offset-4 hover:underline"
          >
            mike@mbeasleyllc.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
