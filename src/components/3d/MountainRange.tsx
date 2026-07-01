"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Procedural low-poly Himalayan ridge line.
 * Builds a jagged ribbon of peaks using a seeded noise-like function,
 * then layers two ridges at different depths/colors for parallax.
 */
function buildRidgeGeometry(width: number, segments: number, seed: number, amplitude: number) {
  const positions: number[] = [];
  const indices: number[] = [];
  const baseY = -2.2;

  const heights: number[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const n =
      Math.sin(t * 7 + seed) * 0.6 +
      Math.sin(t * 17 + seed * 2.1) * 0.3 +
      Math.sin(t * 3 + seed * 0.5) * 0.9;
    heights.push(Math.abs(n) * amplitude);
  }

  for (let i = 0; i <= segments; i++) {
    const x = (i / segments - 0.5) * width;
    const topY = baseY + heights[i];
    positions.push(x, baseY - 1, 0); // bottom vertex
    positions.push(x, topY, 0); // top (peak) vertex
  }

  for (let i = 0; i < segments; i++) {
    const a = i * 2;
    const b = i * 2 + 1;
    const c = (i + 1) * 2;
    const d = (i + 1) * 2 + 1;
    indices.push(a, b, d, a, d, c);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function Ridge({
  z,
  color,
  amplitude,
  opacity,
  seed,
}: {
  z: number;
  color: string;
  amplitude: number;
  opacity: number;
  seed: number;
}) {
  const geometry = useMemo(() => buildRidgeGeometry(40, 48, seed, amplitude), [seed, amplitude]);
  return (
    <mesh geometry={geometry} position={[0, 0, z]}>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={opacity}
        emissive={color}
        emissiveIntensity={0.15}
        flatShading
      />
    </mesh>
  );
}

function SnowMist() {
  const ref = useRef<THREE.Points>(null);
  const count = 300;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = Math.random() * 4 - 2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    const positionsAttr = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      const y = positionsAttr.getY(i);
      positionsAttr.setY(i, y + Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.0008);
    }
    positionsAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#EAF2F8" size={0.035} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function MountainRange() {
  return (
    <group position={[0, -0.8, 0]}>
      <Ridge z={-8} color="#0B1326" amplitude={3.4} opacity={0.9} seed={1.2} />
      <Ridge z={-5.5} color="#172547" amplitude={2.6} opacity={0.95} seed={4.7} />
      <Ridge z={-3.2} color="#1AAFCE" amplitude={1.8} opacity={0.35} seed={2.3} />
      <SnowMist />
    </group>
  );
}
