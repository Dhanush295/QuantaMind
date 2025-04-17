
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="py-20 px-4 bg-black/30 relative">
      <div className="absolute inset-0 circuit-bg opacity-5"></div>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Build Your AI Solution Together
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Ready to transform your business? Let's schedule a meeting to discuss your unique needs. 
          Our team will help you build custom AI agents and LLMs tailored to your data, 
          all while maintaining complete privacy and security. Access our powerful GPU infrastructure 
          and let us handle the AI while you focus on growing your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 rounded-lg bg-black/20 backdrop-blur">
            <Mail className="w-6 h-6 text-quantminds-purple mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-muted-foreground">Get in touch anytime</p>
          </div>
          
          <div className="p-4 rounded-lg bg-black/20 backdrop-blur">
            <MessageSquare className="w-6 h-6 text-quantminds-purple mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-2">Schedule Demo</h3>
            <p className="text-sm text-muted-foreground">See our platform in action</p>
          </div>
          
          <div className="p-4 rounded-lg bg-black/20 backdrop-blur">
            <Clock className="w-6 h-6 text-quantminds-purple mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
            <p className="text-sm text-muted-foreground">Within 24 hours</p>
          </div>
        </div>

        <Link to="/contact">
          <Button size="lg" className="font-medium gap-2 bg-quantminds-purple hover:bg-quantminds-purple/90">
            Contact Us Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
