"use client";
import { Canvas } from "@react-three/fiber";
import { Shape } from "./Model";
import { Environment } from "@react-three/drei";

export default function Index() {
  return (
    <Canvas style={{ background: "#000000" }}>
      <Shape />

      <Environment preset="city" />
    </Canvas>
  );
}
