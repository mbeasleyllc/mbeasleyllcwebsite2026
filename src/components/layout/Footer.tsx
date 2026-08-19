import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const navigation = {
  services: [
    { name: "Strategic Consulting", href: "/services/strategy" },
    { name: "Digital Transformation", href: "/services/transformation" },
    { name: "Operations Excellence", href: "/services/operations" },
    { name: "Leadership Development", href: "/services/leadership" },
    { name: "Market Expansion", href: "/services/market-expansion" },
    { name: "Process Improvement", href: "/services/process-improvement" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights", href: "/insights" },
    { name: "Video Conference", href: "/video-conference" },
    { name: "Contact", href: "/contact" }
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/mikebealsleyanassociate-logowht-v1-mao52vtw.png" 
                alt="Beasley Consulting Logo" 
                width={180}
                height={40}
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Strategic consulting for businesses navigating complex challenges and seeking transformative growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-gray-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mike-beasley-04a8389/" className="text-white hover:text-gray-300">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gray-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-400 hover:text-white">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/strategy" className="text-gray-400 hover:text-white">
                  Strategy Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/operations" className="text-gray-400 hover:text-white">
                  Operations Excellence
                </Link>
              </li>
              <li>
                <Link href="/services/transformation" className="text-gray-400 hover:text-white">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/services/course-design" className="text-gray-400 hover:text-white">
                  Course Design
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-gray-400 hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/learning-management" className="text-gray-400 hover:text-white">
                  Learning Management
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>10837 Verde Visa Drive</p>
              <p>Fairfax, VA 22030</p>
              <p className="mt-4">mike@mbeasleyllc.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Beasley Consulting. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
