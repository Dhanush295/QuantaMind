
import React from 'react';
import { Search, Settings, Rocket, RefreshCw, Shield, CheckCircle, Lock, Award } from 'lucide-react';

const steps = [
  {
    title: "Analyze Your Workflow",
    description: "We study your processes — contracts, diagnostics, onboarding — to understand your needs.",
    icon: Search,
    color: "text-quantminds-purple",
    badge: "Step 1"
  },
  {
    title: "Build Custom AI Agent",
    description: "Fine-tuned models wrapped in a high-performance engine that runs offline.",
    icon: Settings,
    color: "text-quantminds-blue",
    badge: "Step 2"
  },
  {
    title: "Deploy Anywhere",
    description: "Local servers, private cloud, or lightweight devices — even without internet.",
    icon: Rocket,
    color: "text-quantminds-purple",
    badge: "Step 3"
  },
  {
    title: "Integrate & Scale",
    description: "Simple API access with ongoing support and optional SaaS dashboards.",
    icon: RefreshCw,
    color: "text-quantminds-blue",
    badge: "Step 4"
  }
];

const HowItWorksSection = () => {
  return (
    <div className="py-16 px-4 bg-black/20 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            How Quantamind Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Launch your secure, private AI agent in 4 simple steps.
          </p>
        </div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-12 items-center`}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-black/60 to-black/40 border border-white/20">
                  <step.icon className={`${step.color} h-10 w-10`} />
                </div>
              </div>
              
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'} text-center`}>
                <div className="inline-block bg-quantminds-purple/20 text-quantminds-purple border border-quantminds-purple/30 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {step.badge}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-gradient-to-r from-quantminds-purple/15 to-quantminds-blue/15 border border-quantminds-purple/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-quantminds-purple" />
              All Deployments Include
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-3">
                <Lock className="h-6 w-6 text-quantminds-purple mb-2 mx-auto" />
                <h4 className="font-semibold mb-1 text-sm">End-to-end Security</h4>
                <p className="text-xs text-muted-foreground">Complete data protection</p>
              </div>
              <div className="text-center p-3">
                <CheckCircle className="h-6 w-6 text-quantminds-blue mb-2 mx-auto" />
                <h4 className="font-semibold mb-1 text-sm">GDPR / HIPAA Compliance</h4>
                <p className="text-xs text-muted-foreground">Regulatory compliance built-in</p>
              </div>
              <div className="text-center p-3">
                <Award className="h-6 w-6 text-quantminds-purple mb-2 mx-auto" />
                <h4 className="font-semibold mb-1 text-sm">Fully Branded Interface</h4>
                <p className="text-xs text-muted-foreground">Your logo, your agent's name</p>
              </div>
              <div className="text-center p-3">
                <Shield className="h-6 w-6 text-quantminds-blue mb-2 mx-auto" />
                <h4 className="font-semibold mb-1 text-sm">No Vendor Lock-in</h4>
                <p className="text-xs text-muted-foreground">No cloud dependency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
