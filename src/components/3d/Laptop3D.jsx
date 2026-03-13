import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Laptop3D = ({ scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const groupRef = useRef();
  const screenGlowRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1 + rotation[1];
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15 + position[1];
    }
    if (screenGlowRef.current) {
      screenGlowRef.current.material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* Laptop Base */}
      <RoundedBox args={[3, 0.12, 2]} radius={0.05} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Keyboard area */}
      <RoundedBox args={[2.6, 0.02, 1.5]} radius={0.02} position={[0, 0.07, 0.1]}>
        <meshStandardMaterial color="#16162a" metalness={0.5} roughness={0.4} />
      </RoundedBox>

      {/* Trackpad */}
      <RoundedBox args={[0.8, 0.01, 0.5]} radius={0.02} position={[0, 0.08, 0.55]}>
        <meshStandardMaterial color="#1e1e3a" metalness={0.6} roughness={0.3} />
      </RoundedBox>

      {/* Keyboard keys (simplified grid) */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <RoundedBox
            key={`key-${row}-${col}`}
            args={[0.2, 0.02, 0.18]}
            radius={0.02}
            position={[-1.1 + col * 0.24, 0.08, -0.35 + row * 0.25]}
          >
            <meshStandardMaterial color="#252545" metalness={0.4} roughness={0.5} />
          </RoundedBox>
        ))
      )}

      {/* Screen (lid) - tilted back */}
      <group position={[0, 1.1, -0.95]} rotation={[-0.15, 0, 0]}>
        {/* Screen frame */}
        <RoundedBox args={[3, 2, 0.08]} radius={0.04}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </RoundedBox>

        {/* Screen display */}
        <mesh ref={screenGlowRef} position={[0, 0, 0.045]}>
          <planeGeometry args={[2.7, 1.7]} />
          <meshStandardMaterial
            color="#0a0a1a"
            emissive="#00D4FF"
            emissiveIntensity={0.5}
            metalness={0.1}
            roughness={0.9}
          />
        </mesh>

        {/* Code lines on screen */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={`code-${i}`} position={[-0.8 + (i % 3) * 0.1, 0.5 - i * 0.18, 0.05]}>
            <planeGeometry args={[0.6 + Math.random() * 1.2, 0.04]} />
            <meshBasicMaterial
              color={['#00D4FF', '#8B5CF6', '#EC4899', '#10B981'][i % 4]}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}

        {/* Screen reflection */}
        <mesh position={[0, 0, 0.046]}>
          <planeGeometry args={[2.7, 1.7]} />
          <meshStandardMaterial
            transparent
            opacity={0.05}
            color="#ffffff"
            metalness={1}
            roughness={0}
          />
        </mesh>
      </group>

      {/* Hinge */}
      <mesh position={[0, 0.06, -0.95]}>
        <cylinderGeometry args={[0.04, 0.04, 2.8, 8]} />
        <meshStandardMaterial color="#2a2a4a" metalness={0.7} roughness={0.3} />
        <mesh rotation={[0, 0, Math.PI / 2]} />
      </mesh>

      {/* Screen glow light */}
      <pointLight position={[0, 1, -0.5]} color="#00D4FF" intensity={0.8} distance={4} />
    </group>
  );
};

export default Laptop3D;
