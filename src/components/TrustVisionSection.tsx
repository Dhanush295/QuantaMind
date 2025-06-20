
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustVisionSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-quantminds-grey/10 to-transparent"></div>

      <div className="container relative z-10">
        <div className="bg-gradient-to-br from-black/80 to-black/60 p-6 sm:p-10 lg:p-16 rounded-3xl border border-white/10 backdrop-blur-xl">
          <div className="text-center">
            
            {/* Main Headline */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Built for the Most <span className="text-gradient">Sensitive Work in the World</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed">
                Whether you're analyzing surgical data, financial risk models, or privileged legal files — Quantamind gives you the power of AI with the safety of full control.
              </p>
              <p className="text-md text-gray-300 max-w-3xl mx-auto">
                We're building the product for companies who can't afford to compromise on privacy, control, or reliability.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-quantminds-blue" />
                <span className="text-gray-300">Zero Cloud Dependency</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-quantminds-grey" />
                <span className="text-gray-300">100% Private by Design</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-quantminds-blue" />
                <span className="text-gray-300">Enterprise-Grade Security</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="font-medium gap-2 bg-quantminds-grey hover:bg-quantminds-grey/90 px-8 py-4">
                  Let's Talk <MessageCircle size={16} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-medium gap-2 border-quantminds-blue text-quantminds-blue hover:bg-quantminds-blue hover:text-white px-8 py-4">
                  Join the Pilot <ArrowRight size={16} />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustVisionSection;
