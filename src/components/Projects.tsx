import React from 'react';
import { ExternalLink, Github, ArrowRight, CheckCircle, FolderGit2, Code, Layout, Monitor, Eye, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; 

const projectsData = [
  {
    id: 1,
    title: 'G3 Cyber Space',
    description: 'A sleek, modern website showcasing cybersecurity services and company information with advanced animations and responsive design.',
    image: '/G3.jpeg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    liveLink: 'https://www.g3cyberspace.com/',
    githubLink: 'https://github.com/SBehera9/G3',
    period: 'Jan 2025 - Apr 2025',
    details: [
      'Developed pixel-perfect responsive website from Figma designs',
      'Implemented complex animations and micro-interactions using Framer Motion',
      'Optimized performance achieving 95+ Lighthouse score',
      'Enhanced accessibility following WCAG 2.1 guidelines'
    ],
    icon: <Monitor className="text-indigo-500 dark:text-indigo-400" size={18} />, 
    highlights: [
      { icon: <Eye size={14} />, text: '95+ Performance' }, 
      { icon: <GitBranch size={14} />, text: 'Modern Stack' } 
    ]
  },
  {
    id: 2,
    title: 'Varsada E-Commerce',
    description: 'Full-featured e-commerce platform with user/admin dashboards, product management, and seamless checkout process.',
    image: '/Varsada.jpg',
    technologies: ['React', 'Tailwind CSS', 'API Integration', 'TypeScript', 'Context API'],
    liveLink: 'https://varsada.com/',
    githubLink: 'https://github.com/SBehera9/varsada-mvp',
    period: 'Aug 2024 - Jan 2025',
    details: [
      'Built complete e-commerce solution with user/admin portals',
      'Implemented cart, wishlist, and checkout functionality',
      'Developed responsive product listings with filters',
      'Created admin dashboard for product management'
    ],
    icon: <Layout className="text-purple-500 dark:text-purple-400" size={18} />, 
    highlights: [
      { icon: <Eye size={14} />, text: '300+ Daily Users' }, 
      { icon: <GitBranch size={14} />, text: 'Full API Integration' } 
    ]
  },
  {
    id: 3,
    title: 'Nexus Infotech Website',
    description: 'Professional corporate website representing Nexus Infotech with modern design and optimized performance.',
    image: '/Nexus.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO Optimization', 'UI/UX'],
    liveLink: 'https://nexusinfotech.co',
    githubLink: 'https://github.com/SBehera9/nexus-infotech',
    period: 'Aug 2023 - Aug 2024',
    details: [
      'Translated brand identity into cohesive web experience',
      'Implemented SEO best practices increasing organic traffic by 40%',
      'Optimized images and assets for fast loading',
      'Developed contact forms with validation'
    ],
    icon: <Code className="text-teal-500 dark:text-teal-400" size={18} />, 
    highlights: [
      { icon: <Eye size={14} />, text: '40% Traffic Increase' }, 
      { icon: <GitBranch size={14} />, text: 'SEO Optimized' } 
    ]
  }
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1, 
    },
  },
};

const projectCardVariants = {
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

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.06, 
      duration: 0.35, 
      ease: "easeOut"
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-slate-800 overflow-hidden relative"
    >
      <div className="absolute top-10 right-5 w-20 h-20 sm:w-32 md:w-40 rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 blur-xl sm:blur-2xl md:blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-5 w-16 h-16 sm:w-24 md:w-32 rounded-full bg-purple-100/50 dark:bg-purple-900/20 blur-xl sm:blur-2xl md:blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 sm:w-20 rounded-full bg-blue-100/40 dark:bg-blue-900/20 blur-lg sm:blur-xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
            <div className="p-2 sm:p-2.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg sm:rounded-xl text-white">
              <FolderGit2 size={20} className="sm:w-6 sm:h-6" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Projects</span>
          </h2>
          <div className="w-16 h-1 sm:w-20 sm:h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 mx-auto rounded-full mb-2 sm:mb-3" />
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto px-2 sm:px-0">
            A showcase of my best work and technical capabilities
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:gap-12 lg:gap-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              className={cn(
                "rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-md sm:shadow-lg dark:shadow-xl border transition-all duration-300",
                "bg-white dark:bg-slate-800/50 border-slate-100/70 dark:border-slate-700/50 backdrop-blur-sm",
                "flex flex-col",
                "group",
                "hover:shadow-lg sm:hover:shadow-xl hover:border-indigo-100/50 dark:hover:border-indigo-700/70"
              )}
              whileHover={{ y: -4 }} 
            >
              <div className="relative aspect-[16/10] sm:aspect-video w-full h-auto min-h-[180px] sm:min-h-[220px] md:min-h-[250px]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 opacity-30 dark:opacity-20"></div>
                <img
                  src={project.image || 'https://via.placeholder.com/600x400/e2e8f0/94a3b8?text=Project+Image'}
                  alt={`Screenshot of ${project.title}`}
                  width={600}
                  height={375} 
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3 sm:p-4 md:p-6">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg shadow-sm transform transition-all hover:scale-105 hover:shadow-md"
                    whileHover={{ y: -2 }}
                  >
                    <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    <span>View Live</span>
                  </motion.a>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 bg-indigo-100/50 dark:bg-indigo-900/40 rounded-md sm:rounded-lg text-indigo-500 dark:text-indigo-400 mt-0.5 sm:mt-0">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
                      <span className={cn(
                        "flex-shrink-0 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium tracking-wide",
                        "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 mt-1 sm:mt-0"
                      )}>
                        {project.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-5">
                  {project.description}
                </p>

                {project.highlights && (
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                    {project.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium"
                        whileHover={{ y: -2 }}
                      >
                        {highlight.icon}
                        <span>{highlight.text}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                <div className="mb-4 sm:mb-5">
                  <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2 sm:mb-3 text-sm flex items-center gap-1.5">
                    <CheckCircle
                      className="text-indigo-500 dark:text-indigo-400 sm:w-4 sm:h-4"
                      size={14}
                    />
                    <span>Key Features</span>
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {project.details.slice(0, 3).map((detail, idx) => ( 
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2"
                        custom={idx}
                        variants={listItemVariants}
                        initial="hidden"
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-1.5 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 sm:pt-5 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className={cn(
                          "px-2 py-1 sm:px-2.5 sm:py-1.5 rounded text-[11px] sm:text-xs font-medium transition-all duration-200",
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

                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-all duration-200 group"
                      whileHover={{ x: 2 }}
                    >
                      <ExternalLink size={14} className="transition-transform group-hover:rotate-[-3deg]" />
                      <span>Live Demo</span>
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-200 ml-0.5" />
                    </motion.a>
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-200 group"
                        whileHover={{ x: 2 }}
                      >
                        <Github size={14} className="transition-transform group-hover:rotate-[3deg]" />
                        <span>Source Code</span>
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-200 ml-0.5" />
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