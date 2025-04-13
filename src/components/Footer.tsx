
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
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-6 mb-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/80 hover:text-teal transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/80 hover:text-teal transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="mailto:sudarshanbehera808080@gmail.com"
              aria-label="Email"
              className="text-white/80 hover:text-teal transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </div>

          <div className="text-center mb-8">
            <p className="text-white/80">
              Sudarshan Behera | Software Engineer
            </p>
            <p className="text-white/60 mt-1">
              sudarshanbehera808080@gmail.com | +91 8328873021
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.a 
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="#home" 
              className="text-white/80 hover:text-teal transition-colors"
            >
              Home
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="#about" 
              className="text-white/80 hover:text-teal transition-colors"
            >
              About
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="#experience" 
              className="text-white/80 hover:text-teal transition-colors"
            >
              Experience
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="#projects" 
              className="text-white/80 hover:text-teal transition-colors"
            >
              Projects
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="#contact" 
              className="text-white/80 hover:text-teal transition-colors"
            >
              Contact
            </motion.a>
          </div>
          
          <div className="flex items-center justify-center text-white/60">
            <p>
              © {new Date().getFullYear()} - Built with <Heart size={16} className="inline text-teal mx-1 hover:animate-pulse" fill="currentColor" /> by Sudarshan Behera
            </p>
          </div>
          
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="mt-8 p-3 bg-teal/20 hover:bg-teal/30 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
