
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface InsightCardProps {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
  href: string;
}

function InsightCard({ title, category, excerpt, date, image, author, href }: InsightCardProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="relative h-[220px] overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-500">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {author}</span>
          <Link href={href} className="inline-flex items-center text-black font-medium group-hover:underline">
            Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

const categories = [
  "All",
  "Strategy",
  "Leadership",
  "Digital",
  "Operations",
  "Finance",
  "Industry Trends"
];

const insights = [
  {
    id: 1,
    title: "The Future of Work: Navigating Remote and Hybrid Models",
    category: "Leadership",
    excerpt: "As organizations adapt to changing work environments, leaders must develop strategies to maintain culture, productivity, and employee engagement in remote and hybrid settings.",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
    author: "Michael Beasley",
    href: "/insights/future-of-work"
  },
  {
    id: 2,
    title: "Digital Transformation: Beyond Technology Implementation",
    category: "Digital",
    excerpt: "Successful digital transformation requires more than just new technology. Learn how to address the cultural, process, and leadership aspects that drive lasting change.",
    date: "April 28, 2023",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    author: "Michael Beasley",
    href: "/insights/digital-transformation"
  },
  {
    id: 3,
    title: "Strategic Planning in Uncertain Times",
    category: "Strategy",
    excerpt: "In today's volatile business environment, traditional strategic planning approaches fall short. Discover a flexible framework for developing strategy amid uncertainty.",
    date: "April 10, 2023",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    author: "Michael Beasley",
    href: "/insights/strategic-planning"
  }
];

export default function InsightGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredInsights = activeCategory === "All" 
    ? insights 
    : insights.filter(insight => insight.category === activeCategory);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Our Insights</h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our latest thinking on business strategy, leadership, and industry trends.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInsights.map(insight => (
            <InsightCard 
              key={insight.id}
              title={insight.title}
              category={insight.category}
              excerpt={insight.excerpt}
              date={insight.date}
              image={insight.image}
              author={insight.author}
              href={insight.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
