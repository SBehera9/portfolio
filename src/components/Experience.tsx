
import React from 'react';
import { Briefcase } from 'lucide-react';

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

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Experience</h2>
        
        <div className="mt-12">
          {experienceData.map((exp) => (
            <div 
              key={exp.id} 
              className="relative pl-8 pb-8 border-l-2 border-gray-200"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-teal" />
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h3 className="text-xl font-bold text-navy">{exp.title}</h3>
                  <span className="inline-flex items-center mt-2 md:mt-0 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex items-center mt-2 text-gray-600">
                  <Briefcase size={18} className="mr-2" />
                  <span>{exp.company}, {exp.location}</span>
                </div>
                
                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal mr-2">•</span>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold text-navy mb-4">Education & Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-800">Bachelor's in Computer Science Engineering</h4>
              <p className="text-gray-600">Konark Institute of Science and Technology, Bhubaneswar</p>
              <p className="text-gray-600">Oct 2021 - Aug 2024</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-800">Full Stack Web Development</h4>
              <p className="text-gray-600">Edureka Learning Center</p>
              <p className="text-gray-600">Certification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
