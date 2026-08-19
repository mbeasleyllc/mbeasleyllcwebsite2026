
import React from "react";
import { Mail, Clock, Linkedin } from "lucide-react";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  link?: {
    url: string;
    text: string;
    icon?: React.ReactNode;
  };
}

function ContactItem({ icon, title, details, link }: ContactItemProps) {
  return (
    <div className="flex items-start">
      <div className="bg-black p-4 mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600">{detail}</p>
        ))}
        {link && (
          <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            {link.icon && <span className="mr-2">{link.icon}</span>}
            {link.text}
          </a>
        )}
      </div>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            We're here to answer your questions and discuss how we can help your business grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ContactItem 
            icon={<Mail className="h-6 w-6 text-white" />}
            title="Email"
            details={[
              "mike@mbeasleyllc.com"
            ]}
            link={{
              url: "https://www.linkedin.com/in/mike-beasley-04a8389/",
              text: "Connect on LinkedIn",
              icon: <Linkedin size={16} />
            }}
          />
          
          <ContactItem 
            icon={<Clock className="h-6 w-6 text-white" />}
            title="Business Hours"
            details={[
              "Monday - Friday: 9:00 AM - 5:00 PM",
              "Saturday - Sunday: Closed"
            ]}
          />
        </div>
      </div>
    </section>
  );
}
