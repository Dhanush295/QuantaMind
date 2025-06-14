
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Star, Zap, Shield, Code, Users, Rocket, Building } from 'lucide-react';

const Pricing = () => {
  const saasPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "1 custom agent",
        "Basic support",
        "Secure cloud or local deployment",
        "White-labeled interface",
        "GDPR/HIPAA-ready"
      ],
      cta: "Get Started",
      isPopular: false
    },
    {
      name: "Pro",
      price: "$299",
      period: "/month",
      description: "Ideal for growing teams scaling AI operations",
      features: [
        "Up to 3 agents",
        "Full branding customization",
        "Analytics dashboard",
        "Email & chat support",
        "Advanced deployment options",
        "Priority updates"
      ],
      cta: "Get Started",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited agents",
        "On-premise/air-gapped setup",
        "SLA guarantees",
        "Dedicated onboarding",
        "24/7 premium support",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      isPopular: false
    }
  ];

  const allPlansFeatures = [
    "Secure, private AI — no cloud dependency",
    "GDPR / HIPAA-ready deployments",
    "White-labeled interface (your branding)",
    "Support during onboarding & setup"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Flexible Pricing for Every Use Case
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From pilot programs to enterprise deployments, choose the pricing model that fits your AI needs and scale as you grow.
            </p>
          </div>

          {/* Pilot Program Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-quantminds-purple/20 text-quantminds-purple px-4 py-2 rounded-full mb-4">
                <Rocket className="w-5 h-5" />
                <span className="font-semibold">Limited Time Offer</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-quantminds-purple">
                🧪 Founding Pilot Program
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join our exclusive founding partner program and shape the future of AI deployment
              </p>
            </div>

            <div className="glassmorphism p-8 md:p-12 rounded-xl border-2 border-quantminds-purple/50 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-quantminds-purple text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Limited to 20 businesses
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Free or heavily discounted agent development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">White-labeled deployment with your branding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Priority support and direct roadmap input</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300"><strong>25–40% lifetime discount</strong> on future SaaS plans</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-quantminds-purple to-quantminds-blue p-8 rounded-xl mb-6">
                    <div className="text-4xl font-bold text-white mb-2">FREE</div>
                    <div className="text-white/80">Initial Development</div>
                  </div>
                  <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition w-full">
                    Join the Pilot Program
                  </button>
                  <p className="text-sm text-gray-400 mt-3">Applications reviewed within 48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* SaaS Pricing Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                💼 SaaS Pricing
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Perfect for SMBs & startups looking for scalable AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {saasPlans.map((plan, index) => (
                <div key={index} className={`glassmorphism p-8 rounded-xl relative ${plan.isPopular ? 'ring-2 ring-quantminds-purple scale-105' : ''}`}>
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-quantminds-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
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
                🔧 SDK / Device Licensing
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Embedded & Edge AI for wearables, sensors, medical devices, and more
              </p>
            </div>

            <div className="glassmorphism p-8 md:p-12 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-quantminds-purple mb-2">$5–$50</div>
                    <div className="text-xl text-gray-300">per device</div>
                    <div className="text-gray-400">based on usage, compute, and customization</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <Code className="w-8 h-8 text-quantminds-purple mx-auto mb-2" />
                      <div className="font-semibold">C++ Based</div>
                      <div className="text-sm text-gray-400">No Python dependencies</div>
                    </div>
                    <div className="text-center">
                      <Zap className="w-8 h-8 text-quantminds-purple mx-auto mb-2" />
                      <div className="font-semibold">Real-time</div>
                      <div className="text-sm text-gray-400">Offline capable</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Perfect for:</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0" />
                      <span className="text-gray-300">Wearable devices & smart sensors</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0" />
                      <span className="text-gray-300">Medical devices & health tech</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0" />
                      <span className="text-gray-300">Industrial IoT & edge computing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0" />
                      <span className="text-gray-300">Automotive & robotics applications</span>
                    </li>
                  </ul>
                  
                  <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-3 rounded-lg font-semibold transition w-full">
                    Request Licensing Quote
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
              Not sure which plan is right for you?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of AI experts will help you choose the perfect solution for your specific needs and use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
                Book a Demo Call
              </button>
              <button className="border border-quantminds-purple text-quantminds-purple hover:bg-quantminds-purple hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
                Join the Pilot
              </button>
              <button className="text-quantminds-purple hover:text-white border border-transparent hover:border-quantminds-purple px-8 py-4 rounded-lg text-lg font-semibold transition">
                Talk to Our Team
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
