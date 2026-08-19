
import React from "react";
import { CheckCircle, Target, Users, LineChart, Lightbulb, Rocket } from "lucide-react";

interface ApproachStepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ApproachStep({ title, description, icon }: ApproachStepProps) {
  return (
    <div className="flex gap-6 items-start">
      <div className="text-black bg-gray-100 p-4 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function AboutApproach() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Approach</h2>
          <p className="text-xl text-gray-600">
            We follow a proven methodology that delivers consistent results for our clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <ApproachStep 
            title="Discovery & Assessment"
            description="We begin by deeply understanding your organization's current state, challenges, and aspirations through comprehensive analysis and stakeholder interviews."
            icon={<Target size={28} />}
          />
          
          <ApproachStep 
            title="Strategic Planning"
            description="Based on our findings, we develop a tailored strategic roadmap that aligns with your goals and leverages your unique strengths and opportunities."
            icon={<LineChart size={28} />}
          />
          
          <ApproachStep 
            title="Collaborative Design"
            description="We work closely with your team to co-create solutions that address your specific challenges and fit seamlessly with your organizational culture."
            icon={<Users size={28} />}
          />
          
          <ApproachStep 
            title="Innovation & Ideation"
            description="Our approach incorporates creative thinking and industry best practices to develop innovative solutions that drive competitive advantage."
            icon={<Lightbulb size={28} />}
          />
          
          <ApproachStep 
            title="Implementation Support"
            description="We don't just provide recommendations—we partner with you throughout the implementation process to ensure successful execution."
            icon={<Rocket size={28} />}
          />
          
          <ApproachStep 
            title="Measurement & Refinement"
            description="We establish clear metrics to track progress, evaluate outcomes, and continuously refine our approach to maximize impact and results."
            icon={<CheckCircle size={28} />}
          />
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Why Our Approach Works</h3>
          <p className="text-lg text-gray-600 mb-6">
            Our methodology is built on years of experience working with organizations across industries. We combine proven frameworks with a flexible, client-centered approach that adapts to your unique context and needs.
          </p>
          <p className="text-lg text-gray-600">
            By focusing on collaboration, practical implementation, and measurable outcomes, we ensure that our work creates lasting value and sustainable results for your organization.
          </p>
        </div>
      </div>
    </section>
  );
}
