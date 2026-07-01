"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import * as THREE from "three";

export default function HoloName() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.18;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6}>
      <group ref={groupRef} position={[0, 1.6, -1]}>
        <Center>
          {/* Falls back gracefully if the font file isn't bundled — see README for font setup */}
          <Text3D
            font="/fonts/space-grotesk-bold.json"
            size={0.62}
            height={0.08}
            curveSegments={6}
            bevelEnabled
            bevelThickness={0.012}
            bevelSize={0.012}
            bevelSegments={3}
          >
            SURAJ KUMAR SAH
            <meshStandardMaterial
              color="#5CE7FF"
              emissive="#34D2F2"
              emissiveIntensity={0.6}
              metalness={0.4}
              roughness={0.25}
            />
          </Text3D>
        </Center>
      </group>
    </Float>
  );
}
