
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
            <h2 className="text-2xl font-semibold text-center text-quantminds-purple">Open Positions</h2>
            
            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Senior AI Engineer</h3>
              <p className="text-gray-400 mb-4">Full-time • Remote • $120k - $180k</p>
              <p className="text-gray-300 mb-4">
                Lead the development of cutting-edge AI models and GPU acceleration frameworks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-quantminds-purple/20 text-quantminds-purple px-3 py-1 rounded-full text-sm">
                  Python
                </span>
                <span className="bg-quantminds-purple/20 text-quantminds-purple px-3 py-1 rounded-full text-sm">
                  CUDA
                </span>
                <span className="bg-quantminds-purple/20 text-quantminds-purple px-3 py-1 rounded-full text-sm">
                  TensorFlow
                </span>
              </div>
            </div>
            
            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Product Manager</h3>
              <p className="text-gray-400 mb-4">Full-time • Remote • $110k - $160k</p>
              <p className="text-gray-300 mb-4">
                Drive product strategy and roadmap for our AI platform.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-quantminds-purple/20 text-quantminds-purple px-3 py-1 rounded-full text-sm">
                  Product Strategy
                </span>
                <span className="bg-quantminds-purple/20 text-quantminds-purple px-3 py-1 rounded-full text-sm">
                  AI/ML
                </span>
                <span className="bg-quantminds-purple/20 text-quantminds-purple px-3 py-1 rounded-full text-sm">
                  Analytics
                </span>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-4">Don't see a role that fits?</p>
              <p className="text-gray-300">
                We're always looking for talented individuals. Send us your resume at{' '}
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
