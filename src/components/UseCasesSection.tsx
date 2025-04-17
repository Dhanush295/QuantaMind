
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Film, ShoppingCart, TrendingUp, HeartPulse, Target, Brain, Bot, Cloud, FileCode, Search, MessageSquare, Mail } from 'lucide-react';

const useCases = [
  {
    title: "Custom AI Agents",
    description: "Build tailored AI agents that understand your business processes and data.",
    icon: Bot,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple"
  },
  {
    title: "Custom LLM Solutions",
    description: "Train and deploy large language models using your proprietary data.",
    icon: Brain,
    color: "bg-quantminds-blue/20",
    iconColor: "text-quantminds-blue"
  },
  {
    title: "Infrastructure Rental",
    description: "Access high-performance GPU infrastructure for your AI computations.",
    icon: Cloud,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple"
  },
  {
    title: "Document Analysis",
    description: "Intelligent document processing and data extraction for legal and financial documents.",
    icon: FileCode,
    color: "bg-quantminds-blue/20",
    iconColor: "text-quantminds-blue"
  },
  {
    title: "Intelligent Search",
    description: "Build custom search engines trained on your business data.",
    icon: Search,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple"
  },
  {
    title: "Customer Support AI",
    description: "Automated support systems trained on your product documentation.",
    icon: MessageSquare,
    color: "bg-quantminds-blue/20",
    iconColor: "text-quantminds-blue"
  },
  {
    title: "Email Analysis",
    description: "Automated email categorization and response generation.",
    icon: Mail,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple"
  },
  {
    title: "Predictive Analytics",
    description: "Custom ML models for business forecasting and trend analysis.",
    icon: TrendingUp,
    color: "bg-quantminds-blue/20",
    iconColor: "text-quantminds-blue"
  },
  {
    title: "Healthcare Analysis",
    description: "Secure AI models for medical data analysis and patient care optimization.",
    icon: HeartPulse,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple"
  }
];

const UseCasesSection = () => {
  return (
    <div className="py-20 px-4 bg-black/30 relative">
      <div className="absolute inset-0 circuit-bg opacity-5"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">B2B AI Solutions</span> for Every Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Custom AI solutions tailored for your business, with complete data privacy and security
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
};

export default UseCasesSection;
