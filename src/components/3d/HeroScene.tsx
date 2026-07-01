"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import MountainRange from "./MountainRange";
import HoloName from "./HoloName";
import TechIcons from "./TechIcons";

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 6], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#05080F"]} />
      <fog attach="fog" args={["#05080F", 6, 16]} />

      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 3]} intensity={0.8} color="#FFC477" />
      <pointLight position={[-3, 1, 2]} intensity={1.1} color="#34D2F2" />

      <Suspense fallback={null}>
        <Stars radius={40} depth={30} count={1200} factor={2} fade speed={0.4} />
        <MountainRange />
        <HoloName />
        <TechIcons />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
