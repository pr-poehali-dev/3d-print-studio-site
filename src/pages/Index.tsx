import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CalculatorSection from '@/components/CalculatorSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <CalculatorSection scrollToSection={scrollToSection} />
      <FooterSection scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
