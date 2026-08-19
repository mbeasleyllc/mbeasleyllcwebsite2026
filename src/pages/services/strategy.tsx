
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import StrategyHero from "@/components/services/strategy/StrategyHero";
import StrategyServices from "@/components/services/strategy/StrategyServices";
import ServiceCTA from "@/components/services/ServiceCTA";
import ConversationCTA from "@/components/services/ConversationCTA";

export default function StrategyConsultingPage() {
  return (
    <>
      <Head>
        <title>Strategy Consulting Services | Beasley Consulting</title>
        <meta 
          name="description" 
          content="Our strategic consulting services help organizations develop clear, actionable strategies that align with their vision and drive sustainable growth." 
        />
      </Head>
      
      <Layout>
        <StrategyHero />
        <StrategyServices />
        <ConversationCTA />
        <ServiceCTA />
      </Layout>
    </>
  );
}
