import React from "react";
import { Clock, Calendar, PhoneCall } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative py-20 md:py-28 bg-black text-white pt-[100px]">
      <div className="container mx-auto px-3 md:px-4.5 lg:px-6">
        <div className="max-w-3xl pt-10 md:pt-12 lg:pt-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Ready to transform your business? Get in touch with our team of experts to discuss how we can help you achieve your goals.
          </p>
          
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm mt-8">
            <h2 className="text-2xl font-semibold mb-4">Our Availability</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex items-start gap-3">
                <Clock size={24} className="text-primary mt-1" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-300">9:00 AM - 5:00 PM</p>
                  <p className="text-sm text-gray-400 mt-1">Standard support during business hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar size={24} className="text-primary mt-1" />
                <div>
                  <p className="font-medium">Working Days</p>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="text-sm text-gray-400 mt-1">Closed on weekends and holidays</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <PhoneCall size={24} className="text-primary mt-1" />
                <div>
                  <p className="font-medium">After Hours</p>
                  <p className="text-gray-300">Service Contract</p>
                  <p className="text-sm text-gray-400 mt-1">Off-peak support available with contract</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}