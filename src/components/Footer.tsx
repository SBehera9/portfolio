import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; 

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
    { icon: Github, href: "https://github.com/", label: "GitHub Profile" },
    { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn Profile" },
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
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"> 
        <motion.div
          className="flex flex-col items-center"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex space-x-5 mb-8" 
            variants={itemVariants}
          >
            {socialLinks.map((item, index) => {
                 const Icon = item.icon; 
                 return (
                    <motion.a
                        key={index}
                        whileHover={{ y: -4, scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        title={item.label} 
                        className={cn(
                            "p-3 rounded-full transition-colors duration-300",
                            "bg-slate-700/60 text-slate-300 hover:bg-indigo-500 hover:text-white" 
                        )}
                    >
                        <Icon size={22} /> 
                    </motion.a>
                 );
            })}
          </motion.div>

          <motion.div
            className="text-center mb-8"
            variants={itemVariants}
          >
            <p className="text-2xl font-semibold text-slate-100 mb-1"> 
              Sudarshan Behera
            </p>
            <p className="text-slate-400 text-base"> 
              Frontend Developer & UI Designer
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10" 
            variants={itemVariants}
          >
            {footerNavLinks.map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ y: -2, color: '#818cf8' }} 
                transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
                href={link.href}
                className="text-slate-300 hover:text-indigo-400 transition-colors duration-200 text-sm font-medium" 
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="text-center text-slate-400 text-sm mb-8" 
            variants={itemVariants}
          >
            <p className="flex items-center justify-center">
              © {new Date().getFullYear()} Sudarshan Behera. All rights reserved.
              <span className='mx-1.5'>•</span> 
              Built with
              <Heart size={14} className="inline text-indigo-400 mx-1.5" fill="currentColor" /> 
            </p>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.8)' }} 
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            onClick={scrollToTop}
            className={cn(
                "p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500",
                "bg-indigo-600/70 text-white" 
            )}
            aria-label="Scroll back to top"
            title="Scroll back to top" 
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;