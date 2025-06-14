
import React from 'react';
import { Brain, Settings, Shield, Zap, FileText, MessageSquare, Database, CheckCircle, Lock, Server, Cloud, Cpu } from 'lucide-react';

const steps = [
  {
    title: "Understand Your Workflow",
    description: "We begin by mapping your internal process through interviews and sample data. Whether it's document review, diagnostics, or onboarding — we build from your real needs.",
    icon: Brain,
    color: "text-quantminds-purple",
    example: "Contract review process with clause tagging & extraction.",
    badge: "Discovery Phase"
  },
  {
    title: "Design & Customize Your Agent",
    description: "We fine-tune open-source models and wrap them in our C++-based backend for 2x faster inference. Your agent is optimized for speed, privacy, and compliance.",
    icon: Settings,
    color: "text-quantminds-blue",
    features: ["Air-gapped deployment? No problem.", "Need white-labeling? Included."],
    badge: "Model Engineering"
  },
  {
    title: "Deploy Anywhere — On-Prem, Cloud, or Edge",
    description: "We deliver your agent in your preferred environment: cloud, local servers, or even low-power IoT devices.",
    icon: Shield,
    color: "text-green-400",
    compliance: "HIPAA/GDPR/FDA compliant by design.",
    badge: "Secure Deployment"
  },
  {
    title: "Integrate & Scale with Support",
    description: "Get predictions via secure local API or CLI. We offer ongoing support, updates, and a self-serve portal launching soon.",
    icon: Zap,
    color: "text-quantminds-purple",
    plans: "SaaS subscription or SDK licensing — flexible plans available.",
    badge: "Enterprise Support"
  }
];

const HowItWorksSection = () => {
  return (
    <div className="py-20 px-4 bg-black/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-quantminds-purple/20 text-quantminds-purple border border-quantminds-purple/30 px-6 py-3 rounded-full mb-6">
            <Brain className="h-5 w-5" />
            <span className="font-bold text-sm">HOW QUANTAMIND WORKS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get started with your own secure, private AI agent in 4 simple steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From understanding your workflow to deploying enterprise-grade AI agents that work seamlessly in your environment
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-quantminds-purple via-quantminds-blue to-green-400 transform -translate-x-1/2 z-0 opacity-30"></div>
          
          {/* Steps */}
          <div className="space-y-20 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="md:flex items-center justify-center">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                  <div className="inline-flex items-center gap-2 bg-black/40 border border-gray-700 px-3 py-1 rounded-full mb-4 text-sm font-medium text-muted-foreground">
                    {step.badge}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  {step.example && (
                    <div className="bg-quantminds-purple/10 border border-quantminds-purple/30 p-3 rounded-lg mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-4 w-4 text-quantminds-purple" />
                        <span className="text-sm font-medium text-quantminds-purple">Example Use Case</span>
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
                    <div className="bg-green-500/10 border border-green-500/30 p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-green-400" />
                        <span className="text-sm font-medium text-green-400">{step.compliance}</span>
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
                
                <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-black/40 to-black/20 border-2 border-gradient-to-r from-quantminds-purple via-quantminds-blue to-green-400 relative z-20 shadow-2xl">
                  <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center">
                    <step.icon className={`${step.color} h-7 w-7`} />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-quantminds-purple text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 md:order-2' : 'md:pr-12'}`}>
                  <div className="md:hidden flex items-center space-x-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/40 border border-quantminds-purple/50 relative">
                      <step.icon className={`${step.color} h-5 w-5`} />
                      <div className="absolute -top-1 -right-1 bg-quantminds-purple text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  
                  <div className="glassmorphism p-6 rounded-xl transform transition-transform duration-300 hover:scale-105 border border-white/10">
                    {index === 0 && (
                      <div className="space-y-4">
                        <div className="bg-black/60 rounded-lg p-4 border border-gray-700">
                          <div className="flex items-center gap-2 mb-3">
                            <MessageSquare className="h-5 w-5 text-quantminds-purple" />
                            <span className="text-sm font-medium text-quantminds-purple">Workflow Interview Dashboard</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 p-2 bg-quantminds-purple/10 rounded">
                              <div className="w-2 h-2 bg-quantminds-purple rounded-full"></div>
                              <span className="text-xs text-muted-foreground">Document types: Contracts, Legal briefs</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 bg-quantminds-blue/10 rounded">
                              <div className="w-2 h-2 bg-quantminds-blue rounded-full"></div>
                              <span className="text-xs text-muted-foreground">Current process: Manual review (4-6 hours)</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 bg-green-500/10 rounded">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-xs text-muted-foreground">Target: Automated clause extraction</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="space-y-4">
                        <div className="bg-black/60 rounded-lg p-4 border border-gray-700">
                          <div className="flex items-center gap-2 mb-3">
                            <Cpu className="h-5 w-5 text-quantminds-blue" />
                            <span className="text-sm font-medium text-quantminds-blue">Model Customization Console</span>
                          </div>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-muted-foreground">Fine-tuning Progress</span>
                              <span className="text-xs text-green-400">87% Complete</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-quantminds-purple to-quantminds-blue h-2 rounded-full" style={{width: '87%'}}></div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-3">
                              <div className="text-center p-2 bg-quantminds-purple/20 rounded">
                                <div className="text-lg font-bold text-quantminds-purple">2x</div>
                                <div className="text-xs text-muted-foreground">Faster Inference</div>
                              </div>
                              <div className="text-center p-2 bg-green-500/20 rounded">
                                <div className="text-lg font-bold text-green-400">C++</div>
                                <div className="text-xs text-muted-foreground">Backend</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="space-y-4">
                        <div className="bg-black/60 rounded-lg p-4 border border-gray-700">
                          <div className="flex items-center gap-2 mb-3">
                            <Shield className="h-5 w-5 text-green-400" />
                            <span className="text-sm font-medium text-green-400">Deployment Options</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="text-center p-3 bg-quantminds-purple/20 rounded border border-quantminds-purple/30">
                              <Cloud className="h-6 w-6 text-quantminds-purple mx-auto mb-1" />
                              <div className="text-xs font-medium">Cloud</div>
                            </div>
                            <div className="text-center p-3 bg-quantminds-blue/20 rounded border border-quantminds-blue/30">
                              <Server className="h-6 w-6 text-quantminds-blue mx-auto mb-1" />
                              <div className="text-xs font-medium">On-Prem</div>
                            </div>
                            <div className="text-center p-3 bg-green-500/20 rounded border border-green-500/30">
                              <Cpu className="h-6 w-6 text-green-400 mx-auto mb-1" />
                              <div className="text-xs font-medium">Edge</div>
                            </div>
                          </div>
                          <div className="mt-3 p-2 bg-green-500/10 rounded border border-green-500/30">
                            <div className="flex items-center gap-2">
                              <Lock className="h-4 w-4 text-green-400" />
                              <span className="text-xs text-green-400 font-medium">HIPAA/GDPR/FDA Compliant</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 3 && (
                      <div className="space-y-4">
                        <div className="bg-black/60 rounded-lg p-4 border border-gray-700">
                          <div className="flex items-center gap-2 mb-3">
                            <Database className="h-5 w-5 text-quantminds-purple" />
                            <span className="text-sm font-medium text-quantminds-purple">Integration Dashboard</span>
                          </div>
                          <div className="space-y-3">
                            <div className="p-2 bg-quantminds-purple/10 rounded border border-quantminds-purple/30">
                              <div className="text-xs font-mono text-green-400">
                                <span className="text-quantminds-purple">POST</span> /api/v1/analyze
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">Local secure endpoint</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="text-center p-2 bg-quantminds-blue/20 rounded">
                                <div className="text-sm font-bold text-quantminds-blue">SaaS</div>
                                <div className="text-xs text-muted-foreground">Subscription</div>
                              </div>
                              <div className="text-center p-2 bg-green-500/20 rounded">
                                <div className="text-sm font-bold text-green-400">SDK</div>
                                <div className="text-xs text-muted-foreground">Licensing</div>
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
          <h3 className="text-2xl font-bold mb-4">Ready to build your secure AI agent?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join enterprise leaders who are already transforming their operations with custom, secure AI agents designed for their specific workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-sm text-green-400 font-medium">HIPAA/GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-quantminds-purple/20 border border-quantminds-purple/30 px-4 py-2 rounded-full">
              <Shield className="h-4 w-4 text-quantminds-purple" />
              <span className="text-sm text-quantminds-purple font-medium">Air-Gapped Deployment</span>
            </div>
            <div className="flex items-center gap-2 bg-quantminds-blue/20 border border-quantminds-blue/30 px-4 py-2 rounded-full">
              <Zap className="h-4 w-4 text-quantminds-blue" />
              <span className="text-sm text-quantminds-blue font-medium">2x Faster Inference</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
