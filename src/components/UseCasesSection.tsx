
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  Stethoscope,
  Gauge,
  UserCheck,
  Tv,
  Webhook,
  FileDown,
  CloudCog,
  ShieldCheck,
  Server
} from 'lucide-react';

const useCases = [
  {
    title: "Custom AI Chatbots for Businesses",
    description: "Quantamind helps startups and SMBs build private chatbots trained on their own data, running securely on their infrastructure.",
    icon: MessageCircle,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple"
  },
  {
    title: "Medical AI on Edge Devices",
    description: "Hospitals use Quantamind to deploy diagnostic models (e.g., ECG, imaging) offline on tablets or servers to meet HIPAA compliance.",
    icon: Stethoscope,
    color: "bg-quantminds-blue/20",
    iconColor: "text-quantminds-blue"
  },
  {
    title: "Industrial Predictive Maintenance",
    description: "Manufacturers run Quantamind's AI models on edge devices to detect equipment faults and avoid downtime in real time.",
    icon: Gauge,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple"
  },
  {
    title: "Offline AI Copilots for Enterprises",
    description: "Banks and legal firms deploy AI agents internally to summarize, classify, or search documents without using any cloud service.",
    icon: UserCheck,
    color: "bg-quantminds-blue/20",
    iconColor: "text-quantminds-blue"
  },
  {
    title: "AI in Consumer Electronics",
    description: "Device makers integrate Quantamind's lightweight models into smart TVs, wearables, and routers for fast, private AI features.",
    icon: Tv,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple"
  }
];

const deliveryOptions = [
  {
    title: "End-to-End Custom AI Model",
    description: "Train and deploy your proprietary non-LLM models (CV, tabular, time-series) fully on Quantamind infrastructure.",
    icon: Server,
    color: "bg-quantminds-blue/20",
    iconColor: "text-quantminds-blue",
    badge: "End-to-End AI"
  },
  {
    title: "End-to-End Custom LLM Model",
    description: "We build, fine-tune, and deploy a business-specific LLM tailored to your operations — hosted securely by Quantamind.",
    icon: CloudCog,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple",
    badge: "LLM as a Service"
  },
  {
    title: "Deploy Your trained AI Model File",
    description: "For Business/Universities. Deploy the trained model fully on Quantamind infrastructure.",
    icon: FileDown,
    color: "bg-quantminds-blue/20",
    iconColor: "text-quantminds-blue",
    badge: "Advanced"
  },
  {
    title: "Deploy Inside Client VPC",
    description: "Install Quantamind's full AI stack inside your AWS, GCP, or Azure environment for complete infrastructure control.",
    icon: CloudCog,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple",
    badge: "Private Cloud"
  },
  {
    title: "Fully On-Prem Deployment",
    description: "Deploy our secure inference engine in your own data center or air-gapped network. No cloud or external access.",
    icon: Server,
    color: "bg-quantminds-blue/20",
    iconColor: "text-quantminds-blue",
    badge: "Enterprise"
  },
  {
    title: "Offline Model Delivery",
    description: "Receive signed, encrypted TorchScript model files for secure offline use in regulated environments.",
    icon: ShieldCheck,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple",
    badge: "Air-Gapped"
  }
  
];

const UseCasesSection = () => {
  return (
    <div className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Use Cases</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform adapts to your industry's unique AI challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-background border-border hover:border-quantminds-purple/50 transition-all overflow-hidden group">
              <CardContent className="p-6">
                <div className={`rounded-full w-12 h-12 flex items-center justify-center ${useCase.color} mb-4`}>
                  <useCase.icon className={`${useCase.iconColor} h-6 w-6`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-quantminds-purple to-quantminds-blue transition-all duration-300"></div>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Delivery Options</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-12">
            Choose how you want to implement Quantamind AI in your business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {deliveryOptions.map((option, index) => (
              <Card key={index} className="bg-background border-border hover:border-quantminds-purple/50 transition-all overflow-hidden group relative">
                {option.badge && (
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      option.badge === 'Most Popular'
                        ? 'bg-quantminds-purple/20 text-quantminds-purple'
                        : 'bg-quantminds-blue/20 text-quantminds-blue'
                    }`}>
                      {option.badge}
                    </span>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className={`rounded-full w-12 h-12 flex items-center justify-center ${option.color} mb-4`}>
                    <option.icon className={`${option.iconColor} h-6 w-6`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all">{option.title}</h3>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-quantminds-purple to-quantminds-blue transition-all duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
