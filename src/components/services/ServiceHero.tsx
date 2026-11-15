import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceMeta } from "@/lib/services";

/**
 * Shared hero for every service page: breadcrumbs, eyebrow, H1, lead,
 * two CTAs, and an optional right-hand visual.
 *
 * One component for all five service pages means the spacing, the breadcrumb
 * trail and the CTA treatment cannot drift apart between them.
 */

export default function ServiceHero({
  service,
  visual,
  ctaHref = "/contact",
}: {
  service: ServiceMeta;
  visual?: React.ReactNode;
  ctaHref?: string;
}) {
  const split = service.slug.split("/").filter(Boolean); // ["services", "client-portals"]

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
              <Link href="/services" className="hover:text-champagne">
                Services
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
                href="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-base font-medium text-ivory transition-colors hover:border-champagne hover:text-champagne"
              >
                All services
              </Link>
            </div>
          </div>

          {visual}
        </div>
      </div>
    </section>
  );
}

/** JSON-LD for a service page: Service (or SoftwareApplication) + breadcrumbs. */
export function ServiceJsonLd({
  service,
  siteUrl,
}: {
  service: ServiceMeta;
  siteUrl: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": service.schemaType,
    name: service.name,
    description: service.description,
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
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${siteUrl}${service.slug}` },
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
