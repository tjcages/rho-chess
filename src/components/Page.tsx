import Image from "next/image";
import { gsap } from "gsap";
import { useEffect } from "react";

import Hubspot from "./Hubspot";

const _ = () => {
  useEffect(() => {
    gsap.to("#paper", {
      y: 0,
      duration: 3,
      delay: 1,
      ease: "expo.inOut",
    });
    gsap.to("#paper-content", {
      opacity: 1,
      duration: 2,
      delay: 2,
      ease: "expo.inOut",
    });
  });

  return (
    <div
      id="paper"
      className="absolute md:top-8 md:right-8 w-full h-full max-w-2xl px-6 md:px-12 pt-10 pb-4 md:py-16 flex flex-col gap-2 md:gap-12 justify-between bg-grid backdrop-blur-sm md:backdrop-blur-none bg-white/90 md:bg-white translate-y-[80%]"
    >
      <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 bg-[#e6f4f4] rounded-full">
        <Image
          className="w-5 h-5"
          src="/icons/maximize.png"
          alt="maximize"
          width={48}
          height={48}
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-12">
        <Image
          src="https://assets-global.website-files.com/651a8a43d9a30241224cf470/651a8bfe5673bea6fb32bfd8_rho-logo-1.png"
          alt="rho logo"
          width={100}
          height={100}
        />
        <div
          id="paper-content"
          className="flex flex-col gap-1 md:gap-2 opacity-10"
        >
          <h5>Whitepaper</h5>
          <h2>10 tactical tips for PE-backed CFO in</h2>
          <h1>2024</h1>
        </div>
      </div>
      <Hubspot />
      {/* <div className="absolute left-0 right-0 bottom-0 px-6 md:px-12 pt-10 pb-4 md:py-16">
        <button>Download Packet</button>
      </div> */}
    </div>
  );
};

export default _;
