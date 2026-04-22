import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wendy ZW | Strategic Growth & Marketing Specialist",
  description: "Bridging doctoral research rigor with market execution - $55K+ Monthly Revenue, 88% Success Rate, Doctoral Researcher in Engineering Design",
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
