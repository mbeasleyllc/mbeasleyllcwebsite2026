import React from "react";
import { Linkedin } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function CaseStudyProcess() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach to Client Success</h2>
          <p className="text-xl text-gray-600">
            A proven methodology that delivers exceptional results for every engagement.
          </p>
          <div className="mt-4 flex justify-center">
            <a 
              href="https://www.linkedin.com/in/mike-beasley-04a8389/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <Linkedin size={20} className="mr-2" />
              <span>Connect with our team on LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ProcessStep 
            number="01"
            title="In-Depth Discovery"
            description="We begin by thoroughly understanding your business, challenges, and objectives through comprehensive research and stakeholder interviews."
          />
          
          <ProcessStep 
            number="02"
            title="Strategic Analysis"
            description="Our team analyzes the gathered information to identify key opportunities, challenges, and potential solutions tailored to your specific situation."
          />
          
          <ProcessStep 
            number="03"
            title="Solution Development"
            description="We develop a customized strategic roadmap with clear action items, timelines, and measurable outcomes aligned with your goals."
          />
          
          <ProcessStep 
            number="04"
            title="Implementation Support"
            description="Our experts work alongside your team to execute the strategy, providing guidance, resources, and expertise throughout the process."
          />
          
          <ProcessStep 
            number="05"
            title="Measurement & Optimization"
            description="We continuously monitor progress against key metrics, making data-driven adjustments to optimize results and maximize impact."
          />
          
          <ProcessStep 
            number="06"
            title="Knowledge Transfer"
            description="We ensure your team has the capabilities to sustain success, providing training, documentation, and ongoing support as needed."
          />
        </div>
      </div>
    </section>
  );
}