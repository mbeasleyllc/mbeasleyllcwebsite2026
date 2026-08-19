import React from "react";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

export default function AboutTeam() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership</h2>
          <p className="text-xl text-gray-600">
            Meet the visionary behind Mike Beasley & Associates who drives our mission and success.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
                <Image 
                  src="/headshot-1731700227635-11-maof4udv.png" 
                  alt="Michael Beasley" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-6 flex justify-center gap-4">
                <a href="https://www.linkedin.com/in/mike-beasley-04a8389/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                  <Linkedin size={24} className="text-gray-700" />
                </a>
                <a href="https://twitter.com" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                  <Twitter size={24} className="text-gray-700" />
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Michael Beasley</h3>
              <p className="text-xl text-gray-500 mb-6">Founder & CEO</p>
              <div className="space-y-4 text-gray-600">
                <p>
                  With over 15 years of experience in complex business solution projects and programs, Michael founded Mike Beasley & Associates LLC with a vision to transform how businesses approach growth and innovation.
                </p>
                <p>
                  Under his leadership, the firm has grown to serve clients across multiple industries, helping them navigate complex challenges and achieve sustainable success in rapidly evolving markets.
                </p>
                <p>
                  Mike's expertise spans business strategy, organizational transformation, and leadership development. He is passionate about building lasting partnerships with clients and delivering solutions that create meaningful impact.
                </p>
                <p>
                  Prior to founding Mike Beasley & Associates, Mike held senior leadership positions in both Healthcare and Education sectors.
                </p>
                <p>
                  Connect with Mike on <a href="https://www.linkedin.com/in/mike-beasley-04a8389/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a> to learn more about his professional background and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}