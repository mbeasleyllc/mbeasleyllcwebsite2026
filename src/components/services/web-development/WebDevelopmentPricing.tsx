
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

export default function WebDevelopmentPricing() {
  const basicFeatures = [
    { text: "Responsive website design", included: true },
    { text: "Up to 10 pages", included: true },
    { text: "Content management system", included: true },
    { text: "Mobile optimization", included: true },
    { text: "Basic SEO setup", included: true },
    { text: "Contact form", included: true },
    { text: "Social media integration", included: true },
    { text: "2 rounds of revisions", included: true },
    { text: "E-commerce functionality", included: false },
    { text: "Custom animations", included: false },
  ];

  const businessFeatures = [
    { text: "Responsive website design", included: true },
    { text: "Up to 20 pages", included: true },
    { text: "Advanced content management", included: true },
    { text: "Mobile optimization", included: true },
    { text: "Comprehensive SEO setup", included: true },
    { text: "Contact form with automation", included: true },
    { text: "Social media integration", included: true },
    { text: "3 rounds of revisions", included: true },
    { text: "Basic e-commerce (up to 50 products)", included: true },
    { text: "Performance optimization", included: true },
  ];

  const enterpriseFeatures = [
    { text: "Custom website design", included: true },
    { text: "Unlimited pages", included: true },
    { text: "Advanced content management", included: true },
    { text: "Mobile optimization", included: true },
    { text: "Advanced SEO implementation", included: true },
    { text: "Custom forms with automation", included: true },
    { text: "Social media & third-party integrations", included: true },
    { text: "Unlimited revisions", included: true },
    { text: "Full e-commerce functionality", included: true },
    { text: "Custom features & functionality", included: true },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Development Pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the right web development package for your business needs and growth objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            name="Basic Website"
            price="$3,500 - $5,000"
            description="Perfect for small businesses and startups looking to establish an online presence."
            features={basicFeatures}
          />
          
          <PricingTier
            name="Business Website"
            price="$5,000 - $10,000"
            description="Ideal for growing businesses that need more functionality and customization."
            features={businessFeatures}
            popular={true}
          />
          
          <PricingTier
            name="Enterprise Solution"
            price="$10,000+"
            description="Comprehensive web solutions for businesses with complex requirements and custom functionality."
            features={enterpriseFeatures}
          />
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-white p-8 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Custom Project Pricing</h3>
            <p className="text-gray-600 mb-4">
              Every web project is unique, and pricing can vary based on specific requirements, complexity, and timeline. The prices above represent typical ranges for each category of website.
            </p>
            <p className="text-gray-600">
              For a precise quote tailored to your specific project needs, schedule a consultation with our web development team. We'll discuss your goals, requirements, and provide a detailed proposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
