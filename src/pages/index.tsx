import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import Capabilities from "@/components/home/Capabilities";
import BeforeAfter from "@/components/home/BeforeAfter";
import Automations from "@/components/home/Automations";
import Audiences from "@/components/home/Audiences";
import Hosting from "@/components/home/Hosting";
import AboutMike from "@/components/home/AboutMike";
import Faq from "@/components/home/Faq";
import ClosingCta from "@/components/home/ClosingCta";

const SITE_URL = "https://mbeasleyllc.com";
const TITLE = "Business Automation & AI Agents | Mike Beasley & Associates";
const DESCRIPTION =
  "Digital transformation partner: websites, managed hosting and VPS, client portals, donor systems, AI agents and IT integration. Book a free review.";

const CONTACT_EMAIL = "mike@mbeasleyllc.com";
/** Only the LinkedIn profile is real; no other social profiles exist yet. */
const LINKEDIN = "https://www.linkedin.com/in/mike-beasley-04a8389/";

export default function Home() {
  /**
   * The blueprint asks for Organization markup on the home page
   * ("Organization markup (JSON-LD, home page)"), naming ProfessionalService
   * and WebSite. sameAs lists only the real LinkedIn profile — the prototype
   * carried Facebook and Instagram placeholders that do not exist.
   */
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Mike Beasley & Associates LLC",
    url: `${SITE_URL}/`,
    email: CONTACT_EMAIL,
    description:
      "Digital transformation partner: websites, hosting and VPS, client portals, donor management, AI agents, business automation and IT integration.",
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
    sameAs: [LINKEDIN],
    founder: { "@id": `${SITE_URL}/#mike` },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Mike Beasley & Associates",
    url: `${SITE_URL}/`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#mike`,
    name: "Mike Beasley",
    jobTitle: "Founder",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    sameAs: [LINKEDIN],
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:site_name" content="Mike Beasley & Associates LLC" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </Head>

      <Layout>
        <Hero />
        <Mission />
        <Capabilities />
        <BeforeAfter />
        <Automations />
        <Audiences />
        <Hosting />
        <AboutMike />
        {/*
          Social proof is intentionally omitted until real pilot results exist.
          The previous testimonials related to web development and would
          contradict the new positioning. Add back once pilots report.
        */}
        <Faq />
        <ClosingCta />
      </Layout>
    </>
  );
}
