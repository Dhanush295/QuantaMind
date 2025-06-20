
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Heart, Building, Shield, FileText, Stethoscope } from 'lucide-react';

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      title: "For Law Firms",
      icon: Scale,
      headline: "Protect Attorney-Client Privilege",
      description: "Securely analyze case files and contracts without risking attorney-client privilege.",
      features: [
        "Document analysis and summarization",
        "Contract review and red-flag detection", 
        "Legal research with case precedents",
        "Zero risk to confidential communications"
      ],
      color: "quantminds-grey"
    },
    {
      title: "For Healthcare", 
      icon: Heart,
      headline: "HIPAA-Compliant Processing",
      description: "Process live diagnostic data from medical devices with zero latency and full HIPAA compliance.",
      features: [
        "Real-time diagnostic assistance",
        "Medical imaging analysis",
        "Patient data processing without cloud exposure",
        "Offline AI for critical care decisions"
      ],
      color: "quantminds-blue"
    },
    {
      title: "For Finance & Accounting",
      icon: Building, 
      headline: "Guaranteed Privacy",
      description: "Run analysis on sensitive client financial data with guaranteed privacy.",
      features: [
        "Financial document analysis",
        "Compliance monitoring and reporting",
        "Risk assessment without data exposure", 
        "Audit trail with complete privacy"
      ],
      color: "quantminds-grey"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Private AI</span> for Your Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for Industries Where Trust is Everything
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-col md:flex-row justify-center mb-12 gap-4">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === index
                  ? `bg-${industry.color} text-white`
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <industry.icon size={20} />
                {industry.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <div className="transition-all duration-300">
          <Card className="bg-background border-border overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-lg bg-${industries[activeTab].color}/20 flex items-center justify-center`}>
                      <industries[activeTab].icon className={`w-8 h-8 text-${industries[activeTab].color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{industries[activeTab].title}</h3>
                      <p className={`text-${industries[activeTab].color} font-medium`}>{industries[activeTab].headline}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {industries[activeTab].description}
                  </p>

                  <ul className="space-y-4">
                    {industries[activeTab].features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Shield className={`w-5 h-5 text-${industries[activeTab].color} flex-shrink-0 mt-0.5`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center">
                  <div className="relative w-64 h-64 glassmorphism rounded-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-32 h-32 bg-${industries[activeTab].color}/20 rounded-full border-2 border-${industries[activeTab].color}/40 flex items-center justify-center animate-pulse-subtle`}>
                        <industries[activeTab].icon className={`w-16 h-16 text-${industries[activeTab].color}`} />
                      </div>
                    </div>
                    
                    {/* Security indicators */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-green-500/20 px-2 py-1 rounded-full">
                        <Shield size={12} className="text-green-500" />
                        <span className="text-xs text-green-500">SECURE</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-1 bg-blue-500/20 px-2 py-1 rounded-full">
                        <FileText size={12} className="text-blue-400" />
                        <span className="text-xs text-blue-400">PRIVATE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
