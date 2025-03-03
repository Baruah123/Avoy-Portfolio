import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Box, Sphere, Torus, Cylinder } from '@react-three/drei';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  model?: string;
}

// Custom 3D cube model
const CubeModel = () => {
  return (
    <group rotation={[0, Math.PI / 4, 0]}>
      <Box args={[1.5, 1.5, 1.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4fc3f7" />
      </Box>
      <Box args={[1.6, 1.6, 1.6]} position={[0, 0, 0]} scale={1.05}>
        <meshStandardMaterial color="#333" wireframe />
      </Box>
    </group>
  );
};

// Custom 3D rocket model
const RocketModel = () => {
  return (
    <group rotation={[0, Math.PI / 4, 0]} position={[0, -1, 0]}>
      {/* Rocket body */}
      <Cylinder args={[0.5, 0.5, 2, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f5f5f5" />
      </Cylinder>
      
      {/* Rocket nose */}
      <Cylinder args={[0, 0.5, 1, 16]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#e91e63" />
      </Cylinder>
      
      {/* Rocket fins */}
      {[0, Math.PI/2, Math.PI, Math.PI*1.5].map((rotation, i) => (
        <mesh key={i} position={[0, -0.5, 0]} rotation={[0, rotation, 0]}>
          <boxGeometry args={[0.1, 0.8, 1]} />
          <meshStandardMaterial color="#2196f3" />
        </mesh>
      ))}
      
      {/* Rocket window */}
      <Torus args={[0.2, 0.05, 16, 32]} position={[0, 0.5, 0.45]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial color="#333" />
      </Torus>
      
      {/* Rocket flames */}
      <group position={[0, -1.5, 0]}>
        <Cylinder args={[0.3, 0.1, 0.5, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ff9800" emissive="#ff9800" emissiveIntensity={0.5} />
        </Cylinder>
      </group>
    </group>
  );
};

// Custom 3D laptop model
const LaptopModel = () => {
  return (
    <group position={[0, -0.5, 0]} rotation={[0, Math.PI / 5, 0]}>
      {/* Base of laptop */}
      <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Screen of laptop */}
      <group position={[0, 0.5, -0.7]} rotation={[Math.PI / 6, 0, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2, 1.2, 0.1]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        
        {/* Screen display */}
        <mesh position={[0, 0, 0.06]} castShadow receiveShadow>
          <boxGeometry args={[1.8, 1, 0.01]} />
          <meshStandardMaterial color="#4fc3f7" emissive="#4fc3f7" emissiveIntensity={0.5} />
        </mesh>
      </group>
      
      {/* Keyboard */}
      <mesh position={[0, 0, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.05, 1]} />
        <meshStandardMaterial color="#444" />
      </mesh>
    </group>
  );
};

const projects: Project[] = [
  {
    id: 1,
    title: "Examination Platform",
    description: "AI-powered examination platform with real-time feedback, secure logins, and dynamic question handling.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Baruah123/Exam-Master",
    demo: "https://exam-master-pearl.vercel.app/",
    model: "laptop"
  },
  {
    id: 2,
    title: "BlockchainGallery",
    description: "A decentralized platform showcasing digital art, secured by blockchain for authenticity and ownership.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    tags: ["React", "Firebase", "Tailwind CSS", "DnD"],
    github: "https://github.com/Baruah123/BlockchainGallery",
    demo: "https://blockchain-gallery.vercel.app/",
    model: "cube"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered application that generates various types of content including blog posts, social media captions, and marketing copy.",
    image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    tags: ["Next.js", "OpenAI API", "TypeScript", "Vercel"],
    github: "https://github.com",
    demo: "https://example.com",
    model: "rocket"
  }
];

const ProjectCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  
  const renderModel = () => {
    switch(project.model) {
      case 'laptop':
        return <LaptopModel />;
      case 'cube':
        return <CubeModel />;
      case 'rocket':
        return <RocketModel />;
      default:
        return <LaptopModel />;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-64">
        {project.model ? (
          <div className="absolute inset-0 z-10">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              {renderModel()}
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate={hovered}
                autoRotateSpeed={5}
              />
            </Canvas>
          </div>
        ) : null}
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-opacity duration-300 ${project.model && hovered ? 'opacity-20' : 'opacity-100'}`}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-700 text-teal-400 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-teal-400 transition-colors"
          >
            <Github size={18} className="mr-1" />
            <span>Code</span>
          </a>
          
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-teal-400 transition-colors"
          >
            <ExternalLink size={18} className="mr-1" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is built with a focus on performance, user experience, and clean code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/Baruah123" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Code size={20} className="mr-2" />
            <span>View All Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;