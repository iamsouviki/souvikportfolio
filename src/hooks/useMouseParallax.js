import { useState, useEffect, useCallback } from 'react';

export const useMouseParallax = (intensity = 0.05) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = useCallback((e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (e.clientX - centerX) / centerX;
    const y = (e.clientY - centerY) / centerY;
    
    setRotateX(-y * intensity * 20);
    setRotateY(x * intensity * 20);
    setMouseX(x);
    setMouseY(y);
  }, [intensity]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return { rotateX, rotateY, mouseX, mouseY };
};
