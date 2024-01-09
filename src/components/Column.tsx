import Image from "next/image";

const _ = () => {
  return (
    <div className="relative w-full h-full max-w-2xl px-6 md:px-12 pt-10 pb-4 md:py-16 flex flex-col gap-2 md:gap-12 justify-between bg-grid">
      <div className="flex flex-col gap-6 md:gap-12">
        <Image
          src="https://assets-global.website-files.com/651a8a43d9a30241224cf470/651a8bfe5673bea6fb32bfd8_rho-logo-1.png"
          alt="rho logo"
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-1 md:gap-2">
          <h5>Whitepaper</h5>
          <h2>10 tactical tips for PE-backed CFO in</h2>
          <h1>2024</h1>
        </div>
      </div>
      <button>Download Packet</button>
    </div>
  );
};

export default _;
