
import React from "react";
import Image from "next/image";

export default function Clients() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Leading Organizations</h2>
          <p className="text-lg text-gray-600">
            We've partnered with forward-thinking companies across industries to drive meaningful change.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {/* These would normally be actual client logos */}
          <div className="flex justify-center">
            <div className="h-12 w-32 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium">ACME Corp</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-12 w-32 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium">TechVision</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-12 w-32 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium">GlobalFin</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-12 w-32 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Innovate</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-12 w-32 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium">FutureTech</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-12 w-32 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium">NextGen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
