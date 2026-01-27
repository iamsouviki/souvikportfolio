import { useEffect, useRef } from 'react';
import './FloatingParticles.css';

const FloatingParticles = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    // Create particles - reduced count for performance
    const particleCount = 5; // Reduced from 15
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
      });
    }

    particlesRef.current = particles;
  }, []);

  return (
    <div ref={containerRef} className="floating-particles-container">
      {particlesRef.current.map((particle) => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
