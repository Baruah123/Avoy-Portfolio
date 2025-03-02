import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="\src\images\image1.jpeg" 
                alt="Developer working" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-400 rounded-lg -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Full-Stack Developer & UI/UX Enthusiast
            </h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate developer with over 5 years of experience creating web applications that deliver exceptional user experiences. My journey in tech began with a curiosity about how things work on the web, which evolved into a career building solutions that solve real-world problems.
            </p>
            <p className="text-gray-300 mb-8">
              I specialize in React, Node.js, and modern web technologies. When I'm not coding, you can find me exploring new tech, contributing to open source, or mentoring aspiring developers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
                <div className="bg-teal-400/20 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Code className="text-teal-400" size={24} />
                </div>
                <h4 className="text-white font-medium mb-1">Development</h4>
                <p className="text-gray-400 text-sm">5+ years experience</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
                <div className="bg-teal-400/20 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Briefcase className="text-teal-400" size={24} />
                </div>
                <h4 className="text-white font-medium mb-1">Projects</h4>
                <p className="text-gray-400 text-sm">30+ completed</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
                <div className="bg-teal-400/20 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <GraduationCap className="text-teal-400" size={24} />
                </div>
                <h4 className="text-white font-medium mb-1">Education</h4>
                <p className="text-gray-400 text-sm">Computer Science</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;