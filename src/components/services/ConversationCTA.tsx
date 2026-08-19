
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ConversationCTA() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's Start a Conversation</h2>
          <p className="text-lg text-slate-600 mb-8">
            Ready to explore how our expertise can help your organization achieve its goals? 
            We're here to listen, understand your challenges, and develop tailored solutions 
            that drive meaningful results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-slate-900 hover:bg-slate-800">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-300">
              <a href="https://tidycal.com/mikebeasley/30-minute-meeting" target="_blank" rel="noopener noreferrer">
                Schedule a Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConversationCTA;
