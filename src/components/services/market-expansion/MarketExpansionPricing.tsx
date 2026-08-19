
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

export default function MarketExpansionPricing() {
  const marketAssessmentFeatures = [
    { text: "Market opportunity analysis", included: true },
    { text: "Competitive landscape review", included: true },
    { text: "Target customer profiling", included: true },
    { text: "Market entry barriers assessment", included: true },
    { text: "Expansion recommendations report", included: true },
    { text: "1 executive presentation", included: true },
    { text: "Go-to-market strategy", included: false },
    { text: "Implementation support", included: false },
    { text: "Channel development", included: false },
    { text: "Performance metrics framework", included: false },
  ];

  const marketEntryFeatures = [
    { text: "Market opportunity analysis", included: true },
    { text: "Competitive landscape review", included: true },
    { text: "Target customer profiling", included: true },
    { text: "Market entry barriers assessment", included: true },
    { text: "Expansion recommendations report", included: true },
    { text: "2 executive presentations", included: true },
    { text: "Go-to-market strategy", included: true },
    { text: "90-day implementation support", included: true },
    { text: "Channel development", included: true },
    { text: "Performance metrics framework", included: false },
  ];

  const marketExpansionFeatures = [
    { text: "Market opportunity analysis", included: true },
    { text: "Competitive landscape review", included: true },
    { text: "Target customer profiling", included: true },
    { text: "Market entry barriers assessment", included: true },
    { text: "Expansion recommendations report", included: true },
    { text: "3 executive presentations", included: true },
    { text: "Go-to-market strategy", included: true },
    { text: "6-month implementation support", included: true },
    { text: "Channel development", included: true },
    { text: "Performance metrics framework", included: true },
  ];

  const enterpriseFeatures = [
    { text: "Comprehensive market analysis", included: true },
    { text: "In-depth competitive intelligence", included: true },
    { text: "Advanced customer segmentation", included: true },
    { text: "Strategic entry barrier solutions", included: true },
    { text: "Comprehensive expansion strategy", included: true },
    { text: "Unlimited executive presentations", included: true },
    { text: "Detailed go-to-market roadmap", included: true },
    { text: "12-month implementation support", included: true },
    { text: "Strategic partnership development", included: true },
    { text: "Custom performance dashboard", included: true },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Expansion Packages</h2>
          <p className="text-xl text-gray-600">
            Choose the right market expansion package to help your organization identify and capitalize on new growth opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PricingTier
            name="Market Assessment"
            price="$25,000"
            description="Perfect for organizations seeking to evaluate market opportunities and identify potential expansion areas."
            features={marketAssessmentFeatures}
          />
          
          <PricingTier
            name="Market Entry"
            price="$50,000"
            description="Ideal for businesses ready to enter new markets with a structured approach and implementation support."
            features={marketEntryFeatures}
            popular={true}
          />
          
          <PricingTier
            name="Market Expansion"
            price="$95,000"
            description="Comprehensive solution for organizations pursuing significant growth through new market development."
            features={marketExpansionFeatures}
          />
          
          <PricingTier
            name="Enterprise Expansion"
            price="Custom"
            description="Tailored solution for large organizations with complex market expansion needs across multiple regions or segments."
            features={enterpriseFeatures}
          />
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-white p-8 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Flexible Engagement Models</h3>
            <p className="text-gray-600 mb-4">
              All pricing is based on standard market expansion engagements. For organizations with unique requirements or specialized industry needs, custom pricing and engagement models are available.
            </p>
            <p className="text-gray-600">
              We also offer ongoing market advisory services on a retainer basis for organizations seeking continuous guidance through their expansion journey. Contact us to discuss your specific needs and receive a customized proposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
