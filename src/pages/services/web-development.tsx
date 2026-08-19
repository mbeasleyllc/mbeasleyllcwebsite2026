
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import WebDevelopmentHero from "@/components/services/web-development/WebDevelopmentHero";
import WebDevelopmentServices from "@/components/services/web-development/WebDevelopmentServices";
import WebDevelopmentPricing from "@/components/services/web-development/WebDevelopmentPricing";
import ServiceCTA from "@/components/services/ServiceCTA";
import ConversationCTA from "@/components/services/ConversationCTA";

export default function WebDevelopmentPage() {
  return (
    <>
      <Head>
        <title>Web Development Services | Mike Beasley & Associates</title>
        <meta 
          name="description" 
          content="Our web development services help businesses create powerful, responsive websites and web applications that drive growth and enhance user experience." 
        />
      </Head>
      
      <Layout>
        <WebDevelopmentHero />
        <WebDevelopmentServices />
        <WebDevelopmentPricing />
        <ConversationCTA />
        <ServiceCTA />
      </Layout>
    </>
  );
}
