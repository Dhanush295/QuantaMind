
import React from 'react';
import { Search, Settings, Rocket, RefreshCw, Shield, Zap, Server, Cloud, Cpu, CheckCircle, Lock, Award } from 'lucide-react';

const steps = [
  {
    title: "We Understand Your Workflow",
    description: "We begin by talking to your team and analyzing how your internal processes work — whether that's reviewing contracts, analyzing diagnostics, onboarding new hires, or more.",
    icon: Search,
    color: "text-quantminds-purple",
    example: "Tag key clauses in contracts and extract deadlines into structured reports.",
    badge: "🔍 Step 1"
  },
  {
    title: "We Build a Custom AI Agent for You",
    description: "Our team fine-tunes proven open-source AI models and wraps them in a high-performance engine that runs faster and fully offline — no cloud, no Python setup, no privacy risks.",
    icon: Settings,
    color: "text-quantminds-blue",
    subtitle: "Think of it as your own private Copilot — trained for your exact needs.",
    badge: "🛠 Step 2"
  },
  {
    title: "We Deploy It Where You Need It",
    description: "Your AI agent can run on your local servers (on-prem), in a secure private cloud, or on lightweight devices — even without internet. You stay in full control. Always.",
    icon: Rocket,
    color: "text-quantminds-purple",
    deploymentOptions: ["On your local servers (on-prem)", "In a secure private cloud", "Or on lightweight devices — even without internet"],
    badge: "🚀 Step 3"
  },
  {
    title: "We Help You Integrate & Scale",
    description: "You get simple API or command-line access to your agent — with ongoing support, updates, and optional SaaS dashboards. Affordable licensing or subscription models depending on your setup.",
    icon: RefreshCw,
    color: "text-quantminds-blue",
    badge: "🔁 Step 4"
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
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-black/40 border border-white/10 rounded-xl p-8 hover:bg-black/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex items-center gap-4 md:w-auto w-full">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-black/60 to-black/40 border border-white/20">
                    <step.icon className={`${step.color} h-8 w-8`} />
                  </div>
                  <div className="md:hidden">
                    <div className="text-sm font-medium text-muted-foreground mb-1">{step.badge}</div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="hidden md:block">
                    <div className="text-sm font-medium text-muted-foreground mb-2">{step.badge}</div>
                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {step.example && (
                    <div className="bg-quantminds-purple/10 border border-quantminds-purple/30 p-4 rounded-lg mb-4">
                      <div className="text-sm font-medium text-quantminds-purple mb-2">Example:</div>
                      <p className="text-sm text-muted-foreground italic">"{step.example}"</p>
                    </div>
                  )}
                  
                  {step.subtitle && (
                    <div className="bg-quantminds-blue/10 border border-quantminds-blue/30 p-4 rounded-lg">
                      <p className="text-sm font-medium text-quantminds-blue italic">{step.subtitle}</p>
                    </div>
                  )}
                  
                  {step.deploymentOptions && (
                    <div className="space-y-2">
                      {step.deploymentOptions.map((option, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-quantminds-purple" />
                          <span className="text-sm text-muted-foreground">{option}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* All Deployments Include */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-quantminds-purple/15 to-quantminds-blue/15 border border-quantminds-purple/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Shield className="h-6 w-6 text-quantminds-purple" />
              🔐 All Deployments Include
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
        
        {/* Simple Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-quantminds-purple/20 text-quantminds-purple border border-quantminds-purple/30 px-6 py-3 rounded-full">
            <Zap className="h-5 w-5" />
            <span className="font-bold text-sm">READY TO GET STARTED?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
