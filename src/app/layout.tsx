import type { Metadata } from "next";
import "./globals.css"; // ✅ Import Tailwind styles

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
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
