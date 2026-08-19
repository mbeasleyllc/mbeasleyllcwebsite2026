
import React from "react";
import Link from "next/link";

interface TopicProps {
  title: string;
  description: string;
  href: string;
  count: number;
}

function Topic({ title, description, href, count }: TopicProps) {
  return (
    <Link href={href} className="block group">
      <div className="border border-gray-200 p-6 hover:border-black transition-colors duration-300 h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold group-hover:underline">{title}</h3>
          <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{count} articles</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

export default function PopularTopics() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Topics</h2>
          <p className="text-xl text-gray-600">
            Explore our most-read content categories covering key business challenges and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Topic 
            title="Digital Transformation"
            description="Strategies and insights for leveraging technology to transform your business model and operations."
            href="/insights/topics/digital-transformation"
            count={24}
          />
          
          <Topic 
            title="Leadership Development"
            description="Building effective leadership capabilities to drive innovation and organizational effectiveness."
            href="/insights/topics/leadership"
            count={18}
          />
          
          <Topic 
            title="Operational Excellence"
            description="Approaches to optimize operations, reduce costs, and improve overall business performance."
            href="/insights/topics/operations"
            count={15}
          />
          
          <Topic 
            title="Strategic Planning"
            description="Frameworks and methodologies for developing clear, actionable strategies for sustainable growth."
            href="/insights/topics/strategy"
            count={22}
          />
          
          <Topic 
            title="Market Expansion"
            description="Insights on identifying and capitalizing on new market opportunities to drive business growth."
            href="/insights/topics/market-expansion"
            count={12}
          />
          
          <Topic 
            title="Financial Management"
            description="Strategies for optimizing financial performance through planning, risk management, and capital allocation."
            href="/insights/topics/finance"
            count={14}
          />
        </div>
      </div>
    </section>
  );
}
