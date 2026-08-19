
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
}

function PricingTier({ name, price, description, features, popular = false }: PricingTierProps) {
  return (
    <Card className={`border ${popular ? 'border-black shadow-lg' : 'border-gray-200'} h-full flex flex-col`}>
      <CardHeader className={`${popular ? 'bg-gray-50' : ''}`}>
        {popular && (
          <div className="py-1 px-3 bg-black text-white text-xs font-semibold rounded-full w-fit mb-2">
            MOST POPULAR
          </div>
        )}
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-gray-500 ml-1">/program</span>}
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={`mr-2 mt-1 ${feature.included ? 'text-green-500' : 'text-gray-300'}`}>
                <Check size={16} />
              </span>
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full mt-auto ${popular ? 'bg-black hover:bg-gray-800' : 'bg-white text-black border border-gray-300 hover:bg-gray-50'}`}
          variant={popular ? "default" : "outline"}
        >
          <a href="https://tidycal.com/mbeasleyllc/30-minute-consultation" target="_blank" rel="noopener noreferrer" className="w-full">
            Schedule Consultation
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function LeadershipPricing() {
  const leadershipAssessmentFeatures = [
    { text: "Leadership competency assessment", included: true },
    { text: "Individual leadership profiles", included: true },
    { text: "Strengths & development areas", included: true },
    { text: "Leadership gap analysis", included: true },
    { text: "Development recommendations", included: true },
    { text: "1 leadership workshop", included: true },
    { text: "Development planning", included: false },
    { text: "Coaching sessions", included: false },
    { text: "Team alignment activities", included: false },
    { text: "Progress measurement", included: false },
  ];

  const leadershipDevelopmentFeatures = [
    { text: "Leadership competency assessment", included: true },
    { text: "Individual leadership profiles", included: true },
    { text: "Strengths & development areas", included: true },
    { text: "Leadership gap analysis", included: true },
    { text: "Development recommendations", included: true },
    { text: "3 leadership workshops", included: true },
    { text: "Development planning", included: true },
    { text: "4 coaching sessions per leader", included: true },
    { text: "Team alignment activities", included: true },
    { text: "Progress measurement", included: false },
  ];

  const leadershipTransformationFeatures = [
    { text: "Leadership competency assessment", included: true },
    { text: "Individual leadership profiles", included: true },
    { text: "Strengths & development areas", included: true },
    { text: "Leadership gap analysis", included: true },
    { text: "Development recommendations", included: true },
    { text: "6 leadership workshops", included: true },
    { text: "Development planning", included: true },
    { text: "8 coaching sessions per leader", included: true },
    { text: "Team alignment activities", included: true },
    { text: "Progress measurement", included: true },
  ];

  const enterpriseFeatures = [
    { text: "Comprehensive leadership assessment", included: true },
    { text: "Detailed individual & team profiles", included: true },
    { text: "Advanced strengths & gaps analysis", included: true },
    { text: "Organizational leadership analysis", included: true },
    { text: "Customized development strategy", included: true },
    { text: "Unlimited leadership workshops", included: true },
    { text: "Comprehensive development planning", included: true },
    { text: "Ongoing executive coaching", included: true },
    { text: "Advanced team development", included: true },
    { text: "Leadership performance dashboard", included: true },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Development Programs</h2>
          <p className="text-xl text-gray-600">
            Choose the right leadership development program to build strong leadership capabilities throughout your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PricingTier
            name="Leadership Assessment"
            price="$15,000"
            description="Perfect for organizations seeking to evaluate current leadership capabilities and identify development opportunities."
            features={leadershipAssessmentFeatures}
          />
          
          <PricingTier
            name="Leadership Development"
            price="$35,000"
            description="Ideal for businesses looking to enhance leadership capabilities with structured development and coaching."
            features={leadershipDevelopmentFeatures}
            popular={true}
          />
          
          <PricingTier
            name="Leadership Transformation"
            price="$75,000"
            description="Comprehensive solution for organizations undergoing significant leadership changes or culture shifts."
            features={leadershipTransformationFeatures}
          />
          
          <PricingTier
            name="Enterprise Leadership"
            price="Custom"
            description="Tailored solution for large organizations with complex leadership development needs across multiple levels."
            features={enterpriseFeatures}
          />
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-white p-8 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Flexible Program Options</h3>
            <p className="text-gray-600 mb-4">
              All pricing is based on standard leadership development programs. For organizations with unique requirements or specialized industry needs, custom pricing and program structures are available.
            </p>
            <p className="text-gray-600">
              We also offer ongoing leadership coaching and advisory services on a retainer basis for organizations seeking continuous leadership development support. Contact us to discuss your specific needs and receive a customized proposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
