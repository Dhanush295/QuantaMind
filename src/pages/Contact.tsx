
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, you would send this data to a server
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-quantminds-purple/20 via-transparent to-transparent -z-10"></div>
      
      {/* Main content */}
      <div className="container mx-auto pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <a href="/" className="text-4xl font-bold flex items-center gap-2 justify-center mb-4">
              <span className="text-white rounded-md bg-quantminds-purple/90 px-2">Q</span>
              <span className="text-gradient">QuantaMind</span>
            </a>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h1>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Have questions about our services or want to learn more about how QuantaMind can help your business? 
                  We'd love to hear from you!
                </p>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Email Us</h3>
                  <a 
                    href="mailto:info@quantamind.co" 
                    className="flex items-center gap-2 text-quantminds-purple hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    info@quantamind.co
                  </a>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    We aim to respond to all inquiries within 24-48 hours during business days.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      required 
                      placeholder="How can we help you?"
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-quantminds-purple hover:bg-quantminds-purple/90" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">Sending...</span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/">
              <Button variant="outline">
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
