import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function AboutMission() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[500px] w-full">
              <Image 
                src="/headshot-1731700227635-1-mapi1pyy.png" 
                alt="Mike Beasley, Founder of Beasley Consulting" 
                fill={true}
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 max-w-xs">
              <p className="text-lg font-medium mb-2">Our Purpose</p>
              <p>To empower organizations to achieve their full potential through strategic guidance and operational excellence.</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Mike Beasley & Associates, our mission is to empower organizations to navigate complex challenges and unlock sustainable growth opportunities. We believe that every business has untapped potential that can be realized through strategic thinking and operational excellence.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our vision is to be the most trusted strategic partner for forward-thinking organizations seeking transformative growth. We aim to set the standard for consulting excellence through our commitment to innovation, integrity, and impactful results.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We measure our success by the success of our clients. When they achieve their goals and realize their vision, we know we've fulfilled our purpose.
            </p>
            <div className="flex items-center mt-4">
              <a 
                href="https://www.linkedin.com/in/mike-beasley-04a8389/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-black transition-colors"
              >
                <Linkedin size={20} className="mr-2" />
                <span>Connect with Mike on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
