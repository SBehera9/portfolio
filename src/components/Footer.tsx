import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, Code, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; 

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5, 
      staggerChildren: 0.08, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45, 
      ease: "easeOut",
    },
  },
};

const footerNavLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/SBehera9", label: "GitHub Profile" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sudarshan-behera-024069299/", label: "LinkedIn Profile" },
  { icon: Mail, href: "mailto:sudarshanbehera808080@gmail.com", label: "Send an Email" }
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 pt-16 pb-10 sm:pt-20 sm:pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
      <div className="absolute top-10 left-1/4 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-indigo-900/20 blur-2xl sm:blur-3xl -z-10 opacity-70"></div>
      <div className="absolute bottom-10 right-1/4 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-purple-900/20 blur-2xl sm:blur-3xl -z-10 opacity-70"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="flex flex-col items-center"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} 
        >
          <motion.div
            className="flex space-x-3 sm:space-x-4 mb-8 sm:mb-10" 
            variants={itemVariants}
          >
            {socialLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  whileHover={{ y: -3, scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className={cn(
                    "p-2.5 sm:p-3 rounded-full transition-all duration-300",
                    "bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white shadow-md hover:shadow-lg"
                  )}
                >
                  <Icon size={18} className="sm:w-5 sm:h-5"/> 
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            className="text-center mb-6 sm:mb-8" 
            variants={itemVariants}
          >
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <Code className="text-indigo-400" size={16} /> 
              <Palette className="text-purple-400" size={16} /> 
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">
              Sudarshan Behera
            </p>
            <p className="text-slate-400 text-xs sm:text-sm"> 
              Frontend Developer | FullStack Developer & UI Designer
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-x-4 gap-y-3 sm:gap-x-6 md:gap-x-8 mb-8 sm:mb-10" 
            variants={itemVariants}
          >
            {footerNavLinks.map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
                href={link.href}
                className="text-slate-300 hover:text-indigo-400 transition-colors duration-200 text-xs sm:text-sm font-medium"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="text-center text-slate-400 text-xs sm:text-sm mb-8 sm:mb-10" 
            variants={itemVariants}
          >
            <p className="flex flex-wrap items-center justify-center gap-x-1 sm:gap-x-1.5 gap-y-1">
              <span>© {new Date().getFullYear()} Sudarshan Behera</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="hidden sm:inline">All rights reserved</span>
              <span className="text-slate-500">•</span>
              <span className="inline-flex items-center">
                Built with
                <Heart size={12} className="inline text-indigo-400 mx-1 sm:mx-1.5" fill="currentColor" /> 
              </span>
            </p>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ y: -3, scale: 1.1, backgroundColor: 'rgba(79, 70, 229, 1)' }} 
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            onClick={scrollToTop}
            className={cn(
              "p-2.5 sm:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500", 
              "bg-indigo-600 text-white shadow-lg hover:shadow-xl"
            )}
            aria-label="Scroll back to top"
            title="Scroll back to top"
          >
            <ArrowUp size={18} className="sm:w-5 sm:h-5" /> 
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;