
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Layout, 
  ShoppingCart, 
  Smartphone, 
  Search, 
  Shield, 
  Zap 
} from "lucide-react";

interface WebDevelopmentServiceProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

function WebDevelopmentService({ title, description, icon }: WebDevelopmentServiceProps) {
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

export default function WebDevelopmentServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Development Services</h2>
          <p className="text-xl text-gray-600">
            We build custom web solutions that help businesses establish a strong online presence, engage customers, and drive growth through innovative digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <WebDevelopmentService 
            title="Custom Website Development"
            icon={<Code size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Bespoke website design and development tailored to your brand and business objectives.</li>
                  <li>Clean, efficient code that ensures optimal performance and scalability.</li>
                </ul>
              </div>
            }
          />
          
          <WebDevelopmentService 
            title="Responsive Web Design"
            icon={<Layout size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mobile-first design approach ensuring your site looks and functions perfectly on all devices.</li>
                  <li>Fluid layouts that automatically adjust to provide optimal viewing experience.</li>
                </ul>
              </div>
            }
          />
          
          <WebDevelopmentService 
            title="E-Commerce Development"
            icon={<ShoppingCart size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Secure, user-friendly online stores with seamless checkout experiences.</li>
                  <li>Integration with payment gateways, inventory management, and shipping solutions.</li>
                </ul>
              </div>
            }
          />
          
          <WebDevelopmentService 
            title="Progressive Web Applications"
            icon={<Smartphone size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>App-like experiences that work offline and load instantly, regardless of network state.</li>
                  <li>Cross-platform compatibility without the need for app store distribution.</li>
                </ul>
              </div>
            }
          />
          
          <WebDevelopmentService 
            title="SEO Optimization"
            icon={<Search size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Search engine friendly architecture and technical optimization for improved visibility.</li>
                  <li>Performance optimization for faster loading speeds and better user experience.</li>
                </ul>
              </div>
            }
          />
          
          <WebDevelopmentService 
            title="Web Security Solutions"
            icon={<Shield size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Implementation of robust security measures to protect your website and user data.</li>
                  <li>SSL certification, secure authentication, and protection against common vulnerabilities.</li>
                </ul>
              </div>
            }
          />
          
          <WebDevelopmentService 
            title="Performance Optimization"
            icon={<Zap size={48} className="text-black" />}
            description={
              <div className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Code and asset optimization for lightning-fast loading speeds and smooth user experiences.</li>
                  <li>Caching strategies and content delivery network implementation for global performance.</li>
                </ul>
              </div>
            }
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 border-l-4 border-black">
            <h3 className="text-xl font-bold mb-4">Our Web Development Approach</h3>
            <p className="text-gray-600 mb-4">
              At Mike Beasley & Associates, we believe successful web projects begin with understanding your business goals and user needs. Our development team combines technical expertise with creative problem-solving to create web solutions that not only look great but drive real business results.
            </p>
            <p className="text-gray-600">
              We follow a collaborative, iterative development process that keeps you involved at every stage, ensuring the final product aligns perfectly with your vision while incorporating industry best practices for performance, security, and user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
