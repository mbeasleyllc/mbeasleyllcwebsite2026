import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function InsightsCTA() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Put These Insights Into Action?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Partner with Beasley Consulting to transform strategic thinking into tangible business results. Our team of experts is ready to help you navigate complex challenges and unlock new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://tidycal.com/mikebeasley/30-minute-meeting" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-black hover:bg-gray-100 rounded-none px-8 py-6 text-lg">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-none px-8 py-6 text-lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}