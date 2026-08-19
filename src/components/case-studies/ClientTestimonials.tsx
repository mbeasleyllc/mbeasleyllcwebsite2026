
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

function Testimonial({ quote, author, role, company, image }: TestimonialProps) {
  return (
    <Card className="border-none shadow-lg h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <Quote className="h-10 w-10 text-gray-300 mb-6" />
        <p className="text-lg text-gray-700 mb-8 flex-grow">{quote}</p>
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image 
              src={image} 
              alt={author} 
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="font-bold text-black">{author}</p>
            <p className="text-gray-600">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ClientTestimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600">
            Hear directly from our clients about their experience working with Beasley Consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="The strategic roadmap developed by Beasley Consulting transformed our approach to digital transformation. Their insights and guidance helped us navigate a complex market landscape and achieve remarkable growth."
            author="Sarah Johnson"
            role="CEO"
            company="TechVision Inc."
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80"
          />
          
          <Testimonial 
            quote="Working with the Beasley team was a game-changer for our operations. Their methodical approach to identifying inefficiencies and implementing solutions delivered immediate results and long-term value."
            author="Michael Chen"
            role="COO"
            company="Global Manufacturing"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          
          <Testimonial 
            quote="Beasley Consulting's expertise in market expansion was instrumental in our successful entry into international markets. Their comprehensive approach and attention to detail ensured we avoided common pitfalls."
            author="Emily Rodriguez"
            role="VP of Strategy"
            company="Innovate Financial"
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
          />
        </div>
      </div>
    </section>
  );
}
