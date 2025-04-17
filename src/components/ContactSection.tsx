
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <div className="relative z-10 container mx-auto py-16 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact Us – Let's Build Your AI Together
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Ready to take your business to the next level? Let's schedule a meeting to discuss your unique business needs. 
          Using our powerful infrastructure, we'll help you build a custom AI tailored to your data. 
          You focus on growing your business—let us handle the AI.
        </p>
        <Link to="/contact">
          <Button size="lg" className="font-medium gap-2 bg-quantminds-purple hover:bg-quantminds-purple/90">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
