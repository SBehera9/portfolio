import React from 'react';
import { ExternalLink, Github, ArrowRight, CheckCircle, FolderGit2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; 


const projectsData = [
  {
    id: 1,
    title: 'G3 Cyber Space',
    description: 'A sleek, modern website showcasing cybersecurity services, educational content, and company information.',
    
    image: '/images/projects/g3cyberspace-mockup.webp', 
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    liveLink: 'https://g3cyberspace.com',
    githubLink: 'https://github.com/yourusername/g3-cyberspace', 
    period: 'Jan 2025 - Apr 2025',
    details: [
      'Developed a fully responsive tech-focused website from Figma designs.',
      'Implemented interactive UI elements and animations using Framer Motion.',
      'Optimized performance and accessibility for enhanced user engagement.',
      'Structured content effectively for showcasing services and educational resources.'
    ]
  },
  {
    id: 2,
    title: 'Varsada E-Commerce',
    description: 'A feature-rich e-commerce platform with dynamic user/admin dashboards, product management, and cart functionalities.',
    image: '/images/projects/varsada-mockup.webp', 
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Context API', 'E-commerce'],
    liveLink: 'https://varsada.com',
    githubLink: 'https://github.com/yourusername/varsada-ecommerce', 
    period: 'Aug 2024 - Jan 2025',
    details: [
      'Built separate dashboards for user profiles and admin management.',
      'Implemented core e-commerce features: product listings, cart, wishlist, and order placement.',
      'Utilized Context API for state management (e.g., cart updates).',
      'Ensured a seamless checkout process with responsive forms.'
    ]
  },
  {
    id: 3,
    title: 'Nexus Infotech Website',
    description: 'A professional corporate website designed to represent Nexus Infotech\'s brand, services, and project portfolio.',
    image: '/images/projects/nexus-mockup.webp', 
    technologies: ['React', 'CSS Modules', 'Responsive Design', 'UI/UX'],
    liveLink: 'https://nexusinfotech.co',
    githubLink: null, 
    period: 'Aug 2023 - Aug 2024',
    details: [
      'Translated company branding into a cohesive and professional web presence.',
      'Developed clear service descriptions, contact forms, and an engaging project showcase.',
      'Focused on modern design principles, cross-browser compatibility, and user experience.',
      'Applied best practices for SEO and site performance.'
    ]
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
            delay: i * 0.1,
            duration: 0.4,
            ease: "easeOut"
        },
    }),
};


const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-slate-50 overflow-hidden"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"> 

        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 flex items-center justify-center gap-3">
             <FolderGit2 size={40} className="text-indigo-600" /> 
             Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" /> 
        </motion.div>

        <motion.div
            className="grid gap-12 lg:gap-16"
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
                  "bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100", 
                  "md:flex transition-shadow duration-300 hover:shadow-xl", 
                  index % 2 === 1 ? 'md:flex-row-reverse' : '' 
              )}
            >
              <div className="md:w-2/5 relative group aspect-video md:aspect-auto"> 
                <img
                  src={project.image || 'https://via.placeholder.com/600x400/e2e8f0/94a3b8?text=Project+Image'} 
                  alt={`Screenshot of ${project.title}`}
                  width={600}
                  height={400}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-semibold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-black/50" // Button style on hover
                    whileHover={{ y: -2 }} 
                  >
                    <ExternalLink size={20} />
                    Visit Live Site
                  </motion.a>
                </div>
              </div>

              <div className="p-6 md:p-8 md:w-3/5 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 sm:mb-0">{project.title}</h3>
                   <span className={cn(
                      "flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium tracking-wide",
                      "bg-slate-100 text-slate-600 border border-slate-200" 
                   )}>
                    {project.period}
                  </span>
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-700 mb-3 text-base">Key Features:</h4>
                  <ul className="space-y-2 text-slate-600">
                    {project.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2"
                        custom={idx} 
                        variants={listItemVariants}
                      >
                        <CheckCircle size={16} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100">
                   <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className={cn(
                            "px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-200", 
                            "bg-indigo-50 text-indigo-700 border border-indigo-100 hover:bg-indigo-100 hover:border-indigo-200" 
                        )}
                        whileHover={{ y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200 group"
                      whileHover={{ x: 2 }} 
                    >
                      <ExternalLink size={16} className="transition-transform group-hover:rotate-[-3deg]" />
                      Live Demo
                    </motion.a>
                    {project.githubLink && ( 
                       <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
                        whileHover={{ x: 2 }} 
                      >
                        <Github size={16} className="transition-transform group-hover:rotate-[3deg]" />
                        Source Code
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