"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Rook, Horse, Castle, Queen, King, Pawn } from "@/components/pieces";
import Grid from "@/components/Grid";
// import Effects from "@/components/Effects";

const _ = () => {
  return (
    <Canvas
      shadows
      orthographic
      camera={{ position: [-30, 20, 20], zoom: 100 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <color attach="background" args={["#EFF0F1"]} />
      <fog attach="fog" args={["#EFF0F1", 0, 150]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={5} color="red" />
      <group position={[0, -2, 0]}>
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
      <Environment preset="sunset" />
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={0.5}
        zoomSpeed={0.25}
        minZoom={60}
        maxZoom={100}
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
      />
      {/* <Effects /> */}
    </Canvas>
  );
};

export default _;
