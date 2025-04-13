
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-teal font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Hello, my name is
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Sudarshan Behera
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              I build responsive web applications
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              I'm a Software Engineer specialized in building responsive, user-focused web applications 
              using React.js, Next.js, JavaScript, and Tailwind CSS. I'm passionate about 
              delivering pixel-perfect designs and seamless user experiences.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              <a href="#projects" className="button-primary flex items-center gap-2 group">
                View My Work 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="button-outline flex items-center gap-2 hover:bg-teal/10 transition-all">
                Get In Touch
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-5 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            >
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="text-gray-700 hover:text-teal transition-colors hover:scale-110 transform duration-200"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-teal transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:sudarshanbehera808080@gmail.com" 
                aria-label="Email"
                className="text-gray-700 hover:text-teal transition-colors hover:scale-110 transform duration-200"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-60 h-60 md:w-72 md:h-72 relative">
              <div className="w-full h-full absolute bg-gradient-to-br from-teal/80 to-teal rounded-full animate-spin-slow"></div>
              <div className="w-full h-full bg-gradient-to-br from-teal/80 to-teal rounded-full overflow-hidden border-4 border-white shadow-xl transform hover:scale-105 transition-transform duration-300 relative z-10">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-3xl font-bold text-navy">
                  SB
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
