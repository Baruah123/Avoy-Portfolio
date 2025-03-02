import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleNavClick = (href: string) => {
    closeMenu();
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header with hamburger */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-900/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white font-bold text-2xl"
          >
            <span className="text-teal-400">Dev</span>Portfolio
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </header>

      {/* Full screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-md flex flex-col"
          >
            <div className="container mx-auto px-6 py-5 flex justify-end">
              <button 
                onClick={closeMenu}
                className="text-white p-2 focus:outline-none"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="flex flex-col justify-center items-center flex-grow">
              <nav className="flex flex-col items-center space-y-8 mb-12">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-white text-3xl sm:text-4xl font-medium hover:text-teal-400 transition-colors"
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex space-x-6"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:contact@example.com" className="text-white hover:text-teal-400 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition-colors">
                  <FileText size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;