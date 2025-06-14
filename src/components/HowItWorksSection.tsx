
import React from 'react';
import { Search, Settings, Rocket, RefreshCw, Shield, CheckCircle, Lock, Award } from 'lucide-react';

const steps = [
  {
    title: "We Understand Your Workflow",
    description: "We analyze how your internal processes work — whether that's reviewing contracts, analyzing diagnostics, or onboarding new hires.",
    icon: Search,
    color: "text-quantminds-purple",
    badge: "Step 1"
  },
  {
    title: "We Build a Custom AI Agent for You",
    description: "Our team fine-tunes proven open-source AI models and wraps them in a high-performance engine that runs faster and fully offline.",
    icon: Settings,
    color: "text-quantminds-blue",
    badge: "Step 2"
  },
  {
    title: "We Deploy It Where You Need It",
    description: "Your AI agent can run on your local servers, in a secure private cloud, or on lightweight devices — even without internet.",
    icon: Rocket,
    color: "text-quantminds-purple",
    badge: "Step 3"
  },
  {
    title: "We Help You Integrate & Scale",
    description: "You get simple API or command-line access to your agent — with ongoing support, updates, and optional SaaS dashboards.",
    icon: RefreshCw,
    color: "text-quantminds-blue",
    badge: "Step 4"
  }
];

const HowItWorksSection = () => {
  return (
    <div className="py-20 px-4 bg-black/20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Quantamind Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Launch your own secure, private AI agent in just 4 simple steps.
          </p>
        </div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
              {/* Icon Section */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-black/60 to-black/40 border border-white/20">
                  <step.icon className={`${step.color} h-12 w-12`} />
                </div>
              </div>
              
              {/* Content Section */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'} text-center`}>
                <div className="inline-block bg-quantminds-purple/20 text-quantminds-purple border border-quantminds-purple/30 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {step.badge}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* All Deployments Include */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-quantminds-purple/15 to-quantminds-blue/15 border border-quantminds-purple/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Shield className="h-6 w-6 text-quantminds-purple" />
              All Deployments Include
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <Lock className="h-8 w-8 text-quantminds-purple mb-3 mx-auto" />
                <h4 className="font-semibold mb-2">End-to-end Security</h4>
                <p className="text-sm text-muted-foreground">Complete data protection</p>
              </div>
              <div className="text-center p-4">
                <CheckCircle className="h-8 w-8 text-quantminds-blue mb-3 mx-auto" />
                <h4 className="font-semibold mb-2">GDPR / HIPAA Compliance</h4>
                <p className="text-sm text-muted-foreground">Regulatory compliance built-in</p>
              </div>
              <div className="text-center p-4">
                <Award className="h-8 w-8 text-quantminds-purple mb-3 mx-auto" />
                <h4 className="font-semibold mb-2">Fully Branded Interface</h4>
                <p className="text-sm text-muted-foreground">Your logo, your agent's name</p>
              </div>
              <div className="text-center p-4">
                <Shield className="h-8 w-8 text-quantminds-blue mb-3 mx-auto" />
                <h4 className="font-semibold mb-2">No Vendor Lock-in</h4>
                <p className="text-sm text-muted-foreground">No cloud dependency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
