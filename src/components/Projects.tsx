import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'G3 Cyber Space',
    description: 'A tech-focused website showcasing cybersecurity services and educational content.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['React', 'TypeScript', 'Responsive Design'],
    link: 'https://g3cyberspace.com',
    period: 'Jan 2025 - Apr 2025',
    details: [
      'Developed a tech-focused website showcasing cybersecurity services and educational content.',
      'Designed interactive UI elements using React, TypeScript.',
      'Ensured full responsiveness and optimized site speed for better user engagement.'
    ]
  },
  {
    id: 2,
    title: 'Varsada E-Commerce Website',
    description: 'An e-commerce platform with dynamic dashboards for users and admins with product and cart features.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'E-commerce'],
    link: 'https://varsada.com',
    period: 'Aug 2024 - Jan 2025',
    details: [
      'Designed dynamic dashboards for users and admins with product and cart features.',
      'Implemented Wishlist and real-time cart updates with visual counters in the navbar.',
      'Integrated order placement form with responsive layouts.'
    ]
  },
  {
    id: 3,
    title: 'Nexus Infotech Company Website',
    description: 'A professional website to represent Nexus Infotech\'s services and portfolio.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['React', 'CSS', 'Responsive Design'],
    link: 'https://nexusinfotech.co',
    period: 'Aug 2023 - Aug 2024',
    details: [
      'Created a professional website to represent Nexus Infotech\'s services and portfolio.',
      'Integrated service descriptions, contact forms, and a project showcase section.',
      'Applied modern design principles for branding, responsiveness, and user experience.'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } md:flex`}
            >
              <div className="md:w-2/5 relative group overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-64 md:h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Visit Live Site <ArrowRight className="ml-2" size={18} />
                  </motion.a>
                </div>
              </div>
              
              <div className="p-6 md:w-3/5">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {project.period}
                  </span>
                </div>
                
                <p className="mt-2 text-gray-600">{project.description}</p>
                
                <div className="mt-4">
                  <h4 className="font-medium text-gray-800">Key Features:</h4>
                  <ul className="mt-2 space-y-2">
                    {project.details.map((detail, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start text-gray-700"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-purple-500 mr-2 mt-1">▹</span>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 hover:text-purple-800 transition-colors font-medium"
                      whileHover={{ x: 3 }}
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </motion.a>
                    <motion.a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium"
                      whileHover={{ x: 3 }}
                    >
                      <Github size={18} className="mr-2" />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;