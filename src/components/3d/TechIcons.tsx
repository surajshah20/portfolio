"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

const ICONS = [
  { label: "React", color: "#5CE7FF" },
  { label: "Node.js", color: "#FF9E5E" },
  { label: "PostgreSQL", color: "#5CE7FF" },
  { label: "Express", color: "#C9D7E5" },
  { label: "JWT", color: "#FFC477" },
  { label: "TypeScript", color: "#5CE7FF" },
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
    ref.current.position.y = yOffset + Math.sin(state.clock.elapsedTime * 0.6 + angle) * 0.2;
  });

  return (
    <group ref={ref}>
      <Float speed={2} floatIntensity={0.4}>
        <mesh>
          <icosahedronGeometry args={[0.09, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.8}
            roughness={0.3}
          />
        </mesh>
        <Text
          position={[0, -0.22, 0]}
          fontSize={0.12}
          color="#EAF2F8"
          anchorX="center"
          anchorY="middle"
          font="/fonts/jetbrains-mono-regular.woff"
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
        radius: 2.6 + (i % 2) * 0.5,
        speed: 0.08 + (i % 3) * 0.02,
        yOffset: 0.6 + (i % 3) * 0.4,
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
