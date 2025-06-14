
import React from 'react';
import { Brain, Settings, Shield, Zap, FileText, CheckCircle, Lock, Server, Cloud, Cpu } from 'lucide-react';

const steps = [
  {
    title: "Understand Your Workflow",
    description: "We learn how you work by talking with your team and looking at your data. Then we build exactly what you need.",
    icon: Brain,
    color: "text-quantminds-purple",
    example: "Contract review with smart clause extraction",
    badge: "Discovery"
  },
  {
    title: "Build Your Custom Agent",
    description: "We create a fast, secure AI agent that's perfectly designed for your business needs.",
    icon: Settings,
    color: "text-quantminds-blue",
    features: ["Works completely offline", "Your brand, your way"],
    badge: "Development"
  },
  {
    title: "Deploy Securely",
    description: "Install anywhere you want - your servers, cloud, or even small devices. Always secure and compliant.",
    icon: Shield,
    color: "text-quantminds-purple",
    compliance: "HIPAA/GDPR/FDA ready",
    badge: "Deployment"
  },
  {
    title: "Start Using Immediately",
    description: "Get results through our simple API. We provide ongoing support and updates as you grow.",
    icon: Zap,
    color: "text-quantminds-blue",
    plans: "Flexible pricing that grows with you",
    badge: "Support"
  }
];

const HowItWorksSection = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-quantminds-purple/10 via-quantminds-blue/5 to-quantminds-purple/15 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-quantminds-purple/20 text-quantminds-purple border border-quantminds-purple/30 px-6 py-3 rounded-full mb-6">
            <Brain className="h-5 w-5" />
            <span className="font-bold text-sm">HOW QUANTAMIND WORKS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Your Secure AI Agent in 4 Simple Steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From understanding your needs to deploying enterprise-grade AI that works perfectly in your environment
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-quantminds-purple via-quantminds-blue to-quantminds-purple transform -translate-x-1/2 z-0 opacity-30"></div>
          
          {/* Steps */}
          <div className="space-y-20 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="md:flex items-center justify-center">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                  <div className="inline-flex items-center gap-2 bg-black/20 border border-quantminds-purple/30 px-3 py-1 rounded-full mb-4 text-sm font-medium text-quantminds-purple">
                    {step.badge}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 text-lg">{step.description}</p>
                  
                  {step.example && (
                    <div className="bg-quantminds-purple/10 border border-quantminds-purple/30 p-3 rounded-lg mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-4 w-4 text-quantminds-purple" />
                        <span className="text-sm font-medium text-quantminds-purple">Example</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic">"{step.example}"</p>
                    </div>
                  )}
                  
                  {step.features && (
                    <div className="space-y-2">
                      {step.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-quantminds-blue" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {step.compliance && (
                    <div className="bg-quantminds-blue/10 border border-quantminds-blue/30 p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-quantminds-blue" />
                        <span className="text-sm font-medium text-quantminds-blue">{step.compliance}</span>
                      </div>
                    </div>
                  )}
                  
                  {step.plans && (
                    <div className="bg-quantminds-purple/10 border border-quantminds-purple/30 p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-quantminds-purple" />
                        <span className="text-sm font-medium text-quantminds-purple">{step.plans}</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-quantminds-purple/20 to-quantminds-blue/20 border-2 border-quantminds-purple/30 relative z-20 shadow-xl backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center border border-quantminds-purple/20">
                    <step.icon className={`${step.color} h-7 w-7`} />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-quantminds-purple text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 md:order-2' : 'md:pr-12'}`}>
                  <div className="md:hidden flex items-center space-x-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-quantminds-purple/20 border border-quantminds-purple/30 relative">
                      <step.icon className={`${step.color} h-5 w-5`} />
                      <div className="absolute -top-1 -right-1 bg-quantminds-purple text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-xl transform transition-transform duration-300 hover:scale-105 shadow-lg">
                    {index === 0 && (
                      <div className="space-y-4">
                        <div className="bg-black/40 rounded-lg p-4 border border-quantminds-purple/30">
                          <div className="flex items-center gap-2 mb-3">
                            <Brain className="h-5 w-5 text-quantminds-purple" />
                            <span className="text-sm font-medium text-quantminds-purple">Discovery Process</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 p-2 bg-quantminds-purple/10 rounded">
                              <div className="w-2 h-2 bg-quantminds-purple rounded-full"></div>
                              <span className="text-xs text-muted-foreground">Document types: Contracts, Reports</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 bg-quantminds-blue/10 rounded">
                              <div className="w-2 h-2 bg-quantminds-blue rounded-full"></div>
                              <span className="text-xs text-muted-foreground">Current time: 4-6 hours manual work</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 bg-quantminds-purple/10 rounded">
                              <div className="w-2 h-2 bg-quantminds-purple rounded-full"></div>
                              <span className="text-xs text-muted-foreground">Goal: Instant automated analysis</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="space-y-4">
                        <div className="bg-black/40 rounded-lg p-4 border border-quantminds-blue/30">
                          <div className="flex items-center gap-2 mb-3">
                            <Settings className="h-5 w-5 text-quantminds-blue" />
                            <span className="text-sm font-medium text-quantminds-blue">Custom AI Development</span>
                          </div>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-muted-foreground">Training Progress</span>
                              <span className="text-xs text-quantminds-blue">Ready to Deploy</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-quantminds-purple to-quantminds-blue h-2 rounded-full w-full"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-3">
                              <div className="text-center p-2 bg-quantminds-purple/20 rounded">
                                <div className="text-lg font-bold text-quantminds-purple">Fast</div>
                                <div className="text-xs text-muted-foreground">Lightning Speed</div>
                              </div>
                              <div className="text-center p-2 bg-quantminds-blue/20 rounded">
                                <div className="text-lg font-bold text-quantminds-blue">Secure</div>
                                <div className="text-xs text-muted-foreground">Private & Safe</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="space-y-4">
                        <div className="bg-black/40 rounded-lg p-4 border border-quantminds-purple/30">
                          <div className="flex items-center gap-2 mb-3">
                            <Shield className="h-5 w-5 text-quantminds-purple" />
                            <span className="text-sm font-medium text-quantminds-purple">Deployment Options</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="text-center p-3 bg-quantminds-purple/20 rounded border border-quantminds-purple/30">
                              <Cloud className="h-6 w-6 text-quantminds-purple mx-auto mb-1" />
                              <div className="text-xs font-medium">Cloud</div>
                            </div>
                            <div className="text-center p-3 bg-quantminds-blue/20 rounded border border-quantminds-blue/30">
                              <Server className="h-6 w-6 text-quantminds-blue mx-auto mb-1" />
                              <div className="text-xs font-medium">Your Servers</div>
                            </div>
                            <div className="text-center p-3 bg-quantminds-purple/20 rounded border border-quantminds-purple/30">
                              <Cpu className="h-6 w-6 text-quantminds-purple mx-auto mb-1" />
                              <div className="text-xs font-medium">Edge Device</div>
                            </div>
                          </div>
                          <div className="mt-3 p-2 bg-quantminds-blue/10 rounded border border-quantminds-blue/30">
                            <div className="flex items-center gap-2">
                              <Lock className="h-4 w-4 text-quantminds-blue" />
                              <span className="text-xs text-quantminds-blue font-medium">Always Compliant & Secure</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 3 && (
                      <div className="space-y-4">
                        <div className="bg-black/40 rounded-lg p-4 border border-quantminds-blue/30">
                          <div className="flex items-center gap-2 mb-3">
                            <Zap className="h-5 w-5 text-quantminds-blue" />
                            <span className="text-sm font-medium text-quantminds-blue">Easy Integration</span>
                          </div>
                          <div className="space-y-3">
                            <div className="p-2 bg-quantminds-purple/10 rounded border border-quantminds-purple/30">
                              <div className="text-xs font-mono text-quantminds-blue">
                                <span className="text-quantminds-purple">POST</span> /api/analyze
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">Simple, secure endpoint</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="text-center p-2 bg-quantminds-blue/20 rounded">
                                <div className="text-sm font-bold text-quantminds-blue">Monthly</div>
                                <div className="text-xs text-muted-foreground">Subscription</div>
                              </div>
                              <div className="text-center p-2 bg-quantminds-purple/20 rounded">
                                <div className="text-sm font-bold text-quantminds-purple">One-time</div>
                                <div className="text-xs text-muted-foreground">License</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-quantminds-purple/15 to-quantminds-blue/15 p-8 rounded-xl border border-quantminds-purple/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join companies that are already using secure AI agents to transform their workflows and save time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-quantminds-blue/20 border border-quantminds-blue/30 px-4 py-2 rounded-full">
              <CheckCircle className="h-4 w-4 text-quantminds-blue" />
              <span className="text-sm text-quantminds-blue font-medium">Always Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-quantminds-purple/20 border border-quantminds-purple/30 px-4 py-2 rounded-full">
              <Shield className="h-4 w-4 text-quantminds-purple" />
              <span className="text-sm text-quantminds-purple font-medium">Completely Secure</span>
            </div>
            <div className="flex items-center gap-2 bg-quantminds-blue/20 border border-quantminds-blue/30 px-4 py-2 rounded-full">
              <Zap className="h-4 w-4 text-quantminds-blue" />
              <span className="text-sm text-quantminds-blue font-medium">Lightning Fast</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
