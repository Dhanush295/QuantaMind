
import React from 'react';
import { Cpu, Database, Lock, Zap, Code2, Briefcase, Server, Users } from 'lucide-react';

const features = [
  {
    title: "GPU-Powered Infrastructure",
    description: "Built with Boost C++, CUDA, cuDNN & cuBLAS for maximum performance on high-end GPUs.",
    icon: Cpu,
    color: "text-quantminds-purple"
  },
  {
    title: "Custom LLM Training",
    description: "Train and fine-tune large language models using your proprietary business data.",
    icon: Database,
    color: "text-quantminds-blue"
  },
  {
    title: "Enterprise-Grade Security",
    description: "Your data remains private and secure with our isolated training environments.",
    icon: Lock,
    color: "text-quantminds-purple"
  },
  {
    title: "API Integration",
    description: "Seamless integration via REST, SOAP, and gRPC APIs with comprehensive documentation.",
    icon: Code2,
    color: "text-quantminds-blue"
  },
  {
    title: "Managed Infrastructure",
    description: "We handle deployment, scaling, and maintenance of your AI infrastructure.",
    icon: Server,
    color: "text-quantminds-purple"
  },
  {
    title: "Expert Support",
    description: "Personalized support for model tuning, optimization, and scaling strategies.",
    icon: Users,
    color: "text-quantminds-blue"
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-20 px-4 bg-black/30 relative">
      <div className="absolute inset-0 circuit-bg opacity-5"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Enterprise AI</span> Made Simple
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            QuantaMind delivers enterprise-grade AI infrastructure without the complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glassmorphism p-6 rounded-xl transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white/5 mb-4 group-hover:bg-white/10 transition-colors">
                <feature.icon className={`${feature.color} h-6 w-6`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
