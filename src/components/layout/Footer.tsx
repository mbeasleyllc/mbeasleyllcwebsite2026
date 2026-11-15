import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import {
  serviceGroups,
  moreServices,
  solutions,
  CONTACT_EMAIL,
} from "@/lib/nav";

const company = [
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* ── Brand ─────────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block"
              aria-label="Mike Beasley & Associates — home"
            >
              <Image
                src="/mikebealsleyanassociate-logowht-v1-mao52vtw.png"
                alt="Mike Beasley & Associates"
                width={180}
                height={44}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
              We connect your website, donor system, client portal and AI agents
              into one operation, so your team can do the work only people can
              do.
            </p>

            <address className="mt-6 not-italic text-sm text-mist">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline-offset-4 transition-colors hover:text-champagne hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-2">Fairfax, Virginia</p>
              <p className="mt-1 text-xs">
                Serving Virginia and North Carolina — and remotely, anywhere in
                the US.
              </p>
            </address>

            {/* Only real profiles. Instagram and Twitter were placeholders. */}
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/in/mike-beasley-04a8389/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mike Beasley on LinkedIn"
                className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-champagne"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* ── Services ──────────────────────────────────────── */}
          <div>
            <h2 className="type-eyebrow text-champagne">Services</h2>
            <ul className="mt-4 space-y-3">
              {serviceGroups.flatMap((g) => g.items).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist transition-colors hover:text-ivory"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {moreServices.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist transition-colors hover:text-ivory"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Solutions ─────────────────────────────────────── */}
          <div>
            <h2 className="type-eyebrow text-champagne">Solutions</h2>
            <ul className="mt-4 space-y-3">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist transition-colors hover:text-ivory"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="type-eyebrow mt-8 text-champagne">Company</h2>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist transition-colors hover:text-ivory"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Legal ─────────────────────────────────────────── */}
          <div>
            <h2 className="type-eyebrow text-champagne">Legal</h2>
            <ul className="mt-4 space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist transition-colors hover:text-ivory"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-mist">
            © {year} Mike Beasley &amp; Associates LLC. All rights reserved.
          </p>
          <p className="text-xs text-mist">
            Websites, hosting and VPS · Client portals · Donor management · AI
            agents · IT integration
          </p>
        </div>
      </div>
    </footer>
  );
}
