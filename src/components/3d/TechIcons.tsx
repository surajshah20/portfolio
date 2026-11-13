"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

// Reflecting core full-stack stack from CV
const ICONS = [
  { label: "React", color: "#5CE7FF" },
  { label: "Node.js", color: "#3B82F6" },
  { label: "PostgreSQL", color: "#5CE7FF" },
  { label: "Zustand", color: "#3B82F6" },
  { label: "Gemini AI", color: "#5CE7FF" },
  { label: "REST APIs", color: "#3B82F6" },
];

function OrbitChip({
  label,
  color,
  radius,
  angle,
  speed,
  yOffset,
}: {
  label: string;
  color: string;
  radius: number;
  angle: number;
  speed: number;
  yOffset: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + angle;
    ref.current.position.x = Math.cos(t) * radius;
    // Keep Z negative so chips orbit in the atmospheric depth layer without occluding foreground 2D text
    ref.current.position.z = Math.sin(t) * 1.2 - 2.6;
    ref.current.position.y = yOffset + Math.sin(state.clock.elapsedTime * 0.5 + angle) * 0.12;
  });

  // Pre-compute wireframe geometry to optimize performance
  const geometry = useMemo(() => new THREE.OctahedronGeometry(0.08, 0), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  return (
    <group ref={ref}>
      <Float speed={2} floatIntensity={0.25}>
        <mesh geometry={geometry}>
          <meshPhysicalMaterial
            color="#0A101D"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
          />
        </mesh>
        
        <lineSegments geometry={edges}>
          <lineBasicMaterial color={color} toneMapped={false} />
        </lineSegments>

        <Text
          position={[0, -0.2, 0]}
          fontSize={0.095}
          color="#EAF2F8"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.012}
          outlineColor="#05080F"
        >
          {label}
        </Text>
      </Float>
    </group>
  );
}

export default function TechIcons() {
  const chips = useMemo(
    () =>
      ICONS.map((icon, i) => ({
        ...icon,
        angle: (i / ICONS.length) * Math.PI * 2,
        radius: 3.2 + (i % 2) * 0.4,
        speed: 0.08 + (i % 3) * 0.02,
        yOffset: 1.8 + (i % 3) * 0.4,
      })),
    []
  );

  return (
    <group>
      {chips.map((chip) => (
        <OrbitChip key={chip.label} {...chip} />
      ))}
    </group>
  );
}
