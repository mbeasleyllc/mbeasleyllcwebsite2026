import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, MessageSquare, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import SuiteDashForm from "@/components/contact/SuiteDashForm";
import { hasSuiteDashForm } from "@/lib/suitedash";
import {
  CONTACT_EMAIL,
  INTRO_BOOKING_URL,
  REVIEW_BOOKING_URL,
} from "@/lib/nav";

/**
 * /contact: per the prototype (p.33) and the SEO blueprint (p.40):
 *   title "Book a Free Automation Review | Mike Beasley & Associates" (57)
 *   description 135 chars, H1 "Let's find what you can automate"
 *   two booking paths, a process-focused form, Mike's face and email
 *
 * Schema: ContactPage + Organization, as the blueprint specifies.
 */

const SITE_URL = "https://mbeasleyllc.com";
const TITLE = "Book a Free Automation Review | Mike Beasley & Associates";
const DESCRIPTION =
  "Book a free 30-minute automation review or a 15-minute intro call with Mike Beasley & Associates, or send a message about your project.";

const bookingPaths = [
  {
    icon: CalendarCheck,
    name: "Free automation review",
    duration: "30 minutes",
    body: "We map your most repetitive processes, pick the top three automation candidates, and talk through rough effort and impact. No cost, no obligation.",
    href: REVIEW_BOOKING_URL,
    primary: true,
    cta: "Book the 30-minute review",
  },
  {
    icon: MessageSquare,
    name: "Intro call",
    duration: "15 minutes",
    body: "A shorter conversation if you just want to check whether this is a fit before going into detail.",
    href: INTRO_BOOKING_URL,
    primary: false,
    cta: "Book a 15-minute intro",
  },
];

export default function ContactPage() {
  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "ProfessionalService",
      name: "Mike Beasley & Associates LLC",
      url: `${SITE_URL}/`,
      email: CONTACT_EMAIL,
      areaServed: "US",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mike Beasley & Associates LLC",
    url: `${SITE_URL}/`,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fairfax",
      addressRegion: "VA",
      addressCountry: "US",
    },
    areaServed: "US",
    knowsAbout: [
      "Business automation",
      "AI agents",
      "Donor management",
      "Managed hosting",
      "IT integration",
    ],
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </Head>

      <Layout>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-[-10%] h-[32rem] w-[32rem] rounded-full bg-champagne/10 blur-3xl"
          />
          <div className="container relative">
            <nav aria-label="Breadcrumb" className="text-sm text-mist">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-champagne">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ivory">Contact</li>
              </ol>
            </nav>

            <div className="mt-10 max-w-3xl">
              <p className="type-eyebrow text-champagne">Contact &amp; booking</p>
              <h1 className="type-display mt-4 text-ivory">
                Let&rsquo;s find what you can automate.
              </h1>
              <p className="type-lead mt-6 text-mist">
                Pick a time for a free review, or send a message about what you
                are trying to fix. Either way you will talk to Mike, not a
                sales team.
              </p>
            </div>
          </div>
        </section>

        {/* ── Two booking paths ────────────────────────────────── */}
        <section className="section bg-ivory">
          <div className="container">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-gold-deep">Book a time</p>
              <h2 className="type-h2 mt-3 text-ink">
                Two ways to start.
              </h2>
              <p className="type-lead mt-5 text-graphite">
                Both are free. The review is the useful one if you already know
                something is eating time.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {bookingPaths.map((b) => (
                <div
                  key={b.name}
                  className={`flex flex-col rounded-xl border p-6 ${
                    b.primary ? "border-champagne bg-ink" : "border-ink/10 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ${
                        b.primary ? "bg-midnight" : "bg-ink"
                      }`}
                    >
                      <b.icon size={20} className="text-champagne" aria-hidden="true" />
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                        b.primary ? "text-champagne" : "text-gold-deep"
                      }`}
                    >
                      <Clock size={13} aria-hidden="true" />
                      {b.duration}
                    </span>
                  </div>

                  <h3
                    className={`mt-5 font-display text-xl font-semibold ${
                      b.primary ? "text-ivory" : "text-ink"
                    }`}
                  >
                    {b.name}
                  </h3>
                  <p
                    className={`mt-3 flex-1 text-sm leading-relaxed ${
                      b.primary ? "text-mist" : "text-graphite"
                    }`}
                  >
                    {b.body}
                  </p>

                  <a
                    href={b.href}
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-base font-semibold transition-colors ${
                      b.primary
                        ? "bg-champagne text-ink hover:bg-gold-soft"
                        : "border border-ink/20 text-ink hover:border-champagne hover:text-gold-deep"
                    }`}
                  >
                    {b.cta}
                    <ArrowRight size={18} />
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-graphite">
              Either button takes you to the booking form below, where you
              choose the 15 or 30 minute slot. Bookings go straight into our
              scheduling system, so you get the confirmation and a calendar
              invite.
            </p>
          </div>
        </section>

        {/* ── Form + Mike ──────────────────────────────────────── */}
        <section id="lets-talk" className="section surface-dark scroll-mt-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
              <div>
                <p className="type-eyebrow text-champagne">Or send a message</p>
                <h2 className="type-h2 mt-3 text-ivory">
                  Tell me what you want to automate.
                </h2>
                <p className="type-lead mt-5 text-mist">
                  The more specific you are about the process, the more useful
                  the first conversation will be.
                </p>

                <div className="mt-10">
                  {hasSuiteDashForm ? <SuiteDashForm /> : <ContactForm />}
                </div>
              </div>

              {/* Mike: "human contact reduces friction for a founder-led firm" */}
              <aside className="lg:pt-24">
                <div className="rounded-xl border border-white/10 bg-midnight p-6">
                  {/* The headshot carried over from the old site: same file as /about. */}
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border border-champagne/40">
                    <Image
                      src="/headshot-1731700227635-11-maof4udv.png"
                      alt="Mike Beasley, founder of Mike Beasley & Associates"
                      fill
                      sizes="128px"
                      className="object-cover object-top"
                    />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold text-ivory">
                    Mike Beasley
                  </h3>
                  <p className="mt-1 text-sm text-champagne">
                    Mike Beasley &amp; Associates LLC
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <Mail size={17} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-mist underline-offset-4 hover:text-champagne hover:underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin size={17} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
                      <span className="text-mist">
                        Based in Fairfax, Virginia, serving Virginia and North
                        Carolina, and remotely anywhere in the US.
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-mist">
                  Replies usually come within one business day. If the form is
                  unavailable, email works just as well.
                </p>
              </aside>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
