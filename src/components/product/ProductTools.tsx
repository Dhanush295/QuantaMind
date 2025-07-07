
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Building, Scale, TrendingUp } from 'lucide-react';

const ProductTools = () => {
  const tools = [
    {
      id: 'lease-abstractor',
      title: 'Lease Abstractor',
      subtitle: 'Real Estate',
      description: 'Extract key terms, dates, and conditions from commercial lease agreements instantly.',
      icon: Building,
      path: '/product/lease-abstractor',
      featured: true,
      examples: ['Lease start/end dates', 'Rent escalations', 'Tenant obligations', 'Special provisions']
    },
    {
      id: 'contract-analyzer',
      title: 'Contract Analyzer',
      subtitle: 'Legal Firms',
      description: 'Analyze contracts for key clauses, risks, and compliance requirements.',
      icon: Scale,
      path: '/product/contract-analyzer',
      featured: false,
      examples: ['Liability clauses', 'Termination conditions', 'Payment terms', 'Risk assessment']
    },
    {
      id: 'deal-analyzer',
      title: 'Deal Analyzer',
      subtitle: 'M&A Advisory',
      description: 'Review transaction documents for critical deal terms and potential issues.',
      icon: TrendingUp,
      path: '/product/deal-analyzer',
      featured: false,
      examples: ['Valuation metrics', 'Deal structure', 'Due diligence items', 'Risk factors']
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card 
                key={tool.id} 
                className={`relative bg-black/20 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 ${tool.featured ? 'ring-2 ring-quantminds-grey/50' : ''}`}
              >
                {tool.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-quantminds-grey text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-quantminds-grey/20 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-quantminds-grey" />
                  </div>
                  <CardTitle className="text-xl font-bold">{tool.title}</CardTitle>
                  <CardDescription className="text-quantminds-grey font-medium">
                    {tool.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-center">Key Extractions:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {tool.examples.map((example, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-quantminds-grey rounded-full" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to={tool.path} className="block">
                    <Button 
                      className="w-full bg-quantminds-grey hover:bg-quantminds-grey/90"
                      size="lg"
                    >
                      Try {tool.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12 p-6 glassmorphism rounded-xl">
          <p className="text-sm text-muted-foreground mb-4">
            Need unlimited processing or enterprise-grade security?
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Contact Sales for Enterprise Solutions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductTools;
