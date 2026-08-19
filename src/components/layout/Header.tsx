
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50">
      {/* Main Header Row */}
      <header className={`w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-4" : "bg-black/60 py-8"}`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="h-16 w-auto relative pt-1 pb-1">
                <Image 
                  src="/mikebealsleyanassociate-logowht-v1-mao52vtw.png" 
                  alt="Beasley Consulting Logo" 
                  width={180}
                  height={50}
                  className={`transition-opacity duration-300 ${isScrolled ? "opacity-0 absolute" : "opacity-100"}`}
                />
                <Image 
                  src="/mikebealsleyanassociate-logowht-v1-mao52vtw.png" 
                  alt="Beasley Consulting Logo" 
                  width={180}
                  height={50}
                  className={`transition-opacity duration-300 ${isScrolled ? "opacity-100 filter invert" : "opacity-0 absolute"}`}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLinks isScrolled={isScrolled} />
            </nav>

            {/* Client Portal Button */}
            <div className="hidden md:block">
              <a href="https://secure.mbeasleyllc.com" target="_blank" rel="noopener noreferrer">
                <Button className={`${isScrolled ? "bg-black hover:bg-gray-800 text-white" : "bg-white hover:bg-gray-100 text-black"} rounded-none px-6`}>
                  Client Portal
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <MobileNavLinks setMobileMenuOpen={setMobileMenuOpen} />
              <a href="https://secure.mbeasleyllc.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-black hover:bg-gray-800 text-white rounded-none w-full">
                  Client Portal
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

function NavLinks({ isScrolled }: { isScrolled: boolean }) {
  const textColor = isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300";
  
  return (
    <>
      {navigation.map((item) => (
        <Link key={item.name} href={item.href} className={`${textColor} font-medium`}>
          {item.name}
        </Link>
      ))}
    </>
  );
}

function MobileNavLinks({ setMobileMenuOpen }: { setMobileMenuOpen: (open: boolean) => void }) {
  return (
    <>
      {navigation.map((item) => (
        <Link 
          key={item.name} 
          href={item.href} 
          className="text-black hover:text-gray-600 font-medium py-2 border-b border-gray-100"
          onClick={() => setMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
