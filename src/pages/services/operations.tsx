
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import OperationsHero from "@/components/services/operations/OperationsHero";
import OperationsServices from "@/components/services/operations/OperationsServices";
import ServiceCTA from "@/components/services/ServiceCTA";
import ConversationCTA from "@/components/services/ConversationCTA";

export default function OperationsExcellencePage() {
  return (
    <>
      <Head>
        <title>Operations Excellence Services | Beasley Consulting</title>
        <meta 
          name="description" 
          content="Our operations excellence services help organizations optimize processes, integrate systems, and improve efficiency across all operational areas." 
        />
      </Head>
      
      <Layout>
        <OperationsHero />
        <OperationsServices />
        <ConversationCTA />
        <ServiceCTA />
      </Layout>
    </>
  );
}
