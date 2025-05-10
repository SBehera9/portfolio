import React from 'react';
import { Code, Layout, Cpu, Palette, Users, Award, Sparkles, Briefcase, Rocket, GitBranch, Globe, Layers, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; 

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

const skillsData = [
  {
    category: 'Frontend Development',
    items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript'],
    icon: <Code size={18} />, 
    color: 'bg-indigo-100 dark:bg-indigo-900/30',
    borderColor: 'border-indigo-200 dark:border-indigo-800/50',
    iconColor: 'text-indigo-500 dark:text-indigo-400'
  },
  {
    category: 'UI Design',
    items: ['Responsive Design'],
    icon: <Palette size={18} />,
    color: 'bg-purple-100 dark:bg-purple-900/30',
    borderColor: 'border-purple-200 dark:border-purple-800/50',
    iconColor: 'text-purple-500 dark:text-purple-400'
  },
  {
    category: 'Backend & Databases',
    items: ['Node.js', 'Express', 'MongoDB', 'PHP', 'MySQL'],
    icon: <Terminal size={18} />,
    color: 'bg-emerald-100 dark:bg-emerald-900/30',
    borderColor: 'border-emerald-200 dark:border-emerald-800/50',
    iconColor: 'text-emerald-500 dark:text-emerald-400'
  },
  {
    category: 'Styling & Tools',
    items: ['Tailwind CSS', 'SASS', 'CSS Modules', 'Styled Components', 'VS Code'],
    icon: <Layers size={18} />,
    color: 'bg-blue-100 dark:bg-blue-900/30',
    borderColor: 'border-blue-200 dark:border-blue-800/50',
    iconColor: 'text-blue-500 dark:text-blue-400'
  },
  {
    category: 'Soft Skills',
    items: ['Team Leadership', 'Problem-Solving', 'Communication', 'Mentorship', 'Client Relations'],
    icon: <Users size={18} />,
    color: 'bg-teal-100 dark:bg-teal-900/30',
    borderColor: 'border-teal-200 dark:border-teal-800/50',
    iconColor: 'text-teal-500 dark:text-teal-400'
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-slate-800 overflow-hidden relative"
    >
      <div className="absolute top-10 right-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-5 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-purple-100/50 dark:bg-purple-900/20 blur-3xl -z-10"></div>
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Me</span>
          </h2>
          <div className="w-16 h-1 sm:w-20 sm:h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 mx-auto rounded-full mb-2 sm:mb-3" />
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            My journey, skills, and what drives me as a developer
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} 
        >
          <motion.div
            className="lg:col-span-2 bg-white dark:bg-slate-800/50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg dark:shadow-xl border border-slate-100/70 dark:border-slate-700/50 backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-2.5 sm:p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg sm:rounded-xl text-white">
                <Briefcase size={24} className="sm:w-7 sm:h-7"/>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-1.5 sm:mb-2">My Journey & Philosophy</h3>
                <div className="w-12 sm:w-16 h-1 sm:h-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Hello! I'm a passionate <strong className="font-semibold text-slate-800 dark:text-slate-100">Software Developer</strong> with expertise in <strong className="font-semibold text-slate-800 dark:text-slate-100">UI Design/FrontEnd Developer</strong>. With over <span className="font-bold text-indigo-600 dark:text-indigo-400">1+ years</span> of professional experience, I specialize in building responsive, accessible web applications using modern frameworks.
              </p>

              <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-700/30 rounded-md sm:rounded-lg border border-slate-200/70 dark:border-slate-600/50">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Rocket className="flex-shrink-0 text-purple-500 dark:text-purple-400 mt-0.5 sm:mt-1" size={16} />
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                    My experience at <span className="font-semibold text-indigo-600 dark:text-indigo-400">Nexus InfoTech</span> allowed me to lead key projects, architect scalable frontend systems, and collaborate effectively within agile teams to deliver pixel-perfect user interfaces.
                  </p>
                </div>
              </div>

              <p>
                I'm driven by a passion for creating intuitive digital experiences that not only look great but are also accessible and enjoyable to use. Continuous learning is core to my process – you'll often find me exploring new design patterns or experimenting with the latest web technologies.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                <div className="flex items-center gap-2 sm:gap-3 bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg border border-indigo-100 dark:border-indigo-800/50">
                  <Globe className="text-indigo-500 dark:text-indigo-400" size={16} />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Based in India</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg border border-purple-100 dark:border-purple-800/50">
                  <Code className="text-purple-500 dark:text-purple-400" size={16} />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">1+ Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            <motion.div
              className="bg-white dark:bg-slate-800/50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg dark:shadow-xl border border-slate-100/70 dark:border-slate-700/50 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="p-2.5 sm:p-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg sm:rounded-xl text-white">
                   <Award size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1.5 sm:mb-2">My Skillset</h3>
                  <div className="w-10 sm:w-12 h-1 sm:h-1 bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {skillsData.map((skillGroup) => (
                  <motion.div
                    key={skillGroup.category}
                    whileHover={{ y: -2 }} 
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl ${skillGroup.color} border ${skillGroup.borderColor}`}>
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        {React.cloneElement(skillGroup.icon, { className: cn("flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5", skillGroup.iconColor) })}
                        <h4 className="font-semibold text-slate-700 dark:text-slate-200 text-base sm:text-lg">{skillGroup.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className={cn(
                              "px-2 py-1 sm:px-3 sm:py-1.5 rounded text-[11px] sm:text-sm font-medium transition-all duration-200",
                              "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200",
                              "border border-slate-200 dark:border-slate-600",
                              "hover:shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500"
                            )}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-800 p-5 sm:p-6 rounded-2xl sm:rounded-3xl text-white shadow-xl relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute -right-4 -top-4 sm:-right-6 sm:-top-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 dark:bg-white/5 opacity-70"></div>
              <div className="absolute -left-4 -bottom-4 sm:-left-6 sm:-bottom-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 dark:bg-white/5 opacity-70"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-white/20 dark:bg-white/10 rounded-md sm:rounded-lg">
                    <Sparkles size={18} className="text-yellow-300 dark:text-yellow-400" />
                  </div>
                  <h4 className="font-semibold text-base sm:text-lg">Quick Facts</h4>
                </div>

                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <GitBranch className="flex-shrink-0 text-indigo-200 dark:text-indigo-300 mt-0.5 sm:mt-1" size={14} />
                    <p className="text-indigo-100 dark:text-indigo-200">
                      Contributed to <strong className="font-bold text-white">7+ open-source</strong> projects
                    </p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Code className="flex-shrink-0 text-indigo-200 dark:text-indigo-300 mt-0.5 sm:mt-1" size={14} />
                    <p className="text-indigo-100 dark:text-indigo-200">
                      Launched <strong className="font-bold text-white">10+ web applications</strong> in production
                    </p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Users className="flex-shrink-0 text-indigo-200 dark:text-indigo-300 mt-0.5 sm:mt-1" size={14} />
                    <p className="text-indigo-100 dark:text-indigo-200">
                      Mentored <strong className="font-bold text-white">2 junior developers</strong>
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

export default About;