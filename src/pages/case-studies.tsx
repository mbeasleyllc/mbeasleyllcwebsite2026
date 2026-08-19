
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import FeaturedCaseStudy from "@/components/case-studies/FeaturedCaseStudy";
import CaseStudyGrid from "@/components/case-studies/CaseStudyGrid";
import CaseStudyProcess from "@/components/case-studies/CaseStudyProcess";
import ClientTestimonials from "@/components/case-studies/ClientTestimonials";
import CaseStudyCTA from "@/components/case-studies/CaseStudyCTA";

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies | Beasley Consulting</title>
        <meta name="description" content="Explore Beasley Consulting's portfolio of successful client engagements across industries including digital transformation, operations excellence, and strategic planning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <CaseStudiesHero />
        
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-600">
                Discover how we've helped organizations achieve transformative results through strategic consulting and implementation.
              </p>
            </div>
            
            <div className="space-y-24">
              <FeaturedCaseStudy 
                title="Digital Transformation for Global Retail Chain"
                category="Digital Transformation"
                description="A leading retail chain with over 500 locations worldwide needed to modernize their digital infrastructure and customer experience to remain competitive in an increasingly online marketplace."
                results={[
                  "43% increase in online sales within 6 months",
                  "Customer satisfaction scores improved by 28%",
                  "Operational efficiency increased by 35%",
                  "Seamless integration between online and in-store experiences"
                ]}
                image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                href="/case-studies/global-retailer"
              />
              
              <FeaturedCaseStudy 
                title="Operational Excellence for Manufacturing Firm"
                category="Operations Excellence"
                description="A mid-sized manufacturing company struggled with inefficient processes, high operational costs, and quality control issues that were impacting their competitiveness and profitability."
                results={[
                  "22% reduction in operational costs",
                  "Manufacturing cycle time reduced by 35%",
                  "Product quality defects decreased by 48%",
                  "Employee productivity increased by 27%"
                ]}
                image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                href="/case-studies/manufacturing-firm"
                reverse={true}
              />
            </div>
          </div>
        </section>
        
        <CaseStudyGrid />
        <CaseStudyProcess />
        <ClientTestimonials />
        <CaseStudyCTA />
      </Layout>
    </>
  );
}
