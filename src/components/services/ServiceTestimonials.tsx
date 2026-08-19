
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  service: string;
}

function Testimonial({ quote, author, role, company, service }: TestimonialProps) {
  return (
    <Card className="border-none shadow-lg h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <Quote className="h-10 w-10 text-gray-300" />
          <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">{service}</span>
        </div>
        <p className="text-lg text-gray-700 mb-8 flex-grow">{quote}</p>
        <div>
          <p className="font-bold text-black">{author}</p>
          <p className="text-gray-600">{role}, {company}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ServiceTestimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600">
            Hear from our clients about their experience working with Beasley Consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="Beasley Consulting transformed our digital presence with a stunning new website that perfectly captures our brand identity and has significantly improved our customer engagement."
            author="Sarah Johnson"
            role="Marketing Director"
            company="TechVision Inc."
            service="Web Development"
          />
          
          <Testimonial 
            quote="The IT integration services provided by Beasley Consulting streamlined our operations and eliminated the silos that were hindering our productivity. Their expertise was invaluable."
            author="Michael Chen"
            role="CTO"
            company="Global Manufacturing"
            service="IT Integration"
          />
          
          <Testimonial 
            quote="Implementing our new learning management system with Beasley Consulting was seamless. Their team's expertise and attention to detail ensured a smooth transition and excellent user adoption."
            author="Emily Rodriguez"
            role="Head of L&D"
            company="Innovate Financial"
            service="Learning Management"
          />
        </div>
      </div>
    </section>
  );
}
