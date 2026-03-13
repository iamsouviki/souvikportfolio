import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import Laptop3D from './Laptop3D';
import Person3D from './Person3D';

const OrbitingSphere = ({ color, offset, radius, speed, yOffset }) => {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + offset;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 2) * 0.5 + yOffset;
      ref.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.15, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.5}
        roughness={0.3}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const TechOrbit = () => {
  const techItems = [
    { label: 'React', color: '#00D4FF', offset: 0 },
    { label: 'Java', color: '#EC4899', offset: Math.PI * 0.4 },
    { label: 'Flutter', color: '#8B5CF6', offset: Math.PI * 0.8 },
    { label: 'Spring', color: '#10B981', offset: Math.PI * 1.2 },
    { label: 'AI', color: '#F59E0B', offset: Math.PI * 1.6 },
  ];

  return (
    <group>
      {techItems.map((item) => (
        <OrbitingSphere key={item.label} {...item} radius={3} speed={0.3} yOffset={1} />
      ))}
    </group>
  );
};

const HeroScene = () => {
  return (
    <div style={{ width: '100%', height: '320px', maxWidth: '100%', overflow: 'hidden' }}>
      <Canvas
        camera={{ position: [0, 2, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
          <pointLight position={[-3, 3, 3]} color="#00D4FF" intensity={0.8} />
          <pointLight position={[3, 3, -3]} color="#8B5CF6" intensity={0.6} />
          <pointLight position={[0, -1, 2]} color="#EC4899" intensity={0.3} />

          <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
            <group position={[0, -0.5, 0]}>
              <Person3D scale={0.6} position={[0, 0.2, -0.5]} />
              <Laptop3D scale={0.5} position={[0, -0.3, 1]} rotation={[0.15, 0, 0]} />
              
              {/* Desk surface */}
              <mesh position={[0, -0.45, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[3, 2]} />
                <meshStandardMaterial
                  color="#0a0a1a"
                  transparent
                  opacity={0.4}
                  metalness={0.9}
                  roughness={0.1}
                />
              </mesh>
            </group>
          </Float>

          <TechOrbit />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
