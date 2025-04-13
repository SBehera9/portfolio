import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <p className="text-teal font-medium mb-2">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
              Sudarshan Behera
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              I build responsive web applications
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I'm a Software Engineer specialized in building responsive, user-focused web applications 
              using React.js, Next.js, JavaScript, and Tailwind CSS. I'm passionate about 
              delivering pixel-perfect designs and seamless user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="button-primary flex items-center gap-2">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="button-outline flex items-center gap-2">
                Get In Touch
              </a>
            </div>
            
            <div className="flex items-center gap-5 mt-8">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="text-gray-700 hover:text-teal transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="text-gray-700 hover:text-teal transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sudarshanbehera808080@gmail.com" aria-label="Email"
                className="text-gray-700 hover:text-teal transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="w-60 h-60 md:w-72 md:h-72 bg-gradient-to-br from-teal/80 to-teal rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* This would be where a profile image would go */}
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-3xl font-bold text-navy">
                SB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
