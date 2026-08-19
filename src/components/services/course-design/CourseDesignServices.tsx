
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Layout, 
  Video, 
  Users, 
  BarChart, 
  PenTool, 
  Lightbulb 
} from "lucide-react";

interface CourseDesignServiceProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

function CourseDesignService({ title, description, icon }: CourseDesignServiceProps) {
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

export default function CourseDesignServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Course Design Services</h2>
          <p className="text-xl text-gray-600">
            We design comprehensive learning experiences that engage participants, drive knowledge retention, and deliver measurable results for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <CourseDesignService 
            title="Curriculum Development"
            icon={<BookOpen size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Comprehensive curriculum mapping aligned with organizational goals and learning objectives.</li>
                  <li>Sequential learning path design that builds competency through structured progression.</li>
                </ul>
              </div>
            }
          />
          
          <CourseDesignService 
            title="Interactive Learning Modules"
            icon={<Layout size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Engaging, multimedia-rich learning modules that maintain participant interest and drive completion.</li>
                  <li>Scenario-based learning experiences that connect theory to practical application.</li>
                </ul>
              </div>
            }
          />
          
          <CourseDesignService 
            title="Video-Based Learning"
            icon={<Video size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Professional instructional videos that simplify complex concepts and enhance retention.</li>
                  <li>Micro-learning video segments optimized for modern attention spans and mobile consumption.</li>
                </ul>
              </div>
            }
          />
          
          <CourseDesignService 
            title="Collaborative Learning Experiences"
            icon={<Users size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Peer-to-peer learning activities that foster knowledge sharing and community building.</li>
                  <li>Facilitated discussion frameworks that encourage critical thinking and diverse perspectives.</li>
                </ul>
              </div>
            }
          />
          
          <CourseDesignService 
            title="Assessment & Evaluation Design"
            icon={<BarChart size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Comprehensive assessment strategies that accurately measure knowledge acquisition and skill development.</li>
                  <li>Performance-based evaluations that demonstrate practical application of learning.</li>
                </ul>
              </div>
            }
          />
          
          <CourseDesignService 
            title="Learning Experience Design"
            icon={<PenTool size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>User-centered design approach that optimizes the learning journey for engagement and retention.</li>
                  <li>Intuitive navigation and interface design that minimizes cognitive load and maximizes focus on content.</li>
                </ul>
              </div>
            }
          />
          
          <CourseDesignService 
            title="Custom Learning Solutions"
            icon={<Lightbulb size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Tailored learning experiences designed for your specific industry, audience, and organizational needs.</li>
                  <li>Blended learning approaches that combine the best of digital and traditional learning methodologies.</li>
                </ul>
              </div>
            }
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 border-l-4 border-black">
            <h3 className="text-xl font-bold mb-4">Our Course Design Approach</h3>
            <p className="text-gray-600 mb-4">
              At Mike Beasley & Associates, we believe effective learning experiences begin with understanding your organization's unique needs and objectives. Our instructional design team combines adult learning principles with cutting-edge technology to create courses that engage learners and deliver measurable results.
            </p>
            <p className="text-gray-600">
              We work collaboratively with your subject matter experts to transform complex knowledge into accessible, engaging learning experiences that drive skill development and support your organizational goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
