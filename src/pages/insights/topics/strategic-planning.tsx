
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function StrategicPlanningTopicPage() {
  const articles = [
    {
      id: 1,
      title: "Strategic Planning in Uncertain Times",
      excerpt: "Approaches for developing robust strategic plans that can adapt to rapidly changing business environments and market conditions.",
      date: "May 15, 2025",
      author: "Jonathan Reynolds",
      authorRole: "Chief Strategy Officer",
      category: "Strategic Planning",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/strategic-planning"
    },
    {
      id: 2,
      title: "Scenario Planning for Business Resilience",
      excerpt: "How to use scenario planning methodologies to prepare for multiple futures and build organizational resilience.",
      date: "May 2, 2025",
      author: "Michelle Garcia",
      authorRole: "Strategic Planning Director",
      category: "Strategic Planning",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/scenario-planning"
    },
    {
      id: 3,
      title: "Competitive Intelligence for Strategic Advantage",
      excerpt: "Frameworks and methodologies for gathering and analyzing competitive intelligence to inform strategic decision-making.",
      date: "April 20, 2025",
      author: "Andrew Wilson",
      authorRole: "Market Intelligence Analyst",
      category: "Strategic Planning",
      image: "https://images.unsplash.com/photo-1507208773393-40d9fc670c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/competitive-intelligence"
    },
    {
      id: 4,
      title: "Balancing Short-Term Results and Long-Term Vision",
      excerpt: "Strategies for managing the tension between delivering immediate business results and investing in long-term strategic initiatives.",
      date: "April 8, 2025",
      author: "Sarah Thompson",
      authorRole: "Executive Strategy Consultant",
      category: "Strategic Planning",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/balancing-short-long-term"
    },
    {
      id: 5,
      title: "Strategic Portfolio Management",
      excerpt: "Approaches for optimizing your organization's portfolio of products, services, and initiatives to maximize strategic impact.",
      date: "March 25, 2025",
      author: "Michael Davis",
      authorRole: "Portfolio Strategy Director",
      category: "Strategic Planning",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/portfolio-management"
    },
    {
      id: 6,
      title: "ESG Strategy: Beyond Compliance to Competitive Advantage",
      excerpt: "How to develop and implement environmental, social, and governance strategies that create sustainable business value.",
      date: "March 12, 2025",
      author: "Emma Rodriguez",
      authorRole: "Sustainability Strategy Consultant",
      category: "Strategic Planning",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/esg-strategy"
    }
  ];

  return (
    <>
      <Head>
        <title>Strategic Planning Insights | Beasley Consulting</title>
        <meta name="description" content="Explore our latest insights on strategic planning, scenario development, and building resilient business strategies." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Planning</h1>
              <p className="text-xl text-gray-600 mb-8">
                Frameworks and methodologies for developing robust business strategies in complex environments.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-full">22 articles</span>
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
                <p className="text-gray-600 mb-4">Showing 6 of 22 articles</p>
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
