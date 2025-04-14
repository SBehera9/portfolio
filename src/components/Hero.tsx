import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Send, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
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

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
        delay: 0.3 
      },
    },
  };


const Hero = () => {
  const socialLinks = [
    { icon: <Github size={22} />, href: "https://github.com/", label: "GitHub Profile" },
    { icon: <Linkedin size={22} />, href: "https://linkedin.com/in/", label: "LinkedIn Profile" },
    { icon: <Mail size={22} />, href: "mailto:sudarshanbehera808080@gmail.com", label: "Send an Email" }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-50 py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" 
    >
      <div className="container mx-auto max-w-7xl"> 
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center"> 

          <motion.div
            className="order-2 md:order-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-indigo-600 font-semibold mb-3 text-lg flex items-center justify-center md:justify-start"
              variants={itemVariants}
            >
              <span className="inline-block mr-2 animate-wave">👋</span> 
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight" 
              variants={itemVariants}
            >
              Sudarshan Behera
            </motion.h1>

            <motion.h2
              className="text-2xl text-slate-700 mb-6 font-medium" 
              variants={itemVariants}
            >
              Frontend Developer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold">UI Designer</span> {/* Gradient highlight */}
            </motion.h2>

            <motion.p
              className="text-slate-600 text-lg mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed" 
              variants={itemVariants}
            >
              Crafting intuitive and engaging digital experiences with a focus on clean code, modern design principles, and user satisfaction.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 mb-12" 
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="px-7 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Briefcase size={18} /> 
                View My Work
              </motion.a>

              <motion.a
                href="#contact"
                className="px-7 py-3 border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-50/50 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                 <Send size={18} /> 
                Let's Talk
              </motion.a>
            </motion.div>

            <motion.div
                className="flex items-center justify-center md:justify-start gap-5"
                variants={itemVariants}
            >
              <span className="text-sm font-medium text-slate-500 mr-2">Connect:</span>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label} 
                  className="text-slate-500 hover:text-indigo-600 transition-colors duration-300 p-1.5" 
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center items-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-slate-50 rounded-3xl transform rotate-[-8deg] scale-105 opacity-70 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-purple-100 via-indigo-50 to-slate-50 rounded-3xl transform rotate-[6deg] scale-100 opacity-60 blur-sm"></div>

                <img
                  src="/placeholder-profile.webp"
                  alt="Sudarshan Behera - Frontend Developer & UI Designer"
                  width={384} 
                  height={384} 
                  className="relative w-full h-full object-cover rounded-3xl shadow-xl border-4 border-white" 
                  
                />
                 <motion.div
                    className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-full p-3 border border-slate-200"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 >
                     <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        UI/UX
                     </div>
                 </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

