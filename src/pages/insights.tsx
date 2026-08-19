
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import InsightsHero from "@/components/insights/InsightsHero";
import FeaturedInsight from "@/components/insights/FeaturedInsight";
import InsightGrid from "@/components/insights/InsightGrid";
import PopularTopics from "@/components/insights/PopularTopics";
import Newsletter from "@/components/insights/Newsletter";
import InsightsCTA from "@/components/insights/InsightsCTA";

export default function InsightsPage() {
  return (
    <>
      <Head>
        <title>Insights | Beasley Consulting</title>
        <meta name="description" content="Explore Beasley Consulting's latest thinking on business strategy, leadership, digital transformation, and industry trends to help navigate complex challenges." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <InsightsHero />
        
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Insight</h2>
              <p className="text-xl text-gray-600">
                Our latest perspective on a critical business challenge facing organizations today.
              </p>
            </div>
            
            <FeaturedInsight 
              title="The Future of Work: Navigating Remote and Hybrid Models"
              category="Leadership"
              description="The pandemic has permanently changed how we work, with remote and hybrid models becoming the new normal. This shift presents both challenges and opportunities for organizations. Leaders must now navigate maintaining company culture, ensuring productivity, and supporting employee well-being in distributed environments. This article explores strategies for success in this new paradigm."
              author={{
                name: "Sarah Johnson",
                role: "Chief Strategy Officer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80"
              }}
              date="May 15, 2023"
              image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              href="/insights/future-of-work"
            />
          </div>
        </section>
        
        <InsightGrid />
        <PopularTopics />
        <Newsletter />
        <InsightsCTA />
      </Layout>
    </>
  );
}
