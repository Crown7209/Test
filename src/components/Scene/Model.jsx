import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Shape(props) {
  const { nodes, materials } = useGLTF(
    "/models/abstract_rainbow_translucent_pendant.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Hedra001_Material_#0_0"].geometry}
          material={materials.Material_0}
          position={[-0.618, 0, 3.478]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.641}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/abstract_rainbow_translucent_pendant.glb");
