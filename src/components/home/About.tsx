import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function About() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Official Suite1 Partner & Business Transformation Experts</h2>
            <p className="text-lg text-gray-600 mb-6">
              As an authorized Suite1 partner, Mike Beasley & Associates combines the power of SuiteDash's all-in-one business platform with over 15 years of consulting expertise in automation, AI integration, and strategic transformation.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We don't just deliver software—we ensure it's configured, customized, and optimized for your specific business needs. Our comprehensive approach includes platform implementation, workflow automation, AI-powered enhancements, and ongoing strategic guidance to help you achieve sustainable growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-3xl font-bold text-black">15+</p>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">Suite1</p>
                <p className="text-gray-600">Official Partner</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link href="/about">
                <Button className="bg-black hover:bg-gray-800 text-white rounded-none px-8 py-6">
                  Learn More About Us
                </Button>
              </Link>
              <a 
                href="https://www.linkedin.com/in/mike-beasley-04a8389/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-black transition-colors"
              >
                <Linkedin size={20} className="mr-2" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] w-full">
              <Image 
                src="/generated-image-2-2-maor12w2.jpg"
                alt="Team collaboration at Mike Beasley & Associates" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 max-w-xs">
              <p className="text-lg font-medium mb-2">Our Mission</p>
              <p>To empower organizations with cutting-edge platform technology and expert guidance for sustainable growth and operational excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}