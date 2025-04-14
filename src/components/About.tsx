import React from 'react';
import { Code, Layout, Cpu, Palette, Users, Award, Sparkles, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; 

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


const skillsData = [
  {
    category: 'Programming & Backend',
    items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'Node.js (Basic)'],
    icon: <Code className="text-indigo-500" size={20} />,
  },
  {
    category: 'Frontend & Styling',
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'SASS/SCSS', 'Framer Motion'],
    icon: <Layout className="text-indigo-500" size={20} />,
  },
   {
    category: 'UI/UX Design',
    items: ['Figma', 'Responsive Design', 'Wireframing', 'Prototyping', 'Accessibility'],
    icon: <Palette className="text-indigo-500" size={20} />,
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'NPM/Yarn', 'Jira'],
    icon: <Cpu className="text-indigo-500" size={20} />,
  },
  {
    category: 'Soft Skills',
    items: ['Collaboration', 'Problem-Solving', 'Agile Methodologies', 'Communication', 'Mentorship'],
    icon: <Users className="text-indigo-500" size={20} />,
  }
];

const About = () => {
  return ( 
    <section id="about" className="py-24 md:py-32 bg-slate-50 overflow-hidden"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"> 

        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" /> 
        </motion.div>

        
        <motion.div
          className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start" 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
        >
          <motion.div
            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100" 
            variants={itemVariants} 
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
               <Briefcase size={28} className="text-indigo-600" /> 
              My Journey & Philosophy
            </h3>

            <div className="space-y-5 text-lg text-slate-600 leading-relaxed"> 
              <p>
                Hello! I'm a dedicated <strong className="text-slate-700">Frontend Developer</strong> with a keen eye for <strong className="text-slate-700">UI/UX Design</strong>. With over <strong className="text-indigo-600">2 years</strong> of hands-on experience, I specialize in building responsive, high-performance web applications using modern technologies like React and Next.js.
              </p>
              <p>
                My background at <span className="font-semibold text-indigo-600">Nexus InfoTech</span> involved leading key projects, where I honed my skills in architecting scalable frontend systems and collaborating effectively within agile teams to deliver pixel-perfect user interfaces.
              </p>
              <p>
                I'm driven by a passion for creating intuitive digital experiences that not only look great but are also accessible and enjoyable to use. Continuous learning is core to my process – you'll often find me exploring new design patterns, contributing to open-source projects, or experimenting with the latest web technologies.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100" 
              variants={itemVariants} 
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                 <Award size={24} className="text-indigo-600" /> 
                My Skillset
              </h3>

              <div className="space-y-6">
                {skillsData.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <div className="flex items-center gap-3 mb-3">
                      {React.cloneElement(skillGroup.icon, { className: "text-indigo-600 flex-shrink-0" })}
                      <h4 className="font-semibold text-slate-700 text-lg">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className={cn(
                            "px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200", 
                            "bg-indigo-50 text-indigo-700 border border-indigo-100 hover:bg-indigo-100 hover:border-indigo-200", 
                          )}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-2xl text-white shadow-xl" 
              variants={itemVariants} 
            >
               <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Sparkles size={20} className="text-yellow-300" /> 
                  Quick Fact
               </h4>
              <p className="text-indigo-100 leading-snug"> 
                Proud contributor to <strong className="font-bold text-white">10+ open-source</strong> projects and successfully launched over <strong className="font-bold text-white">20 web applications</strong> in the past two years!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  ); 
}; 

export default About;