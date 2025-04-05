
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-quantminds-purple/30 via-transparent to-transparent opacity-30"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glassmorphism p-12 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Accelerate Your Business with AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our early access program and be among the first to leverage the power of custom AI.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium gap-2 bg-quantminds-purple hover:bg-quantminds-purple/90">
              Get Early Access <ArrowRight size={16} />
            </Button>
            <Button variant="outline" size="lg" className="font-medium gap-2">
              <Calendar size={16} /> Schedule a Demo
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-muted-foreground text-sm">
              Have questions? Contact our team at <a href="mailto:info@quantminds.ai" className="text-quantminds-purple hover:underline">info@quantminds.ai</a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-quantminds-purple/30 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-quantminds-blue/30 rounded-full blur-3xl opacity-20"></div>
    </div>
  );
};

export default CTASection;
