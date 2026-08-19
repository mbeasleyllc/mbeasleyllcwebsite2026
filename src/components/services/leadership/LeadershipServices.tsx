
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Server, 
  Video, 
  BarChart, 
  Palette, 
  Database, 
  Users 
} from "lucide-react";

interface LeadershipServiceProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

function LeadershipService({ title, description, icon }: LeadershipServiceProps) {
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

export default function LeadershipServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Development Services</h2>
          <p className="text-xl text-gray-600">
            We offer comprehensive leadership development services designed to help your organization build strong leadership capabilities at all levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <LeadershipService 
            title="Custom Leadership Training Course Development"
            icon={<BookOpen size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Design and develop tailored leadership training programs using instructional design best practices.</li>
                  <li>Create engaging multimedia content (videos, graphics, interactive modules) to enhance learning.</li>
                </ul>
              </div>
            }
          />
          
          <LeadershipService 
            title="Learning Management System (LMS) Integration and Management"
            icon={<Server size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Implement and customize LMS platforms to deliver leadership development courses.</li>
                  <li>Manage course enrollment, progress tracking, and reporting for leadership programs.</li>
                </ul>
              </div>
            }
          />
          
          <LeadershipService 
            title="Virtual Leadership Workshops and Webinars"
            icon={<Video size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Design and facilitate virtual workshops focused on leadership skills, team building, and strategic thinking.</li>
                  <li>Utilize virtual communities to foster ongoing engagement and peer learning.</li>
                </ul>
              </div>
            }
          />
          
          <LeadershipService 
            title="Leadership Assessment and Feedback Tools"
            icon={<BarChart size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Develop online tools and surveys to assess leadership competencies and gather 360-degree feedback.</li>
                  <li>Provide data visualization and reporting to help leaders understand strengths and areas for growth.</li>
                </ul>
              </div>
            }
          />
          
          <LeadershipService 
            title="Digital Branding & Communication for Leadership Initiatives"
            icon={<Palette size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create compelling visual branding and web design for leadership programs to improve participation and visibility.</li>
                  <li>Design communication materials such as newsletters, dashboards, and progress reports.</li>
                </ul>
              </div>
            }
          />
          
          <LeadershipService 
            title="IT Integration for Leadership Systems"
            icon={<Database size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Integrate leadership development tools with existing enterprise systems (HRIS, performance management).</li>
                  <li>Automate workflows related to leadership training and development tracking.</li>
                </ul>
              </div>
            }
          />
          
          <LeadershipService 
            title="Virtual Communities for Leadership Networking"
            icon={<Users size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Build and manage online communities or forums where leaders can share insights, challenges, and resources.</li>
                  <li>Use gamification and social learning strategies to boost interaction and motivation.</li>
                </ul>
              </div>
            }
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 border-l-4 border-black">
            <h3 className="text-xl font-bold mb-4">Our Leadership Development Approach</h3>
            <p className="text-gray-600 mb-4">
              At Beasley Consulting, we believe that effective leadership is essential for organizational success. Our approach to leadership development combines cutting-edge digital tools with proven leadership principles to create engaging, impactful learning experiences.
            </p>
            <p className="text-gray-600">
              We work closely with your organization to understand your unique leadership challenges and goals, then design customized solutions that develop the specific capabilities your leaders need to drive your business forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
