import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Palette, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ClosingCta from "@/components/home/ClosingCta";

/**
 * /more — the "also from us" index. The prototype keeps these two findable but
 * out of the main journey:
 *
 *   "Brand design stays as a one-line 'Also from us' row"
 *   "More /more/brand-design/ · /more/communities/"
 *   "Community and membership content moves to /more/communities/ so earlier
 *    SEO value is preserved."
 */

const SITE_URL = "https://mbeasleyllc.com";
const TITLE = "Also From Us | Mike Beasley & Associates";
const DESCRIPTION =
  "Brand and logo design, and community platforms — services we offer alongside business automation, hosting and portals.";

const items = [
  {
    icon: Palette,
    name: "Brand & Logo Design",
    href: "/more/brand-design",
    body: "Logo, type and colour work for organisations that need a brand that matches the systems underneath it.",
  },
  {
    icon: Users,
    name: "Communities",
    href: "/more/communities",
    body: "Online communities and membership platforms — the same infrastructure that runs portals, applied to member engagement.",
  },
];

export default function MorePage() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/more`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/more`} />
      </Head>

      <Layout>
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
                <li className="text-ivory">Also from us</li>
              </ol>
            </nav>

            <div className="mt-10 max-w-3xl">
              <p className="type-eyebrow text-champagne">Also from us</p>
              <h1 className="type-display mt-4 text-ivory">
                Other things we do well.
              </h1>
              <p className="type-lead mt-6 text-mist">
                These are not the core offer — automation, hosting, portals and
                donor systems are. But we have done them for years, and they
                come up often enough to keep here.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-ivory">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2">
              {items.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="group flex flex-col rounded-xl border border-ink/10 bg-white p-6 transition-colors hover:border-champagne"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-ink">
                    <i.icon size={20} className="text-champagne" aria-hidden="true" />
                  </span>
                  <h2 className="type-h3 mt-5 text-ink">{i.name}</h2>
                  <p className="mt-3 flex-1 text-graphite">{i.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep">
                    Read more
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-12 max-w-3xl text-graphite">
              Looking for the main offer?{" "}
              <Link
                href="/services"
                className="font-medium text-gold-deep underline underline-offset-4"
              >
                Browse services
              </Link>
              .
            </p>
          </div>
        </section>

        <ClosingCta />
      </Layout>
    </>
  );
}
