import type { Metadata } from "next";

export const seo = {
  title: "Download: PE-Backed CFO Speed Chess Whitepaper",
  description: "Description: Download this guide to learn ten tactical tips for PE-backed CFOs gathered from peer CFOs and PE sponsors.",
  icons: [
    {
      rel: "icon",
      url: "https://assets-global.website-files.com/651a8a43d9a30241224cf470/65369e5a8884afbae46a0b21_favicon.png",
    },
  ],
  openGraph: {
    type: "website",
    // url: "https://cryptothegame.com",
    title: "Rho Game Speed Chess Whitepaper",
    description: "10 tactical tips for PE-backed CFO in 2024",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Rho Game Speed Chess Whitepaper",
      },
    ],
    videos: [
      {
        url: "/preview.mp4",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
} as Metadata;
