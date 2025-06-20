
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-quantminds-purple/10 to-transparent"></div>

      <div className="container relative z-10">
        <div className="bg-gradient-to-br from-black/80 to-black/60 p-6 sm:p-10 lg:p-16 rounded-3xl border border-white/10 backdrop-blur-xl">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            
            {/* Left Text Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Ready for <span className="text-gradient">custom AI</span>?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                Join 20 founding partners and get exclusive benefits with our secure AI platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="font-medium gap-2 bg-quantminds-purple hover:bg-quantminds-purple/90">
                    Apply to Join Our Founding Partner Program <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image Content */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-quantminds-purple/30 blur-[100px] opacity-70"></div>
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-quantminds-purple/40 animate-spin-slow"></div>
                <div className="absolute inset-12 rounded-full border border-white/10 flex items-center justify-center p-4 sm:p-6 text-center">
                  <div>
                    <div className="font-bold text-4xl sm:text-5xl mb-2 text-gradient">20</div>
                    <p className="text-sm text-muted-foreground">
                      founding partner spots
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
