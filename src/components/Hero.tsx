import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Send, Briefcase, Code, Palette } from 'lucide-react';
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

const floatingElementVariants = {
  floating: {
    y: [0, -15, 0], 
    transition: {
      duration: 4,
      repeat: Infinity, 
      ease: "easeInOut"
    }
  }
};

const Hero = () => {
  const socialLinks = [
    { icon: <Github size={22} />, href: "https://github.com/yourusername", label: "GitHub Profile" },
    { icon: <Linkedin size={22} />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn Profile" },
    { icon: <Mail size={22} />, href: "mailto:sudarshanbehera808080@gmail.com", label: "Send an Email" }
  ];

  const skills = [
    { name: "React", color: "bg-blue-500" },
    { name: "Next JS", color: "bg-pink-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Tailwind", color: "bg-cyan-500" },
    { name: "Bootstrap", color: "bg-purple-500" },
  ];

 

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-slate-800 py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative" 
    >
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-indigo-100/50 dark:bg-indigo-900/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-100/50 dark:bg-purple-900/30 blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            className="order-2 md:order-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3 text-lg flex items-center justify-center md:justify-start"
              variants={itemVariants}
            >
              <span className="inline-block mr-2 animate-wave">👋</span>
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-4 leading-tight"
              variants={itemVariants}
            >
              Sudarshan <span className="text-indigo-600 dark:text-indigo-400">Behera</span>
            </motion.h1>

            <motion.h2
              className="text-2xl text-slate-700 dark:text-slate-300 mb-6 font-medium flex items-center gap-2 justify-center md:justify-start flex-wrap" 
              variants={itemVariants}
            >
              <Code className="text-indigo-500 dark:text-indigo-400" size={22} />
              Frontend Developer
              <span className="text-slate-400 dark:text-slate-500 mx-1 md:mx-2">|</span>
              <Palette className="text-purple-500 dark:text-purple-400" size={22} />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500 font-semibold">
                UI Designer
              </span>
            </motion.h2>

            <motion.p
              className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
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
                className="px-7 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-500 dark:hover:to-purple-500 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Briefcase size={18} />
                View My Work
                <ArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" size={16} />
              </motion.a>

              <motion.a
                href="#contact"
                className="px-7 py-3 border-2 border-indigo-600 text-indigo-700 dark:border-indigo-500 dark:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send size={18} />
                Let's Talk
                <ArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" size={16} />
              </motion.a>
            </motion.div>

            <motion.div className="mb-8" variants={itemVariants}>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 text-center md:text-left">Tech Stack:</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className={cn(
                      skill.color,
                      'text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm'
                     )}
                    whileHover={{ y: -2 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center md:justify-start gap-5"
              variants={itemVariants}
            >
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mr-2">Connect:</span>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 p-1.5"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center items-center relative mt-10 md:mt-0" 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-slate-50 dark:from-indigo-900/40 dark:via-purple-900/20 dark:to-slate-800/30 rounded-3xl transform rotate-[-8deg] scale-105 opacity-70 dark:opacity-50 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-purple-100 via-indigo-50 to-slate-50 dark:from-purple-900/40 dark:via-indigo-900/20 dark:to-slate-800/30 rounded-3xl transform rotate-[6deg] scale-100 opacity-60 dark:opacity-40 blur-sm"></div>

              <img
                src="/SB.jpg"
                alt="Sudarshan Behera - Frontend Developer & UI Designer"
                width={384}
                height={384}
                className="relative w-full h-full object-cover rounded-3xl shadow-xl border-4 border-white dark:border-slate-700" 
              />

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 shadow-lg rounded-full p-3 border border-slate-200 dark:border-slate-700"
                variants={floatingElementVariants}
                animate="floating"
                transition={{ duration: 3.5, delay: 0 }} 
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  UI/UX
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 shadow-lg rounded-full p-2 border border-slate-200 dark:border-slate-700"
                variants={floatingElementVariants}
                animate="floating"
                transition={{ duration: 4.5, delay: 0.5 }} 
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
                  <Code size={16} />
                </div>
              </motion.div>

              <motion.div
                 className="absolute top-1/2 -left-8 bg-white dark:bg-slate-800 shadow-lg rounded-full p-2 border border-slate-200 dark:border-slate-700 hidden sm:block" 
                 variants={floatingElementVariants}
                 animate="floating"
                 transition={{ duration: 4, delay: 0.8 }} 
               >
                 <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                   JS
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