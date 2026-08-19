
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface InsightCardProps {
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
}

function InsightCard({ title, category, date, image, href }: InsightCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden">
        <div className="relative h-[250px]">
          <Image 
            src={image} 
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 bg-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-500">{category}</span>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">{title}</h3>
          <span className="inline-flex items-center text-black font-medium">
            Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Insights() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600">
              Explore our latest thinking on business strategy, leadership, and industry trends.
            </p>
          </div>
          <Button asChild className="bg-black hover:bg-gray-800 text-white rounded-none">
            <Link href="/insights">
              View All Insights
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InsightCard 
            title="The Future of Work: Navigating Remote and Hybrid Models"
            category="Leadership"
            date="May 15, 2023"
            image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
            href="/insights/future-of-work"
          />
          
          <InsightCard 
            title="Digital Transformation: Beyond Technology Implementation"
            category="Digital"
            date="April 28, 2023"
            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
            href="/insights/digital-transformation"
          />
          
          <InsightCard 
            title="Strategic Planning in Uncertain Times"
            category="Strategy"
            date="April 10, 2023"
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            href="/insights/strategic-planning"
          />
        </div>
      </div>
    </section>
  );
}
