"use client";

import Scene from "@/components/Scene";
import Column from "@/components/Column";

export default function Home() {
  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 h-[100dvh] flex flex-col md:flex-row">
      <Scene />
      <Column />
      {/* <Overlay /> */}
    </main>
  );
}
