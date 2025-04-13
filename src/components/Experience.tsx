import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Nexus InfoTech',
    location: 'Berhampur',
    period: 'Jun 2023 - Present',
    responsibilities: [
      'Developed responsive and interactive UIs using React.js, Next.js, and Tailwind CSS.',
      'Created reusable components and dynamic pages for e-commerce platforms.',
      'Enhanced website performance and user experience, increasing engagement by 30%.',
      'Worked closely with designers to convert Figma mockups into live pages.'
    ]
  }
];

const educationData = [
  {
    id: 1,
    degree: "Bachelor's in Computer Science Engineering",
    institution: 'Konark Institute of Science and Technology',
    location: 'Bhubaneswar',
    period: 'Oct 2021 - Aug 2024'
  }
];

const certificationData = [
  {
    id: 1,
    name: 'Full Stack Web Development',
    institution: 'Edureka Learning Center',
    period: '2023'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full" />
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-500" size={24} />
              <span>Work Experience</span>
            </h3>
            
            <div className="space-y-8">
              {experienceData.map((exp) => (
                <motion.div
                  key={exp.id}
                  whileHover={{ y: -5 }}
                  className="relative pl-10 pb-8 border-l-2 border-blue-200 group"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 shadow-md" />
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <span className="inline-flex items-center mt-2 md:mt-0 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center mt-2 text-gray-600">
                      <span className="font-medium text-gray-700">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                    
                    <ul className="mt-4 space-y-3">
                      {exp.responsibilities.map((responsibility, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-blue-500 mr-2 mt-1">▹</span>
                          <span className="text-gray-700">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <GraduationCap className="text-purple-500" size={24} />
                <span>Education</span>
              </h3>
              
              {educationData.map((edu) => (
                <div key={edu.id} className="mb-6 last:mb-0">
                  <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}, {edu.location}</p>
                  <p className="text-gray-500 text-sm mt-1">{edu.period}</p>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Award className="text-teal-500" size={24} />
                <span>Certifications</span>
              </h3>
              
              {certificationData.map((cert) => (
                <div key={cert.id} className="mb-6 last:mb-0">
                  <h4 className="font-bold text-gray-800">{cert.name}</h4>
                  <p className="text-gray-600">{cert.institution}</p>
                  <p className="text-gray-500 text-sm mt-1">{cert.period}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;