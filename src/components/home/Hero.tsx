import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')" }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 md:px-4.5 lg:px-6 relative z-20">
        <div className="max-w-3xl pt-16 md:pt-18 lg:pt-20">
          <div className="mb-4">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 text-sm font-medium">
              Official Suite1 Partner
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transform Your Business with Suite1 Platform & Expert Consulting
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Complete business management platform powered by SuiteDash, combined with automation, AI integration, and strategic consulting services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" passHref>
              <Button className="bg-white text-black hover:bg-gray-100 rounded-none px-8 py-6 text-lg">
                Request Platform Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services" passHref>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/50 rounded-none px-8 py-6 text-lg">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <div className="w-0.5 h-10 bg-white/50 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}