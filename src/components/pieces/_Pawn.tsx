"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGLTF } from "@react-three/drei";

interface Props {
  color: string;
  position: [number, number, number];
}

const _ = ({ color, position }: Props) => {
  const { nodes } = useGLTF("/scene-transformed.glb");
  const ref = useRef() as React.MutableRefObject<THREE.Mesh>;

  useEffect(() => {
    if (!ref.current) return;
    gsap.to(ref.current.position, {
      duration: 3,
      delay: 2,
      z: -2.5,
      repeat: -1,
      repeatDelay: 2,
      yoyo: true,
      ease: "expo.inOut",
      overwrite: true,
    });
  }, []);

  return (
    <mesh
      ref={ref}
      // @ts-expect-error - TS doesn't like the geometry prop
      geometry={nodes.Sphere002_Material001_0.geometry}
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
