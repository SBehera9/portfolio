import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Package } from 'lucide-react';
import { cn } from '@/lib/utils'; 
import { motion, AnimatePresence } from 'framer-motion';

const navItemVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const mobileNavItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 }
};

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
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      const scrollPosition = window.scrollY + window.innerHeight / 3; 

      let currentSection = 'home'; 
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = section.id;
          break; 
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]); 


  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out',
        scrolled
          ? 'bg-slate-50/90 backdrop-blur-lg shadow-md border-b border-slate-200 py-3'
          : 'bg-slate-50/80 backdrop-blur-md py-4'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-xl font-semibold text-slate-800 hover:text-indigo-600 transition-colors duration-300 flex items-center gap-2"
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => {
              setActiveSection('home'); 
             
          }}
        >
          <span className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-1.5 rounded-md shadow-sm">
            <Package size={20} strokeWidth={2.5} />
          </span>
          MyPortfolio
        </motion.a>

        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 relative group",
                activeSection === link.href.substring(1)
                  ? "text-indigo-600 font-semibold" 
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60" 
              )}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }} 
              whileHover={{ y: -2 }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(link.href.substring(1))} 
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  layoutId="activeIndicatorDesktop" 
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
               
               {activeSection !== link.href.substring(1) && (
                  <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-slate-400 rounded-full group-hover:w-3/5 transition-all duration-300 ease-out" />
               )}
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5"
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            transition={{ duration: 0.3, delay: 0.1 * (navLinks.length + 1) }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            title="Download my Resume" 
          >
            <FileText size={16} />
            Resume
          </motion.a>
        </nav>

        <motion.button
          className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-0 z-40 pt-[72px] flex flex-col h-screen" 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
             <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true" 
            ></div>

            <nav className="relative bg-slate-50 w-full shadow-xl rounded-b-lg overflow-y-auto"> 
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "block py-4 px-6 text-base font-medium border-b border-slate-200/70 transition-colors duration-200 relative",
                    activeSection === link.href.substring(1)
                      ? "text-indigo-700 bg-indigo-50/50 font-semibold" 
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  )}
                  variants={mobileNavItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.25, delay: index * 0.05 }} 
                  onClick={() => {
                    setActiveSection(link.href.substring(1)); 
                    setIsMenuOpen(false); 
                  }}
                >
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"
                      layoutId="activeIndicatorMobile" 
                    />
                  )}
                  <span className="ml-3">{link.label}</span> 
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-base font-medium hover:from-indigo-700 hover:to-purple-700 text-center transition-all duration-300 flex items-center justify-center gap-2 mt-2" // Added mt-2 for separation
                variants={mobileNavItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.25, delay: navLinks.length * 0.05 }}
                onClick={() => setIsMenuOpen(false)}
                title="Download my Resume" 
              >
                <FileText size={18} />
                Download Resume
              </motion.a>
            </nav>
            <div className="flex-grow relative" onClick={() => setIsMenuOpen(false)} aria-hidden="true"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;