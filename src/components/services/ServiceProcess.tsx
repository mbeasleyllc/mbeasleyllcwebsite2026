
import React from "react";

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

export default function ServiceProcess() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Process</h2>
          <p className="text-xl text-gray-600">
            A structured approach to delivering exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ProcessStep 
            number="01"
            title="Discovery & Assessment"
            description="We begin by understanding your business objectives, challenges, and requirements through in-depth consultations and assessments."
          />
          
          <ProcessStep 
            number="02"
            title="Strategy Development"
            description="Based on our findings, we develop a customized strategy and roadmap tailored to your specific needs and goals."
          />
          
          <ProcessStep 
            number="03"
            title="Solution Design"
            description="Our experts design comprehensive solutions that address your challenges and align with your strategic objectives."
          />
          
          <ProcessStep 
            number="04"
            title="Implementation"
            description="We execute the plan with precision, ensuring timely delivery and adherence to quality standards."
          />
          
          <ProcessStep 
            number="05"
            title="Testing & Refinement"
            description="Rigorous testing and refinement ensure that the solution meets all requirements and performs optimally."
          />
          
          <ProcessStep 
            number="06"
            title="Deployment & Support"
            description="We provide seamless deployment and ongoing support to ensure long-term success and continuous improvement."
          />
        </div>
      </div>
    </section>
  );
}
