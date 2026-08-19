
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
          {price !== "Custom" && <span className="text-gray-500 ml-1">/month</span>}
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

export default function LearningManagementPricing() {
  const basicFeatures = [
    { text: "LMS setup & configuration", included: true },
    { text: "Up to 100 user accounts", included: true },
    { text: "Basic user management", included: true },
    { text: "Standard reporting", included: true },
    { text: "Content organization", included: true },
    { text: "Email support", included: true },
    { text: "Basic security features", included: true },
    { text: "Custom branding", included: false },
    { text: "Advanced integrations", included: false },
    { text: "Dedicated support manager", included: false },
  ];

  const professionalFeatures = [
    { text: "LMS setup & configuration", included: true },
    { text: "Up to 500 user accounts", included: true },
    { text: "Advanced user management", included: true },
    { text: "Custom reporting & analytics", included: true },
    { text: "Content organization & tagging", included: true },
    { text: "Email & phone support", included: true },
    { text: "Enhanced security features", included: true },
    { text: "Custom branding", included: true },
    { text: "Basic third-party integrations", included: true },
    { text: "Dedicated support manager", included: false },
  ];

  const enterpriseFeatures = [
    { text: "LMS setup & configuration", included: true },
    { text: "Unlimited user accounts", included: true },
    { text: "Advanced user & group management", included: true },
    { text: "Advanced analytics dashboard", included: true },
    { text: "Advanced content management", included: true },
    { text: "Priority support (email, phone, chat)", included: true },
    { text: "Enterprise-grade security", included: true },
    { text: "Custom branding & white labeling", included: true },
    { text: "Advanced API integrations", included: true },
    { text: "Dedicated account manager", included: true },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Management Pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the right learning management solution for your organization's training needs and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            name="Basic LMS"
            price="$5,000"
            description="Ideal for small organizations just starting with structured learning management."
            features={basicFeatures}
          />
          
          <PricingTier
            name="Professional LMS"
            price="$10,000"
            description="Perfect for growing organizations with more complex training requirements."
            features={professionalFeatures}
            popular={true}
          />
          
          <PricingTier
            name="Enterprise LMS"
            price="Custom"
            description="Comprehensive solution for large organizations with advanced learning needs."
            features={enterpriseFeatures}
          />
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-white p-8 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Custom Implementation Options</h3>
            <p className="text-gray-600 mb-4">
              All pricing includes initial setup, configuration, and one month of support. For ongoing support and maintenance, we offer flexible monthly service plans tailored to your organization's needs.
            </p>
            <p className="text-gray-600">
              For organizations with unique requirements or existing LMS platforms that need optimization, we offer custom consulting services. Contact us for a personalized assessment and quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
