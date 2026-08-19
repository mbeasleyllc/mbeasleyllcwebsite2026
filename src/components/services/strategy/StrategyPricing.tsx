
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
          {price !== "Custom" && <span className="text-gray-500 ml-1">/project</span>}
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

export default function StrategyPricing() {
  const strategyAssessmentFeatures = [
    { text: "Organizational assessment", included: true },
    { text: "Market analysis", included: true },
    { text: "Competitive positioning review", included: true },
    { text: "SWOT analysis", included: true },
    { text: "Strategic recommendations report", included: true },
    { text: "1 executive presentation", included: true },
    { text: "Implementation roadmap", included: false },
    { text: "Ongoing implementation support", included: false },
    { text: "Change management planning", included: false },
    { text: "Performance metrics framework", included: false },
  ];

  const strategicPlanningFeatures = [
    { text: "Organizational assessment", included: true },
    { text: "Market analysis", included: true },
    { text: "Competitive positioning review", included: true },
    { text: "SWOT analysis", included: true },
    { text: "Strategic recommendations report", included: true },
    { text: "2 executive presentations", included: true },
    { text: "Implementation roadmap", included: true },
    { text: "90-day implementation support", included: true },
    { text: "Change management planning", included: true },
    { text: "Performance metrics framework", included: false },
  ];

  const transformationFeatures = [
    { text: "Organizational assessment", included: true },
    { text: "Market analysis", included: true },
    { text: "Competitive positioning review", included: true },
    { text: "SWOT analysis", included: true },
    { text: "Strategic recommendations report", included: true },
    { text: "3 executive presentations", included: true },
    { text: "Implementation roadmap", included: true },
    { text: "6-month implementation support", included: true },
    { text: "Change management planning", included: true },
    { text: "Performance metrics framework", included: true },
  ];

  const enterpriseFeatures = [
    { text: "Comprehensive organizational assessment", included: true },
    { text: "In-depth market analysis", included: true },
    { text: "Competitive positioning strategy", included: true },
    { text: "Advanced SWOT analysis", included: true },
    { text: "Comprehensive strategy development", included: true },
    { text: "Unlimited executive presentations", included: true },
    { text: "Detailed implementation roadmap", included: true },
    { text: "12-month implementation support", included: true },
    { text: "Comprehensive change management", included: true },
    { text: "Custom performance dashboard", included: true },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Consulting Packages</h2>
          <p className="text-xl text-gray-600">
            Choose the right strategic consulting package to address your organization's unique challenges and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PricingTier
            name="Strategy Assessment"
            price="$25,000"
            description="Perfect for organizations seeking to evaluate their current strategic position and identify opportunities."
            features={strategyAssessmentFeatures}
          />
          
          <PricingTier
            name="Strategic Planning"
            price="$50,000"
            description="Ideal for businesses needing a comprehensive strategic plan with implementation support."
            features={strategicPlanningFeatures}
            popular={true}
          />
          
          <PricingTier
            name="Business Transformation"
            price="$95,000"
            description="Comprehensive solution for organizations undergoing significant strategic change or repositioning."
            features={transformationFeatures}
          />
          
          <PricingTier
            name="Enterprise Strategy"
            price="Custom"
            description="Tailored solution for large organizations with complex strategic challenges across multiple business units."
            features={enterpriseFeatures}
          />
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-white p-8 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Flexible Engagement Models</h3>
            <p className="text-gray-600 mb-4">
              All pricing is based on standard strategic consulting engagements. For organizations with unique requirements or specialized industry needs, custom pricing and engagement models are available.
            </p>
            <p className="text-gray-600">
              We also offer ongoing strategic advisory services on a retainer basis for organizations seeking continuous strategic guidance and support. Contact us to discuss your specific needs and receive a customized proposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
