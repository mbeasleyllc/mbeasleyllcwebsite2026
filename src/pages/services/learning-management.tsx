
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import LearningManagementHero from "@/components/services/learning-management/LearningManagementHero";
import LearningManagementServices from "@/components/services/learning-management/LearningManagementServices";
import LearningManagementPricing from "@/components/services/learning-management/LearningManagementPricing";
import ServiceCTA from "@/components/services/ServiceCTA";
import ConversationCTA from "@/components/services/ConversationCTA";

export default function LearningManagementPage() {
  return (
    <>
      <Head>
        <title>Learning Management Services | Mike Beasley & Associates</title>
        <meta 
          name="description" 
          content="Our learning management services help organizations implement and optimize their learning platforms to deliver effective training and development programs." 
        />
      </Head>
      
      <Layout>
        <LearningManagementHero />
        <LearningManagementServices />
        <LearningManagementPricing />
        <ConversationCTA />
        <ServiceCTA />
      </Layout>
    </>
  );
}
