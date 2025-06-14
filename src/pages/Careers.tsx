
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Shape the future of AI and help businesses unlock their potential
            </p>
          </div>
          
          <div className="glassmorphism p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-quantminds-purple">Why Work at QuantaMind?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
                <p className="text-gray-300 mb-6">
                  Work with the latest AI and GPU acceleration technologies
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Growth Opportunities</h3>
                <p className="text-gray-300">
                  Continuous learning and career development in a fast-growing company
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Flexible Work</h3>
                <p className="text-gray-300 mb-6">
                  Remote-first culture with flexible working arrangements
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Competitive Benefits</h3>
                <p className="text-gray-300">
                  Comprehensive benefits package including equity, health, and wellness
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-center text-quantminds-purple">Current Openings</h2>
            
            <div className="glassmorphism p-12 rounded-xl text-center">
              <div className="mb-8">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-quantminds-purple">
                  No Open Positions Right Now
                </h3>
                <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                  We're not actively hiring at the moment, but we're always excited to meet talented individuals who are passionate about AI and innovation.
                </p>
              </div>
              
              <div className="bg-quantminds-purple/10 border border-quantminds-purple/30 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-semibold mb-3 text-quantminds-purple">Stay Connected</h4>
                <p className="text-gray-300 mb-4">
                  Be the first to know when new opportunities become available. We're growing fast and will be expanding our team soon!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Join Our Talent Pool
                  </button>
                  <button className="border border-quantminds-purple text-quantminds-purple hover:bg-quantminds-purple hover:text-white px-6 py-3 rounded-lg font-semibold transition">
                    Follow on LinkedIn
                  </button>
                </div>
              </div>
              
              <div className="text-left max-w-2xl mx-auto">
                <h4 className="text-lg font-semibold mb-4 text-quantminds-purple">What We Look For:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <p className="mb-2">• AI/ML expertise</p>
                    <p className="mb-2">• Strong engineering skills</p>
                    <p className="mb-2">• Product mindset</p>
                  </div>
                  <div>
                    <p className="mb-2">• Team collaboration</p>
                    <p className="mb-2">• Continuous learning</p>
                    <p className="mb-2">• Innovation drive</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-4">Interested in working with us?</p>
              <p className="text-gray-300">
                Send us your resume and tell us about yourself at{' '}
                <a href="mailto:careers@quantamind.co" className="text-quantminds-purple hover:underline">
                  careers@quantamind.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
