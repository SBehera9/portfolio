import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Send, Briefcase, Code, Palette, Cpu, Database, GitBranch } from 'lucide-react';
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
    y: [0, -10, 0], 
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Hero = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/SBehera9", label: "GitHub Profile" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/sudarshan-behera-024069299/", label: "LinkedIn Profile" },
    { icon: <Mail size={20} />, href: "mailto:sudarshanbehera808080@gmail.com", label: "Send an Email" }
  ];

  const skills = [
    { name: "HTML", icon: <Code size={12} />, color: "bg-orange-500" },
    { name: "CSS", icon: <Palette size={12} />, color: "bg-blue-500" },
    { name: "Tailwind", icon: <span className="text-[10px]">TW</span>, color: "bg-cyan-500" },
    { name: "JavaScript", icon: <span className="text-[10px]">JS</span>, color: "bg-yellow-500" },
    { name: "React", icon: <span className="text-[10px]">R</span>, color: "bg-sky-500" },
    { name: "Next.js", icon: <span className="text-[10px]">N</span>, color: "bg-gray-700" },
    { name: "TypeScript", icon: <span className="text-[10px]">TS</span>, color: "bg-blue-600" },
    { name: "Node.js", icon: <span className="text-[10px]">N</span>, color: "bg-green-500" },
    { name: "MongoDB", icon: <Database size={12} />, color: "bg-emerald-500" },
    { name: "Git", icon: <GitBranch size={12} />, color: "bg-red-500" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-gray-900 dark:via-slate-800 dark:to-slate-900 py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      <div className="absolute top-10 left-5 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-indigo-100/50 dark:bg-indigo-900/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-5 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-purple-100/50 dark:bg-purple-900/30 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-100/40 dark:bg-blue-900/20 blur-2xl -z-10"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            className="order-2 md:order-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2 text-base sm:text-lg flex items-center justify-center md:justify-start"
              variants={itemVariants}
            >
              <span className="inline-block mr-1.5 animate-wave">👋</span>
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 leading-tight"
              variants={itemVariants}
            >
              Sudarshan <span className="text-indigo-600 dark:text-indigo-400">Behera</span>
            </motion.h1>

            <motion.h2
              className="text-lg sm:text-xl md:text-1xl text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 font-medium flex items-center gap-1.5 sm:gap-2 justify-center md:justify-start flex-wrap"
              variants={itemVariants}
            >
              <Code className="text-indigo-500 dark:text-indigo-400" size={20} />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                FrontEnd Developer
              </span>
              <span className="text-slate-400 dark:text-slate-500 mx-0 md:mx-0">|</span>
              <span>UI Developer</span>
            </motion.h2>

            <motion.p
              className="text-slate-600 dark:text-slate-400 text-base sm:text-2 mb-6 sm:mb-8 md:mb-10 max-w-md mx-auto md:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              I build exceptional digital experiences with modern web technologies, focusing on performance, accessibility, and beautiful interfaces.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-500 dark:hover:to-purple-500 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 transform hover:-translate-y-1 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Briefcase size={16} />
                View My Work
                <ArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" size={14} />
              </motion.a>

              <motion.a
                href="#contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-indigo-600 text-indigo-700 dark:border-indigo-500 dark:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 transform hover:-translate-y-1 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send size={16} />
                Let's Talk
                <ArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" size={14} />
              </motion.a>
            </motion.div>

            <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
              <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 sm:mb-3 text-center md:text-left">Tech Stack:</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center md:justify-start">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className={cn(
                      skill.color,
                      'text-white flex items-center gap-1 text-[10px] sm:text-xs font-medium px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full shadow-sm'
                    )}
                    whileHover={{ y: -2 }}
                    title={skill.name}
                  >
                    {skill.icon}
                    <span className="hidden sm:inline">{skill.name}</span> 
                    <span className="sm:hidden">{skill.name.substring(0,3)}</span> 
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center md:justify-start gap-3 sm:gap-4"
              variants={itemVariants}
            >
              <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mr-1 sm:mr-2">Connect:</span>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 p-1 sm:p-1.5"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center items-center relative mt-8 sm:mt-10 md:mt-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-slate-50 dark:from-indigo-900/40 dark:via-purple-900/20 dark:to-slate-800/30 rounded-3xl transform rotate-[-8deg] scale-105 opacity-70 dark:opacity-50 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-purple-100 via-indigo-50 to-slate-50 dark:from-purple-900/40 dark:via-indigo-900/20 dark:to-slate-800/30 rounded-3xl transform rotate-[6deg] scale-100 opacity-60 dark:opacity-40 blur-sm"></div>

              <img
                src="/SB.jpg"
                alt="Sudarshan Behera - FullStack Developer & UI Designer"
                width={384}
                height={384}
                className="relative w-full h-full object-cover rounded-full shadow-xl border-4 border-white dark:border-slate-700"
                loading="lazy"
              />

              <motion.div
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white dark:bg-slate-800 shadow-lg rounded-full p-2 sm:p-3 border border-slate-200 dark:border-slate-700"
                variants={floatingElementVariants}
                animate="floating"
                transition={{ duration: 3.5, delay: 0 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
                  UI/UX
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 bg-white dark:bg-slate-800 shadow-lg rounded-full p-1.5 sm:p-2 border border-slate-200 dark:border-slate-700"
                variants={floatingElementVariants}
                animate="floating"
                transition={{ duration: 4.5, delay: 0.5 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
                  <Code size={14} />
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-5 sm:-left-8 bg-white dark:bg-slate-800 shadow-lg rounded-full p-1.5 sm:p-2 border border-slate-200 dark:border-slate-700"
                variants={floatingElementVariants}
                animate="floating"
                transition={{ duration: 4, delay: 0.8 }}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
                  JS
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-4 sm:-right-6 bg-white dark:bg-slate-800 shadow-lg rounded-full p-1.5 sm:p-2 border border-slate-200 dark:border-slate-700"
                variants={floatingElementVariants}
                animate="floating"
                transition={{ duration: 3.8, delay: 0.3 }}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white">
                  <Cpu size={14} />
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