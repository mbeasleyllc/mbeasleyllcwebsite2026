import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
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
        <title>Mike Beasley & Associates | Strategic Consulting for Transformative Growth</title>
        <meta name="description" content="Mike Beasley & Associates partners with forward-thinking organizations to navigate complex challenges and unlock sustainable growth opportunities." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <Hero />
        <Services />
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