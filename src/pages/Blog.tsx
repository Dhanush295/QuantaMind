
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              QuantaMind Blog
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Insights, updates, and thought leadership in AI and business intelligence
            </p>
          </div>
          
          <div className="space-y-8">
            <article className="glassmorphism p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-quantminds-purple/20 text-quantminds-purple px-3 py-1 rounded-full text-sm">
                  AI Trends
                </span>
                <span className="text-gray-400 text-sm">December 15, 2024</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 hover:text-quantminds-purple transition cursor-pointer">
                The Future of GPU-Accelerated AI in Enterprise
              </h2>
              <p className="text-gray-300 mb-4">
                Explore how GPU acceleration is revolutionizing enterprise AI applications and what it means 
                for businesses looking to scale their AI initiatives.
              </p>
              <a href="#" className="text-quantminds-purple hover:underline">Read more →</a>
            </article>
            
            <article className="glassmorphism p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-quantminds-purple/20 text-quantminds-purple px-3 py-1 rounded-full text-sm">
                  Case Study
                </span>
                <span className="text-gray-400 text-sm">December 10, 2024</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 hover:text-quantminds-purple transition cursor-pointer">
                How Manufacturing Companies Are Using AI for Predictive Maintenance
              </h2>
              <p className="text-gray-300 mb-4">
                A deep dive into real-world applications of AI in manufacturing, featuring success stories 
                and implementation strategies.
              </p>
              <a href="#" className="text-quantminds-purple hover:underline">Read more →</a>
            </article>
            
            <article className="glassmorphism p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-quantminds-purple/20 text-quantminds-purple px-3 py-1 rounded-full text-sm">
                  Tutorial
                </span>
                <span className="text-gray-400 text-sm">December 5, 2024</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 hover:text-quantminds-purple transition cursor-pointer">
                Getting Started with Custom AI Models: A Beginner's Guide
              </h2>
              <p className="text-gray-300 mb-4">
                Step-by-step guide to building and deploying your first custom AI model using the 
                QuantaMind platform.
              </p>
              <a href="#" className="text-quantminds-purple hover:underline">Read more →</a>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Want to stay updated with our latest insights?</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 bg-black/20 border border-gray-600 rounded-lg focus:outline-none focus:border-quantminds-purple"
              />
              <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-6 py-2 rounded-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
