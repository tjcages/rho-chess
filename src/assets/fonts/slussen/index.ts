import localFont from "next/font/local";

const _ = localFont({
  src: [
    {
      path: "./Slussen-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Slussen-Regular-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Slussen-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Slussen-Medium-Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Slussen-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Slussen-Semibold-Italic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./Slussen-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Slussen-Bold-Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-slussen",
});

export default _;
