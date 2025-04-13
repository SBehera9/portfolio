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
          className="text-2xl font-bold font-heading bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sudarshan<span className="text-teal-500">.</span>
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
                "px-4 py-2 rounded-full text-sm font-medium relative overflow-hidden group",
                activeSection === link.href.substring(1) 
                  ? "text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                  : "text-gray-700 hover:text-purple-600"
              )}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              custom={index}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {link.label}
              {activeSection !== link.href.substring(1) && (
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
          <motion.a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium rounded-full shadow-lg hover:shadow-blue-500/30 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Resume
          </motion.a>
        </motion.nav>

        {/* Mobile Navigation Toggle */}
        <motion.button 
          className="md:hidden p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? (
            <X size={24} className="text-purple-600" />
          ) : (
            <Menu size={24} className="text-purple-600" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 z-40 pt-20 px-4 bg-gradient-to-b from-white via-purple-50 to-pink-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.label} 
                  href={link.href}
                  className={cn(
                    "w-full text-center py-3 px-6 rounded-full text-lg font-medium",
                    activeSection === link.href.substring(1)
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                      : "text-gray-700 bg-white hover:bg-purple-50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full mt-4 py-3 px-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium rounded-full shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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