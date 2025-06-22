
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Send } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedDataTypes, setSelectedDataTypes] = useState<string[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDataTypeChange = (dataType: string, checked: boolean) => {
    if (checked) {
      setSelectedDataTypes(prev => [...prev, dataType]);
    } else {
      setSelectedDataTypes(prev => prev.filter(type => type !== dataType));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current!);
      
      // Add selected data types to form data
      formData.append('data_types', selectedDataTypes.join(', '));
      formData.append('industry', selectedIndustry);

      const res = await fetch("https://formsubmit.co/ajax/dhanush@quantamind.co", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        formRef.current?.reset();
        setSelectedIndustry('');
        setSelectedDataTypes([]);
        navigate("/thank-you");
      } else {
        toast({
          title: "Submission failed",
          description: "Something went wrong. Please try again.",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Unable to submit the form. Please try again later.",
      });
    }

    setIsSubmitting(false);
  };

  const dataTypes = [
    "Text Documents (e.g., reports, contracts, emails)",
    "Images or Video",
    "Structured Data (e.g., spreadsheets, database records)",
    "Sensor / Machine Data (e.g., ECG, equipment logs)",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4 container mx-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Join the Private AI Pilot Program</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-black/20 backdrop-blur-sm rounded-lg p-6 md:p-8 space-y-6"
        >
          <input type="hidden" name="_cc" value="Chirag.v.k2@gmail.com,aanyasampath1703@gmail.com" />
          <input type="hidden" name="_subject" value="New Private AI Pilot Program Application" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input name="company" type="text" required placeholder="Your company name" />
          </div>

          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input name="name" type="text" required placeholder="Your name" />
          </div>

          <div>
            <Label htmlFor="email">Work Email</Label>
            <Input name="email" type="email" required placeholder="your@email.com" />
          </div>

          <div>
            <Label htmlFor="industry">What is your industry?</Label>
            <Select onValueChange={setSelectedIndustry} required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="challenge">In a few words, what is the main challenge you want to solve?</Label>
            <p className="text-sm text-muted-foreground mb-2">
              (e.g., "Securely analyze client contracts," or "Predict machine failures on the factory floor.")
            </p>
            <Textarea
              name="challenge"
              required
              placeholder="Describe your main challenge..."
              className="min-h-[120px]"
            />
          </div>

          <div>
            <Label>What type of data would the AI need to work with?</Label>
            <p className="text-sm text-muted-foreground mb-4">(Select all that apply)</p>
            <div className="space-y-3">
              {dataTypes.map((dataType) => (
                <div key={dataType} className="flex items-center space-x-2">
                  <Checkbox
                    id={dataType}
                    checked={selectedDataTypes.includes(dataType)}
                    onCheckedChange={(checked) => handleDataTypeChange(dataType, checked as boolean)}
                  />
                  <Label
                    htmlFor={dataType}
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {dataType}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="privacy_reason">(Optional) Why is a private, offline solution important for this project?</Label>
            <Textarea
              name="privacy_reason"
              placeholder="Explain why privacy and offline capabilities matter for your use case..."
              className="min-h-[80px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-quantminds-purple hover:bg-quantminds-purple/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">Submitting...</span>
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

export default Contact;
