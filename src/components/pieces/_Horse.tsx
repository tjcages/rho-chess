"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useCursor, useGLTF } from "@react-three/drei";

interface Props {
  color: string;
  position: [number, number, number];
}

const _ = ({ color, position }: Props) => {
  const ref = useRef() as React.MutableRefObject<THREE.Mesh>;
  const { nodes, materials } = useGLTF("/scene-transformed.glb");
  const [hover, set] = useState(false);
  useCursor(hover);

  useEffect(() => {
    if (!ref.current) return;
    if (hover) {
      gsap.to(ref.current.position, {
        duration: 1,
        y: 0.5,
        ease: "expo.inOut",
        overwrite: true,
      });
      gsap.to(ref.current.rotation, {
        duration: 1,
        z: 0.25,
        x: -Math.PI / 2 + 0.1,
        ease: "expo.inOut",
        overwrite: true,
      });
    } else {
      gsap.to(ref.current.position, {
        duration: 1,
        y: 0,
        ease: "expo.inOut",
        overwrite: true,
      });
      gsap.to(ref.current.rotation, {
        duration: 1,
        x: -Math.PI / 2,
        z: 0,
        ease: "expo.inOut",
        overwrite: true,
      });
    }
  }, [hover]);

  return (
    <mesh
      ref={ref}
      // @ts-expect-error - TS doesn't like the geometry prop
      geometry={nodes.Sphere003_Material001_0.geometry}
      position={position}
      rotation={[-Math.PI / 2, 0, 0.444]}
      scale={0.5}
      castShadow
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
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
