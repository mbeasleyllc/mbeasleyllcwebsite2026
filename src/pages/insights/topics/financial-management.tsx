
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function FinancialManagementTopicPage() {
  const articles = [
    {
      id: 1,
      title: "Strategic Financial Planning for Business Growth",
      excerpt: "How to develop financial strategies that support and accelerate your organization's growth objectives.",
      date: "May 13, 2025",
      author: "Robert Chen",
      authorRole: "Chief Financial Officer",
      category: "Financial Management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/strategic-financial-planning"
    },
    {
      id: 2,
      title: "Capital Allocation: Maximizing Returns on Investment",
      excerpt: "Frameworks for making effective capital allocation decisions that drive long-term value creation.",
      date: "April 29, 2025",
      author: "Sophia Martinez",
      authorRole: "Investment Strategy Director",
      category: "Financial Management",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/capital-allocation"
    },
    {
      id: 3,
      title: "Financial Risk Management in Uncertain Times",
      excerpt: "Strategies for identifying, assessing, and mitigating financial risks in volatile business environments.",
      date: "April 16, 2025",
      author: "Michael Johnson",
      authorRole: "Risk Management Director",
      category: "Financial Management",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/financial-risk-management"
    },
    {
      id: 4,
      title: "Financial Technology Transformation",
      excerpt: "How emerging financial technologies are reshaping financial management practices and creating new opportunities.",
      date: "April 3, 2025",
      author: "Emily Wilson",
      authorRole: "FinTech Strategy Consultant",
      category: "Financial Management",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/fintech-transformation"
    },
    {
      id: 5,
      title: "Working Capital Optimization Strategies",
      excerpt: "Approaches for improving working capital management to enhance liquidity and operational efficiency.",
      date: "March 23, 2025",
      author: "David Thompson",
      authorRole: "Treasury Management Director",
      category: "Financial Management",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/working-capital-optimization"
    },
    {
      id: 6,
      title: "ESG Financial Reporting and Investor Relations",
      excerpt: "Best practices for integrating environmental, social, and governance factors into financial reporting and investor communications.",
      date: "March 9, 2025",
      author: "Jennifer Lee",
      authorRole: "ESG Reporting Specialist",
      category: "Financial Management",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/esg-financial-reporting"
    }
  ];

  return (
    <>
      <Head>
        <title>Financial Management Insights | Beasley Consulting</title>
        <meta name="description" content="Explore our latest insights on financial management, capital allocation, and strategic financial planning for business growth." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Management</h1>
              <p className="text-xl text-gray-600 mb-8">
                Strategies and approaches for effective financial planning, risk management, and value creation.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-full">14 articles</span>
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
                <p className="text-gray-600 mb-4">Showing 6 of 14 articles</p>
                <div className="flex justify-center gap-2">
                  <span className="px-4 py-2 bg-blue-600 text-white rounded">1</span>
                  <Link href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">2</Link>
                  <Link href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">3</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
