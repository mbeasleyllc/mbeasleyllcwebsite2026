import React from "react";

export default function CaseStudiesHero() {
  return (
    <section className="relative py-20 md:py-28 bg-black text-white pt-[100px]">
      <div className="container mx-auto px-3 md:px-4.5 lg:px-6">
        <div className="max-w-3xl pt-10 md:pt-12 lg:pt-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Case Studies</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Explore how we've helped organizations overcome challenges and achieve remarkable results through strategic consulting and implementation.
          </p>
          <div className="flex flex-wrap gap-6 mt-8">
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-gray-400">Success Stories</p>
            </div>
            <div className="w-px bg-white/20 h-16"></div>
            <div>
              <p className="text-3xl font-bold">9</p>
              <p className="text-gray-400">Industries Served</p>
            </div>
            <div className="w-px bg-white/20 h-16"></div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}