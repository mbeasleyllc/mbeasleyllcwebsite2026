import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Workflow, Cpu, LayoutDashboard, TrendingUp } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <CardContent className="p-8">
        <div className="mb-6 text-black">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          href={href}
          className="inline-flex items-center text-black font-medium group-hover:underline"
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Business Solutions</h2>
          <p className="text-xl text-gray-600">
            From white-label platform delivery to automation and AI integration, we provide everything you need to transform and scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="Suite1 Platform"
            description="All-in-one business management solution with CRM, project management, invoicing, client portals, and more—fully white-labeled for your brand."
            icon={<LayoutDashboard className="w-12 h-12" />}
            href="/services"
          />
          
          <ServiceCard 
            title="Business Automation"
            description="Streamline operations with intelligent workflow automation, reducing manual tasks and increasing efficiency across your organization."
            icon={<Workflow className="w-12 h-12" />}
            href="/services"
          />
          
          <ServiceCard 
            title="AI Integration"
            description="Leverage cutting-edge AI technology to enhance decision-making, automate processes, and unlock new growth opportunities."
            icon={<Cpu className="w-12 h-12" />}
            href="/services"
          />
          
          <ServiceCard 
            title="Strategic Consulting"
            description="Expert guidance on transformation strategies, operational excellence, and sustainable growth to help you achieve your business goals."
            icon={<TrendingUp className="w-12 h-12" />}
            href="/services"
          />
        </div>
      </div>
    </section>
  );
}