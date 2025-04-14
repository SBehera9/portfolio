import React from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; 

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

const itemVariants = {
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


const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-slate-50 overflow-hidden"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"> 

        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            My Journey
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" /> 
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-12 gap-16" 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="lg:col-span-7">
            <motion.h3
              className="text-3xl font-bold text-slate-800 mb-10 flex items-center gap-3"
              variants={itemVariants}
            >
              <Briefcase className="text-indigo-600" size={28} />
              <span>Work Experience</span>
            </motion.h3>

            <div className="relative space-y-10">
              <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-slate-200 hidden md:block" aria-hidden="true"></div>

              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants} 
                  className="relative pl-12 md:pl-[5.5rem]" 
                >
                  <div className="absolute left-[1.10rem] md:left-[-0.6rem] top-1 flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-indigo-500">
                     <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  </div>

                  <motion.div
                     className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 transition-shadow duration-300 hover:shadow-xl"
                     whileHover={{ y: -5 }} 
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-xl font-semibold text-slate-900">{exp.title}</h4>
                      <span className={cn(
                          "mt-2 sm:mt-0 flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium tracking-wide",
                          "bg-indigo-50 text-indigo-700 border border-indigo-100" 
                      )}>
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center text-sm text-slate-500 mb-4 gap-x-3 gap-y-1">
                      <span className="font-medium text-slate-600">{exp.company}</span>
                      <span className="text-slate-300">•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2.5 text-slate-600 text-base">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          className="flex items-start gap-2"
                           custom={respIndex} 
                           variants={listItemVariants}
                        >
                          <CheckCircle size={16} className="text-indigo-500 mt-1 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12 mt-10 lg:mt-0">
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 transition-shadow duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <GraduationCap className="text-purple-600" size={24} />
                <span>Education</span>
              </h3>
              <div className="space-y-5">
                {educationData.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-semibold text-lg text-slate-900">{edu.degree}</h4>
                    <p className="text-slate-600">{edu.institution}</p>
                    <p className="text-slate-500 text-sm mt-1">{edu.location} • {edu.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 transition-shadow duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Award className="text-teal-600" size={24} /> 
                <span>Certifications</span>
              </h3>
              <div className="space-y-5">
                {certificationData.map((cert) => (
                  <div key={cert.id}>
                    <h4 className="font-semibold text-lg text-slate-900">{cert.name}</h4>
                    <p className="text-slate-600">{cert.institution}</p>
                    <p className="text-slate-500 text-sm mt-1">{cert.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;