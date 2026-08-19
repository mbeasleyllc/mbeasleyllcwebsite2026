import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover how Suite1 platform combined with our automation and AI expertise can streamline operations and accelerate your growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" passHref>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-none px-8 py-6 text-lg">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services" passHref>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}