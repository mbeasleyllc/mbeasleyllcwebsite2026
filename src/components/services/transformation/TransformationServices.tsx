
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart, 
  Palette, 
  Server, 
  GraduationCap, 
  BookOpen, 
  Users, 
  FileText, 
  Layers 
} from "lucide-react";

interface TransformationServiceProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

function TransformationService({ title, description, icon }: TransformationServiceProps) {
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

export default function TransformationServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Transformation Services</h2>
          <p className="text-xl text-gray-600">
            We offer comprehensive digital transformation services designed to help your organization leverage technology to drive growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <TransformationService 
            title="Digital Strategy Development"
            icon={<BarChart size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Crafting clear, actionable digital transformation roadmaps aligned with business goals.</li>
                  <li>Identifying technology opportunities and integration plans to drive growth.</li>
                </ul>
              </div>
            }
          />
          
          <TransformationService 
            title="Graphic and Web Design for Digital Platforms"
            icon={<Palette size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Designing modern, responsive websites optimized for user experience and conversions.</li>
                  <li>Creating branded digital assets to enhance online presence.</li>
                </ul>
              </div>
            }
          />
          
          <TransformationService 
            title="IT Systems Integration"
            icon={<Server size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Integrating disparate IT systems to streamline workflows and improve data flow.</li>
                  <li>Implementing cloud-based solutions for scalability and accessibility.</li>
                </ul>
              </div>
            }
          />
          
          <TransformationService 
            title="Learning Management System (LMS) Implementation"
            icon={<GraduationCap size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Setting up and customizing LMS platforms for corporate training or educational purposes.</li>
                  <li>Integrating LMS with existing IT infrastructure for seamless management.</li>
                </ul>
              </div>
            }
          />
          
          <TransformationService 
            title="E-Learning Course Development"
            icon={<BookOpen size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Designing interactive, engaging digital courses tailored to learner needs.</li>
                  <li>Using multimedia and instructional design principles to enhance learning outcomes.</li>
                </ul>
              </div>
            }
          />
          
          <TransformationService 
            title="Building Virtual Communities"
            icon={<Users size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developing and managing online communities to foster collaboration and engagement.</li>
                  <li>Integrating community platforms with other digital tools for enhanced communication.</li>
                </ul>
              </div>
            }
          />
          
          <TransformationService 
            title="Digital Content Strategy and Management"
            icon={<FileText size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Planning and managing digital content to support transformation goals.</li>
                  <li>Ensuring content aligns with brand and drives user engagement.</li>
                </ul>
              </div>
            }
          />
          
          <TransformationService 
            title="User Experience (UX) Optimization"
            icon={<Layers size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Analyzing and improving digital touchpoints for intuitive user journeys.</li>
                  <li>Conducting usability testing and iteration based on feedback.</li>
                </ul>
              </div>
            }
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 border-l-4 border-black">
            <h3 className="text-xl font-bold mb-4">Our Digital Transformation Approach</h3>
            <p className="text-gray-600 mb-4">
              At Beasley Consulting, we take a holistic approach to digital transformation. We understand that successful digital initiatives require more than just technology—they need the right strategy, people, and processes to drive meaningful change.
            </p>
            <p className="text-gray-600">
              Our digital transformation services are designed to help you navigate the complexities of digital change, ensuring that your technology investments deliver real business value and position your organization for long-term success in the digital economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
