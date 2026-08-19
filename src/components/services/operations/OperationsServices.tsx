
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Workflow, 
  ServerCog, 
  GraduationCap, 
  ClipboardList, 
  Users, 
  CheckSquare, 
  BarChart3 
} from "lucide-react";

interface OperationsServiceProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

function OperationsService({ title, description, icon }: OperationsServiceProps) {
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

export default function OperationsServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Operations Excellence Services</h2>
          <p className="text-xl text-gray-600">
            We offer comprehensive operational improvement services designed to help your organization streamline processes, integrate systems, and enhance overall efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <OperationsService 
            title="Process Optimization for Digital Workflows"
            icon={<Workflow size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Streamline graphic and web design project workflows to improve efficiency and reduce turnaround time.</li>
                  <li>Implement best practices for collaborative design and content creation processes.</li>
                </ul>
              </div>
            }
          />
          
          <OperationsService 
            title="IT Systems Integration & Automation"
            icon={<ServerCog size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Integrate IT systems to automate routine tasks and improve operational consistency.</li>
                  <li>Develop strategies for seamless data flow between design, LMS, and virtual community platforms.</li>
                </ul>
              </div>
            }
          />
          
          <OperationsService 
            title="Learning Management System (LMS) Operations Optimization"
            icon={<GraduationCap size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Improve LMS administration processes to enhance user experience and reduce support overhead.</li>
                  <li>Automate course enrollment, tracking, and reporting for better operational control.</li>
                </ul>
              </div>
            }
          />
          
          <OperationsService 
            title="Course Development Workflow Management"
            icon={<ClipboardList size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Establish standardized procedures for course creation, review, and deployment to ensure quality and timeliness.</li>
                  <li>Use project management tools tailored for e-learning content production.</li>
                </ul>
              </div>
            }
          />
          
          <OperationsService 
            title="Virtual Community Management Efficiency"
            icon={<Users size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Design operational frameworks for virtual community moderation and engagement.</li>
                  <li>Implement tools and processes to monitor community health and participation metrics.</li>
                </ul>
              </div>
            }
          />
          
          <OperationsService 
            title="Quality Assurance in Digital Content Delivery"
            icon={<CheckSquare size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Develop QA protocols for graphic/web assets and e-learning content to maintain high standards.</li>
                  <li>Set up feedback loops for continuous improvement in design and course materials.</li>
                </ul>
              </div>
            }
          />
          
          <OperationsService 
            title="Performance Metrics & Reporting Systems"
            icon={<BarChart3 size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Implement dashboards and reporting tools to track operational KPIs across design, IT, LMS, and communities.</li>
                  <li>Use data insights to identify bottlenecks and optimize resource allocation.</li>
                </ul>
              </div>
            }
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 border-l-4 border-black">
            <h3 className="text-xl font-bold mb-4">Our Operational Approach</h3>
            <p className="text-gray-600 mb-4">
              At Beasley Consulting, we take a data-driven approach to operations excellence. We analyze your current processes, identify improvement opportunities, and implement practical solutions that drive measurable results.
            </p>
            <p className="text-gray-600">
              Our operations excellence services are designed to help you achieve greater efficiency, reduce costs, and improve quality across all operational areas of your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
