
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactForm() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and one of our consultants will get back to you within 24 hours.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form className="bg-white p-8 shadow-lg">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <Input id="firstName" placeholder="Your first name" className="rounded-none" required />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <Input id="lastName" placeholder="Your last name" className="rounded-none" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" className="rounded-none" required />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <Input id="phone" type="tel" placeholder="Your phone number" className="rounded-none" />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <Input id="company" placeholder="Your company name" className="rounded-none" />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service of Interest
                </label>
                <Select>
                  <SelectTrigger className="rounded-none">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="strategy">Strategy Consulting</SelectItem>
                    <SelectItem value="operations">Operations Excellence</SelectItem>
                    <SelectItem value="digital">Digital Transformation</SelectItem>
                    <SelectItem value="leadership">Leadership Development</SelectItem>
                    <SelectItem value="marketing">Marketing Services</SelectItem>
                    <SelectItem value="learning">Learning Management</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message*
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project or inquiry" 
                  className="rounded-none min-h-[150px]" 
                  required
                />
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-black border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="text-gray-600">
                    I agree to the <a href="/privacy" className="text-black underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                  </label>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white rounded-none py-6">
                Submit Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
