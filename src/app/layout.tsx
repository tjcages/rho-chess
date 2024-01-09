import Slussen from "@/assets/fonts/slussen";
import "./globals.css";
import { seo } from "@/seo";

export const metadata = seo;

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
