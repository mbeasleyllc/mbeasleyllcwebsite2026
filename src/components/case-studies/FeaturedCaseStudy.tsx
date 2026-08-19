
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface FeaturedCaseStudyProps {
  title: string;
  category: string;
  description: string;
  results: string[];
  image: string;
  href: string;
  reverse?: boolean;
}

export default function FeaturedCaseStudy({ 
  title, 
  category, 
  description, 
  results, 
  image, 
  href,
  reverse = false 
}: FeaturedCaseStudyProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`order-2 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="mb-4">
          <span className="inline-block bg-gray-100 text-black px-3 py-1 text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-lg text-gray-600 mb-8">{description}</p>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Key Results</h3>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-black mt-1 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">{result}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Link href={href}>
          <Button className="bg-black hover:bg-gray-800 text-white rounded-none px-6 py-5">
            View Full Case Study
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
      
      <div className={`order-1 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative h-[400px] w-full overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
