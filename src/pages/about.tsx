
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutTeam from "@/components/about/AboutTeam";
import AboutValues from "@/components/about/AboutValues";
import AboutApproach from "@/components/about/AboutApproach";
import CTA from "@/components/home/CTA";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Beasley Consulting</title>
        <meta name="description" content="Learn about Beasley Consulting's mission, values, approach, and the leadership behind our success." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <AboutApproach />
        <AboutTeam />
        <CTA />
      </Layout>
    </>
  );
}
