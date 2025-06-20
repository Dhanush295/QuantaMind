
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import WhatMakesUsDifferentSection from '@/components/WhatMakesUsDifferentSection';
import WhyOfflineMattersSection from '@/components/WhyOfflineMattersSection';
import WhoWeHelpSection from '@/components/WhoWeHelpSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PilotProgramSection from '@/components/PilotProgramSection';
import TrustVisionSection from '@/components/TrustVisionSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section id="what-makes-us-different">
          <WhatMakesUsDifferentSection />
        </section>

        <section id="why-offline-matters">
          <WhyOfflineMattersSection />
        </section>
        
        <section id="who-we-help">
          <WhoWeHelpSection />
        </section>

        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        
        <section id="pilot-program">
          <PilotProgramSection />
        </section>
        
        <section id="trust-vision">
          <TrustVisionSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
