import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import ServiceCategories from "@/components/services/ServiceCategories";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import ServiceCTA from "@/components/services/ServiceCTA";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Mike Beasley & Associates</title>
        <meta name="description" content="Explore Mike Beasley & Associates' comprehensive services including web development, software installation, IT integration, learning management systems, course development, marketing, and graphic design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <ServicesHero />
        <ServicesOverview />
        <ServiceCategories />
        <ServiceProcess />
        <ServiceTestimonials />
        <ServiceCTA />
      </Layout>
    </>
  );
}