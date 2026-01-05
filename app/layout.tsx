import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://getsolutions.app'),
  title: {
    default: "GetSolutions - Privacy-First Android Apps | PDF Editor, Document Scanner & More",
    template: "%s | GetSolutions"
  },
  description: "Solo-developed Android apps built with privacy in mind. Edit PDFs offline, scan documents, compress files, and manage app permissions. No predatory subscriptions, no data collection. Just tools that work.",
  keywords: [
    "Android apps",
    "PDF editor Android",
    "document scanner app",
    "file compression Android",
    "permission manager",
    "privacy-focused apps",
    "offline PDF editor",
    "GetPDF",
    "GetScan",
    "GetCompress",
    "GetSecure",
    "no subscription apps",
    "privacy apps Android"
  ],
  authors: [{ name: "GetSolutions" }],
  creator: "GetSolutions",
  publisher: "GetSolutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getsolutions.app",
    title: "GetSolutions - Privacy-First Android Apps",
    description: "Solo-developed Android apps built with privacy in mind. No predatory subscriptions, no data collection.",
    siteName: "GetSolutions",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "GetSolutions - Privacy-First Android Apps"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GetSolutions - Privacy-First Android Apps",
    description: "Solo-developed Android apps built with privacy in mind. No predatory subscriptions, no data collection.",
    images: ["/hero.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://getsolutions.app"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white overflow-x-hidden">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
