
import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8">
        <div className="mb-6 text-black">{icon}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          href={link}
          className="inline-flex items-center text-black font-medium hover:underline"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default function ServiceCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Categories</h2>
          <p className="text-xl text-gray-600">
            We offer a comprehensive range of consulting services designed to help your organization navigate complex challenges and achieve sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Strategic Consulting"
            description="Develop clear, actionable strategies that align with your organization's vision and drive sustainable growth in complex market environments."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M13 5v14"></path>
              </svg>
            }
            link="/services/strategy"
          />
          
          <ServiceCard 
            title="Operations Excellence"
            description="Optimize your operational processes, enhance efficiency, and reduce costs while maintaining high quality standards and customer satisfaction."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a9.97 9.97 0 0 0 7.071-2.929"></path>
                <path d="M3 16a9.966 9.966 0 0 0 2 6"></path>
                <path d="M12 2a9.965 9.965 0 0 0-6 2"></path>
                <path d="M14 8V5c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1Z"></path>
                <path d="m18 18-1.5-1.5"></path>
                <path d="M18 12h3c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-3c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1Z"></path>
                <path d="m7.5 10.5 1 1"></path>
                <path d="M3 12H2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z"></path>
                <path d="M12 22c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2s2 .9 2 2v3c0 1.1-.9 2-2 2Z"></path>
              </svg>
            }
            link="/services/operations"
          />
          
          <ServiceCard 
            title="Digital Transformation"
            description="Leverage technology to reimagine your business processes, customer experiences, and operational models for the digital age."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M7 7h10"></path>
                <path d="M7 12h10"></path>
                <path d="M7 17h10"></path>
              </svg>
            }
            link="/services/transformation"
          />
          
          <ServiceCard 
            title="Course Design"
            description="Create engaging, effective learning experiences that drive skill development and knowledge retention for your organization."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            }
            link="/services/course-design"
          />
          
          <ServiceCard 
            title="Web Development"
            description="Build powerful, responsive websites and web applications that drive business growth and deliver exceptional user experiences."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            }
            link="/services/web-development"
          />
          
          <ServiceCard 
            title="Learning Management"
            description="Implement and optimize learning management systems that streamline training delivery and enhance learning outcomes for your organization."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
              </svg>
            }
            link="/services/learning-management"
          />
        </div>
      </div>
    </section>
  );
}
