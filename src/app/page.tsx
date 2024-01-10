"use client";

import { Canvas } from "@react-three/fiber";
import { HubspotProvider } from "next-hubspot";
import { OrbitControls, Environment } from "@react-three/drei";

import Scene from "@/components/Scene";
import Page from "@/components/Page";

export default function Home() {
  return (
    <HubspotProvider>
      <main className="fixed top-0 left-0 right-0 bottom-0 h-[100dvh] flex flex-col md:flex-row">
        <Canvas
          shadows
          orthographic
          camera={{ position: [-30, 10, 20], zoom: 100 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <color attach="background" args={["#EFF0F1"]} />
          <fog attach="fog" args={["#EFF0F1", 0, 150]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={5} color="red" />
          <Scene />
          <Environment preset="sunset" />
          <OrbitControls
            // autoRotate={true}
            // autoRotateSpeed={0.5}
            enabled={false}
            zoomSpeed={0.25}
            minZoom={60}
            maxZoom={100}
            enablePan={false}
            dampingFactor={0.05}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2.5}
          />
        </Canvas>

        <Page />
      </main>
    </HubspotProvider>
  );
}
