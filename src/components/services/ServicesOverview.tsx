import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Strategic Solutions for Modern Challenges</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Mike Beasley & Associates, we offer a comprehensive suite of services designed to help organizations navigate complex challenges and achieve their strategic objectives. Our approach combines deep industry expertise with innovative thinking to deliver tailored solutions that drive measurable results.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're looking to transform your digital presence, optimize your operations, or develop new capabilities, our team of experienced consultants will work closely with you to understand your unique needs and develop a customized approach.
            </p>
            
            <a href="https://tidycal.com/mikebeasley/30-minute-meeting" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black hover:bg-gray-800 text-white rounded-none px-8 py-6">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-8 flex flex-col items-center text-center">
              <div className="bg-black p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-6"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Strategic Consulting</h3>
              <p className="text-gray-600">Expert guidance to navigate complex business challenges</p>
            </div>
            
            <div className="bg-gray-50 p-8 flex flex-col items-center text-center">
              <div className="bg-black p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Solutions</h3>
              <p className="text-gray-600">Cutting-edge technology implementation and optimization</p>
            </div>
            
            <div className="bg-gray-50 p-8 flex flex-col items-center text-center">
              <div className="bg-black p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Project Management</h3>
              <p className="text-gray-600">Efficient execution and delivery of complex initiatives</p>
            </div>
            
            <div className="bg-gray-50 p-8 flex flex-col items-center text-center">
              <div className="bg-black p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Learning Solutions</h3>
              <p className="text-gray-600">Comprehensive educational content and platform development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}