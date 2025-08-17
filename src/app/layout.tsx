import type { Metadata } from "next";
import "./globals.css"; // ✅ Import Tailwind styles
import StarField from "@/components/StarField";

export const metadata: Metadata = {
  title: "Ketan Gandhi | Portfolio",
  description: "Personal portfolio website of Ketan Gandhi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white relative min-h-screen">
        <StarField />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
