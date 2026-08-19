
import React from "react";

export default function LearningManagementHero() {
  return (
    <section className="relative py-20 bg-gray-900 text-white">
      <div className="absolute inset-0 z-0 opacity-60">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-28 md:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Management Services</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Transform your organization's learning ecosystem with comprehensive LMS solutions that streamline training delivery and enhance learning outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
