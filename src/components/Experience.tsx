import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "2022 - Present",
    description: [
      "Lead a team of 5 developers in building a SaaS platform using React, TypeScript, and GraphQL",
      "Implemented CI/CD pipelines that reduced deployment time by 40%",
      "Architected a component library that improved development efficiency by 30%"
    ]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    duration: "2020 - 2022",
    description: [
      "Developed RESTful APIs using Node.js and Express",
      "Built responsive web applications with React and Redux",
      "Integrated third-party services including payment gateways and authentication providers"
    ]
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Creative Agency",
    duration: "2018 - 2020",
    description: [
      "Created custom WordPress themes and plugins for clients",
      "Designed and implemented responsive layouts using HTML, CSS, and JavaScript",
      "Collaborated with designers to ensure pixel-perfect implementation of designs"
    ]
  }
];

const ExperienceItem: React.FC<{ item: ExperienceItem, index: number }> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-teal-400/30"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-6 h-6 -ml-3 rounded-full border-2 border-teal-400 bg-slate-900"></div>
      
      <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{item.role}</h3>
          <div className="flex items-center text-teal-400 mt-2 sm:mt-0">
            <Calendar size={16} className="mr-1" />
            <span>{item.duration}</span>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <Briefcase size={16} className="text-gray-400 mr-2" />
          <span className="text-gray-300">{item.company}</span>
        </div>
        
        <ul className="space-y-2">
          {item.description.map((desc, i) => (
            <li key={i} className="text-gray-300 flex">
              <span className="text-teal-400 mr-2">•</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Work <span className="text-teal-400">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} item={exp} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-teal-500 text-white font-medium rounded-lg shadow-lg hover:bg-teal-600 transition-colors"
          >
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;