
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Film, ShoppingCart, TrendingUp, HeartPulse, Target, Webhook, FileDown } from 'lucide-react';

const useCases = [
  {
    title: "Movie & Product Recommendations",
    description: "Drive more sales with personalized recommendations based on user behavior.",
    icon: Film,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple"
  },
  {
    title: "Trading Predictions",
    description: "Make data-driven trading decisions with AI-powered signal detection and forecasting.",
    icon: TrendingUp,
    color: "bg-quantminds-blue/20",
    iconColor: "text-quantminds-blue"
  },
  {
    title: "Healthcare Insights",
    description: "Identify patterns in healthcare data to improve patient outcomes and care efficiency.",
    icon: HeartPulse,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple"
  },
  {
    title: "Personalized Ads",
    description: "Target the right audience with AI that understands customer preferences.",
    icon: Target,
    color: "bg-quantminds-blue/20",
    iconColor: "text-quantminds-blue"
  },
  {
    title: "Customer Behavior Analytics",
    description: "Understand your customers better with deep behavior pattern analysis.",
    icon: ShoppingCart,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple"
  }
];

const deliveryOptions = [
  {
    title: "Return Predictions via API",
    description: "Most common option. Get real-time predictions through our secure REST API endpoints.",
    icon: Webhook,
    color: "bg-quantminds-purple/20",
    iconColor: "text-quantminds-purple",
    badge: "Most Popular"
  },
  {
    title: "Return the AI Model File",
    description: "For advanced customers. Download the trained model for on-premises deployment.",
    icon: FileDown,
    color: "bg-quantminds-blue/20",
    iconColor: "text-quantminds-blue",
    badge: "Advanced"
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
            Choose how you want to implement QuantMinds AI in your business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
