import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";

/**
 * Contact form: posts to /api/contact (nodemailer over SMTP_* env vars).
 *
 * The prototype asks the form to be process-focused: "Asks what the visitor
 * wants to automate, which pre-qualifies the lead." So the dropdown is about
 * the process, not the product.
 *
 * Rebuilt on the v2 design tokens (ink/midnight surfaces, champagne accents,
 * Fraunces headings) rather than the pre-redesign Tailwind classes.
 */

type Status = "idle" | "sending" | "sent" | "error";

/** Options map to the prototype's six use cases. */
const AUTOMATION_OPTIONS = [
  { value: "intake", label: "Intake & enquiry handling" },
  { value: "support", label: "Support & customer questions" },
  { value: "scheduling", label: "Scheduling & reminders" },
  { value: "documents", label: "Document processing" },
  { value: "back-office", label: "Back-office workflows" },
  { value: "reporting", label: "Reporting & dashboards" },
  { value: "donor", label: "Donor management & giving" },
  { value: "portal", label: "Client or member portal" },
  { value: "hosting", label: "Hosting, website or VPS" },
  { value: "integration", label: "Connecting the tools I already have" },
  { value: "not-sure", label: "Not sure yet: help me find it" },
];

const inputClass =
  "w-full rounded-md border border-white/15 bg-ink px-4 py-3 text-base text-ivory placeholder:text-mist/60 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne";

const labelClass = "block text-sm font-medium text-ivory";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fallbackEmail, setFallbackEmail] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");
    setFallbackEmail("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as {
        error?: string;
        fallbackEmail?: string;
      };

      if (!res.ok) {
        setError(body.error || "Something went wrong. Please try again.");
        setFallbackEmail(body.fallbackEmail || "");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setError(
        "We couldn't reach the server. Please check your connection and try again.",
      );
      setStatus("error");
    }
  }

  const sending = status === "sending";

  if (status === "sent") {
    return (
      <div
        className="rounded-xl border border-champagne/40 bg-midnight p-8"
        role="status"
        aria-live="polite"
      >
        <h3 className="font-display text-2xl font-semibold text-ivory">
          Thank you. Your message is on its way.
        </h3>
        <p className="mt-3 text-mist">
          You will get a reply, usually within one business day. If you would
          rather not wait, you can book a review time above.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-ivory transition-colors hover:border-champagne hover:text-champagne"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === "error" && (
        <div
          className="flex items-start gap-3 rounded-md border border-champagne/40 bg-midnight px-4 py-3 text-sm text-ivory"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
          <span>
            {error}{" "}
            {fallbackEmail && (
              <a
                href={`mailto:${fallbackEmail}`}
                className="font-medium text-champagne underline underline-offset-4"
              >
                {fallbackEmail}
              </a>
            )}
          </span>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First name <span className="text-champagne">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            className={`mt-2 ${inputClass}`}
            placeholder="First name"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last name <span className="text-champagne">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            className={`mt-2 ${inputClass}`}
            placeholder="Last name"
            required
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-champagne">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`mt-2 ${inputClass}`}
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-mist">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`mt-2 ${inputClass}`}
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Organisation <span className="text-mist">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          className={`mt-2 ${inputClass}`}
          placeholder="Your organisation"
        />
      </div>

      {/* The qualifying question, per the prototype. */}
      <div>
        <label htmlFor="service" className={labelClass}>
          What do you want to automate?
        </label>
        <select
          id="service"
          name="service"
          defaultValue="not-sure"
          className={`mt-2 ${inputClass}`}
        >
          {AUTOMATION_OPTIONS.map((o) => (
            <option key={o.value} value={o.value} className="bg-ink text-ivory">
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell me about the process <span className="text-champagne">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className={`mt-2 min-h-[150px] ${inputClass}`}
          placeholder="What happens today, roughly how often, and how long it takes. Anything specific you would like to fix."
          required
        />
      </div>

      {/* Honeypot: hidden from users, catnip for bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 rounded border-white/30 bg-ink accent-[#C9A961]"
          required
        />
        <label htmlFor="privacy" className="text-sm text-mist">
          I agree to the{" "}
          <Link
            href="/privacy"
            className="text-champagne underline underline-offset-4"
          >
            Privacy Policy
          </Link>{" "}
          and consent to being contacted about this enquiry.
        </label>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2 rounded-md bg-champagne px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-gold-soft disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send message"}
        {!sending && <ArrowRight size={18} />}
      </button>
    </form>
  );
}
