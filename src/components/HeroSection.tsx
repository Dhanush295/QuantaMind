
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-radial from-quantminds-purple/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <span className="bg-quantminds-purple/20 text-quantminds-purple px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantminds-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-quantminds-purple"></span>
              </span>
              Now in Early Access
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-gradient">Smarter AI,</span> <br />
            Built for Your Business
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
            Train powerful, GPU-accelerated AI models on your company's data—with simple APIs that plug into any system.
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
          
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
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
        
        <div className="flex-1 relative">
          <div className="relative w-full h-96 glassmorphism rounded-xl overflow-hidden animate-float">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-6">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {/* AI Visualization */}
                  <div className="col-span-8 flex flex-col gap-2">
                    <div className="bg-quantminds-purple/10 rounded-md h-1/3 border border-quantminds-purple/30 animate-pulse-subtle">
                      <div className="h-1.5 w-1/4 bg-quantminds-purple/40 rounded-full m-3"></div>
                      <div className="grid grid-cols-3 gap-2 p-3">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="h-8 bg-quantminds-purple/20 rounded"></div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-quantminds-blue/10 rounded-md h-1/3 border border-quantminds-blue/30">
                      <div className="h-1.5 w-1/3 bg-quantminds-blue/40 rounded-full m-3"></div>
                      <div className="flex gap-2 p-3">
                        <div className="h-16 w-1/3 bg-quantminds-blue/20 rounded"></div>
                        <div className="h-16 w-1/3 bg-quantminds-blue/20 rounded"></div>
                        <div className="h-16 w-1/3 bg-quantminds-blue/20 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-gray-700/40 rounded-md h-1/3 border border-gray-600/30">
                      <div className="h-1.5 w-1/5 bg-gray-500/40 rounded-full m-3"></div>
                      <div className="p-3">
                        <div className="h-2 bg-gray-500/30 rounded-full w-11/12 mb-2"></div>
                        <div className="h-2 bg-gray-500/30 rounded-full w-9/12 mb-2"></div>
                        <div className="h-2 bg-gray-500/30 rounded-full w-10/12"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 flex flex-col gap-2">
                    <div className="bg-quantminds-purple/20 rounded-md h-2/3 border border-quantminds-purple/30 p-3">
                      <div className="h-1.5 w-1/2 bg-quantminds-purple/40 rounded-full mb-3"></div>
                      <div className="h-full w-full rounded flex items-end">
                        <div className="w-1/5 h-1/4 bg-quantminds-purple/30 rounded-sm mx-1"></div>
                        <div className="w-1/5 h-2/4 bg-quantminds-purple/40 rounded-sm mx-1"></div>
                        <div className="w-1/5 h-3/4 bg-quantminds-purple/50 rounded-sm mx-1"></div>
                        <div className="w-1/5 h-full bg-quantminds-purple/60 rounded-sm mx-1 animate-pulse-subtle"></div>
                        <div className="w-1/5 h-2/5 bg-quantminds-purple/30 rounded-sm mx-1"></div>
                      </div>
                    </div>
                    <div className="bg-quantminds-blue/10 rounded-md h-1/3 border border-quantminds-blue/30 p-3">
                      <div className="h-full flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-4 border-t-quantminds-blue border-quantminds-blue/20 animate-spin"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Data flow animation */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute h-1 w-20 bg-quantminds-purple/50 rounded-full animate-data-flow" style={{ top: '30%', animationDelay: '0s' }}></div>
              <div className="absolute h-1 w-12 bg-quantminds-blue/50 rounded-full animate-data-flow" style={{ top: '50%', animationDelay: '1.5s' }}></div>
              <div className="absolute h-1 w-16 bg-quantminds-purple/50 rounded-full animate-data-flow" style={{ top: '70%', animationDelay: '3s' }}></div>
            </div>
          </div>
          <div className="absolute -z-10 w-full h-full rounded-xl bg-quantminds-purple/30 blur-3xl opacity-20 transform translate-y-4 translate-x-4"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
