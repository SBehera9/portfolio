import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-navy text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-6 mb-8">
            {[
              { icon: <Github size={24} />, href: "https://github.com/", label: "GitHub" },
              { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/", label: "LinkedIn" },
              { icon: <Mail size={24} />, href: "mailto:sudarshanbehera808080@gmail.com", label: "Email" }
            ].map((item, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-white/80 hover:text-teal-400 transition-colors p-3 bg-white/10 rounded-full backdrop-blur-sm"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          <div className="text-center mb-8">
            <motion.p 
              className="text-xl font-medium mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Sudarshan Behera
            </motion.p>
            <motion.p 
              className="text-white/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Full Stack Developer & UI Specialist
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
              <motion.a 
                key={index}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                href={`#${item.toLowerCase()}`} 
                className="text-white/80 hover:text-teal-400 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            className="flex items-center justify-center text-white/60 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="flex items-center">
              © {new Date().getFullYear()} - Built with 
              <Heart size={16} className="inline text-teal-400 mx-1 hover:animate-pulse" fill="currentColor" /> 
              by Sudarshan Behera
            </p>
          </motion.div>
          
          <motion.button
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-3 bg-teal-500/20 hover:bg-teal-500/30 rounded-full transition-colors backdrop-blur-sm"
            aria-label="Scroll to top"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;