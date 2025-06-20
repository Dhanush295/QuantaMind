
import React from 'react';
import { Package, Shield, Wrench } from 'lucide-react';

const WhatMakesUsDifferentSection = () => {
  const pillars = [
    {
      title: "Product, Not a Project",
      description: "We're not a consulting firm. We don't hand you tools and leave. We deliver a ready-to-use AI agent — deployed in weeks, updated and maintained like software, not a custom build.",
      icon: Package,
      color: "quantminds-blue"
    },
    {
      title: "Private by Design",
      description: "Other AI companies run in the cloud and can't truly be private. Our AI agents run 100% offline, inside your environment. Your data stays under your control — always.",
      icon: Shield,
      color: "quantminds-grey"
    },
    {
      title: "Full-Stack, Not Just a Tool",
      description: "We handle everything: discovery, training, deployment, and support. No IT team needed. We turn complex AI into a simple product your business can actually use.",
      icon: Wrench,
      color: "quantminds-blue"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900/40 to-gray-800/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Not Just Private AI — <span className="text-gradient">Your Private AI</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="glassmorphism p-8 rounded-xl group hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${pillar.color}/20 border-2 border-${pillar.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <pillar.icon className={`w-8 h-8 text-${pillar.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-center">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-center">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferentSection;
