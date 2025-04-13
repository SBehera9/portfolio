
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

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
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid gap-8 mt-12">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } md:flex`}
            >
              <div className="md:w-2/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-64 md:h-full w-full object-cover"
                />
              </div>
              
              <div className="p-6 md:w-3/5">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-navy">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.period}</span>
                </div>
                
                <p className="mt-2 text-gray-700">{project.description}</p>
                
                <div className="mt-4">
                  <h4 className="font-medium text-navy">Key Features:</h4>
                  <ul className="mt-2 space-y-1">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-teal mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-teal hover:text-teal/80 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      Live Demo
                    </a>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-navy transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
