
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function LeadershipTopicPage() {
  const articles = [
    {
      id: 1,
      title: "Adaptive Leadership in Times of Uncertainty",
      excerpt: "How leaders can develop the skills and mindset needed to navigate complex, uncertain business environments effectively.",
      date: "May 12, 2025",
      author: "James Wilson",
      authorRole: "Leadership Development Director",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/adaptive-leadership"
    },
    {
      id: 2,
      title: "Building High-Performance Leadership Teams",
      excerpt: "Strategies for assembling, developing, and nurturing leadership teams that drive exceptional organizational performance.",
      date: "April 30, 2025",
      author: "Elena Martinez",
      authorRole: "Executive Coach",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/high-performance-teams"
    },
    {
      id: 3,
      title: "Emotional Intelligence for Modern Leaders",
      excerpt: "Why emotional intelligence is a critical leadership skill and how to develop it for better team management and decision-making.",
      date: "April 18, 2025",
      author: "Thomas Lee",
      authorRole: "Leadership Consultant",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/emotional-intelligence"
    },
    {
      id: 4,
      title: "Inclusive Leadership: Beyond Diversity Initiatives",
      excerpt: "How leaders can foster truly inclusive environments that leverage diverse perspectives for innovation and growth.",
      date: "April 5, 2025",
      author: "Maya Johnson",
      authorRole: "Diversity & Inclusion Strategist",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/inclusive-leadership"
    },
    {
      id: 5,
      title: "The Future of Work: Leading Remote and Hybrid Teams",
      excerpt: "Leadership strategies for effectively managing distributed teams and maintaining culture in remote and hybrid work environments.",
      date: "March 22, 2025",
      author: "Sarah Johnson",
      authorRole: "Chief Strategy Officer",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/future-of-work"
    },
    {
      id: 6,
      title: "Succession Planning: Building Leadership Pipelines",
      excerpt: "How organizations can develop robust succession planning processes to ensure leadership continuity and organizational resilience.",
      date: "March 10, 2025",
      author: "Daniel Kim",
      authorRole: "Talent Development Director",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/insights/succession-planning"
    }
  ];

  return (
    <>
      <Head>
        <title>Leadership Development Insights | Beasley Consulting</title>
        <meta name="description" content="Explore our latest insights on leadership development, team building, and creating effective organizational leadership." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Leadership Development</h1>
              <p className="text-xl text-gray-600 mb-8">
                Building effective leadership capabilities to drive innovation and organizational effectiveness.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-full">18 articles</span>
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
                <p className="text-gray-600 mb-4">Showing 6 of 18 articles</p>
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
