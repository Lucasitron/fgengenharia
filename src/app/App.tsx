import { AboutSection } from './components/AboutSection';
import { BudgetSection } from './components/BudgetSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { StructureSection } from './components/StructureSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { usePageNavigation } from './hooks/usePageNavigation';

export default function App() {
  const { activeSection, isHeaderCollapsed, scrollToSection } = usePageNavigation();

  return (
    <div className="min-h-screen bg-white">
      <Header
        activeSection={activeSection}
        isHeaderCollapsed={isHeaderCollapsed}
        onNavigate={scrollToSection}
      />
      <WhatsAppButton />
      <HeroSection onNavigate={scrollToSection} />
      <AboutSection />
      <ServicesSection />
      <StructureSection />
      <BudgetSection />
      <ContactSection />
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
