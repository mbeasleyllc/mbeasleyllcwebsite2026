
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ProcessImprovementServices() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Process Improvement Services</h2>
          <p className="text-lg text-gray-600">
            We help organizations optimize their operations through streamlined workflows, 
            enhanced digital processes, and data-driven improvements.
          </p>
        </div>

        <div className="space-y-12">
          <ServiceItem 
            number="1" 
            title="Process Optimization for Digital Workflows" 
            description={
              <>
                <p className="mb-4">
                  We help you streamline graphic and web design project workflows to improve efficiency and reduce turnaround time.
                </p>
                <ul className="space-y-2">
                  <BulletPoint text="Streamline graphic and web design project workflows to improve efficiency and reduce turnaround time." />
                  <BulletPoint text="Implement best practices for collaborative design and content creation processes." />
                </ul>
              </>
            } 
          />

          <ServiceItem 
            number="2" 
            title="IT Systems Integration & Automation" 
            description={
              <>
                <p className="mb-4">
                  Integrate your IT systems to create a seamless operational environment.
                </p>
                <ul className="space-y-2">
                  <BulletPoint text="Integrate IT systems to automate routine tasks and improve operational consistency." />
                  <BulletPoint text="Develop strategies for seamless data flow between design, LMS, and virtual community platforms." />
                </ul>
              </>
            } 
          />

          <ServiceItem 
            number="3" 
            title="Learning Management System (LMS) Operations Optimization" 
            description={
              <>
                <p className="mb-4">
                  Enhance your learning management systems for better user experience and operational control.
                </p>
                <ul className="space-y-2">
                  <BulletPoint text="Improve LMS administration processes to enhance user experience and reduce support overhead." />
                  <BulletPoint text="Automate course enrollment, tracking, and reporting for better operational control." />
                </ul>
              </>
            } 
          />

          <ServiceItem 
            number="4" 
            title="Course Development Workflow Management" 
            description={
              <>
                <p className="mb-4">
                  Establish efficient processes for creating and deploying high-quality educational content.
                </p>
                <ul className="space-y-2">
                  <BulletPoint text="Establish standardized procedures for course creation, review, and deployment to ensure quality and timeliness." />
                  <BulletPoint text="Use project management tools tailored for e-learning content production." />
                </ul>
              </>
            } 
          />

          <ServiceItem 
            number="5" 
            title="Virtual Community Management Efficiency" 
            description={
              <>
                <p className="mb-4">
                  Optimize your virtual community operations for better engagement and management.
                </p>
                <ul className="space-y-2">
                  <BulletPoint text="Design operational frameworks for virtual community moderation and engagement." />
                  <BulletPoint text="Implement tools and processes to monitor community health and participation metrics." />
                </ul>
              </>
            } 
          />

          <ServiceItem 
            number="6" 
            title="Quality Assurance in Digital Content Delivery" 
            description={
              <>
                <p className="mb-4">
                  Implement robust quality control processes for your digital content.
                </p>
                <ul className="space-y-2">
                  <BulletPoint text="Develop QA protocols for graphic/web assets and e-learning content to maintain high standards." />
                  <BulletPoint text="Set up feedback loops for continuous improvement in design and course materials." />
                </ul>
              </>
            } 
          />

          <ServiceItem 
            number="7" 
            title="Performance Metrics & Reporting Systems" 
            description={
              <>
                <p className="mb-4">
                  Implement data-driven systems to track and improve operational performance.
                </p>
                <ul className="space-y-2">
                  <BulletPoint text="Implement dashboards and reporting tools to track operational KPIs across design, IT, LMS, and communities." />
                  <BulletPoint text="Use data insights to identify bottlenecks and optimize resource allocation." />
                </ul>
              </>
            } 
          />
        </div>
      </div>
    </section>
  );
}

interface ServiceItemProps {
  number: string;
  title: string;
  description: React.ReactNode;
}

function ServiceItem({ number, title, description }: ServiceItemProps) {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-8">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
            {number}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <div className="text-gray-600">{description}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface BulletPointProps {
  text: string;
}

function BulletPoint({ text }: BulletPointProps) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}
