
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function DigitalTransformationTopicPage() {
  const articles = [
    {
      id: 1,
      title: "The Essential Guide to Digital Transformation in 2025",
      excerpt: "A comprehensive overview of digital transformation strategies, technologies, and implementation approaches for modern businesses.",
      date: "May 10, 2025",
      author: "Michael Chen",
      authorRole: "Chief Digital Officer",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/digital-transformation"
    },
    {
      id: 2,
      title: "AI-Powered Business Process Automation",
      excerpt: "How artificial intelligence is revolutionizing business process automation and creating new opportunities for efficiency and innovation.",
      date: "April 28, 2025",
      author: "Sophia Rodriguez",
      authorRole: "Technology Strategist",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1677442135136-760c813dce95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/ai-powered-automation"
    },
    {
      id: 3,
      title: "Building a Digital-First Customer Experience",
      excerpt: "Strategies for creating seamless, personalized digital customer experiences that drive loyalty and business growth.",
      date: "April 15, 2025",
      author: "David Park",
      authorRole: "Customer Experience Director",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/digital-customer-experience"
    },
    {
      id: 4,
      title: "Cloud Migration: Best Practices for Enterprise Systems",
      excerpt: "A detailed guide to planning and executing successful cloud migrations for large-scale enterprise systems.",
      date: "April 2, 2025",
      author: "Jennifer Wu",
      authorRole: "Cloud Solutions Architect",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/cloud-migration"
    },
    {
      id: 5,
      title: "Digital Transformation ROI: Measuring Success",
      excerpt: "Frameworks and metrics for measuring the return on investment of digital transformation initiatives.",
      date: "March 20, 2025",
      author: "Robert Johnson",
      authorRole: "Digital Strategy Director",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/digital-transformation-roi"
    },
    {
      id: 6,
      title: "Blockchain Applications in Business Operations",
      excerpt: "Exploring practical applications of blockchain technology for enhancing transparency, security, and efficiency in business operations.",
      date: "March 8, 2025",
      author: "Aisha Patel",
      authorRole: "Emerging Technology Consultant",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/blockchain-applications"
    }
  ];

  return (
    <>
      <Head>
        <title>Digital Transformation Insights | Beasley Consulting</title>
        <meta name="description" content="Explore our latest insights on digital transformation strategies, technologies, and implementation approaches for modern businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link href="/insights" className="inline-flex items-center text-gray-600 hover:text-black mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Transformation</h1>
              <p className="text-xl text-gray-600 mb-8">
                Strategies and insights for leveraging technology to transform your business model and operations.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-full">24 articles</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-12">
                {articles.map((article) => (
                  <article key={article.id} className="border-b border-gray-200 pb-12 last:border-0">
                    <Link href={article.href} className="group">
                      <div className="relative w-full h-80 mb-6 overflow-hidden rounded-lg">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {article.date}
                        </span>
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}, {article.authorRole}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{article.title}</h2>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <span className="text-blue-600 font-medium group-hover:underline">Read more</span>
                    </Link>
                  </article>
                ))}
              </div>

              <div className="mt-16 text-center">
                <p className="text-gray-600 mb-4">Showing 6 of 24 articles</p>
                <div className="flex justify-center gap-2">
                  <span className="px-4 py-2 bg-blue-600 text-white rounded">1</span>
                  <Link href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">2</Link>
                  <Link href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">3</Link>
                  <Link href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">4</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
