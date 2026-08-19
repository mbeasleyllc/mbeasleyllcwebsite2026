import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import PlatformFeatures from "@/components/home/PlatformFeatures";
import About from "@/components/home/About";
import CaseStudies from "@/components/home/CaseStudies";
import Testimonials from "@/components/home/Testimonials";
import Insights from "@/components/home/Insights";
import Contact from "@/components/home/Contact";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mike Beasley & Associates | Suite1 Partner - Business Automation & AI Integration</title>
        <meta name="description" content="Official Suite1 partner delivering SuiteDash platform, business automation, AI integration, and strategic consulting for transformative growth." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <Hero />
        <Services />
        <PlatformFeatures />
        <About />
        <CaseStudies />
        {/* Testimonials section temporarily hidden - to be updated later
        <Testimonials />
        */}
        <Insights />
        <Contact />
        <CTA />
      </Layout>
    </>
  );
}