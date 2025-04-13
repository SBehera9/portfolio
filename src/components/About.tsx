import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Cpu, Palette, Users } from 'lucide-react';

const skills = [
  { 
    category: 'Programming', 
    items: ['React.js', 'Next.js', 'JavaScript', 'TypeScript'],
    icon: <Code className="text-purple-500" size={20} /> 
  },
  { 
    category: 'Frontend', 
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'SASS'],
    icon: <Layout className="text-blue-500" size={20} /> 
  },
  { 
    category: 'Tools & Platforms', 
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel'],
    icon: <Cpu className="text-green-500" size={20} /> 
  },
  { 
    category: 'UI/UX', 
    items: ['Responsive Design', 'Accessibility', 'Mobile-First', 'Performance'],
    icon: <Palette className="text-pink-500" size={20} /> 
  },
  { 
    category: 'Soft Skills', 
    items: ['Collaboration', 'Problem Solving', 'Agile', 'Communication'],
    icon: <Users className="text-orange-500" size={20} /> 
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Full Stack Developer & UI Specialist
            </motion.h3>
            
            <div className="space-y-6">
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm a passionate developer with 2+ years of experience crafting beautiful, functional web applications. 
                My expertise spans the full stack with a focus on creating intuitive user interfaces that deliver exceptional experiences.
              </motion.p>
              
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                At <span className="font-medium text-purple-600">Nexus InfoTech</span>, I've led development on multiple projects, 
                implementing modern React architectures and optimizing performance to create blazing-fast applications.
              </motion.p>
              
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                When I'm not coding, you'll find me exploring new design trends, contributing to open source, 
                or mentoring junior developers in my community.
              </motion.p>
            </div>
          </motion.div>
          
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <Code className="text-purple-500" size={24} />
                <span>Technical Skills</span>
              </h3>
              
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <motion.div 
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {skillGroup.icon}
                      <h4 className="font-semibold text-gray-700">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm hover:shadow-md transition-all"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Fun Fact Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl text-white"
            >
              <h4 className="font-bold text-lg mb-2">Fun Fact</h4>
              <p className="text-purple-100">
                I've contributed to 10+ open source projects and built 20+ web applications in the last 2 years!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;