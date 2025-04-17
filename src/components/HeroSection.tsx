
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-radial from-quantminds-purple/20 via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <span className="bg-quantminds-purple/20 text-quantminds-purple px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantminds-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-quantminds-purple"></span>
              </span>
              Now in Early Access
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-gradient">Smarter AI,</span> <br />
            Built for Your Business
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
              Build your own AI model using our in-house powerful infrastructure.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
              We help businesses build and run custom AI models tailored to their needs, using their own data on secure, high-speed GPU infrastructure. You focus on your business—we take care of the AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/coming-soon">
              <Button size="lg" className="font-medium gap-2 bg-quantminds-purple hover:bg-quantminds-purple/90">
                Get Early Access <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/coming-soon">
              <Button variant="outline" size="lg" className="font-medium">
                Schedule a Demo
              </Button>
            </Link>
          </div>

          <div className="mt-10 sm:mt-12 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4">
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-quantminds-purple" />
              <span className="text-sm text-muted-foreground">CUDA Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu size={20} className="text-quantminds-purple" />
              <span className="text-sm text-muted-foreground">GPU Accelerated</span>
            </div>
            <div className="flex items-center gap-2">
              <Database size={20} className="text-quantminds-purple" />
              <span className="text-sm text-muted-foreground">Your Data, Your Models</span>
            </div>
          </div>
        </div>

        {/* Right Visualization */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-square glassmorphism rounded-xl overflow-hidden animate-float">
            {/* Animated Panels */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-4 sm:p-6">
                <div className="grid grid-cols-12 gap-2 h-full">
                  <div className="col-span-8 flex flex-col gap-2">
                    <div className="bg-quantminds-purple/10 rounded-md flex-1 border border-quantminds-purple/30 animate-pulse-subtle p-3">
                      <div className="h-1.5 w-1/4 bg-quantminds-purple/40 rounded-full mb-2"></div>
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="h-8 bg-quantminds-purple/20 rounded"></div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-quantminds-blue/10 rounded-md flex-1 border border-quantminds-blue/30 p-3">
                      <div className="h-1.5 w-1/3 bg-quantminds-blue/40 rounded-full mb-2"></div>
                      <div className="flex gap-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="h-16 w-1/3 bg-quantminds-blue/20 rounded"></div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-700/40 rounded-md flex-1 border border-gray-600/30 p-3">
                      <div className="h-1.5 w-1/5 bg-gray-500/40 rounded-full mb-2"></div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-500/30 rounded-full w-11/12"></div>
                        <div className="h-2 bg-gray-500/30 rounded-full w-9/12"></div>
                        <div className="h-2 bg-gray-500/30 rounded-full w-10/12"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 flex flex-col gap-2">
                    <div className="bg-quantminds-purple/20 rounded-md flex-1 border border-quantminds-purple/30 p-3">
                      <div className="h-1.5 w-1/2 bg-quantminds-purple/40 rounded-full mb-3"></div>
                      <div className="flex items-end h-full justify-between">
                        {[25, 50, 75, 100, 40].map((h, i) => (
                          <div
                            key={i}
                            className={`w-1/5 rounded-sm mx-0.5 bg-quantminds-purple/${30 + i * 10} ${i === 3 ? "animate-pulse-subtle" : ""}`}
                            style={{ height: `${h}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-quantminds-blue/10 rounded-md flex-1 border border-quantminds-blue/30 p-3 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-t-quantminds-blue border-quantminds-blue/20 animate-spin"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Flow Animation */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute h-1 w-20 bg-quantminds-purple/50 rounded-full animate-data-flow" style={{ top: '30%' }}></div>
              <div className="absolute h-1 w-12 bg-quantminds-blue/50 rounded-full animate-data-flow" style={{ top: '50%', animationDelay: '1.5s' }}></div>
              <div className="absolute h-1 w-16 bg-quantminds-purple/50 rounded-full animate-data-flow" style={{ top: '70%', animationDelay: '3s' }}></div>
            </div>
          </div>
        </div>

        </div>

        {/* Contact Us Section */}
        <div className="relative z-10 container mx-auto mt-16 sm:mt-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Us – Let's Build Your AI Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to take your business to the next level? Let's schedule a meeting to discuss your unique business needs. 
              Using our powerful infrastructure, we'll help you build a custom AI tailored to your data. 
              You focus on growing your business—let us handle the AI.
            </p>
            <Link to="/contact">
              <Button size="lg" className="font-medium gap-2 bg-quantminds-purple hover:bg-quantminds-purple/90">
                Contact Us
              </Button>
            </Link>
          </div>

      </div>
    </div>
  );
};

export default HeroSection;
