import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const frontendSkills: Skill[] = [
  { name: 'React', level: 90, color: 'bg-blue-500' },
  { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
  { name: 'Next.js', level: 80, color: 'bg-gray-800' },
  { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' },
  { name: 'Three.js', level: 75, color: 'bg-purple-600' },
];

const backendSkills: Skill[] = [
  { name: 'Node.js', level: 85, color: 'bg-green-600' },
  { name: 'Express', level: 80, color: 'bg-gray-600' },
  { name: 'MongoDB', level: 75, color: 'bg-green-700' },
  { name: 'PostgreSQL', level: 70, color: 'bg-blue-700' },
  { name: 'GraphQL', level: 65, color: 'bg-pink-600' },
];

const SkillBar: React.FC<{ skill: Skill, index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="mb-6"
    >
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + (0.1 * index) }}
          className={`h-2.5 rounded-full ${skill.color}`}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-teal-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-white mb-6 flex items-center"
            >
              <span className="w-8 h-8 bg-blue-500 rounded-lg mr-3 flex items-center justify-center text-white">F</span>
              Frontend Development
            </motion.h3>
            
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-white mb-6 flex items-center"
            >
              <span className="w-8 h-8 bg-green-600 rounded-lg mr-3 flex items-center justify-center text-white">B</span>
              Backend Development
            </motion.h3>
            
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg"
        >
          <h3 className="text-xl font-bold text-white mb-4">Other Skills & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {['Git', 'Docker', 'AWS', 'Firebase', 'Redux', 'Jest', 'Figma', 'Webpack', 'CI/CD', 'Agile', 'Responsive Design'].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="px-4 py-2 bg-slate-700 text-white rounded-full text-sm"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;