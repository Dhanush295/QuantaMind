
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Gift, Mail, Lock, Shield, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FoundingPilotSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-quantminds-purple/10 to-quantminds-blue/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Founding Pilot Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            We've officially launched our Founding Pilot Program — and we're inviting 20 select businesses that handle sensitive data (legal, finance, healthcare, R&D, and more) to co-create secure, offline-capable AI agents with us.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-quantminds-purple/20 px-4 py-2 rounded-full">
              <Users className="h-5 w-5 text-quantminds-purple" />
              <span className="text-sm font-medium">Only 20 slots available</span>
            </div>
            <div className="flex items-center gap-2 bg-quantminds-blue/20 px-4 py-2 rounded-full">
              <Gift className="h-5 w-5 text-quantminds-blue" />
              <span className="text-sm font-medium">Exclusive discounts & benefits</span>
            </div>
            <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full">
              <Mail className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Join our waitlist now</span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Award className="h-6 w-6 text-quantminds-purple" />
            Choose Your Pilot Plan
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Option 1: Free Pilot */}
            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardHeader>
                <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Free Pilot with SaaS Commitment
                </CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-green-500">$0</span>
                  <span className="text-muted-foreground"> development fee</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">4-week pilot with 1 tailored AI agent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Requires commitment to 6+ months of SaaS if satisfied</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">40% lifetime SaaS discount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">White-label branding & secure deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Option 2: Discounted Pilot */}
            <Card className="border-2 border-quantminds-purple/30 bg-quantminds-purple/5">
              <CardHeader>
                <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                  <Zap className="h-5 w-5 text-quantminds-purple" />
                  Discounted Pilot Build
                </CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-quantminds-purple">$2K–$5K</span>
                  <span className="text-muted-foreground"> (normally $10K+)</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-purple mt-0.5 flex-shrink-0" />
                    <span className="text-sm">No commitment required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-purple mt-0.5 flex-shrink-0" />
                    <span className="text-sm">25% SaaS discount if you convert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-purple mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Full white-label + secure on-prem/edge agent</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Option 3: Co-Creation Partner */}
            <Card className="border-2 border-quantminds-blue/30 bg-quantminds-blue/5">
              <CardHeader>
                <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                  <Users className="h-5 w-5 text-quantminds-blue" />
                  Co-Creation Partner
                </CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-quantminds-blue">Up to 70%</span>
                  <span className="text-muted-foreground"> off development</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Help shape the roadmap & features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">6 months of free SaaS support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Featured as a case study or design partner (optional)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* All Options Include */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Lock className="h-6 w-6 text-quantminds-purple" />
            All Options Include
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg">
              <Shield className="h-8 w-8 text-quantminds-purple mb-3" />
              <h4 className="font-semibold mb-2">Secure & Offline</h4>
              <p className="text-sm text-muted-foreground">Fully secure, offline-capable AI agent</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="font-semibold mb-2">Compliance Ready</h4>
              <p className="text-sm text-muted-foreground">End-to-end encryption & regulatory compliance (HIPAA, GDPR)</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg">
              <Award className="h-8 w-8 text-quantminds-blue mb-3" />
              <h4 className="font-semibold mb-2">White-Label</h4>
              <p className="text-sm text-muted-foreground">White-label deployment with your branding</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg">
              <Users className="h-8 w-8 text-quantminds-purple mb-3" />
              <h4 className="font-semibold mb-2">Dedicated Support</h4>
              <p className="text-sm text-muted-foreground">Dedicated support & onboarding</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-4 text-lg font-semibold"
            >
              Join Waitlist Now
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Limited to 20 partners — spots filling fast!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundingPilotSection;
