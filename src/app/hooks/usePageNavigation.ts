import { useEffect, useState } from 'react';
import { menuItems } from '../data/siteContent';

export function usePageNavigation() {
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderCollapsed(window.scrollY > 100);

      const current = menuItems.find(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) setActiveSection(current.id);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return {
    activeSection,
    isHeaderCollapsed,
    scrollToSection,
  };
}
