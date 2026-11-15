import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Shared hero for every inner page — the five service pages, the three
 * audience pages and the two index pages.
 *
 * Generic on purpose: it takes plain content rather than a ServiceMeta, so a
 * new page type does not need its own hero. One component means the breadcrumb
 * trail, the spacing and the CTA treatment cannot drift between page types.
 *
 * `section` drives the middle crumb and its link, so /services/client-portals/
 * reads Home / Services / Client Portals while /solutions/nonprofits/ reads
 * Home / Solutions / Nonprofits.
 *
 * The prop is still named `service` for compatibility with the service pages;
 * it accepts any object shaped like HeroContent.
 */

export type HeroContent = {
  name: string;
  eyebrow: string;
  h1: string;
  lead: string;
  ctaLabel: string;
  /** Path without a trailing slash, e.g. "/solutions/nonprofits" */
  slug: string;
  /** Used for JSON-LD only. */
  description?: string;
  /** Used for JSON-LD only; defaults to "Service". */
  schemaType?: string;
};

export type HeroSection = {
  label: string;
  href: string;
};

export const SERVICES_SECTION: HeroSection = { label: "Services", href: "/services" };
export const SOLUTIONS_SECTION: HeroSection = { label: "Solutions", href: "/solutions" };

export default function ServiceHero({
  service,
  section = SERVICES_SECTION,
  visual,
  ctaHref = "/contact",
}: {
  service: HeroContent;
  section?: HeroSection;
  visual?: React.ReactNode;
  ctaHref?: string;
}) {
  return (
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
            <li>
              <Link href={section.href} className="hover:text-champagne">
                {section.label}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ivory">{service.name}</li>
          </ol>
        </nav>

        <div
          className={`mt-10 grid items-center gap-12 ${
            visual ? "lg:grid-cols-2 lg:gap-16" : ""
          }`}
        >
          <div className={visual ? "" : "max-w-3xl"}>
            <p className="type-eyebrow text-champagne">{service.eyebrow}</p>
            <h1 className="type-display mt-4 text-ivory">{service.h1}</h1>
            <p className="type-lead mt-6 max-w-prose text-mist">
              {service.lead}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-md bg-champagne px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-gold-soft"
              >
                {service.ctaLabel}
                <ArrowRight size={18} />
              </Link>
              <Link
                href={section.href}
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-base font-medium text-ivory transition-colors hover:border-champagne hover:text-champagne"
              >
                All {section.label.toLowerCase()}
              </Link>
            </div>
          </div>

          {visual}
        </div>
      </div>
    </section>
  );
}

/** JSON-LD for an inner page: the item itself plus its breadcrumb trail. */
export function ServiceJsonLd({
  service,
  section = SERVICES_SECTION,
  siteUrl,
}: {
  service: HeroContent;
  section?: HeroSection;
  siteUrl: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": service.schemaType ?? "Service",
    name: service.name,
    description: service.description ?? service.lead,
    url: `${siteUrl}${service.slug}`,
    provider: {
      "@type": "ProfessionalService",
      name: "Mike Beasley & Associates LLC",
      url: `${siteUrl}/`,
    },
    areaServed: "US",
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: section.label,
        item: `${siteUrl}${section.href}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${siteUrl}${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}
