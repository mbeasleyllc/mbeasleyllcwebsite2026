
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GlobalRetailerCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>Digital Transformation for Global Retailer | Case Study</title>
        <meta name="description" content="How we helped a major retail chain achieve digital transformation success through strategic planning and implementation." />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <Link href="/case-studies" className="inline-flex items-center text-gray-600 hover:text-black mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Case Studies
        </Link>

        <div className="relative h-[400px] mb-12">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Global Retail Digital Transformation"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Digital Transformation for Global Retailer</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span>Client: Global Retail Inc.</span>
              <span>Category: Digital Transformation</span>
              <span>Duration: 18 months</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">Challenge</h2>
            <p>
              Global Retail Inc., a Fortune 500 retailer with over 1,000 locations worldwide, faced increasing pressure from e-commerce competitors and changing consumer behaviors. Their legacy systems and traditional retail approach were hindering their ability to compete in the digital age.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Solution</h2>
            <p>
              We developed a comprehensive digital transformation strategy that included:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Implementation of an omnichannel retail platform</li>
              <li>Integration of AI-powered inventory management</li>
              <li>Development of a mobile-first customer experience</li>
              <li>Employee training and change management programs</li>
              <li>Data analytics infrastructure for real-time decision making</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Results</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>43% increase in online sales within first year</li>
              <li>27% improvement in inventory turnover</li>
              <li>92% employee adoption of new digital tools</li>
              <li>31% increase in customer satisfaction scores</li>
              <li>Reduced operational costs by 18%</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Approach</h2>
            <p>
              The transformation was executed in phases over 18 months, starting with core infrastructure upgrades and gradually expanding to customer-facing innovations. Key steps included:
            </p>
            <ul className="list-decimal pl-6 mt-4 space-y-2">
              <li>Technical infrastructure assessment and modernization</li>
              <li>Cloud migration and systems integration</li>
              <li>Employee training and change management</li>
              <li>Pilot program in select stores</li>
              <li>Full-scale rollout and optimization</li>
            </ul>

            <div className="my-8">
              <h2 className="text-2xl font-bold mt-8 mb-4">Key Insights</h2>
              <p>
                This transformation highlighted several critical success factors for large-scale digital initiatives:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>The importance of employee engagement and training</li>
                <li>Need for flexible, scalable technology infrastructure</li>
                <li>Value of data-driven decision making</li>
                <li>Critical role of change management</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold mb-4">About the Author</h2>
              <p>
                Michael Beasley led this transformation initiative, bringing over 15 years of experience in digital strategy and retail innovation. His expertise in combining technological solutions with practical business applications was crucial to the project's success.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center">
            <Link href="/case-studies" className="inline-flex items-center text-gray-600 hover:text-black">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
            <Button asChild>
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
