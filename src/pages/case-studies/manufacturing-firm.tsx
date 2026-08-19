
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ManufacturingFirmCaseStudy() {
  return (
    <Layout>
      <Head>
        <title>Operational Efficiency for Manufacturing Firm | Case Study</title>
        <meta name="description" content="How we helped a manufacturing company optimize their operations and achieve significant cost savings through process improvement." />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <Link href="/case-studies" className="inline-flex items-center text-gray-600 hover:text-black mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Case Studies
        </Link>

        <div className="relative h-[400px] mb-12">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Manufacturing Operations Excellence"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Operational Efficiency for Manufacturing Firm</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span>Client: Precision Manufacturing Co.</span>
              <span>Category: Operations Excellence</span>
              <span>Duration: 12 months</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">Challenge</h2>
            <p>
              Precision Manufacturing Co., a mid-sized manufacturer of industrial components, was struggling with inefficient processes, high operational costs, and quality control issues. Their outdated production methods and lack of standardized procedures were impacting delivery times and customer satisfaction.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Solution</h2>
            <p>
              We implemented a comprehensive operational excellence program that included:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Lean manufacturing principles implementation</li>
              <li>Quality management system overhaul</li>
              <li>Production line optimization</li>
              <li>Worker training and skill development</li>
              <li>Implementation of real-time monitoring systems</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Results</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>35% reduction in production cycle time</li>
              <li>25% decrease in operational costs</li>
              <li>40% improvement in quality metrics</li>
              <li>98% on-time delivery achievement</li>
              <li>15% increase in worker productivity</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Approach</h2>
            <p>
              The transformation was executed using a phased approach:
            </p>
            <ul className="list-decimal pl-6 mt-4 space-y-2">
              <li>Process mapping and analysis</li>
              <li>Pilot program implementation</li>
              <li>Worker training and engagement</li>
              <li>Full-scale deployment</li>
              <li>Continuous improvement program establishment</li>
            </ul>

            <div className="my-8">
              <h2 className="text-2xl font-bold mt-8 mb-4">Key Insights</h2>
              <p>
                This project revealed several critical factors for manufacturing excellence:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Importance of worker engagement and training</li>
                <li>Value of data-driven decision making</li>
                <li>Need for standardized processes</li>
                <li>Benefits of preventive maintenance</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold mb-4">About the Author</h2>
              <p>
                Michael Beasley led this operational transformation, bringing over 15 years of experience in manufacturing optimization and process improvement. His expertise in lean manufacturing and operational excellence was instrumental in achieving these results.
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
