
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Gift, Crown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PilotProgramSection = () => {
  const benefits = [
    "Full AI agent, built and deployed",
    "Support, updates, and white-labeling",
    "Early access pricing and direct roadmap influence"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-quantminds-grey/10 via-quantminds-blue/5 to-quantminds-grey/15 relative overflow-hidden border-y border-quantminds-grey/20">
      <div className="absolute inset-0 circuit-bg opacity-20"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center bg-gradient-to-r from-quantminds-grey/20 to-quantminds-blue/20 border border-quantminds-grey/30 text-white p-6 rounded-xl mb-12 backdrop-blur-sm">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Crown className="h-6 w-6 text-quantminds-grey animate-pulse" />
            <span className="text-xl font-bold text-gradient">FOUNDING PARTNER PROGRAM NOW OPEN</span>
            <Crown className="h-6 w-6 text-quantminds-blue animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground">15-20 spots only — co-develop the future of private AI</p>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Founding Partner Program Now Open
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            We're selecting 15–20 forward-thinking companies to co-develop their own private AI agent with us.
          </p>
        </div>

        {/* Benefits Card */}
        <div className="flex justify-center mb-12">
          <Card className="w-full max-w-2xl border-2 border-quantminds-blue/40 bg-gradient-to-br from-quantminds-blue/10 to-quantminds-blue/5 hover:scale-105 transition-all shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-2xl flex items-center justify-center gap-2">
                <Gift className="h-6 w-6 text-quantminds-blue" />
                What You Get
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg">
                    <CheckCircle className="h-5 w-5 text-quantminds-blue flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 text-center">
                <Link to="/contact">
                  <Button size="lg" className="font-medium gap-2 bg-quantminds-blue hover:bg-quantminds-blue/90 text-white px-8 py-4">
                    Apply Now <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visual Element */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-quantminds-blue/30 blur-[100px] opacity-70"></div>
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-quantminds-blue/40 animate-spin-slow"></div>
            <div className="absolute inset-12 rounded-full border border-white/10 flex items-center justify-center p-6 text-center glassmorphism">
              <div>
                <div className="font-bold text-3xl mb-2 text-gradient">15-20</div>
                <p className="text-sm text-muted-foreground mb-2">
                  founding partner<br />spots available
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Now Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotProgramSection;
