import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const earthRef = useRef();
  const atmosphereRef = useRef();

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      {/* Earth sphere */}
      <mesh ref={earthRef} scale={2.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#0a0a2e"
          metalness={0.4}
          roughness={0.7}
        />
        {/* Wireframe overlay for tech look */}
        <mesh scale={1.005}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial
            wireframe
            color="#00D4FF"
            transparent
            opacity={0.15}
          />
        </mesh>
        {/* Continents - dots pattern */}
        <mesh scale={1.01}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            wireframe
            color="#8B5CF6"
            transparent
            opacity={0.08}
          />
        </mesh>
      </mesh>

      {/* Atmosphere glow */}
      <mesh ref={atmosphereRef} scale={2.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#00D4FF"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Orbit rings */}
      <mesh rotation={[Math.PI / 6, 0, 0]}>
        <torusGeometry args={[3, 0.01, 8, 100]} />
        <meshStandardMaterial color="#00D4FF" transparent opacity={0.3} emissive="#00D4FF" emissiveIntensity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[3.3, 0.008, 8, 100]} />
        <meshStandardMaterial color="#8B5CF6" transparent opacity={0.2} emissive="#8B5CF6" emissiveIntensity={0.3} />
      </mesh>

      {/* Floating particles around Earth */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 2.8 + Math.random() * 1;
        const y = (Math.random() - 0.5) * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * radius, y, Math.sin(angle) * radius]}>
            <sphereGeometry args={[0.03, 6, 6]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#00D4FF' : '#8B5CF6'}
              emissive={i % 2 === 0 ? '#00D4FF' : '#8B5CF6'}
              emissiveIntensity={1}
            />
          </mesh>
        );
      })}

      {/* Lights */}
      <pointLight position={[5, 5, 5]} color="#00D4FF" intensity={1} />
      <pointLight position={[-5, -3, 5]} color="#8B5CF6" intensity={0.5} />
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.2} />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
