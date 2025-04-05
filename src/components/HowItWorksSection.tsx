
import React from 'react';
import { Upload, Cpu, Webhook } from 'lucide-react';

const steps = [
  {
    title: "Upload Your Data",
    description: "Connect your company data securely through our interface or API.",
    icon: Upload,
    color: "text-quantminds-purple"
  },
  {
    title: "Train on GPU",
    description: "QuantMinds uses high-performance GPU libraries to train your model quickly and efficiently.",
    icon: Cpu,
    color: "text-quantminds-purple"
  },
  {
    title: "Get Predictions via API",
    description: "Use our REST API to get fast, accurate predictions integrated right into your product or backend.",
    icon: Webhook,
    color: "text-quantminds-purple"
  }
];

const HowItWorksSection = () => {
  return (
    <div className="py-20 px-4 bg-black/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with QuantMinds in just three simple steps
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-quantminds-purple/20 transform -translate-x-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="space-y-20 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="md:flex items-center justify-center">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-quantminds-purple/20 border border-quantminds-purple/50 relative z-20 glow-purple">
                  <step.icon className={`${step.color} h-6 w-6`} />
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 md:order-2' : 'md:pr-12'}`}>
                  <div className="md:hidden flex items-center space-x-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-quantminds-purple/20 border border-quantminds-purple/50">
                      <step.icon className={`${step.color} h-5 w-5`} />
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  
                  <div className="glassmorphism p-6 rounded-xl md:transform md:transition-transform md:duration-300 md:hover:scale-105">
                    {index === 0 && (
                      <div className="rounded bg-black/50 p-3 border border-gray-800 mb-4">
                        <div className="flex space-x-2 mb-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-sm font-mono text-green-400">
                          <span className="text-blue-400">$</span> curl -X POST https://api.quantminds.ai/upload \<br />
                          <span className="ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</span><br />
                          <span className="ml-4">-F "data=@your_dataset.csv"</span>
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="flex flex-col items-center justify-center h-32">
                        <div className="relative w-20 h-20">
                          <div className="absolute inset-0 bg-quantminds-purple/30 rounded-lg animate-pulse"></div>
                          <div className="absolute inset-2 bg-quantminds-purple/20 rounded-lg"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Cpu className="h-8 w-8 text-quantminds-purple" />
                          </div>
                        </div>
                        <div className="mt-4 bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                          Training complete: 98.7% accuracy
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="rounded bg-black/50 p-3 border border-gray-800">
                        <div className="flex space-x-2 mb-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-sm font-mono text-green-400">
                          <span className="text-blue-400">$</span> curl -X POST https://api.quantminds.ai/predict \<br />
                          <span className="ml-4">-H "Content-Type: application/json" \</span><br />
                          <span className="ml-4">-d '{"{"}
                            "customer_id": 12345,
                            "items_viewed": [101, 203, 546]
                          {"}"}'</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
