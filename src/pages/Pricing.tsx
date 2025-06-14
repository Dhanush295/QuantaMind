
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams getting started with AI",
      features: [
        "Up to 5 custom AI models",
        "10GB GPU memory allocation",
        "Basic analytics dashboard",
        "Email support",
        "API access",
        "Standard security"
      ],
      isPopular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses scaling AI operations",
      features: [
        "Up to 20 custom AI models",
        "50GB GPU memory allocation",
        "Advanced analytics & reporting",
        "Priority support",
        "Full API & SDK access",
        "Enhanced security",
        "Custom integrations",
        "Team collaboration tools"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited custom AI models",
        "Dedicated GPU clusters",
        "White-label solutions",
        "24/7 dedicated support",
        "Custom API development",
        "Enterprise-grade security",
        "On-premise deployment",
        "SLA guarantees"
      ],
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that best fits your needs. All plans include our core AI capabilities and can be upgraded anytime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div key={index} className={`glassmorphism p-8 rounded-xl relative ${plan.isPopular ? 'ring-2 ring-quantminds-purple' : ''}`}>
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
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
          
          <div className="glassmorphism p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4 text-quantminds-purple">
              Founding Pilot Program
            </h2>
            <p className="text-gray-300 mb-6">
              Join our exclusive founding pilot program and get 50% off your first 6 months, plus dedicated support and early access to new features.
            </p>
            <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-3 rounded-lg font-semibold transition">
              Apply for Pilot Program
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
