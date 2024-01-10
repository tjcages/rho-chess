"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ContactShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Rook, Horse, Castle, Queen, King, Pawn } from "@/components/pieces";
import Grid from "@/components/Grid";

const _ = () => {
  const ref = useRef() as React.MutableRefObject<THREE.Group>;
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.001;
  });

  useEffect(() => {
    if (!ref.current) return;
    gsap.to(ref.current.position, {
      z: -5,
      duration: 4,
      delay: 1,
      ease: "expo.inOut",
    });
  })

  return (
    <group ref={ref} position={[0, -2, 0]}>
      <group>
        <Rook color="#119595" position={[6.25, 0, 0]} />
        <Horse color="#119595" position={[1.25, 0, 0]} />
        <Castle color="#119595" position={[3.75, 0, 0]} />
        <Queen color="#119595" position={[-6.25, 0, 0]} />
        <King color="#119595" position={[-3.75, 0, 0]} />

        <Pawn color="#119595" position={[-1.25, 0, 2.5]} />
      </group>
      <Grid />
      <ContactShadows
        resolution={1024}
        frames={1}
        position={[0, 0, 0]}
        scale={40}
        blur={2}
        opacity={1}
        far={20}
      />
    </group>
  );
};

export default _;
