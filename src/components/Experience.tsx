import React from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle, Rocket, Code, Users } from 'lucide-react';
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
      'Developed responsive and interactive UIs using React.js, Next.js, and Tailwind CSS',
      'Created reusable components and dynamic pages for e-commerce platforms',
      'Enhanced website performance and user experience, increasing engagement by 30%', 
      'Worked closely with designers to convert Figma mockups into live pages',
      'Implemented CI/CD pipelines reducing deployment time by 40%'
    ],
    icon: <Code className="text-indigo-500 dark:text-indigo-400" size={20} />
  }
];

const educationData = [
  {
    id: 1,
    degree: "Bachelor's in Computer Science Engineering",
    institution: 'Konark Institute of Science and Technology',
    location: 'Bhubaneswar',
    period: 'Oct 2021 - Aug 2024',
    icon: <GraduationCap className="text-purple-500 dark:text-purple-400" size={20} />
  }
];

const certificationData = [
  {
    id: 1,
    name: 'Full Stack Web Development',
    institution: 'Edureka Learning Center',
    period: '2023',
    icon: <Award className="text-teal-500 dark:text-teal-400" size={20} />
  },
  {
    id: 2,
    name: 'React Advanced Concepts',
    institution: 'Udemy',
    period: '2023',
    icon: <Award className="text-teal-500 dark:text-teal-400" size={20} />
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
      delay: i * 0.08, 
      duration: 0.4,
      ease: "easeOut"
    },
  }),
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-gray-900 overflow-hidden relative" 
    >
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-purple-100/50 dark:bg-purple-900/20 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Journey</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 mx-auto rounded-full mb-2" />
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Professional experience, education, and certifications
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-12 gap-12 lg:gap-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="lg:col-span-7">
            <motion.div
              className="flex items-center gap-4 mb-10"
              variants={itemVariants}
            >
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl text-indigo-600 dark:text-indigo-400"> 
                <Briefcase size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Work Experience</h3> 
            </motion.div>

            <div className="relative space-y-8">
              <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-200 to-purple-200 dark:from-indigo-700 dark:to-purple-700 hidden md:block" aria-hidden="true"></div> 

              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-12 md:pl-[5.5rem]" 
                >
                  <div className={cn(
                      "absolute left-[1.10rem] md:left-[-0.6rem] top-1 flex items-center justify-center w-6 h-6 rounded-full border-2 shadow-sm",
                      "bg-white dark:bg-slate-800 border-indigo-500 dark:border-indigo-400" 
                   )}>
                    <div className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full"></div> 
                  </div>

                  <motion.div
                    className={cn(
                        "p-6 rounded-2xl shadow-lg border transition-all duration-300",
                        "bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50", 
                        "hover:shadow-xl hover:border-indigo-100 dark:hover:border-indigo-700/70" 
                    )}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{exp.title}</h4> 
                      <span className={cn(
                        "mt-2 sm:mt-0 flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium tracking-wide",
                        "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/50" 
                      )}>
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center text-sm text-slate-500 dark:text-slate-400 mb-4 gap-x-3 gap-y-1"> 
                      <span className="font-medium text-slate-600 dark:text-slate-300">{exp.company}</span> 
                      <span className="text-slate-300 dark:text-slate-600">•</span> 
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-3 text-slate-600 dark:text-slate-300"> 
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          className="flex items-start gap-3"
                          custom={respIndex} 
                          variants={listItemVariants}
                          initial="hidden" 
                          animate="visible" 
                        >
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle size={16} className="text-indigo-500 dark:text-indigo-400" /> 
                          </div>
                          <span>{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8 mt-10 lg:mt-0">
            <motion.div
              variants={itemVariants}
              className={cn(
                  "p-8 rounded-2xl shadow-lg border transition-all duration-300",
                  "bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50", 
                  "hover:shadow-xl hover:border-purple-100 dark:hover:border-purple-700/70" 
              )}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-xl text-purple-600 dark:text-purple-400"> 
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Education</h3> 
              </div>

              <div className="space-y-6">
                {educationData.map((edu) => (
                  <div key={edu.id} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{edu.degree}</h4> 
                      <p className="text-slate-600 dark:text-slate-300">{edu.institution}</p> 
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{edu.location} • {edu.period}</p> 
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={cn(
                  "p-8 rounded-2xl shadow-lg border transition-all duration-300",
                  "bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50", 
                  "hover:shadow-xl hover:border-teal-100 dark:hover:border-teal-700/70" 
              )}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-xl text-teal-600 dark:text-teal-400"> 
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Certifications</h3> 
              </div>

              <div className="space-y-6">
                {certificationData.map((cert) => (
                  <div key={cert.id} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                       {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{cert.name}</h4> 
                      <p className="text-slate-600 dark:text-slate-300">{cert.institution}</p> 
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{cert.period}</p> 
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-800 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden" 
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10 dark:bg-white/5"></div>
              <div className="absolute -left-6 -bottom-6 w-20 h-20 rounded-full bg-white/10 dark:bg-white/5"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/20 dark:bg-white/10 rounded-lg">
                    <Rocket className="text-yellow-300 dark:text-yellow-400" size={20} /> 
                  </div>
                  <h4 className="font-semibold text-lg">Career Highlights</h4>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="flex-shrink-0 text-indigo-200 dark:text-indigo-300 mt-1" size={16} />
                    <p className="text-indigo-100 dark:text-indigo-200">
                      <strong className="font-bold text-white">30% increase</strong> in user engagement through UI improvements
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="flex-shrink-0 text-indigo-200 dark:text-indigo-300 mt-1" size={16} />
                    <p className="text-indigo-100 dark:text-indigo-200">
                      <strong className="font-bold text-white">40% reduction</strong> in deployment time with CI/CD implementation
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;