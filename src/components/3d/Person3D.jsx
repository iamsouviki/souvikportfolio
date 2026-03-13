import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Person3D = ({ scale = 1, position = [0, 0, 0] }) => {
  const groupRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08 + position[1];
    }
    // Subtle arm animation (typing gesture)
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = -0.5 + Math.sin(state.clock.elapsedTime * 3) * 0.05;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = -0.5 + Math.sin(state.clock.elapsedTime * 3 + 1) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Head */}
      <mesh position={[0, 2.8, 0]}>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.3}
          metalness={0.3}
          roughness={0.5}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Face visor / glasses */}
      <mesh position={[0, 2.85, 0.35]}>
        <boxGeometry args={[0.6, 0.12, 0.1]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={0.8}
          metalness={0.8}
          roughness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 2.3, 0]}>
        <cylinderGeometry args={[0.12, 0.15, 0.2, 8]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Torso */}
      <RoundedBox args={[0.9, 1.2, 0.5]} radius={0.1} position={[0, 1.6, 0]}>
        <meshStandardMaterial
          color="#1a1a2e"
          emissive="#8B5CF6"
          emissiveIntensity={0.08}
          metalness={0.6}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Chest glow accent */}
      <mesh position={[0, 1.8, 0.26]}>
        <planeGeometry args={[0.3, 0.05]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={1}
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh position={[0, 1.65, 0.26]}>
        <planeGeometry args={[0.2, 0.03]} />
        <meshStandardMaterial
          color="#EC4899"
          emissive="#EC4899"
          emissiveIntensity={1}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.6, 2, 0]}>
        {/* Upper arm */}
        <RoundedBox args={[0.2, 0.7, 0.22]} radius={0.05} position={[0, -0.2, 0]}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.3} />
        </RoundedBox>
        {/* Lower arm */}
        <RoundedBox args={[0.18, 0.6, 0.2]} radius={0.04} position={[0.1, -0.7, 0.2]}>
          <meshStandardMaterial color="#252545" metalness={0.5} roughness={0.3} />
        </RoundedBox>
        {/* Hand */}
        <mesh position={[0.1, -1, 0.3]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.6, 2, 0]}>
        {/* Upper arm */}
        <RoundedBox args={[0.2, 0.7, 0.22]} radius={0.05} position={[0, -0.2, 0]}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.3} />
        </RoundedBox>
        {/* Lower arm */}
        <RoundedBox args={[0.18, 0.6, 0.2]} radius={0.04} position={[-0.1, -0.7, 0.2]}>
          <meshStandardMaterial color="#252545" metalness={0.5} roughness={0.3} />
        </RoundedBox>
        {/* Hand */}
        <mesh position={[-0.1, -1, 0.3]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* Legs */}
      {/* Left Leg */}
      <RoundedBox args={[0.28, 1, 0.3]} radius={0.06} position={[-0.22, 0.5, 0]}>
        <meshStandardMaterial color="#0f0f25" metalness={0.5} roughness={0.3} />
      </RoundedBox>
      {/* Left Shoe */}
      <RoundedBox args={[0.28, 0.15, 0.45]} radius={0.04} position={[-0.22, -0.05, 0.08]}>
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={0.3}
          metalness={0.6}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Right Leg */}
      <RoundedBox args={[0.28, 1, 0.3]} radius={0.06} position={[0.22, 0.5, 0]}>
        <meshStandardMaterial color="#0f0f25" metalness={0.5} roughness={0.3} />
      </RoundedBox>
      {/* Right Shoe */}
      <RoundedBox args={[0.28, 0.15, 0.45]} radius={0.04} position={[0.22, -0.05, 0.08]}>
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={0.3}
          metalness={0.6}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Person glow */}
      <pointLight position={[0, 2, 1]} color="#8B5CF6" intensity={0.5} distance={3} />
      <pointLight position={[0, 0, 1]} color="#00D4FF" intensity={0.3} distance={2} />
    </group>
  );
};

export default Person3D;
