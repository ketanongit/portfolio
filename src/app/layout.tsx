import type { Metadata } from "next";
import "./globals.css";
import StarField from "@/components/StarField";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Ketan Gandhi | Portfolio",
  description: "Personal portfolio website of Ketan Gandhi - Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 text-white relative min-h-screen antialiased">
        <ScrollProgress />
        <StarField />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
