"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

// Updated to reflect the Full-Stack + QA positioning and strictly use the new brand colors
const ICONS = [
  { label: "React", color: "#5CE7FF" },
  { label: "Node.js", color: "#3B82F6" },
  { label: "PostgreSQL", color: "#5CE7FF" },
  { label: "QA / Testing", color: "#3B82F6" },
  { label: "REST APIs", color: "#5CE7FF" },
  { label: "TypeScript", color: "#3B82F6" },
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
    ref.current.position.z = Math.sin(t) * radius - 1;
    ref.current.position.y = yOffset + Math.sin(state.clock.elapsedTime * 0.6 + angle) * 0.15;
  });

  // Pre-compute wireframe geometry to optimize performance
  const geometry = useMemo(() => new THREE.OctahedronGeometry(0.1, 0), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  return (
    <group ref={ref}>
      <Float speed={2.5} floatIntensity={0.3}>
        {/* Architectural Node: Dark metal core with glowing wireframe edges */}
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
          position={[0, -0.25, 0]}
          fontSize={0.12}
          color="#EAF2F8"
          anchorX="center"
          anchorY="middle"
          font="/fonts/jetbrains-mono-regular.woff"
          outlineWidth={0.015}
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
        radius: 2.8 + (i % 2) * 0.4, // Slightly wider orbit to frame the deeper HoloName
        speed: 0.1 + (i % 3) * 0.03, // Slightly faster, more deliberate rotation
        yOffset: 1.2 + (i % 3) * 0.5, // Raised to align with the new grid and text placement
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