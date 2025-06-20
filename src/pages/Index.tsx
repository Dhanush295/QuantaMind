
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import UseCasesSection from '@/components/UseCasesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FoundingPilotSection from '@/components/FoundingPilotSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Founding Pilot Program - Moved to prominent position right after hero */}
        <section id="founding-pilot" className="relative">
          <FoundingPilotSection />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>
        
        <section id="usecases">
          <UseCasesSection />
        </section>
        
        <section id="howitworks">
          <HowItWorksSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
