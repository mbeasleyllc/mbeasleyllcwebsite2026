
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FutureOfWorkInsight() {
  return (
    <Layout>
      <Head>
        <title>The Future of Work: Navigating Remote and Hybrid Models | Insights</title>
        <meta name="description" content="Explore strategies for maintaining culture, productivity, and employee engagement in remote and hybrid work environments." />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <Link href="/insights" className="inline-flex items-center text-gray-600 hover:text-black mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Insights
        </Link>

        <div className="relative h-[400px] mb-12">
          <Image
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
            alt="Future of Work"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">The Future of Work: Navigating Remote and Hybrid Models</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span>By Michael Beasley</span>
              <span>Category: Leadership</span>
              <span>May 15, 2023</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="lead">
              As organizations continue to adapt to changing work environments, leaders face the challenge of maintaining culture, productivity, and employee engagement in remote and hybrid settings. This article explores proven strategies and emerging best practices for building successful distributed teams.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Evolution of Work Models</h2>
            <p>
              The traditional office-centric work model has given way to more flexible arrangements, driven by technological advances, changing employee expectations, and recent global events. Organizations must now navigate:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Fully remote operations</li>
              <li>Hybrid work arrangements</li>
              <li>Flexible scheduling</li>
              <li>Digital collaboration tools</li>
              <li>Virtual team building</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Challenges and Solutions</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">1. Maintaining Company Culture</h3>
            <p>
              Building and maintaining a strong company culture in a distributed environment requires intentional effort and new approaches:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Regular virtual team events and celebrations</li>
              <li>Digital recognition programs</li>
              <li>Structured communication channels</li>
              <li>Virtual mentorship programs</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Ensuring Productivity</h3>
            <p>
              Remote work success depends on clear expectations and the right tools:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Outcome-based performance metrics</li>
              <li>Project management platforms</li>
              <li>Time management training</li>
              <li>Regular check-ins and feedback</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Supporting Employee Well-being</h3>
            <p>
              Remote work can blur work-life boundaries, making well-being initiatives crucial:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Mental health resources</li>
              <li>Virtual wellness programs</li>
              <li>Flexible scheduling options</li>
              <li>Digital disconnection policies</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices for Implementation</h2>
            <ol className="list-decimal pl-6 mt-4 space-y-2">
              <li>Clear communication protocols</li>
              <li>Technology infrastructure assessment</li>
              <li>Regular feedback collection</li>
              <li>Leadership training for remote management</li>
              <li>Documentation of processes and expectations</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>
            <p>
              The future of work will likely continue to evolve, with organizations needing to remain flexible and adaptive. Success will depend on:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Continuous learning and adaptation</li>
              <li>Investment in digital infrastructure</li>
              <li>Focus on employee experience</li>
              <li>Regular policy review and updates</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold mb-4">About the Author</h2>
              <p>
                Michael Beasley brings over 15 years of experience in organizational development and strategic leadership. His expertise in helping organizations navigate complex transformations has made him a trusted advisor to businesses implementing remote and hybrid work models.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center">
            <Link href="/insights" className="inline-flex items-center text-gray-600 hover:text-black">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Link>
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
