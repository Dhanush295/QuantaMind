
import React from 'react';
import { Wifi, Clock, Shield, Zap } from 'lucide-react';

const WhyOfflineMattersSection = () => {
  const benefits = [
    {
      title: "Zero Latency",
      description: "Real-time decisions without cloud delays",
      icon: Zap,
      color: "quantminds-blue"
    },
    {
      title: "Complete Control",
      description: "Your data never leaves your infrastructure",
      icon: Shield,
      color: "quantminds-grey"
    },
    {
      title: "Always Available",
      description: "No internet dependency for critical operations",
      icon: Wifi,
      color: "quantminds-blue"
    },
    {
      title: "Instant Performance",
      description: "No network bottlenecks or external dependencies",
      icon: Clock,
      color: "quantminds-grey"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black/60 to-gray-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            When the Cloud <span className="text-gradient">Isn't Good Enough</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Cloud AI fails in environments where latency, control, or compliance are critical. A hospital can't stream live surgical video to the cloud. A factory can't depend on Wi-Fi for real-time automation. A law firm can't risk client files leaving their building. Quantamind gives these organizations the reliability, privacy, and instant performance they need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="glassmorphism p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${benefit.color}/20 border border-${benefit.color}/40 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <benefit.icon className={`w-6 h-6 text-${benefit.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOfflineMattersSection;
