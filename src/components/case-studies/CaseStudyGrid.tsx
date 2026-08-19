
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
  client: string;
}

function CaseStudyCard({ title, category, image, href, client }: CaseStudyCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative h-[350px] overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <div className="mb-2 flex justify-between items-center w-full">
            <span className="text-sm font-medium text-white/80">{category}</span>
            <span className="text-sm font-medium text-white/80">{client}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <span className="inline-flex items-center text-white font-medium">
            View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

// Categories for filtering
const categories = [
  "All",
  "Digital Transformation",
  "Operations Excellence",
  "Strategy Consulting"
];

// Case study data - Only including case studies with actual pages
const caseStudies = [
  {
    id: 1,
    title: "Digital Transformation for Global Retailer",
    category: "Digital Transformation",
    client: "Global Retail Inc.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    href: "/case-studies/global-retailer"
  },
  {
    id: 2,
    title: "Operational Efficiency for Manufacturing Firm",
    category: "Operations Excellence",
    client: "Precision Manufacturing Co.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    href: "/case-studies/manufacturing-firm"
  },
  {
    id: 3,
    title: "Strategic Planning in Uncertain Times",
    category: "Strategy Consulting",
    client: "Strategic Solutions Inc.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    href: "/insights/strategic-planning"
  }
];

export default function CaseStudyGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter case studies based on active category
  const filteredCaseStudies = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Our Case Studies</h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our portfolio of successful client engagements across industries and service areas.
          </p>
          
          {/* Category Filter */}
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
          {filteredCaseStudies.map(study => (
            <CaseStudyCard 
              key={study.id}
              title={study.title}
              category={study.category}
              client={study.client}
              image={study.image}
              href={study.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
