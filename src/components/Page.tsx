import Image from "next/image";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

import Hubspot from "./Hubspot";

const _ = () => {
  const ref = useRef() as any;

  // useEffect(() => {
  //   if (!ref.current) return;
  //   const lenis = new Lenis({
  //     wrapper: ref.current,
  //     eventsTarget: window,
  //     infinite: false
  //   });

  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

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
      ref={ref}
      id="paper"
      className="absolute top-0 md:top-8 md:right-8 bottom-0 w-full max-w-2xl bg-grid backdrop-blur-sm md:backdrop-blur-none bg-white/90 md:bg-white translate-y-[80%]"
    >
      <div className="w-full h-full px-6 md:px-12 pt-10 md:pt-16 pb-[300px] md:pb-[400px] flex flex-col gap-2 md:gap-12 overflow-scroll">
        <div className="flex flex-col gap-6 md:gap-12 h-[200vh]">
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
            <h5 className="uppercase">Whitepaper</h5>
            <h2>10 tactical tips for PE-backed CFO in</h2>
            <h1>2024</h1>
            <hr />

            <div className="flex gap-6 w-full items-start justify-start mt-4 p-4 md:p-6 md:pr-8 bg-[#e6f4f4] rounded-sm">
              <Image
                className="w-16 h-16 rounded-full"
                src="/icons/cfo.webp"
                alt="onlyCFO"
                width={48}
                height={48}
              />
              <div className="flex flex-col gap-2">
                <h4>
                  &quot;There is a mindset change that is required to move from
                  a VC-backed company to PE. Many CFOs can&apos;t make that
                  change fast enough.&quot;
                </h4>
                <h4 className="font-semibold">OnlyCFO</h4>
              </div>
            </div>

            <div className="flex gap-4 items-start mt-8 mb-4">
              <Image
                className="w-6 h-6"
                src="/icons/alert-check.png"
                alt="icon"
                width={24}
                height={24}
              />
              <h4>
                Ten tactical tips PE-backed CFOs can implement TODAY to drive
                growth and shareholder value.
              </h4>
            </div>
            <hr />
            <div className="flex gap-4 items-start my-4">
              <Image
                className="w-6 h-6"
                src="/icons/trending-up.png"
                alt="icon"
                width={24}
                height={24}
              />
              <h4>
                Perfect for current and aspiring PE-backed CFOs and PE sponsors
                who want to help drive efficiency in their portfolios.
              </h4>
            </div>
            <hr />
            <div className="flex gap-4 items-start my-4">
              <Image
                className="w-6 h-6"
                src="/icons/reward.png"
                alt="icon"
                width={24}
                height={24}
              />
              <h4>Get out of the corner office and walk the factory floor.</h4>
            </div>
            <hr />

            <h3 className="mt-8">
              The CFO role is equal parts fulfilling and high-stakes, given its
              significant potential to shape a company’s success. CFOs serve as
              data curators, synthesizing information that helps their
              colleagues make better decisions and drive better outcomes...
            </h3>

            <div className="flex gap-4 mt-8 p-4 md:p-6 items-center bg-[#eff0f1]">
              <Image
                className="w-6 h-6"
                src="/icons/alert-circle.png"
                alt="icon"
                width={24}
                height={24}
              />
              <h4>Get this and more with our exclusive packet.</h4>
            </div>
          </div>
        </div>
      </div>
      <Hubspot />
    </div>
  );
};

export default _;
