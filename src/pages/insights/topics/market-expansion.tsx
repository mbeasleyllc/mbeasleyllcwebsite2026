
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function MarketExpansionTopicPage() {
  const articles = [
    {
      id: 1,
      title: "Global Market Entry Strategies for 2025",
      excerpt: "A comprehensive guide to developing and executing successful market entry strategies in diverse global markets.",
      date: "May 14, 2025",
      author: "Alexandra Chen",
      authorRole: "Global Markets Director",
      category: "Market Expansion",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/global-market-entry"
    },
    {
      id: 2,
      title: "Cross-Border Partnerships: Building Successful Alliances",
      excerpt: "How to identify, develop, and manage strategic partnerships to accelerate market expansion and mitigate risks.",
      date: "April 27, 2025",
      author: "Carlos Rodriguez",
      authorRole: "Strategic Alliances Director",
      category: "Market Expansion",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/cross-border-partnerships"
    },
    {
      id: 3,
      title: "Localization Strategies for Product Market Fit",
      excerpt: "Approaches for adapting products and services to meet the unique needs and preferences of different markets.",
      date: "April 10, 2025",
      author: "Priya Sharma",
      authorRole: "Market Adaptation Specialist",
      category: "Market Expansion",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/localization-strategies"
    },
    {
      id: 4,
      title: "Digital Channels for International Growth",
      excerpt: "Leveraging digital platforms and technologies to accelerate market expansion and reach global customers.",
      date: "March 28, 2025",
      author: "Mark Johnson",
      authorRole: "Digital Growth Strategist",
      category: "Market Expansion",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/digital-channels-growth"
    },
    {
      id: 5,
      title: "Navigating Regulatory Challenges in New Markets",
      excerpt: "Strategies for understanding and addressing regulatory requirements when expanding into new geographic markets.",
      date: "March 18, 2025",
      author: "Julia Kim",
      authorRole: "Regulatory Affairs Director",
      category: "Market Expansion",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/regulatory-challenges"
    },
    {
      id: 6,
      title: "Market Expansion ROI: Measuring Success Across Borders",
      excerpt: "Frameworks and metrics for evaluating the return on investment of market expansion initiatives.",
      date: "March 5, 2025",
      author: "David Wilson",
      authorRole: "International Business Director",
      category: "Market Expansion",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/market-expansion-roi"
    }
  ];

  return (
    <>
      <Head>
        <title>Market Expansion Insights | Beasley Consulting</title>
        <meta name="description" content="Explore our latest insights on market expansion strategies, international growth, and cross-border business development." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Market Expansion</h1>
              <p className="text-xl text-gray-600 mb-8">
                Strategies and approaches for expanding into new markets and accelerating international growth.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-full">12 articles</span>
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
                <p className="text-gray-600 mb-4">Showing 6 of 12 articles</p>
                <div className="flex justify-center gap-2">
                  <span className="px-4 py-2 bg-blue-600 text-white rounded">1</span>
                  <Link href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">2</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
