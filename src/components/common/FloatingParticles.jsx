import { useEffect, useRef } from 'react';
import './FloatingParticles.css';

const FloatingParticles = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const particleCount = 6;
    const particles = [];
    const colors = ['#00D4FF', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#00D4FF'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        color: colors[i % colors.length],
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
            background: `radial-gradient(circle, ${particle.color}15, transparent)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
