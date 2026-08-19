
import React from "react";

export default function OperationsHero() {
  return (
    <section className="relative py-20 bg-gray-900 text-white">
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')" }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Operations Excellence Services</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Optimize your operations to enhance efficiency, reduce costs, and improve overall performance in today's competitive business environment.
          </p>
        </div>
      </div>
    </section>
  );
}
