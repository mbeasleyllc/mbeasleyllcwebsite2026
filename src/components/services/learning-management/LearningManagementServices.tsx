
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Database,
  Users,
  BarChart,
  Settings,
  Shield,
  Headphones,
  BookOpen
} from "lucide-react";

interface LearningManagementServiceProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

function LearningManagementService({ title, description, icon }: LearningManagementServiceProps) {
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

export default function LearningManagementServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Learning Management Services</h2>
          <p className="text-xl text-gray-600">
            We provide comprehensive learning management solutions that help organizations deliver, track, and optimize their training and development programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <LearningManagementService 
            title="LMS Implementation"
            icon={<Database size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Full-service LMS platform setup and configuration tailored to your needs.</li>
                  <li>Seamless integration with existing systems and content migration.</li>
                </ul>
              </div>
            }
          />
          
          <LearningManagementService 
            title="User Management"
            icon={<Users size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Efficient user onboarding and role-based access control.</li>
                  <li>Custom user groups and learning paths configuration.</li>
                </ul>
              </div>
            }
          />
          
          <LearningManagementService 
            title="Analytics & Reporting"
            icon={<BarChart size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Comprehensive learning analytics and performance tracking.</li>
                  <li>Custom report creation and automated reporting schedules.</li>
                </ul>
              </div>
            }
          />
          
          <LearningManagementService 
            title="System Configuration"
            icon={<Settings size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Platform customization and branding to match your organization.</li>
                  <li>Advanced features setup and optimization.</li>
                </ul>
              </div>
            }
          />
          
          <LearningManagementService 
            title="Security & Compliance"
            icon={<Shield size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Implementation of robust security measures and access controls.</li>
                  <li>Compliance tracking and certification management.</li>
                </ul>
              </div>
            }
          />
          
          <LearningManagementService 
            title="Support & Training"
            icon={<Headphones size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Comprehensive admin and user training programs.</li>
                  <li>Ongoing technical support and system maintenance.</li>
                </ul>
              </div>
            }
          />
          
          <LearningManagementService 
            title="Content Management"
            icon={<BookOpen size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Content organization and metadata management.</li>
                  <li>Learning resource library setup and maintenance.</li>
                </ul>
              </div>
            }
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 border-l-4 border-black">
            <h3 className="text-xl font-bold mb-4">Our Learning Management Approach</h3>
            <p className="text-gray-600 mb-4">
              At Mike Beasley & Associates, we understand that effective learning management is crucial for organizational success. Our team combines technical expertise with learning design principles to implement LMS solutions that drive engagement and results.
            </p>
            <p className="text-gray-600">
              We work closely with your team to understand your unique requirements and implement a learning management system that aligns with your organizational goals while providing an intuitive experience for both administrators and learners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
