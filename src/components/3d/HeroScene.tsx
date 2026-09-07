"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Stars, Grid } from "@react-three/drei";
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
      <fog attach="fog" args={["#05080F", 4, 12]} />

      <ambientLight intensity={0.2} />
      
      {/* Lighting updated to match the new Cyan & Blue brand gradient */}
      <directionalLight position={[4, 5, 3]} intensity={1.5} color="#5CE7FF" />
      <pointLight position={[-3, 1, 2]} intensity={2} color="#3B82F6" />

      <Suspense fallback={null}>
        <Stars radius={40} depth={30} count={1200} factor={2} fade speed={0.4} />
        
        {/* Replaced MountainRange with an architectural tech-grid */}
        <Grid 
          position={[0, -1.2, 0]} 
          args={[30, 30]} 
          cellSize={0.5} 
          cellThickness={1.2} 
          cellColor="#1E3A8A" /* Deep blue for minor grid lines */
          sectionSize={2.5} 
          sectionThickness={1.5} 
          sectionColor="#5CE7FF" /* Cyan for major grid lines */
          fadeDistance={15} 
          fadeStrength={1.5} 
        />

        <HoloName />
        <TechIcons />
        
        {/* Changed from 'night' to 'city' for better metallic reflections on TechIcons */}
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}