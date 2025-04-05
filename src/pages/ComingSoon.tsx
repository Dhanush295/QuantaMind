
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-quantminds-purple/20 via-transparent to-transparent"></div>
      
      <div className="max-w-3xl mx-auto text-center z-10">
        <div className="mb-8">
          <a href="/" className="text-4xl font-bold flex items-center gap-2 justify-center mb-4">
            <span className="text-white rounded-md bg-quantminds-purple/90 px-2">Q</span>
            <span className="text-gradient">QuantaMind</span>
          </a>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">We are coming strong and soon</h1>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          We're working hard to bring you the best AI-powered business intelligence tools. 
          Stay tuned for our launch!
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <Link to="/contact">
            <Button size="lg" className="font-medium gap-2 bg-quantminds-purple hover:bg-quantminds-purple/90">
              <Mail className="h-4 w-4" /> Contact Us
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" size="lg" className="font-medium">
              Back to Homepage
            </Button>
          </Link>
        </div>
        
        <div className="text-muted-foreground">
          <p>Have questions? Reach out to us at:</p>
          <a href="mailto:dg1@toromail.csudh.edu" className="text-quantminds-purple hover:underline">
            dg1@toromail.csudh.edu
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
