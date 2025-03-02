import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Box } from '@react-three/drei';

// Custom 3D laptop-like model since external model is unavailable
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

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="text-teal-400 block mt-2">Avoy Baruah Developer</span>
          </h1>
          <p className="text-xl text-gray-300 mt-6 max-w-lg mx-auto lg:mx-0">
            Full-stack developer specializing in building exceptional digital experiences with modern technologies.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 bg-teal-500 text-white font-medium rounded-lg shadow-lg hover:bg-teal-600 transition-colors"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:w-1/2 h-[400px] sm:h-[500px]"
        >
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <LaptopModel />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.8}
            />
          </Canvas>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#about" 
          className="flex flex-col items-center text-white hover:text-teal-400 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
              }}
              className="w-1 h-2 bg-white rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;