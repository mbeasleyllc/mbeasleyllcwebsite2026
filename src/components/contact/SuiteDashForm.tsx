import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Loader2, ShieldCheck } from "lucide-react";
import {
  SUITEDASH_FORM_URL,
  SUITEDASH_ORIGIN,
  SUITEDASH_FALLBACK_URL,
  SUITEDASH_FORM_HEIGHT,
} from "@/lib/suitedash";

/**
 * The SuiteDash "Let's talk" form inside a styled wrapper.
 *
 * Option 2 of the three integration choices: the form is a SuiteDash frame, so
 * submissions land in SuiteDash and can fire an automation, but it sits inside
 * our own card so the surrounding page still reads as mbeasleyllc.com rather
 * than dropping the visitor onto a bare vendor page.
 *
 * We frame the public endpoint directly rather than using SuiteDash's <script>.
 * The script works, but it hardcodes height=600 and leaves nowhere to put a
 * loading state or a fallback link. Framing it ourselves costs us exactly one
 * thing, the script's postMessage relay, which is reimplemented below.
 *
 * The frame cannot be styled from here; it is cross-origin. The wrapper is what
 * we control, so the wrapper carries the design: the frame is inset in a
 * bordered panel with our own heading and a persistent escape hatch underneath.
 *
 * That escape hatch is deliberate. If SuiteDash ever starts sending
 * X-Frame-Options: DENY, the browser renders an empty box and the visitor sees
 * nothing. The "open in a new tab" link means a blocked frame degrades to a
 * working link instead of a dead end.
 */
export default function SuiteDashForm() {
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  /**
   * SuiteDash's embed script listens for postMessages from the frame and opens
   * the target itself, so links clicked inside the form navigate the top window
   * instead of being trapped in a fixed-height box.
   *
   * Ported from their script, both guards included: the message must come from
   * their origin AND from this specific frame, and the URL must be absolute
   * http(s) or root-relative. The second guard is what stops a frame from
   * navigating the visitor off-site to an arbitrary destination.
   */
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== SUITEDASH_ORIGIN) return;
      if (e.source !== frameRef.current?.contentWindow) return;

      const data = e.data;
      if (!Array.isArray(data) || data[0] !== "r") return;
      if (!Array.isArray(data[1]) || !data[1].length) return;

      const target = String(data[1][0]);
      const isAbsolute = /^https?:\/\//i.test(target);
      const isRootRelative = /^\/(?!\/)/.test(target);
      if (!isAbsolute && !isRootRelative) return;

      window.open(target, data[1][1] === "_blank" ? "_blank" : "_self");
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-midnight">
      {/* Header strip: our design, our words. */}
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
              Secure form: straight into our system
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
          ref={frameRef}
          src={SUITEDASH_FORM_URL}
          title="Contact form for Mike Beasley & Associates"
          onLoad={() => setLoaded(true)}
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
