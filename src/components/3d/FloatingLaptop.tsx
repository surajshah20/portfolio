"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";

function Laptop() {
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1}>
      <group rotation={[0.15, -0.5, 0]}>
        {/* Base */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[1.6, 0.08, 1.1]} />
          <meshStandardMaterial color="#172547" metalness={0.6} roughness={0.3} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0.55, -0.5]} rotation={[-0.25, 0, 0]}>
          <boxGeometry args={[1.6, 1.0, 0.06]} />
          <meshStandardMaterial color="#0B1326" metalness={0.5} roughness={0.4} />
        </mesh>
        {/* Glowing display */}
        <mesh position={[0, 0.55, -0.47]} rotation={[-0.25, 0, 0]}>
          <planeGeometry args={[1.42, 0.82]} />
          <meshStandardMaterial
            color="#5CE7FF"
            emissive="#34D2F2"
            emissiveIntensity={0.9}
            toneMapped={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function FloatingLaptop() {
  return (
    <Canvas camera={{ position: [0, 0.6, 3], fov: 40 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 3, 2]} intensity={1} color="#FFC477" />
      <pointLight position={[-2, 1, -1]} intensity={0.8} color="#34D2F2" />
      <Suspense fallback={null}>
        <Laptop />
        <ContactShadows position={[0, -0.6, 0]} opacity={0.4} scale={4} blur={2.5} />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
