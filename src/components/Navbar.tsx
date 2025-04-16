import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, User, Briefcase, Code, Mail, Home, Sun, Moon } from 'lucide-react';
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
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Projects', href: '#projects', icon: Code },
  { label: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
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

  useEffect(() => {
    const storedPreference = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedPreference === 'true' || (storedPreference === null && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []); 

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
      return newMode;
    });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-sm dark:bg-gray-900/95 py-3 border-b border-gray-100 dark:border-gray-800'
          : 'bg-white/90 backdrop-blur-md dark:bg-gray-900/90 py-4'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-xl font-semibold text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2"
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => setActiveSection('home')} 
        >
          <span className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 text-white p-2 rounded-lg shadow-sm">
            <Code size={20} strokeWidth={2.5} />
          </span>
          <span className="font-medium  sm:inline">Portfolio</span>
        </motion.a>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group",
                activeSection === link.href.substring(1)
                  ? "text-indigo-600 dark:text-indigo-400 font-medium"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              )}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }} 
              whileHover={{ y: -2 }} 
              whileTap={{ scale: 0.95 }} 
              onClick={() => setActiveSection(link.href.substring(1))} 
            >
              <span className="relative">
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 rounded-full"
                    layoutId="activeIndicatorDesktop" 
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </span>
            </motion.a>
          ))}

          <motion.button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle dark mode"
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            transition={{ duration: 0.3, delay: 0.1 * (navLinks.length + 1) }}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.a
            href="/SB_Resume.pdf" 
            download="SB_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow hover:shadow-md flex items-center gap-2"
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            transition={{ duration: 0.3, delay: 0.1 * (navLinks.length + 2) }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            title="Download my Resume"
          >
            <FileText size={16} />
            <span>Resume</span>
          </motion.a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <motion.button
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={isMenuOpen ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
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
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            ></div>

            <motion.nav 
              className="relative bg-white dark:bg-gray-900 w-full shadow-xl rounded-b-lg overflow-y-auto border-b border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "flex items-center py-4 px-6 text-base font-medium border-b border-gray-100 dark:border-gray-800 transition-colors duration-200 relative",
                      activeSection === link.href.substring(1)
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20 font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
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
                        className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-r"
                        layoutId="activeIndicatorMobile" 
                      />
                    )}
                    <Icon className="w-5 h-5" />
                    <span className="ml-3">{link.label}</span> 
                  </motion.a>
                );
              })}
              <motion.a
                href="/SB_Resume.pdf"
                download="SB_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-base font-medium text-center transition-all duration-300 flex items-center justify-center gap-2"
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
            </motion.nav>
            <div className="flex-grow relative" onClick={() => setIsMenuOpen(false)} aria-hidden="true"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;