import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wendy ZW | Strategic Consultant",
  description: "Doctoral Researcher & Senior Education Marketing Consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#F8FAFC] text-[#0A192F] font-sans">
        {children}
      </body>
    </html>
  );
}
