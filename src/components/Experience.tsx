import React from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle, Rocket, Code, Users, Clock, Zap, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; 

const experienceData = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'Nexus InfoTech',
    location: 'Berhampur, Odisha',
    period: 'Feb 2024 - May 2025',
    responsibilities: [
      'Developed responsive and interactive UI using React.js, Next.js and Tailwind CSS',
      'Created reusable components and dynamic pages for e-commerce platforms',
      'Enhanced website performance and user experience, increasing engagement by 30%',
      'Worked closely with designers to convert Figma mockups into live pages',
      'Implemented CI/CD pipelines reducing deployment time by 40%'
    ],
    icon: <Code className="text-indigo-500 dark:text-indigo-400" size={18} />, 
    highlights: [
      { icon: <BarChart2 size={14} />, text: '30% increase in user engagement' }, 
      { icon: <Zap size={14} />, text: '40% faster deployments' } 
    ]
  }
];

const educationData = [
  {
    id: 1,
    degree: "Bachelor's in Computer Science Engineering",
    institution: 'Konark Institute of Science and Technology',
    location: 'Bhubaneswar, Odisha',
    period: 'Oct 2021 - Aug 2024',
    icon: <GraduationCap className="text-purple-500 dark:text-purple-400" size={18} />, 
    achievements: [
      'Specialized in Web Development',
      'Coursework in Data Structures & Algorithms'
    ]
  },
  {
    id: 2,
    degree: "Diploma in Mechatronics",
    institution: 'NTTF (J N Tata Technical Education Center)',
    location: 'Gopalpur Odisha',
    period: 'Aug 2017 - Jun 2020',
    icon: <GraduationCap className="text-purple-500 dark:text-purple-400" size={18} />, 
    achievements: [
      'Industrial Automation focus',
      'Robotics coursework'
    ]
  }
];

const certificationData = [
  {
    id: 1,
    name: 'Full Stack Web Development',
    institution: 'Edureka Learning Center, Brahmapur',
    period: '2023',
    icon: <Award className="text-teal-500 dark:text-teal-400" size={18} />, 
    skills: ['React', 'Node.js', 'MongoDB']
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

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-gray-900 overflow-hidden relative"
    >
      <div className="absolute top-10 left-5 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-5 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-purple-100/50 dark:bg-purple-900/20 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-100/40 dark:bg-blue-900/20 blur-2xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Journey</span>
          </h2>
          <div className="w-16 h-1 sm:w-20 sm:h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 mx-auto rounded-full mb-2 sm:mb-3" />
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Professional experience, education, and certifications
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="lg:col-span-7">
            <motion.div
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10"
              variants={itemVariants}
            >
              <div className="p-2.5 sm:p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg sm:rounded-xl text-white">
                <Briefcase size={24} className="sm:w-7 sm:h-7"/>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">Work Experience</h3>
            </motion.div>

            <div className="relative space-y-6 sm:space-y-8">
              <div className="absolute left-3.5 sm:left-4 top-1 bottom-1 w-0.5 bg-gradient-to-b from-indigo-200 to-purple-200 dark:from-indigo-700 dark:to-purple-700 md:block" aria-hidden="true"></div>

              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-10 sm:pl-12" 
                >
                  <div className={cn(
                    "absolute left-[0.75rem] sm:left-[0.875rem] top-1.5 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 shadow-sm", 
                    "bg-white dark:bg-slate-800 border-indigo-500 dark:border-indigo-400"
                  )}>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full"></div>
                  </div>

                  <motion.div
                    className={cn(
                      "p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md dark:shadow-lg border transition-all duration-300",
                      "bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50 backdrop-blur-sm",
                      "hover:shadow-lg dark:hover:shadow-xl hover:border-indigo-100 dark:hover:border-indigo-700/70"
                    )}
                    whileHover={{ y: -4 }} 
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3">
                      <h4 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">{exp.title}</h4>
                      <span className={cn(
                        "mt-1.5 sm:mt-0 flex-shrink-0 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-xs font-medium tracking-wide", 
                        "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/50"
                      )}>
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 sm:mb-4 gap-x-2 sm:gap-x-3 gap-y-1">
                      <span className="font-medium text-slate-600 dark:text-slate-300">{exp.company}</span>
                      <span className="text-slate-300 dark:text-slate-600">•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          className="flex items-start gap-2 sm:gap-3"
                          custom={respIndex}
                          variants={listItemVariants}
                          initial="hidden"
                          whileInView="visible" 
                          viewport={{ once: true, amount: 0.5 }} 
                        >
                          <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                            <CheckCircle size={14} className="text-indigo-500 dark:text-indigo-400 sm:w-4 sm:h-4" />
                          </div>
                          <span>{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {exp.highlights && (
                      <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-700/50">
                        {exp.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-indigo-50/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm">
                            {highlight.icon}
                            <span>{highlight.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 sm:space-y-8 mt-8 lg:mt-0">
            <motion.div
              variants={itemVariants}
              className={cn(
                "p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-md dark:shadow-lg border transition-all duration-300",
                "bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50 backdrop-blur-sm",
                "hover:shadow-lg dark:hover:shadow-xl hover:border-purple-100 dark:hover:border-purple-700/70"
              )}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2.5 sm:p-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg sm:rounded-xl text-white">
                  <GraduationCap size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">Education</h3>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {educationData.map((edu) => (
                  <div key={edu.id} className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100">{edu.degree}</h4>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">{edu.institution}</p>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">{edu.location} • {edu.period}</p>

                      {edu.achievements && (
                        <div className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                              <CheckCircle size={12} className="text-purple-500 dark:text-purple-400 mt-0.5 flex-shrink-0 sm:w-3.5 sm:h-3.5" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={cn(
                "p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-md dark:shadow-lg border transition-all duration-300",
                "bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50 backdrop-blur-sm",
                "hover:shadow-lg dark:hover:shadow-xl hover:border-teal-100 dark:hover:border-teal-700/70"
              )}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2.5 sm:p-3 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg sm:rounded-xl text-white">
                  <Award size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">Certifications</h3>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {certificationData.map((cert) => (
                  <div key={cert.id} className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100">{cert.name}</h4>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">{cert.institution}</p>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">{cert.period}</p>

                      {cert.skills && (
                        <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                          {cert.skills.map((skill, idx) => (
                            <span key={idx} className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 text-[11px] sm:text-xs rounded-full border border-teal-100 dark:border-teal-800/50">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

             <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-800 p-5 sm:p-6 rounded-xl sm:rounded-2xl text-white shadow-lg dark:shadow-xl relative overflow-hidden"
              whileHover={{ y: -3 }}
            >
              <div className="absolute -right-4 -top-4 sm:-right-6 sm:-top-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 dark:bg-white/5 opacity-70"></div>
              <div className="absolute -left-4 -bottom-4 sm:-left-6 sm:-bottom-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 dark:bg-white/5 opacity-70"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-white/20 dark:bg-white/10 rounded-md sm:rounded-lg">
                    <Rocket className="text-yellow-300 dark:text-yellow-400" size={18} />
                  </div>
                  <h4 className="font-semibold text-base sm:text-lg">Career Highlights</h4>
                </div>

                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                  {experienceData[0].highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3">
                       {React.cloneElement(highlight.icon, { size: 14, className: "flex-shrink-0 text-indigo-200 dark:text-indigo-300 mt-0.5 sm:mt-1" })}
                      <p className="text-indigo-100 dark:text-indigo-200 text-xs sm:text-sm">
                        <strong className="font-bold text-white">{highlight.text}</strong> through technical improvements
                      </p>
                    </div>
                  ))}
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Users className="flex-shrink-0 text-indigo-200 dark:text-indigo-300 mt-0.5 sm:mt-1" size={14} />
                    <p className="text-indigo-100 dark:text-indigo-200 text-xs sm:text-sm">
                      <strong className="font-bold text-white">Collaborated</strong> with cross-functional teams
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