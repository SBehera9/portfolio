
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
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
        <a href="#home" className="text-2xl font-bold text-navy font-heading">
          Sudarshan<span className="text-teal">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 button-primary"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-navy p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 bg-white z-40 pt-20 px-4',
          isMenuOpen ? 'flex flex-col' : 'hidden'
        )}
      >
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-lg font-medium text-navy hover:text-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-primary w-full text-center"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
