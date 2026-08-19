import React from "react";

export default function InsightsHero() {
  return (
    <section className="relative py-20 md:py-28 bg-black text-white pt-[150px]">
      <div className="container mx-auto px-3 md:px-4.5 lg:px-6">
        <div className="max-w-3xl pt-10 md:pt-12 lg:pt-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Insights</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Expert perspectives on business strategy, leadership, digital transformation, and industry trends to help you navigate complex challenges.
          </p>
          <div className="flex flex-wrap gap-6 mt-8">
            <div>
              <p className="text-3xl font-bold">100+</p>
              <p className="text-gray-400">Articles Published</p>
            </div>
            <div className="w-px bg-white/20 h-16"></div>
            <div>
              <p className="text-3xl font-bold">12</p>
              <p className="text-gray-400">Industry Reports</p>
            </div>
            <div className="w-px bg-white/20 h-16"></div>
            <div>
              <p className="text-3xl font-bold">5k+</p>
              <p className="text-gray-400">Monthly Readers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}