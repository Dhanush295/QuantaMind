
import React from 'react';
import { Scale, Heart, Building, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhoWeHelpSection = () => {
  const industries = [
    {
      title: "Law Firms",
      description: "Analyze contracts, extract key clauses, and review litigation files — all offline.",
      icon: Scale,
      color: "quantminds-blue"
    },
    {
      title: "Hospitals",
      description: "Run diagnostics, redactions, or documentation agents on local infrastructure, safely and instantly.",
      icon: Heart,
      color: "quantminds-grey"
    },
    {
      title: "Financial Teams",
      description: "Automate risk analysis and audit prep using private, internal data — no exposure.",
      icon: Building,
      color: "quantminds-blue"
    },
    {
      title: "Industrial Teams",
      description: "Use AI on devices and edge systems for predictive maintenance — no cloud needed.",
      icon: Factory,
      color: "quantminds-grey"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who <span className="text-gradient">We Help</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="glassmorphism p-8 rounded-xl group hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-full bg-${industry.color}/20 border-2 border-${industry.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <industry.icon className={`w-8 h-8 text-${industry.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <button className="bg-quantminds-grey hover:bg-quantminds-grey/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
              Discuss Your Use Case
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
