"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";

function Laptop() {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1.2}>
      <group rotation={[0.15, -0.4, 0]}>
        
        {/* Base / Chassis */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[1.65, 0.08, 1.15]} />
          <meshStandardMaterial color="#0A101D" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Recessed Keyboard Deck (Adds detail without heavy models) */}
        <mesh position={[0, -0.01, -0.1]}>
          <boxGeometry args={[1.4, 0.01, 0.6]} />
          <meshStandardMaterial color="#060A13" metalness={0.5} roughness={0.8} />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, -0.01, 0.35]}>
          <boxGeometry args={[0.5, 0.01, 0.3]} />
          <meshStandardMaterial color="#080D1A" metalness={0.4} roughness={0.6} />
        </mesh>

        {/* Screen Hinge */}
        <mesh position={[0, 0, -0.55]}>
          <cylinderGeometry args={[0.04, 0.04, 1.4, 16]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#0A101D" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Screen Lid */}
        <mesh position={[0, 0.55, -0.55]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[1.65, 1.05, 0.06]} />
          <meshStandardMaterial color="#0A101D" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Glowing Display (Terminal/Code vibe) */}
        <mesh position={[0, 0.55, -0.51]} rotation={[-0.2, 0, 0]}>
          <planeGeometry args={[1.5, 0.9]} />
          <meshStandardMaterial
            color="#081020"
            emissive="#5CE7FF"
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
            toneMapped={false}
          />
        </mesh>
        
        {/* Decorative Code Lines on Screen (Adds to the QA/Dev aesthetic) */}
        <group position={[0, 0.55, -0.505]} rotation={[-0.2, 0, 0]}>
          <mesh position={[-0.4, 0.2, 0]}>
            <planeGeometry args={[0.5, 0.02]} />
            <meshBasicMaterial color="#5CE7FF" opacity={0.8} transparent />
          </mesh>
          <mesh position={[-0.2, 0.1, 0]}>
            <planeGeometry args={[0.9, 0.02]} />
            <meshBasicMaterial color="#3B82F6" opacity={0.6} transparent />
          </mesh>
          <mesh position={[-0.3, 0, 0]}>
            <planeGeometry args={[0.7, 0.02]} />
            <meshBasicMaterial color="#5CE7FF" opacity={0.8} transparent />
          </mesh>
          <mesh position={[-0.45, -0.1, 0]}>
            <planeGeometry args={[0.4, 0.02]} />
            <meshBasicMaterial color="#3B82F6" opacity={0.6} transparent />
          </mesh>
          {/* A blinking cursor block */}
          <mesh position={[-0.2, -0.1, 0]}>
            <planeGeometry args={[0.04, 0.06]} />
            <meshBasicMaterial color="#5CE7FF" />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

export default function FloatingLaptop() {
  return (
    // Adjust FOV for a flatter, more modern isometric-style perspective
    <Canvas camera={{ position: [0, 0.8, 3.5], fov: 35 }} dpr={[1, 2]}>
      <ambientLight intensity={0.2} />
      
      {/* Lighting matched to your new cyan/blue text gradients */}
      <pointLight position={[2, 3, 2]} intensity={1.5} color="#5CE7FF" />
      <pointLight position={[-2, 1, -1]} intensity={2} color="#3B82F6" />
      <spotLight position={[0, 2, 2]} angle={0.5} penumbra={1} intensity={1} color="#ffffff" />
      
      <Suspense fallback={null}>
        <Laptop />
        <ContactShadows 
          position={[0, -0.6, 0]} 
          opacity={0.6} 
          scale={5} 
          blur={2.5} 
          color="#000000"
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}