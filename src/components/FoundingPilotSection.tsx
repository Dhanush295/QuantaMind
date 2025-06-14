
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Gift, Mail, Lock, Shield, Award, Zap, Clock, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const FoundingPilotSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-quantminds-purple/10 via-quantminds-blue/5 to-quantminds-purple/15 relative overflow-hidden border-y border-quantminds-purple/20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      
      {/* Welcoming Banner */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-gradient-to-r from-quantminds-purple/15 to-quantminds-blue/15 border border-quantminds-purple/20 text-white p-6 rounded-xl mb-8 text-center backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Heart className="h-6 w-6 text-quantminds-purple" />
            <span className="text-xl font-bold text-gradient">FOUNDING PARTNER PROGRAM</span>
            <Heart className="h-6 w-6 text-quantminds-blue" />
          </div>
          <p className="text-lg font-medium text-muted-foreground">Join 20 forward-thinking companies shaping the future of secure AI</p>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-quantminds-blue/15 text-quantminds-blue border border-quantminds-blue/20 px-6 py-3 rounded-full mb-6">
            <Users className="h-5 w-5" />
            <span className="font-semibold text-sm">EARLY PARTNERSHIP OPPORTUNITY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Partner With Us to Build the Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            We're looking for <span className="text-quantminds-purple font-semibold">20 innovative companies</span> in legal, finance, healthcare, and R&D to collaborate with us in developing the next generation of secure, offline AI agents. As a founding partner, you'll get <span className="text-quantminds-blue font-semibold">early access, significant savings</span>, and the opportunity to <span className="text-quantminds-purple font-semibold">shape the product roadmap</span>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-quantminds-purple/15 border border-quantminds-purple/30 px-6 py-3 rounded-full">
              <Users className="h-6 w-6 text-quantminds-purple" />
              <span className="font-semibold text-quantminds-purple">20 partnership spots</span>
            </div>
            <div className="flex items-center gap-2 bg-quantminds-blue/15 border border-quantminds-blue/30 px-6 py-3 rounded-full">
              <Gift className="h-6 w-6 text-quantminds-blue" />
              <span className="font-semibold text-quantminds-blue">Save up to 70%</span>
            </div>
            <div className="flex items-center gap-2 bg-quantminds-purple/15 border border-quantminds-purple/30 px-6 py-3 rounded-full">
              <Award className="h-6 w-6 text-quantminds-purple" />
              <span className="font-semibold text-quantminds-purple">Shape the future</span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Heart className="h-8 w-8 text-quantminds-purple" />
            Choose Your Partnership Level
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Option 1: Free Pilot */}
            <Card className="border-2 border-quantminds-blue/30 bg-gradient-to-br from-quantminds-blue/8 to-quantminds-blue/4 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="absolute top-0 left-0 bg-gradient-to-r from-quantminds-blue to-quantminds-purple text-white px-4 py-2 text-sm font-semibold rounded-br-lg">
                POPULAR CHOICE
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                  <CheckCircle className="h-6 w-6 text-quantminds-blue" />
                  Free Pilot Partnership
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-quantminds-blue">$0</span>
                  <span className="text-muted-foreground line-through ml-2">$10K+</span>
                  <div className="text-sm text-quantminds-blue font-semibold">Completely Free Development</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">4-week pilot with 1 custom AI agent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Continue with our service if you love the results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">40% ongoing partner discount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Your branding & secure deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Option 2: Discounted Pilot */}
            <Card className="border-2 border-quantminds-purple/30 bg-gradient-to-br from-quantminds-purple/8 to-quantminds-purple/4 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                  <Zap className="h-6 w-6 text-quantminds-purple" />
                  Flexible Partnership
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-quantminds-purple">$2K–$5K</span>
                  <div className="text-sm text-muted-foreground line-through">normally $10K-$20K</div>
                  <div className="text-sm text-quantminds-purple font-semibold">Save up to 75%</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-purple mt-0.5 flex-shrink-0" />
                    <span className="text-sm">No long-term commitment needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-purple mt-0.5 flex-shrink-0" />
                    <span className="text-sm">25% partner discount if you continue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-purple mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Full custom branding + secure deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Option 3: Co-Creation Partner */}
            <Card className="border-2 border-quantminds-blue/30 bg-gradient-to-br from-quantminds-blue/8 to-quantminds-blue/4 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="absolute top-0 left-0 bg-gradient-to-r from-quantminds-blue to-quantminds-purple text-white px-4 py-2 text-sm font-semibold rounded-br-lg">
                MAXIMUM VALUE
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                  <Users className="h-6 w-6 text-quantminds-blue" />
                  Innovation Partnership
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-quantminds-blue">Up to 70%</span>
                  <div className="text-sm text-muted-foreground">off development + perks</div>
                  <div className="text-sm text-quantminds-blue font-semibold">Best Value Package</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Help guide product development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">6 months of complimentary support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-quantminds-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Optional case study collaboration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* All Options Include */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Shield className="h-6 w-6 text-quantminds-purple" />
            Every Partnership Includes
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg border border-quantminds-purple/20">
              <Shield className="h-8 w-8 text-quantminds-purple mb-3" />
              <h4 className="font-semibold mb-2">Secure & Private</h4>
              <p className="text-sm text-muted-foreground">Fully secure, works offline</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg border border-quantminds-blue/20">
              <CheckCircle className="h-8 w-8 text-quantminds-blue mb-3" />
              <h4 className="font-semibold mb-2">Compliance Ready</h4>
              <p className="text-sm text-muted-foreground">HIPAA, GDPR compliant</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg border border-quantminds-purple/20">
              <Award className="h-8 w-8 text-quantminds-purple mb-3" />
              <h4 className="font-semibold mb-2">Your Brand</h4>
              <p className="text-sm text-muted-foreground">Fully branded for your company</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg border border-quantminds-blue/20">
              <Heart className="h-8 w-8 text-quantminds-blue mb-3" />
              <h4 className="font-semibold mb-2">Dedicated Support</h4>
              <p className="text-sm text-muted-foreground">Personal support & guidance</p>
            </div>
          </div>
        </div>

        {/* Friendly Call to Action */}
        <div className="text-center bg-gradient-to-r from-quantminds-purple/10 to-quantminds-blue/10 p-8 rounded-xl border border-quantminds-purple/20 backdrop-blur-sm">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-quantminds-purple/15 text-quantminds-purple border border-quantminds-purple/20 px-6 py-3 rounded-full text-sm font-semibold">
              <Heart className="h-4 w-4" />
              JOIN OUR COMMUNITY
            </span>
          </div>
          
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-quantminds-purple to-quantminds-blue hover:from-quantminds-purple/90 hover:to-quantminds-blue/90 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              🤝 Let's Build Something Amazing Together
            </Button>
          </Link>
          
          <p className="text-lg text-quantminds-purple mt-4 font-semibold">
            20 partnership opportunities available
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Join innovative companies already transforming their operations with secure AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundingPilotSection;
