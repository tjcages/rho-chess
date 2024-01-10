import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

import Hubspot from "./Hubspot";

const _ = () => {
  const ref = useRef() as any;
  const [expanded, set] = useState(false);

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
      <div className="w-full h-full px-6 md:px-8 pt-10 md:pt-12 pb-[148px] flex flex-col gap-2 md:gap-12 overflow-scroll">
        <div className="flex flex-col gap-6 md:gap-8 h-[200vh]">
          <Image
            src="https://assets-global.website-files.com/651a8a43d9a30241224cf470/651a8bfe5673bea6fb32bfd8_rho-logo-1.png"
            alt="rho logo"
            width={80}
            height={80}
          />
          <div
            id="paper-content"
            className="flex flex-col gap-1 md:gap-2 opacity-10"
          >
            <p className="uppercase">Whitepaper</p>
            <h2 className="mb-2">
              10 tactical tips for PE-backed CFOs in{" "}
              <span className="text-[#119595]">2024</span>
            </h2>
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
                <h5>
                  &quot;There is a mindset change that is required to move from
                  a VC-backed company to PE. Many CFOs can&apos;t make that
                  change fast enough.&quot;
                </h5>
                <h5 className="font-semibold">OnlyCFO</h5>
              </div>
            </div>

            <div className="flex gap-4 items-start mt-4 mb-4">
              <Image
                className="w-6 h-6"
                src="/icons/alert-check.png"
                alt="icon"
                width={24}
                height={24}
              />
              <h5>
                Ten tactical tips PE-backed CFOs can implement TODAY to drive
                growth and shareholder value.
              </h5>
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
              <h5>
                Perfect for current and aspiring PE-backed CFOs and PE sponsors
                who want to help drive efficiency in their portfolios.
              </h5>
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
              <h5>Get out of the corner office and walk the factory floor.</h5>
            </div>
            <hr />

            {/* <h3 className="mt-8">
              The CFO role is equal parts fulfilling and high-stakes, given its
              significant potential to shape a company’s success. CFOs serve as
              data curators, synthesizing information that helps their
              colleagues make better decisions and drive better outcomes...
            </h3> */}

            <div className="flex gap-4 mt-4 p-4 md:p-6 items-center bg-[#eff0f1]">
              <Image
                className="w-6 h-6"
                src="/icons/alert-circle.png"
                alt="icon"
                width={24}
                height={24}
              />
              <h5>Get this and more with our exclusive whitepaper.</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute left-0 right-0 top-0 bottom-0 bg-white/90 backdrop-blur-[1px] transition-opacity duration-500 ease-out ${
          expanded
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => set(false)}
      />
      <Hubspot expanded={expanded} set={set} />
    </div>
  );
};

export default _;
