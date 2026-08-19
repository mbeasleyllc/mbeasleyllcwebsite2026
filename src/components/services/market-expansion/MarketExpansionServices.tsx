import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Globe, 
  Server, 
  BookOpen, 
  GraduationCap, 
  Users, 
  Lightbulb 
} from "lucide-react";

interface MarketExpansionServiceProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

function MarketExpansionService({ title, description, icon }: MarketExpansionServiceProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8">
        <div className="mb-6 text-black">{icon}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        {description}
      </CardContent>
    </Card>
  );
}

export default function MarketExpansionServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Market Expansion Services</h2>
          <p className="text-xl text-gray-600">
            We offer comprehensive market expansion services designed to help your organization enter new markets successfully and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <MarketExpansionService 
            title="Brand & Visual Identity Enhancement"
            icon={<Palette size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create compelling graphic design assets to adapt and localize branding for new markets.</li>
                  <li>Develop marketing collateral that resonates with target audiences in different regions.</li>
                </ul>
              </div>
            }
          />
          
          <MarketExpansionService 
            title="Localized Web Design & Development"
            icon={<Globe size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Design and develop multi-language, culturally adapted websites to attract and engage new market segments.</li>
                  <li>Optimize user experience (UX) for specific regional preferences and behaviors.</li>
                </ul>
              </div>
            }
          />
          
          <MarketExpansionService 
            title="IT Systems Integration for New Markets"
            icon={<Server size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Implement and integrate IT infrastructure to support expanded operations, including CRM, ERP, and marketing automation tools.</li>
                  <li>Ensure seamless data flow and system compatibility across new regional offices or partners.</li>
                </ul>
              </div>
            }
          />
          
          <MarketExpansionService 
            title="Learning Management System (LMS) Rollout & Customization"
            icon={<BookOpen size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Customize LMS platforms to support training and onboarding of employees or clients in new markets.</li>
                  <li>Develop localized e-learning content that addresses the specific needs and regulations of target regions.</li>
                </ul>
              </div>
            }
          />
          
          <MarketExpansionService 
            title="Course Development for Market-Specific Training"
            icon={<GraduationCap size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create courses designed to equip sales teams or partners with knowledge about new products, compliance, and market dynamics.</li>
                  <li>Develop customer education programs to increase product adoption in new regions.</li>
                </ul>
              </div>
            }
          />
          
          <MarketExpansionService 
            title="Virtual Community Building & Engagement"
            icon={<Users size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Establish and manage online communities to build brand loyalty and gather market insights.</li>
                  <li>Facilitate virtual events, webinars, and forums tailored to regional audiences to foster engagement and feedback loops.</li>
                </ul>
              </div>
            }
          />
          
          <MarketExpansionService 
            title="Market Expansion Strategy Workshops"
            icon={<Lightbulb size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Conduct workshops combining design thinking and digital solutions to help clients map out expansion strategies.</li>
                  <li>Provide actionable roadmaps that align technology adoption with growth goals.</li>
                </ul>
              </div>
            }
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 border-l-4 border-black">
            <h3 className="text-xl font-bold mb-4">Our Market Expansion Approach</h3>
            <p className="text-gray-600 mb-4">
              At Mike Beasley & Associates, we understand that successful market expansion requires a comprehensive approach that addresses branding, technology, training, and community engagement. Our integrated solutions help organizations navigate the complexities of entering new markets with confidence.
            </p>
            <p className="text-gray-600">
              We work closely with your team to develop customized market expansion strategies that leverage your unique strengths while adapting to local market conditions, ensuring a smooth and successful entry into new territories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}