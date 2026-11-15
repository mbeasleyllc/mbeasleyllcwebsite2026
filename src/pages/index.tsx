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

export default function Home() {
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
