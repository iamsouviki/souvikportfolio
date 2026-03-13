import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = ({ position, geometry, color, speed = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002 * speed;
      meshRef.current.rotation.y += 0.003 * speed;
      meshRef.current.rotation.z += 0.001 * speed;
    }
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.15}
          wireframe
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = ({ count = 200 }) => {
  const points = useRef();
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, [count]);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    const colorOptions = [
      new THREE.Color('#00D4FF'),
      new THREE.Color('#8B5CF6'),
      new THREE.Color('#EC4899'),
      new THREE.Color('#10B981'),
    ];
    for (let i = 0; i < count; i++) {
      const c = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return cols;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.0003;
      points.current.rotation.x += 0.0001;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} color="#00D4FF" intensity={0.5} />
      <pointLight position={[-10, -10, -5]} color="#8B5CF6" intensity={0.3} />
      <pointLight position={[0, 10, -10]} color="#EC4899" intensity={0.2} />

      <Stars
        radius={80}
        depth={60}
        count={1500}
        factor={3}
        saturation={0.5}
        fade
        speed={0.5}
      />

      <ParticleField count={300} />

      <FloatingGeometry
        position={[-8, 4, -15]}
        geometry={<octahedronGeometry args={[2, 0]} />}
        color="#00D4FF"
        speed={0.8}
      />
      <FloatingGeometry
        position={[10, -3, -20]}
        geometry={<icosahedronGeometry args={[2.5, 0]} />}
        color="#8B5CF6"
        speed={0.6}
      />
      <FloatingGeometry
        position={[-5, -6, -12]}
        geometry={<dodecahedronGeometry args={[1.5, 0]} />}
        color="#EC4899"
        speed={1.2}
      />
      <FloatingGeometry
        position={[7, 6, -18]}
        geometry={<tetrahedronGeometry args={[2, 0]} />}
        color="#10B981"
        speed={0.9}
      />
      <FloatingGeometry
        position={[0, 0, -25]}
        geometry={<torusGeometry args={[3, 0.3, 8, 24]} />}
        color="#00D4FF"
        speed={0.4}
      />
    </>
  );
};

const BackgroundWeb = () => {
  return (
    <div className="background-web-canvas">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          background: 'transparent',
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default BackgroundWeb;
