"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import * as THREE from "three";

export default function HoloName() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Slightly faster, sharper sine wave to match the technical grid environment
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.8}>
      <group ref={groupRef} position={[0, 1.8, -1.5]}>
        <Center>
          <Text3D
            font="/fonts/space-grotesk-bold.json"
            size={0.65}
            height={0.16} // Deepened the extrusion for a heavy, architectural block feel
            curveSegments={8}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelSegments={4}
          >
            SURAJ KUMAR SAH
            {/* Upgraded to a physical material. It uses a silver/chrome base so it catches and reflects the cyan and blue lights from the HeroScene */}
            <meshPhysicalMaterial
              color="#F8FAFC"
              metalness={1}
              roughness={0.1}
              clearcoat={1}
              clearcoatRoughness={0.1}
              envMapIntensity={1.5}
            />
          </Text3D>
        </Center>
      </group>
    </Float>
  );
}