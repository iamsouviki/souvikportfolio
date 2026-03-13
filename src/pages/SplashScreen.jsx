import { useEffect, useRef, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { PERSONAL_INFO, ROUTES } from '../config/constants';
import * as THREE from 'three';

const SplashParticles = ({ count = 100 }) => {
  const points = useRef();
  const initialPositions = useRef(null);
  const targetPositions = useRef(null);
  const startTime = useRef(null);

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const colorOptions = [
    new THREE.Color('#00D4FF'),
    new THREE.Color('#8B5CF6'),
    new THREE.Color('#EC4899'),
    new THREE.Color('#10B981'),
  ];

  // Scatter positions
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    const c = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  useFrame((state) => {
    if (!points.current) return;
    if (!startTime.current) startTime.current = state.clock.elapsedTime;
    
    const elapsed = state.clock.elapsedTime - startTime.current;
    const progress = Math.min(elapsed / 2, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    
    const posArray = points.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      // Converge towards center
      posArray[i * 3] *= (1 - eased * 0.02);
      posArray[i * 3 + 1] *= (1 - eased * 0.02);
      posArray[i * 3 + 2] *= (1 - eased * 0.02);
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y += 0.005;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.1} vertexColors transparent opacity={0.9} sizeAttenuation />
    </points>
  );
};

const FloatingRings = () => {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) { ring1.current.rotation.x = t * 0.5; ring1.current.rotation.y = t * 0.3; }
    if (ring2.current) { ring2.current.rotation.y = t * 0.4; ring2.current.rotation.z = t * 0.3; }
    if (ring3.current) { ring3.current.rotation.z = t * 0.35; ring3.current.rotation.x = t * 0.2; }
  });

  return (
    <>
      <mesh ref={ring1}>
        <torusGeometry args={[2.5, 0.03, 8, 64]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.8} transparent opacity={0.6} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[3, 0.02, 8, 64]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.6} transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[3.5, 0.015, 8, 64]} />
        <meshStandardMaterial color="#EC4899" emissive="#EC4899" emissiveIntensity={0.5} transparent opacity={0.3} />
      </mesh>
    </>
  );
};

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES.home);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center overflow-hidden relative">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
            <pointLight position={[5, 5, 5]} color="#00D4FF" intensity={0.5} />
            <pointLight position={[-5, -5, 5]} color="#8B5CF6" intensity={0.3} />
            <Stars radius={50} depth={40} count={1000} factor={3} fade speed={1} />
            <SplashParticles count={150} />
            <FloatingRings />
          </Suspense>
        </Canvas>
      </div>

      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center relative z-10"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4"
          style={{
            background: 'linear-gradient(135deg, #00D4FF, #8B5CF6, #EC4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          {PERSONAL_INFO.name}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-textSecondary text-lg md:text-xl tracking-widest uppercase"
        >
          {PERSONAL_INFO.title}
        </motion.p>

        {/* Loading bar */}
        <motion.div className="mt-8 mx-auto w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #00D4FF, #8B5CF6, #EC4899)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
