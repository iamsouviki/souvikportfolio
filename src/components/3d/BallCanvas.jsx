import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Preload, Text } from '@react-three/drei';

const Ball = ({ color, name }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ color, name }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-24 h-24 md:w-28 md:h-28">
        <Canvas
          frameloop="demand"
          dpr={[1, 1.5]}
          gl={{ preserveDrawingBuffer: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <Ball color={color} name={name} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
      <span className="text-textSecondary text-xs text-center font-medium">{name}</span>
    </div>
  );
};

export default BallCanvas;
