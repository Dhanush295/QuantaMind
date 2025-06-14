
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Star, Zap, Shield, Code, Users, Rocket, Building } from 'lucide-react';

const Pricing = () => {
  const saasPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "For small businesses",
      features: [
        "1 custom agent",
        "Basic support",
        "Secure deployment",
        "White-labeled",
        "GDPR/HIPAA ready"
      ],
      cta: "Get Started",
      isPopular: false
    },
    {
      name: "Pro",
      price: "$299",
      period: "/month",
      description: "For growing teams",
      features: [
        "Up to 3 agents",
        "Full customization",
        "Analytics dashboard",
        "Priority support",
        "Advanced deployment",
        "Priority updates"
      ],
      cta: "Get Started",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited agents",
        "On-premise setup",
        "SLA guarantees",
        "Dedicated onboarding",
        "24/7 support",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      isPopular: false
    }
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
                🧪 Pilot Program
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
                  <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition w-full">
                    Join Pilot Program
                  </button>
                  <p className="text-sm text-gray-400 mt-3">Reviewed in 48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* SaaS Pricing Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                💼 SaaS Plans
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
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-quantminds-purple">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.isPopular 
                      ? 'bg-quantminds-purple hover:bg-quantminds-purple/90 text-white' 
                      : 'border border-quantminds-purple text-quantminds-purple hover:bg-quantminds-purple hover:text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SDK/Device Licensing Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🔧 Device Licensing
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Embedded AI for devices and sensors
              </p>
            </div>

            <div className="glassmorphism p-8 md:p-12 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-quantminds-purple mb-2">$5–$50</div>
                    <div className="text-xl text-gray-300">per device</div>
                    <div className="text-gray-400">Based on usage and features</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <Code className="w-8 h-8 text-quantminds-purple mx-auto mb-2" />
                      <div className="font-semibold">C++ Based</div>
                      <div className="text-sm text-gray-400">No dependencies</div>
                    </div>
                    <div className="text-center">
                      <Zap className="w-8 h-8 text-quantminds-purple mx-auto mb-2" />
                      <div className="font-semibold">Real-time</div>
                      <div className="text-sm text-gray-400">Works offline</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Perfect for:</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0" />
                      <span className="text-gray-300">Wearables & sensors</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0" />
                      <span className="text-gray-300">Medical devices</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0" />
                      <span className="text-gray-300">Industrial IoT</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0" />
                      <span className="text-gray-300">Automotive & robotics</span>
                    </li>
                  </ul>
                  
                  <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-3 rounded-lg font-semibold transition w-full">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* All Plans Include Section */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                🔐 All Plans Include
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
              <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
                Book Demo
              </button>
              <button className="border border-quantminds-purple text-quantminds-purple hover:bg-quantminds-purple hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
                Join Pilot
              </button>
              <button className="text-quantminds-purple hover:text-white border border-transparent hover:border-quantminds-purple px-8 py-4 rounded-lg text-lg font-semibold transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
