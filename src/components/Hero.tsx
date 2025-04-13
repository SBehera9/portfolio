import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-teal-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-purple-600 font-medium mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              👋 Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Sudarshan Behera
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-gray-700 mb-6 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              Frontend Developer & <span className="text-pink-600">UI Designer</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              I create beautiful, functional web experiences with React, Next.js, and modern CSS. 
              Passionate about color theory, animations, and user-centered design.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              <a 
                href="#projects" 
                className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-purple-500/30"
              >
                View My Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#contact" 
                className="px-5 py-2.5 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-medium rounded-lg transition-all flex items-center gap-2"
              >
                Let's Talk
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            >
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="text-gray-600 hover:text-purple-600 transition-colors p-2 hover:bg-white rounded-full hover:shadow-sm"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-white rounded-full hover:shadow-sm"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:sudarshanbehera808080@gmail.com" 
                aria-label="Email"
                className="text-gray-600 hover:text-pink-600 transition-colors p-2 hover:bg-white rounded-full hover:shadow-sm"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Colorful Avatar */}
          <motion.div 
            className="order-1 md:order-2 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Colorful background elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-full h-full rounded-full bg-gradient-to-br from-purple-200 to-pink-200 z-0"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-4 -right-4 w-full h-full rounded-full bg-gradient-to-br from-blue-200 to-teal-200 z-0"
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Main avatar */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl z-10 bg-white flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-2">
                    SB
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    Available for collaborations
                  </div>
                </div>
              </div>
              
              {/* Floating dots */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute rounded-full ${i % 3 === 0 ? 'bg-purple-400' : i % 3 === 1 ? 'bg-pink-400' : 'bg-blue-400'} ${i < 3 ? 'w-3 h-3' : 'w-2 h-2'}`}
                  style={{
                    top: `${Math.random() * 30 + 10}%`,
                    left: `${Math.random() * 30 + 10}%`,
                  }}
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;