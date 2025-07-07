
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductHero = () => {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-background via-background/95 to-quantminds-grey/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Try Our AI Tools
            <span className="block text-gradient">Risk-Free</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the power of secure, private AI for your industry. Upload your documents and see instant results - no strings attached.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="glassmorphism p-6 rounded-xl text-center">
            <Shield className="w-12 h-12 text-quantminds-grey mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">100% Secure</h3>
            <p className="text-sm text-muted-foreground">Your documents are processed securely and never stored</p>
          </div>
          <div className="glassmorphism p-6 rounded-xl text-center">
            <Zap className="w-12 h-12 text-quantminds-blue mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
            <p className="text-sm text-muted-foreground">Get AI-powered insights in seconds, not hours</p>
          </div>
          <div className="glassmorphism p-6 rounded-xl text-center">
            <Users className="w-12 h-12 text-quantminds-grey mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Commitment</h3>
            <p className="text-sm text-muted-foreground">Try up to 3 documents per month completely free</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Choose your industry tool below to get started
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
