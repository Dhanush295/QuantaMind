import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Heart, Building, Shield, FileText, Factory, Plane, Zap, Smartphone, TrendingUp } from 'lucide-react';

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      title: "Professional Services",
      industries: [
        {
          title: "Law Firms",
          icon: Scale,
          description: "Securely analyze case files and contracts without risking attorney-client privilege.",
          color: "quantminds-grey"
        },
        {
          title: "Healthcare", 
          icon: Heart,
          description: "Process live diagnostic data from medical devices with zero latency and full HIPAA compliance.",
          color: "quantminds-blue"
        },
        {
          title: "Finance & Accounting",
          icon: Building, 
          description: "Run analysis on sensitive client financial data with guaranteed privacy and regulatory compliance.",
          color: "quantminds-grey"
        },
        {
          title: "Corporate Strategy & M&A",
          icon: TrendingUp,
          description: "Analyze confidential deal documents, financials, and intellectual property in a secure, air-gapped environment.",
          color: "quantminds-blue"
        }
      ]
    },
    {
      title: "Industrial & Edge Computing",
      industries: [
        {
          title: "Manufacturing & IoT",
          icon: Factory,
          description: "Run predictive maintenance AI directly on factory machinery to detect failures in real-time, even with unreliable Wi-Fi.",
          color: "quantminds-blue"
        },
        {
          title: "Defense & Aerospace",
          icon: Plane,
          description: "Deploy autonomous navigation and data analysis on satellites, drones, and other mission-critical systems that must operate without a cloud connection.",
          color: "quantminds-grey"
        },
        {
          title: "Energy & Infrastructure",
          icon: Zap,
          description: "Monitor remote assets like pipelines or turbines with on-device AI that works in locations with no internet access.",
          color: "quantminds-blue"
        },
        {
          title: "Consumer Electronics",
          icon: Smartphone,
          description: "Enable smart, on-device features—like real-time voice recognition or health monitoring—without sending user data to the cloud, ensuring absolute privacy.",
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories[activeTab].industries.map((industry, index) => (
                  <div key={index} className="glassmorphism p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg ${getColorClasses(industry.color).bgOpacity} flex items-center justify-center`}>
                        {React.createElement(industry.icon, {
                          className: getColorClasses(industry.color).icon
                        })}
                      </div>
                      <h3 className="text-xl font-bold">{industry.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
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
