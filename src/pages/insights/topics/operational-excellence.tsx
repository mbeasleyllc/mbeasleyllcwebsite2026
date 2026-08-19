
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function OperationalExcellenceTopicPage() {
  const articles = [
    {
      id: 1,
      title: "Lean Six Sigma Implementation for Modern Businesses",
      excerpt: "A practical guide to implementing Lean Six Sigma methodologies to eliminate waste and improve operational efficiency.",
      date: "May 8, 2025",
      author: "Richard Torres",
      authorRole: "Operations Excellence Director",
      category: "Operational Excellence",
      image: "https://images.unsplash.com/photo-1581092921461-7d65ca45ec1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/lean-six-sigma"
    },
    {
      id: 2,
      title: "Supply Chain Resilience in a Volatile World",
      excerpt: "Strategies for building robust, adaptable supply chains that can withstand disruptions and maintain operational continuity.",
      date: "April 25, 2025",
      author: "Lisa Chen",
      authorRole: "Supply Chain Consultant",
      category: "Operational Excellence",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/supply-chain-resilience"
    },
    {
      id: 3,
      title: "Process Mining: Uncovering Hidden Inefficiencies",
      excerpt: "How process mining technologies can help organizations discover, monitor, and improve their business processes.",
      date: "April 12, 2025",
      author: "Marcus Johnson",
      authorRole: "Process Improvement Specialist",
      category: "Operational Excellence",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/process-mining"
    },
    {
      id: 4,
      title: "Quality Management Systems for the Digital Age",
      excerpt: "Modern approaches to quality management that leverage digital technologies for continuous improvement and compliance.",
      date: "March 30, 2025",
      author: "Sophia Williams",
      authorRole: "Quality Management Consultant",
      category: "Operational Excellence",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/quality-management"
    },
    {
      id: 5,
      title: "Operational KPIs That Drive Business Performance",
      excerpt: "Identifying and implementing the right operational key performance indicators to measure and improve business outcomes.",
      date: "March 15, 2025",
      author: "David Miller",
      authorRole: "Performance Management Director",
      category: "Operational Excellence",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/operational-kpis"
    },
    {
      id: 6,
      title: "Agile Operations: Beyond Software Development",
      excerpt: "Applying agile methodologies to business operations for increased flexibility, responsiveness, and customer satisfaction.",
      date: "March 2, 2025",
      author: "Jennifer Park",
      authorRole: "Agile Transformation Coach",
      category: "Operational Excellence",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/agile-operations"
    }
  ];

  return (
    <>
      <Head>
        <title>Operational Excellence Insights | Beasley Consulting</title>
        <meta name="description" content="Explore our latest insights on operational excellence, process improvement, and building efficient business operations." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Operational Excellence</h1>
              <p className="text-xl text-gray-600 mb-8">
                Strategies and methodologies for optimizing business processes and driving operational efficiency.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-full">15 articles</span>
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
                <p className="text-gray-600 mb-4">Showing 6 of 15 articles</p>
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
