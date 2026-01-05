import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "GetSolutions - Your Android App Hub",
  description: "Discover our suite of powerful Android applications designed to enhance your mobile experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
