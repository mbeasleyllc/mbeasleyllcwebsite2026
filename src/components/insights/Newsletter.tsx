
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay informed with our latest insights, industry trends, and exclusive content delivered directly to your inbox.
          </p>
          
          <form className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="rounded-none flex-grow"
              />
              <Button className="bg-black hover:bg-gray-800 text-white rounded-none px-8 py-6">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              By subscribing, you agree to receive our newsletter and accept our Privacy Policy. You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
