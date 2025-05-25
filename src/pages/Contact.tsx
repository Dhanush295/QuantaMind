import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current!);

      const res = await fetch("https://formsubmit.co/ajax/dhanushg295@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        toast({
        title: "Thank you!",
        description: "Thanks for choosing QuantaMind for doing business with us. We will get back to you soon!",
      });
        formRef.current?.reset();
      } else {
        toast({
          title: "Submission failed",
          description: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Unable to submit the form. Please try again later.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4 container mx-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Model Inquiry Form</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-black/20 backdrop-blur-sm rounded-lg p-6 md:p-8 space-y-6"
        >
          <input type="hidden" name="_cc" value="Chirag.v.k2@gmail.com,aanyasampath1703@gmail.com" />
          <input type="hidden" name="_subject" value="New QuantaMind Inquiry" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <Label htmlFor="model">Model Selection</Label>
            <select name="model" required className="w-full bg-background border px-3 py-2 rounded-md">
              <option value="">Select a model</option>
              <option value="Language model based on company data">Language model based on company data</option>
              <option value="Company features Analytics model">Company features Analytics model</option>
              <option value="Context based Language Model">Context based Language Model</option>
              <option value="Image processing model">Image processing model</option>
            </select>
          </div>

          <div>
            <Label htmlFor="deployment">Deployment</Label>
            <select name="deployment" required className="w-full bg-background border px-3 py-2 rounded-md">
              <option value="">Select deployment</option>
              <option value="Ready API - QuantaMind">Ready API - QuantaMind Infrastructure</option>
              <option value="Internal Deployment">Internal Deployment - Your cloud Infrastructure </option>
              <option value="Internal Deployment">On-Prem Deployment - Your Infrastructure </option>
            </select>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              required
              placeholder="Describe your business needs..."
              className="min-h-[120px]"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              required
              placeholder="your@email.com"
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
                <Send className="h-4 w-4" /> Submit Inquiry
              </span>
            )}
          </Button>
        </form>

        <div className="text-center mt-8">
          <Link to="/">
            <Button variant="outline">Back to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
// updated email to recieve the form data
export default Contact;
