
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-2xl font-bold text-navy font-heading"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sudarshan<span className="text-teal">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.label} 
              href={link.href}
              className={cn(
                "nav-link relative",
                activeSection === link.href.substring(1) && "text-teal"
              )}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              custom={index}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-teal"
                  layoutId="activeSection"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
          <motion.a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 button-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Resume
          </motion.a>
        </motion.nav>

        {/* Mobile Navigation Toggle */}
        <motion.button 
          className="md:hidden text-navy p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.label} 
                  href={link.href}
                  className="text-lg font-medium text-navy hover:text-teal transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
