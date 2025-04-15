import React from 'react';
import { ExternalLink, Github, ArrowRight, CheckCircle, FolderGit2, Code, Layout, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const projectsData = [
  {
    id: 1,
    title: 'G3 Cyber Space',
    description: 'A sleek, modern website showcasing cybersecurity services and company information.',
    image: '/G3.jpeg', 
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    liveLink: 'https://www.g3cyberspace.com/', 
    githubLink: 'https://github.com/SBehera9/G3', 
    period: 'Jan 2025 - Apr 2025', 
    details: [
      'Developed a fully responsive tech-focused website from Figma designs',
      'Implemented interactive UI elements and animations using Framer Motion',
      'Optimized performance and accessibility for enhanced user engagement',
      'Structured content effectively for showcasing services and resources'
    ],
    icon: <Monitor className="text-indigo-500 dark:text-indigo-400" size={20} />
  },
  {
    id: 2,
    title: 'Varsada E-Commerce',
    description: 'A feature-rich e-commerce platform with dynamic user/admin dashboards, product management, and cart functionalities.',
    image: '/Varsada.jpeg', 
    technologies: ['React', 'Tailwind CSS', 'API', 'TypeScript'],
    liveLink: 'https://varsada.com/', 
    githubLink: 'https://github.com/SBehera9/varsada-mvp', 
    period: 'Aug 2024 - Jan 2025', 
    details: [
      'Built separate dashboards for user profiles and admin management',
      'Implemented core e-commerce features: product listings, cart, wishlist',
      'Utilized Context API for state management',
      'Ensured a seamless checkout process with responsive forms'
    ],
    icon: <Layout className="text-purple-500 dark:text-purple-400" size={20} />
  },
  {
    id: 3,
    title: 'Nexus Infotech Website',
    description: 'A professional corporate website designed to represent Nexus Infotech\'s brand, services, and project portfolio.',
    image: '/Nexus.png', 
    technologies: ['Next JS','TypeScript', 'Tailwind CSS', 'Responsive Design', 'UI/UX'],
    liveLink: 'https://nexusinfotech.co', 
    githubLink: 'https://github.com/SBehera9/nexus-infotech', 
    period: 'Aug 2023 - Aug 2024', 
    details: [
      'Translated company branding into a cohesive web presence',
      'Developed clear service descriptions and contact forms',
      'Focused on modern design principles and user experience',
      'Applied best practices for SEO and site performance'
    ],
    icon: <Code className="text-teal-500 dark:text-teal-400" size={20} />
  }
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const projectCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({ 
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut"
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-slate-800 overflow-hidden relative"
    >
      {/* Background elements - hidden on mobile */}
      <div className="hidden sm:block absolute top-10 sm:top-20 right-4 sm:right-10 md:right-20 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 blur-xl sm:blur-2xl md:blur-3xl -z-10"></div>
      <div className="hidden sm:block absolute bottom-10 sm:bottom-20 left-4 sm:left-10 md:left-20 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full bg-purple-100/50 dark:bg-purple-900/20 blur-xl sm:blur-2xl md:blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg sm:rounded-xl text-indigo-600 dark:text-indigo-400">
              <FolderGit2 size={24} className="sm:w-8 sm:h-8" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Projects</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 mx-auto rounded-full mb-2 sm:mb-3" />
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto px-2 sm:px-0">
            A selection of my recent work and case studies
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              className={cn(
                "rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl border transition-all duration-300",
                "bg-white dark:bg-slate-800/50 border-slate-100/70 dark:border-slate-700/50",
                "flex flex-col",
                "group",
                "hover:shadow-xl sm:hover:shadow-2xl hover:border-indigo-100/50 dark:hover:border-indigo-700/70"
              )}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-video w-full h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 opacity-30 dark:opacity-20"></div>
                <img
                  src={project.image || 'https://via.placeholder.com/600x400/e2e8f0/94a3b8?text=Project+Image'}
                  alt={`Screenshot of ${project.title}`}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 sm:p-6">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base font-medium sm:font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-md sm:rounded-lg shadow-sm sm:shadow-md transform transition-all hover:scale-105 hover:shadow-lg"
                    whileHover={{ y: -2 }}
                  >
                    <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    <span>Visit Live Site</span>
                  </motion.a>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 flex flex-col">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-2.5 bg-indigo-100/50 dark:bg-indigo-900/40 rounded-md sm:rounded-lg text-indigo-500 dark:text-indigo-400">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
                      <span className={cn(
                        "flex-shrink-0 px-2 sm:px-3 py-1 rounded-full text-xs font-medium tracking-wide",
                        "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                      )}>
                        {project.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6">
                  {project.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <h4 className="font-medium sm:font-semibold text-slate-700 dark:text-slate-200 mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle 
                      className="text-indigo-500 dark:text-indigo-400 sm:w-5 sm:h-5" 
                      size={16} 
                    />
                    <span>Key Features</span>
                  </h4>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    {project.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2 sm:gap-3"
                        custom={idx}
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 sm:pt-6 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className={cn(
                          "px-2 sm:px-3 py-1 sm:py-1.5 rounded sm:rounded-md text-xs font-medium transition-all duration-200",
                          "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200",
                          "border border-slate-200 dark:border-slate-600",
                          "hover:bg-slate-200 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500"
                        )}
                        whileHover={{ y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 sm:gap-5">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-all duration-200 group"
                      whileHover={{ x: 2 }}
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4 transition-transform group-hover:rotate-[-3deg]" />
                      <span>Live Demo</span>
                      <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200 ml-0.5" />
                    </motion.a>
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-200 group"
                        whileHover={{ x: 2 }}
                      >
                        <Github size={14} className="sm:w-4 sm:h-4 transition-transform group-hover:rotate-[3deg]" />
                        <span>Source Code</span>
                        <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200 ml-0.5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;