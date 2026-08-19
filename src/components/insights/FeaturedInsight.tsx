import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import Link from "next/link";

interface FeaturedInsightProps {
  title: string;
  category: string;
  description: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  date: string;
  image: string;
  href: string;
}

export default function FeaturedInsight({ 
  title, 
  category, 
  description, 
  author,
  date,
  image, 
  href
}: FeaturedInsightProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <div className="mb-4">
          <span className="inline-block bg-gray-100 text-black px-3 py-1 text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        
        <div className="flex items-center mb-8">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image 
              src={author.image} 
              alt={author.name} 
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="font-bold text-black">{author.name}</p>
            <p className="text-gray-600">{author.role} • {date}</p>
            <a 
              href="https://www.linkedin.com/in/mike-beasley-04a8389/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-black transition-colors mt-1"
            >
              <Linkedin size={16} className="mr-1" />
              <span className="text-sm">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
        
        <Link href={href}>
          <Button className="bg-black hover:bg-gray-800 text-white rounded-none px-6 py-5">
            Read Full Article
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
      
      <div className="order-1 lg:order-2">
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