
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
}

function CaseStudyCard({ title, category, image, href }: CaseStudyCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative h-[400px] overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <p className="text-sm font-medium text-white/80 mb-2">{category}</p>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <span className="inline-flex items-center text-white font-medium">
            View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudies() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Case Studies</h2>
            <p className="text-xl text-gray-300">
              Explore how we've helped organizations overcome challenges and achieve remarkable results.
            </p>
          </div>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 rounded-none">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudyCard 
            title="Digital Transformation for Global Retailer"
            category="Digital Transformation"
            image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            href="/case-studies/global-retailer"
          />
          
          <CaseStudyCard 
            title="Operational Efficiency for Manufacturing Firm"
            category="Operations Excellence"
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            href="/case-studies/manufacturing-firm"
          />
          
          <CaseStudyCard 
            title="Strategic Planning in Uncertain Times"
            category="Strategy Consulting"
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            href="/insights/strategic-planning"
          />
        </div>
      </div>
    </section>
  );
}
