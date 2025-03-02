import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface Bubble {
  x: number;
  y: number;
  size: number;
  speed: number;
  alpha: number;
  element: HTMLDivElement;
}

const BubbleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const bubbleCount = Math.floor(window.innerWidth / 30); // Responsive bubble count
    
    // Clear any existing bubbles
    container.innerHTML = '';
    bubblesRef.current = [];
    
    // Create bubbles
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('div');
      const size = Math.random() * 60 + 20; // Random size between 20-80px
      
      bubble.className = 'absolute rounded-full bg-gradient-to-br from-blue-300/20 to-teal-300/20 backdrop-blur-sm';
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      container.appendChild(bubble);
      
      bubblesRef.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size,
        speed: 0.2 + Math.random() * 0.8,
        alpha: 0.1 + Math.random() * 0.4,
        element: bubble
      });
    }
    
    // Animate bubbles
    const animateBubbles = () => {
      bubblesRef.current.forEach(bubble => {
        // Move bubble upward
        bubble.y -= bubble.speed;
        
        // Reset position when bubble goes off screen
        if (bubble.y < -bubble.size) {
          bubble.y = window.innerHeight + bubble.size;
          bubble.x = Math.random() * window.innerWidth;
        }
        
        // Add slight horizontal movement
        bubble.x += Math.sin(bubble.y * 0.01) * 0.5;
        
        // Update bubble position
        gsap.set(bubble.element, {
          x: bubble.x,
          y: bubble.y,
          opacity: bubble.alpha,
          scale: 1
        });
      });
      
      animationRef.current = requestAnimationFrame(animateBubbles);
    };
    
    animateBubbles();
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900"
    />
  );
};

export default BubbleBackground;