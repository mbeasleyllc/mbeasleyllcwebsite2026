
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <Card className="border-none shadow-lg h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <Quote className="h-10 w-10 text-gray-300 mb-6" />
        <p className="text-lg text-gray-700 mb-8 flex-grow">{quote}</p>
        <div>
          <p className="font-bold text-black">{author}</p>
          <p className="text-gray-600">{role}, {company}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            We take pride in the success of our clients and the relationships we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="Beasley Consulting transformed our approach to digital strategy. Their insights and guidance helped us navigate a complex market landscape and achieve remarkable growth."
            author="Sarah Johnson"
            role="CEO"
            company="TechVision Inc."
          />
          
          <Testimonial 
            quote="Working with the Beasley team was a game-changer for our operations. Their methodical approach to identifying inefficiencies and implementing solutions delivered immediate results."
            author="Michael Chen"
            role="COO"
            company="Global Manufacturing"
          />
          
          <Testimonial 
            quote="The strategic roadmap developed by Beasley Consulting provided us with clear direction and actionable steps. Their team's expertise and dedication exceeded our expectations."
            author="Emily Rodriguez"
            role="VP of Strategy"
            company="Innovate Financial"
          />
        </div>
      </div>
    </section>
  );
}
