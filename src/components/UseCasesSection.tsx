
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Heart, Factory, Plane, Building, Zap, Smartphone, Fuel } from 'lucide-react';

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      title: "Professional Services",
      industries: [
        {
          title: "Legal & Litigation",
          icon: Scale,
          problem: "Analyzing sensitive case files for e-discovery using cloud AI risks waiving attorney-client privilege.",
          solution: "A private AI agent that runs on your local network, allowing you to sift through millions of documents with zero data leaving your firm.",
          color: "quantminds-grey"
        },
        {
          title: "Healthcare & Medical Devices", 
          icon: Heart,
          problem: "AI analyzing live diagnostic data (like an ECG) from a medical device cannot afford cloud latency or a dropped connection.",
          solution: "An on-device AI agent that processes data instantly, providing real-time feedback to clinicians with absolute reliability and HIPAA compliance.",
          color: "quantminds-blue"
        }
      ]
    },
    {
      title: "Industrial & Critical Systems",
      industries: [
        {
          title: "Industrial & Manufacturing",
          icon: Factory,
          problem: "A factory floor has unreliable Wi-Fi, but you need to constantly monitor machinery for signs of failure.",
          solution: "An offline AI that runs on a small computer attached to the machine, using vibration and temperature data to predict failures before they happen, preventing costly downtime.",
          color: "quantminds-blue"
        },
        {
          title: "Aerospace & Defense",
          icon: Plane,
          problem: "A satellite or autonomous drone needs to make independent navigation and data-processing decisions in real-time, without waiting for commands from the ground.",
          solution: "A lightweight, on-board AI agent that enables true autonomy for mission-critical systems where a cloud connection is impossible.",
          color: "quantminds-grey"
        },
        {
          title: "Energy & Utilities",
          icon: Zap,
          problem: "Remote assets like pipelines or turbines need constant monitoring in locations with no internet access.",
          solution: "Monitor remote assets with on-device AI that works in locations with no internet access, ensuring continuous operation and predictive maintenance.",
          color: "quantminds-blue"
        },
        {
          title: "Consumer Electronics",
          icon: Smartphone,
          problem: "Smart devices need real-time processing capabilities without compromising user privacy or requiring constant connectivity.",
          solution: "Enable smart, on-device features—like real-time voice recognition—without sending user data to the cloud, ensuring absolute privacy.",
          color: "quantminds-grey"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    if (color === "quantminds-blue") {
      return {
        bg: "bg-quantminds-blue",
        bgOpacity: "bg-quantminds-blue/20",
        text: "text-quantminds-blue",
        border: "border-quantminds-blue/40",
        icon: "w-8 h-8 text-quantminds-blue"
      };
    }
    return {
      bg: "bg-quantminds-grey",
      bgOpacity: "bg-quantminds-grey/20", 
      text: "text-quantminds-grey",
      border: "border-quantminds-grey/40",
      icon: "w-8 h-8 text-quantminds-grey"
    };
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built for Industries Where <span className="text-gradient">Trust and Reliability are Everything</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            From protecting client privilege in a law firm to enabling real-time decisions on a factory floor, our private AI platform is designed for the world's most demanding environments.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-col md:flex-row justify-center mb-12 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === index
                  ? 'bg-quantminds-blue text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <div className="transition-all duration-300">
          <Card className="bg-background border-border overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {categories[activeTab].industries.map((industry, index) => (
                  <div key={index} className="glassmorphism p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-lg ${getColorClasses(industry.color).bgOpacity} flex items-center justify-center`}>
                        {React.createElement(industry.icon, {
                          className: getColorClasses(industry.color).icon
                        })}
                      </div>
                      <h3 className="text-xl font-bold">{industry.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-2">The Problem:</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {industry.problem}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-quantminds-blue mb-2">Our Solution:</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {industry.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
