
import React from 'react';
import { Heart, GitHub, Linkedin, Mail, ArrowUp } from 'lucide-react';

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
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/80 hover:text-teal transition-colors"
            >
              <GitHub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/80 hover:text-teal transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sudarshanbehera808080@gmail.com"
              aria-label="Email"
              className="text-white/80 hover:text-teal transition-colors"
            >
              <Mail size={24} />
            </a>
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
            <a href="#home" className="text-white/80 hover:text-teal transition-colors">Home</a>
            <a href="#about" className="text-white/80 hover:text-teal transition-colors">About</a>
            <a href="#experience" className="text-white/80 hover:text-teal transition-colors">Experience</a>
            <a href="#projects" className="text-white/80 hover:text-teal transition-colors">Projects</a>
            <a href="#contact" className="text-white/80 hover:text-teal transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center justify-center text-white/60">
            <p>
              © {new Date().getFullYear()} - Built with <Heart size={16} className="inline text-teal mx-1" fill="currentColor" /> by Sudarshan Behera
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-8 p-3 bg-teal/20 hover:bg-teal/30 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
