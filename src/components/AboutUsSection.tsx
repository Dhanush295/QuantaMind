
import React from 'react';
import { Code, Database, Brain } from 'lucide-react';

const AboutUsSection = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      title: "Co-Founder & CTO",
      bio: "Ex-Flipkart Engineer with 8+ years in distributed systems and AI infrastructure",
      icon: Code,
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Rodriguez",
      title: "Co-Founder & Chief AI Officer",
      bio: "Data Science Researcher with experience at Cedars-Sinai, specializing in healthcare AI",
      icon: Brain,
      image: "/placeholder.svg"
    },
    {
      name: "Marcus Thompson",
      title: "Lead Backend Engineer",
      bio: "C++ Backend Developer with expertise in high-performance computing and edge deployment",
      icon: Database,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experienced engineers and researchers building the future of secure AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="glassmorphism p-8 rounded-xl text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-quantminds-purple/20 flex items-center justify-center">
                <member.icon className="w-12 h-12 text-quantminds-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {member.name}
              </h3>
              <p className="text-quantminds-purple font-medium mb-4">
                {member.title}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
