"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import * as THREE from "three";

export default function HoloName() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.5}>
      {/* Pushed further back in Z and slightly higher so it acts as an elegant backdrop without colliding with the 2D headline */}
      <group ref={groupRef} position={[0, 2.4, -3.8]}>
        <Center>
          <Text3D
            font="/fonts/space-grotesk-bold.json"
            size={0.52}
            height={0.1}
            curveSegments={6}
            bevelEnabled
            bevelThickness={0.015}
            bevelSize={0.015}
            bevelSegments={3}
          >
            SURAJ KUMAR SAH
            {/* Subtle, translucent deep-slate holographic material that catches ambient cyan reflections without competing with white text */}
            <meshStandardMaterial
              color="#334155"
              emissive="#5CE7FF"
              emissiveIntensity={0.08}
              metalness={0.8}
              roughness={0.3}
              transparent
              opacity={0.32}
            />
          </Text3D>
        </Center>
      </group>
    </Float>
  );
}
