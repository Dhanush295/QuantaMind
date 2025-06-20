
import React from 'react';
import { Building2, Brain, Shield } from 'lucide-react';

const HowWereDifferentSection = () => {
  const differentiators = [
    {
      title: "A Finished Product, Not a Difficult Project",
      description: "Big tech provides powerful but raw AI tools. To use them, your IT team would need to start an expensive, 18-month engineering project. We deliver a finished, ready-to-use AI agent in just a few weeks. We turn a complex project into a simple product.",
      icon: Building2,
      category: "Versus Big Tech (AWS, Azure, GCP)",
      color: "quantminds-blue"
    },
    {
      title: "Your \"Custom Brain,\" Not a Generic Tool",
      description: "Generic cloud AI knows about the world. Our AI knows about your world. We train our agents on your company's private data, turning them into an expert on your specific contracts, your financial data, or your case files—a competitive advantage that only you own.",
      icon: Brain,
      category: "Versus Third-Party AI Agents (Cloud Tools)",
      color: "quantminds-grey"
    },
    {
      title: "True Offline Control",
      description: "Our core difference is simple: our AI runs completely offline, on your own servers. This guarantees true data privacy, instant real-time speed, and 100% reliability in a way that no cloud-connected platform ever can. Your data, and the intelligence built from it, stays in your house.",
      icon: Shield,
      category: "Our Unique Foundation",
      color: "quantminds-blue"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900/40 to-gray-800/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We're Different: <span className="text-gradient">A New Category of AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Big tech sells you powerful but complex tools. Generic AI agents offer convenience but create security risks. 
            We offer a finished, secure product that is uniquely yours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="glassmorphism p-8 rounded-xl group hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${item.color}/20 border-2 border-${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-8 h-8 text-${item.color}`} />
                </div>
                <div className={`inline-block px-3 py-1 rounded-full bg-${item.color}/20 text-${item.color} text-sm font-medium mb-3`}>
                  {item.category}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-center">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWereDifferentSection;
