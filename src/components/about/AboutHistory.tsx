
import React from "react";

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
}

function Milestone({ year, title, description }: MilestoneProps) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-black bg-gray-100 px-4 py-2">{year}</div>
        <div className="w-px h-full bg-gray-200 mt-2"></div>
      </div>
      <div className="pb-12">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function AboutHistory() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600">
            From our founding to today, we've been committed to excellence and innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Milestone 
            year="2010"
            title="Foundation"
            description="Beasley Consulting was founded with a vision to provide strategic guidance to businesses navigating complex challenges."
          />
          
          <Milestone 
            year="2013"
            title="Expansion"
            description="We expanded our service offerings to include digital transformation and operational excellence, responding to evolving market needs."
          />
          
          <Milestone 
            year="2015"
            title="Global Reach"
            description="Beasley Consulting began serving international clients, bringing our expertise to organizations across North America, Europe, and Asia."
          />
          
          <Milestone 
            year="2018"
            title="Industry Recognition"
            description="Our firm received multiple industry awards for excellence in consulting services and client satisfaction."
          />
          
          <Milestone 
            year="2020"
            title="Innovation Focus"
            description="We launched our Innovation Lab, dedicated to developing cutting-edge methodologies and tools for strategic planning and execution."
          />
          
          <Milestone 
            year="2023"
            title="Present Day"
            description="Today, Beasley Consulting continues to grow and evolve, serving a diverse portfolio of clients and setting new standards for consulting excellence."
          />
        </div>
      </div>
    </section>
  );
}
