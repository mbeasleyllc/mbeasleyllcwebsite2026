
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import TransformationHero from "@/components/services/transformation/TransformationHero";
import TransformationServices from "@/components/services/transformation/TransformationServices";
import ServiceCTA from "@/components/services/ServiceCTA";
import ConversationCTA from "@/components/services/ConversationCTA";

export default function DigitalTransformationPage() {
  return (
    <>
      <Head>
        <title>Digital Transformation Services | Beasley Consulting</title>
        <meta 
          name="description" 
          content="Our digital transformation services help organizations leverage technology to transform business models and create new value for customers." 
        />
      </Head>
      
      <Layout>
        <TransformationHero />
        <TransformationServices />
        <ConversationCTA />
        <ServiceCTA />
      </Layout>
    </>
  );
}
