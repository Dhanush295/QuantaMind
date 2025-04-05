
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2 bg-background/80 backdrop-blur-lg shadow-md' : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold flex items-center gap-2">
              <span className="text-white rounded-md bg-quantminds-purple/90 px-2">Q</span>
              <span className={`transition-all ${isScrolled ? 'text-white' : 'text-white'}`}>QuantaMind</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#usecases" className="text-gray-300 hover:text-white transition">Use Cases</a>
            <a href="#howitworks" className="text-gray-300 hover:text-white transition">How It Works</a>
            <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
            <Link to="/coming-soon">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/coming-soon">
              <Button size="sm" className="bg-quantminds-purple hover:bg-quantminds-purple/90">
                Get Started
              </Button>
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-gray-300 p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden pt-16">
          <nav className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#usecases" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <a 
              href="#howitworks" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col space-y-4 w-48">
              <Link to="/coming-soon">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/coming-soon">
                <Button className="w-full bg-quantminds-purple hover:bg-quantminds-purple/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
