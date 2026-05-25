import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { menuItems } from '../data/siteContent';

type HeaderProps = {
  activeSection: string;
  isHeaderCollapsed: boolean;
  onNavigate: (sectionId: string) => void;
};

export function Header({ activeSection, isHeaderCollapsed, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300"
      animate={{ height: isHeaderCollapsed ? '70px' : '90px' }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <motion.div
          className="font-bold text-orange-600"
          animate={{ fontSize: isHeaderCollapsed ? '1.5rem' : '2rem' }}
        >
          FG ENGENHARIA
        </motion.div>

        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              className={`font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-orange-600'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className={`text-left py-2 font-medium ${
                    activeSection === item.id ? 'text-orange-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
