
import React from 'react';

const skills = [
  { category: 'Programming', items: ['React.js', 'Next.js'] },
  { category: 'Frontend', items: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'] },
  { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code'] },
  { category: 'UI/UX', items: ['Responsive Design', 'Cross-Browser Compatibility', 'Mobile-First Design'] },
  { category: 'Soft Skills', items: ['Collaboration', 'Problem Solving', 'Agile Development', 'Communication'] }
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-5 gap-8 mt-12">
          <div className="md:col-span-3">
            <p className="text-gray-700 mb-6">
              Results-driven Software Engineer with 2 years of experience building responsive, user-focused web applications using React.js, Next.js, 
              JavaScript, and Tailwind CSS. Passionate about delivering pixel-perfect designs and seamless user experiences for dynamic, modern web 
              platforms.
            </p>
            <p className="text-gray-700 mb-6">
              Throughout my career at Nexus InfoTech, I've developed and maintained multiple web applications, focusing on creating 
              interactive and intuitive user interfaces that enhance user experience while ensuring high performance and accessibility.
            </p>
            <p className="text-gray-700">
              I'm constantly learning new technologies and techniques to improve my skills as a developer. My approach to web development 
              combines technical expertise with creative problem-solving to build applications that are not only functional but also visually appealing.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-navy">Technical Skills</h3>
            
            <div className="space-y-4">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="font-semibold text-gray-800">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
