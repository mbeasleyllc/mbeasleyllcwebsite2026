import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MonitorSmartphone, 
  Palette, 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  Layers, 
  FileText 
} from "lucide-react";

interface StrategyServiceProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

function StrategyService({ title, description, icon }: StrategyServiceProps) {
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

export default function StrategyServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Strategic Consulting Services</h2>
          <p className="text-xl text-gray-600">
            We offer comprehensive strategic consulting services designed to help your organization navigate complex challenges and achieve sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <StrategyService 
            title="Digital Transformation Strategy"
            icon={<MonitorSmartphone size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Develop strategic plans for integrating IT systems that support business goals.</li>
                  <li>Roadmap for adopting new technologies to improve operational efficiency.</li>
                </ul>
              </div>
            }
          />
          
          <StrategyService 
            title="Branding & Visual Identity Strategy"
            icon={<Palette size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create comprehensive brand strategies that align graphic and web design with company vision.</li>
                  <li>Develop visual guidelines to ensure consistent brand messaging across platforms.</li>
                </ul>
              </div>
            }
          />
          
          <StrategyService 
            title="Web Presence and UX Strategy"
            icon={<LayoutDashboard size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Design and optimize website strategies focused on user experience and conversion.</li>
                  <li>Plan scalable web architectures that support business growth and evolving customer needs.</li>
                </ul>
              </div>
            }
          />
          
          <StrategyService 
            title="Learning & Development Strategy"
            icon={<GraduationCap size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Develop strategies for deploying learning management systems (LMS) to enhance employee training and development.</li>
                  <li>Plan content development and course delivery aligned with organizational goals.</li>
                </ul>
              </div>
            }
          />
          
          <StrategyService 
            title="Virtual Community Engagement Strategy"
            icon={<Users size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Design strategies for building and nurturing virtual communities to enhance customer loyalty or internal collaboration.</li>
                  <li>Recommend tools and platforms to support community engagement and growth.</li>
                </ul>
              </div>
            }
          />
          
          <StrategyService 
            title="Integrated IT & Design Solutions Strategy"
            icon={<Layers size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Align IT infrastructure with design and content needs for seamless user experiences.</li>
                  <li>Develop strategies for cross-functional integration of graphic/web design and IT systems.</li>
                </ul>
              </div>
            }
          />
          
          <StrategyService 
            title="Content Development Strategy"
            icon={<FileText size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Plan effective course development strategies that meet learning objectives and business needs.</li>
                  <li>Optimize content delivery within LMS platforms for maximum impact.</li>
                </ul>
              </div>
            }
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 border-l-4 border-black">
            <h3 className="text-xl font-bold mb-4">Our Strategic Approach</h3>
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