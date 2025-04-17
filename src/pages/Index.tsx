
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import UseCasesSection from '@/components/UseCasesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section id="features">
          <FeaturesSection />
        </section>
        
        <section id="usecases">
          <UseCasesSection />
        </section>
        
        <section id="howitworks">
          <HowItWorksSection />
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
