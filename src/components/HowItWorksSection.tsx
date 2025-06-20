
import React from 'react';
import { Search, Brain, Rocket, Headphones } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "We Learn Your Workflow",
      description: "Quick onboarding session to understand your documents and internal process.",
      icon: Search,
      color: "quantminds-grey"
    },
    {
      number: "2", 
      title: "We Train Your Custom Agent",
      description: "AI is trained using your private data — securely, without leaving your network.",
      icon: Brain,
      color: "quantminds-blue"
    },
    {
      number: "3",
      title: "We Deploy It Where You Need It", 
      description: "Fully offline, on-prem, or embedded in devices — your choice.",
      icon: Rocket,
      color: "quantminds-grey"
    },
    {
      number: "4",
      title: "You Use It — We Support It",
      description: "No DevOps required. We handle updates, improvements, and scale as you grow.",
      icon: Headphones,
      color: "quantminds-blue"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Private AI Agent, Delivered in <span className="text-gradient">4 Steps</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-quantminds-grey/50 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-${step.color}/20 border-2 border-${step.color} flex items-center justify-center relative`}>
                  <step.icon className={`text-${step.color} w-8 h-8`} />
                  <div className={`absolute -top-3 -right-3 w-8 h-8 bg-${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
