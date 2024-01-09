import type { Metadata } from "next";
import Slussen from "@/assets/fonts/slussen";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rho Game Speed Chess Whitepaper",
  description: "10 tactical tips for PE-backed CFO in 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Slussen.className}>{children}</body>
    </html>
  );
}
