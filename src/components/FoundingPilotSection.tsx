
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Gift, Clock, Star, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const FoundingPilotSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-quantminds-purple/10 via-quantminds-blue/5 to-quantminds-purple/15 relative overflow-hidden border-y border-quantminds-purple/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-quantminds-purple/20 to-quantminds-blue/20 border border-quantminds-purple/30 text-white p-6 rounded-xl mb-8 text-center backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Star className="h-6 w-6 text-quantminds-purple animate-pulse" />
            <span className="text-xl font-bold text-gradient">FOUNDING PARTNER PROGRAM</span>
            <Star className="h-6 w-6 text-quantminds-blue animate-pulse" />
          </div>
          <p className="text-lg font-medium text-muted-foreground">Only 20 spots available - Get exclusive early access</p>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-quantminds-purple/20 text-quantminds-purple border border-quantminds-purple/30 px-6 py-3 rounded-full mb-6">
            <Clock className="h-5 w-5" />
            <span className="font-bold text-sm">LIMITED TIME OFFER</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Join Our Founding Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            We're looking for <span className="text-quantminds-purple font-bold">20 forward-thinking companies</span> to help us build the future of secure AI. Get <span className="text-quantminds-blue font-bold">exclusive benefits</span> and <span className="text-quantminds-purple font-bold">massive savings</span>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-quantminds-purple/20 border border-quantminds-purple/40 px-6 py-3 rounded-full">
              <Users className="h-6 w-6 text-quantminds-purple" />
              <span className="font-bold text-quantminds-purple">20 spots only</span>
            </div>
            <div className="flex items-center gap-2 bg-quantminds-blue/20 border border-quantminds-blue/40 px-6 py-3 rounded-full">
              <Gift className="h-6 w-6 text-quantminds-blue" />
              <span className="font-bold text-quantminds-blue">Up to 70% off</span>
            </div>
          </div>
        </div>

        {/* Simple Plans */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Award className="h-8 w-8 text-quantminds-purple" />
            Choose Your Plan
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Free Option */}
            <Card className="border-2 border-quantminds-blue/40 bg-gradient-to-br from-quantminds-blue/10 to-quantminds-blue/5 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="absolute top-0 left-0 bg-gradient-to-r from-quantminds-blue to-quantminds-purple text-white px-4 py-2 text-sm font-bold rounded-br-lg">
                MOST POPULAR
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                  <CheckCircle className="h-6 w-6 text-quantminds-blue" />
                  Free Trial + Commitment
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-quantminds-blue">FREE</span>
                  <div className="text-sm text-quantminds-blue font-semibold">Complete pilot at no cost</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">4-week pilot with custom AI agent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Commit to 6 months if you love it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">40% lifetime discount</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Paid Option */}
            <Card className="border-2 border-quantminds-purple/40 bg-gradient-to-br from-quantminds-purple/10 to-quantminds-purple/5 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                  <Gift className="h-6 w-6 text-quantminds-purple" />
                  Discounted Pilot
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-quantminds-purple">$2K–$5K</span>
                  <div className="text-sm text-quantminds-purple font-semibold">Save up to 75%</div>
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
                    <span className="text-sm">25% discount if you continue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-purple mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Full custom deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Partnership Option */}
            <Card className="border-2 border-quantminds-blue/40 bg-gradient-to-br from-quantminds-blue/10 to-quantminds-blue/5 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="absolute top-0 left-0 bg-gradient-to-r from-quantminds-blue to-quantminds-purple text-white px-4 py-2 text-sm font-bold rounded-br-lg">
                PREMIUM
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                  <Users className="h-6 w-6 text-quantminds-blue" />
                  Co-Creation Partner
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-quantminds-blue">70% OFF</span>
                  <div className="text-sm text-quantminds-blue font-semibold">Maximum benefits</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Help shape our product</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">6 months free support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Featured as success story</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What You Get */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Shield className="h-6 w-6 text-quantminds-purple" />
            What You Get
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg border border-quantminds-purple/20">
              <Shield className="h-8 w-8 text-quantminds-purple mb-3" />
              <h4 className="font-semibold mb-2">Secure & Private</h4>
              <p className="text-sm text-muted-foreground">Works offline, your data stays safe</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg border border-quantminds-blue/20">
              <CheckCircle className="h-8 w-8 text-quantminds-blue mb-3" />
              <h4 className="font-semibold mb-2">Always Compliant</h4>
              <p className="text-sm text-muted-foreground">HIPAA, GDPR, FDA ready</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg border border-quantminds-purple/20">
              <Award className="h-8 w-8 text-quantminds-purple mb-3" />
              <h4 className="font-semibold mb-2">Your Brand</h4>
              <p className="text-sm text-muted-foreground">Fully branded for your company</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg border border-quantminds-blue/20">
              <Users className="h-8 w-8 text-quantminds-blue mb-3" />
              <h4 className="font-semibold mb-2">Full Support</h4>
              <p className="text-sm text-muted-foreground">Dedicated team to help you succeed</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-quantminds-purple/15 to-quantminds-blue/15 p-8 rounded-xl border border-quantminds-purple/30 backdrop-blur-sm">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-quantminds-purple/20 text-quantminds-purple border border-quantminds-purple/30 px-6 py-3 rounded-full text-sm font-bold">
              <Clock className="h-4 w-4" />
              SECURE YOUR SPOT
            </span>
          </div>
          
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-quantminds-purple to-quantminds-blue hover:from-quantminds-purple/90 hover:to-quantminds-blue/90 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              🚀 Join the Program
            </Button>
          </Link>
          
          <p className="text-lg text-quantminds-purple mt-4 font-bold">
            Only 20 spots available
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Join companies already transforming with secure AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundingPilotSection;
