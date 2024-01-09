"use client";

import { useGLTF } from "@react-three/drei";

interface Props {
  color: string;
  position: [number, number, number];
}

const _ = ({ color, position }: Props) => {
  const { nodes, materials } = useGLTF("/scene-transformed.glb");
  return (
    <mesh
      geometry={nodes.Sphere_Material001_0.geometry}
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={0.5}
      castShadow
    >
      <meshStandardMaterial
        attach="material"
        color={color}
        roughness={0.4}
        metalness={0.9}
      />
    </mesh>
  );
};

useGLTF.preload("/scene-transformed.glb");
export default _;
