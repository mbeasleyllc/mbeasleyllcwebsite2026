import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  FolderKanban, 
  FileText, 
  Globe, 
  FolderOpen, 
  ClipboardList, 
  Mail, 
  Zap,
  MessageSquare,
  Palette
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 text-black">
        {icon}
      </div>
      <div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function PlatformFeatures() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything Your Business Needs in One Platform
          </h2>
          <p className="text-xl text-gray-600">
            SuiteDash delivers a comprehensive suite of tools to manage clients, projects, finances, and operations—all under your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Feature 
                icon={<Users className="w-8 h-8" />}
                title="CRM & Client Management"
                description="Track leads, manage contacts, and nurture client relationships with a powerful built-in CRM."
              />
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Feature 
                icon={<FolderKanban className="w-8 h-8" />}
                title="Project Management"
                description="Organize tasks, collaborate with teams, and deliver projects on time with intuitive project tools."
              />
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Feature 
                icon={<FileText className="w-8 h-8" />}
                title="Invoicing & Payments"
                description="Create professional invoices, track payments, and get paid faster with integrated payment processing."
              />
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Feature 
                icon={<Globe className="w-8 h-8" />}
                title="Client Portal"
                description="Provide clients with secure, branded portal access to projects, files, and communications."
              />
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Feature 
                icon={<FolderOpen className="w-8 h-8" />}
                title="File Storage & Sharing"
                description="Store, organize, and share files securely with clients and team members."
              />
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Feature 
                icon={<ClipboardList className="w-8 h-8" />}
                title="Forms & Proposals"
                description="Create custom forms, collect data, and generate winning proposals with ease."
              />
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Feature 
                icon={<Mail className="w-8 h-8" />}
                title="Email Marketing"
                description="Design campaigns, segment audiences, and nurture leads with built-in email marketing tools."
              />
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Feature 
                icon={<Zap className="w-8 h-8" />}
                title="Workflow Automation"
                description="Automate repetitive tasks and processes to save time and increase productivity."
              />
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Feature 
                icon={<MessageSquare className="w-8 h-8" />}
                title="Team Collaboration"
                description="Keep everyone aligned with real-time messaging, comments, and notifications."
              />
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Feature 
                icon={<Palette className="w-8 h-8" />}
                title="White Label Branding"
                description="Customize the platform with your logo, colors, and domain for a seamless branded experience."
              />
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how Suite1 can streamline your business and help you scale efficiently.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-black hover:bg-gray-100 transition-colors px-8 py-4 text-lg font-medium"
          >
            Schedule Your Demo
          </Link>
        </div>
      </div>
    </section>
  );
}