
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Star, Zap, Shield, Code, Users, Rocket, Building, Cloud, Server, HardDrive, DollarSign, CalendarDays, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const saasPlans = [
    {
      name: "Professional Plan",
      subtitle: "Deploy in Your Secure Cloud",
      price: "$2,500",
      period: "/month",
      yearlyPrice: "$25,000/year",
      setupFee: "$10,000",
      pilotPrice: "$9,000",
      bestFor: "Small firms or agile teams who want private AI without hardware headaches",
      description: "Fastest Time to Value — deploy in 1 week",
      icon: Cloud,
      features: [
        "1 custom AI agent (e.g., Contract Analyzer, Policy Summarizer)",
        "Hosted in your secure Azure or AWS VPC",
        "Zero data retention — all processing inside your environment",
        "Pre-trained model, RAG-based architecture",
        "Standard support & software updates"
      ],
      addOns: [
        "Additional AI agents: +$1,500/month",
        "SSO / Microsoft 365 Integration: +$500/month",
        "AI Usage Insights Dashboard: +$3,000/year"
      ],
      cta: "Get Started",
      isPopular: true
    },
    {
      name: "Enterprise Plan",
      subtitle: "Deploy on Your Infrastructure",
      price: "$6,000",
      period: "/month",
      yearlyPrice: "$65,000/year",
      setupFee: "$25,000",
      bestFor: "Enterprises with multiple locations and full IT control",
      description: "Full Control + Compliance — ideal for law, finance, defense",
      icon: Server,
      features: [
        "On-premise deployment (your GPU servers)",
        "1 full-featured Quantamind AI agent (custom-trained)",
        "Secure container with RAG + LLM + vector DB",
        "\"White-glove\" remote onboarding with your IT team",
        "Dedicated support and upgrade channel"
      ],
      addOns: [
        "Custom fine-tuning: +$25,000/model",
        "Internal compliance toolkit (audit logging): +$5,000/year",
        "Air-gapped update delivery: +$3,000/year"
      ],
      cta: "Contact Sales",
      isPopular: false
    },
    {
      name: "Quantamind Vault™",
      subtitle: "Managed GPU Pod",
      price: "$95,000",
      period: "/year",
      hardwarePrice: "$15,000–35,000",
      bestFor: "Mid-sized teams needing secure, on-prem AI without internal GPU expertise",
      description: "Just plug it in — we handle the rest",
      icon: HardDrive,
      features: [
        "Pre-configured sealed AI appliance with NVIDIA GPU",
        "Fully loaded with your custom AI agent",
        "Local RAG + LLM inference — no cloud dependency",
        "Remote monitoring & update support",
        "1-year hardware warranty & software license"
      ],
      addOns: [
        "On-site installation: +$3,000",
        "Redundant backup unit: +$10,000",
        "Factory reset & redeployment: +$5,000"
      ],
      cta: "Contact Sales",
      isPopular: false
    }
  ];

  const addOnsTable = [
    { feature: "Additional AI Agent (any plan)", price: "$1,500/month" },
    { feature: "SSO Integration", price: "$500/month" },
    { feature: "Compliance Toolkit (HIPAA, ITAR)", price: "$5,000/year" },
    { feature: "24/7 Premium Support SLA", price: "$10,000/year" },
    { feature: "AI Usage Analytics & Monitoring", price: "$3,000/year" },
    { feature: "Custom Model Fine-Tuning", price: "From $25,000/model" }
  ];

  const allPlansFeatures = [
    "Secure, private AI",
    "GDPR / HIPAA ready",
    "Your branding",
    "Setup support"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Simple Pricing
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your needs. Scale as you grow.
            </p>
          </div>

          {/* Pilot Program Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-quantminds-purple/20 text-quantminds-purple px-4 py-2 rounded-full mb-4">
                <Rocket className="w-5 h-5" />
                <span className="font-semibold">Limited Offer</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-quantminds-purple">
                 Pilot Program
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join 20 founding partners and get exclusive benefits
              </p>
            </div>

            <div className="glassmorphism p-8 md:p-12 rounded-xl border-2 border-quantminds-purple/50 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-quantminds-purple text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Only 20 spots
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Free agent development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Your branding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Priority support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300"><strong>40% lifetime discount</strong></span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-quantminds-purple to-quantminds-blue p-8 rounded-xl mb-6">
                    <div className="text-4xl font-bold text-white mb-2">FREE</div>
                    <div className="text-white/80">Development</div>
                  </div>
                  <Link to="/contact" className="w-full">
                    <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition w-full">
                      Join Pilot Program
                    </button>
                  </Link>
                  <p className="text-sm text-gray-400 mt-3">Reviewed in 48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* SaaS Pricing Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                 SaaS Plans
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Scalable AI solutions for businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {saasPlans.map((plan, index) => (
                <div key={index} className={`glassmorphism p-8 rounded-xl relative ${plan.isPopular ? 'ring-2 ring-quantminds-purple scale-105' : ''}`}>
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-quantminds-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      <plan.icon className="w-12 h-12 text-quantminds-purple" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                    {plan.subtitle && (
                      <p className="text-sm text-quantminds-purple font-medium mb-4">{plan.subtitle}</p>
                    )}
                    {plan.bestFor && (
                      <p className="text-xs text-gray-400 mb-4 italic">Best for: {plan.bestFor}</p>
                    )}
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-quantminds-purple">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                      {plan.yearlyPrice && (
                        <div className="text-sm text-gray-400 mt-2">
                          {plan.yearlyPrice}
                        </div>
                      )}
                      {plan.setupFee && (
                        <div className="text-sm text-orange-400 mt-2">
                          One-time Setup: {plan.setupFee}
                        </div>
                      )}
                      {plan.hardwarePrice && (
                        <div className="text-sm text-orange-400 mt-2">
                          Hardware + Setup: {plan.hardwarePrice}
                        </div>
                      )}
                      {plan.pilotPrice && (
                        <div className="text-sm text-green-400 mt-2">
                          🧪 Pilot Program: {plan.pilotPrice}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="w-full">
                  <button className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.isPopular 
                      ? 'bg-quantminds-purple hover:bg-quantminds-purple/90 text-white' 
                      : 'border-2 border-quantminds-purple text-quantminds-purple hover:bg-quantminds-purple hover:text-white'
                  }`}>
                    {plan.cta}
                  </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Add-Ons & Custom Options Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Add-Ons & Custom Options
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Enhance any plan with additional features and services
              </p>
            </div>

            <div className="glassmorphism p-8 rounded-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-4 px-6 text-lg font-semibold text-quantminds-purple">Feature</th>
                      <th className="text-right py-4 px-6 text-lg font-semibold text-quantminds-purple">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addOnsTable.map((item, index) => (
                      <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/30 transition">
                        <td className="py-4 px-6 text-gray-300">{item.feature}</td>
                        <td className="py-4 px-6 text-right text-gray-300 font-semibold">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 text-center">
                <Link to="/contact">
                  <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-3 rounded-lg font-semibold transition">
                    Discuss Custom Options
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* All Plans Include Section */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                All Plans Include
              </h2>
            </div>
            
            <div className="glassmorphism p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allPlansFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-quantminds-purple flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="glassmorphism p-8 md:p-12 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-quantminds-purple">
              Need help choosing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our experts will help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="w-full">
              <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
                Contact Us
              </button>
              </Link>
              {/* <button className="border border-quantminds-purple text-quantminds-purple hover:bg-quantminds-purple hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
                Join Pilot
              </button>
              <button className="text-quantminds-purple hover:text-white border border-transparent hover:border-quantminds-purple px-8 py-4 rounded-lg text-lg font-semibold transition">
                Contact Us
              </button> */}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
