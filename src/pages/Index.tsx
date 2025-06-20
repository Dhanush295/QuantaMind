
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import UseCasesSection from '@/components/UseCasesSection';
import WhyDifferentSection from '@/components/WhyDifferentSection';
import FoundingPilotSection from '@/components/FoundingPilotSection';
import TeamSection from '@/components/TeamSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section id="problem">
          <ProblemSection />
        </section>

        <section id="solution">
          <SolutionSection />
        </section>
        
        <section id="howitworks">
          <HowItWorksSection />
        </section>
        
        <section id="usecases">
          <UseCasesSection />
        </section>

        <section id="why-different">
          <WhyDifferentSection />
        </section>

        <section id="founding-pilot">
          <FoundingPilotSection />
        </section>

        <section id="team">
          <TeamSection />
        </section>
        
        <section id="cta">
          <CTASection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
