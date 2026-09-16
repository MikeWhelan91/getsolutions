import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import SiteStructuredData from "@/components/SiteStructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://getsolutions.app'),
  icons: {
    icon: [
      { url: "/getsolutions-favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/getsolutions-favicon.png",
    apple: "/getsolutions-favicon.png",
  },
  title: {
    default: "GetSolutions - Privacy-First Android & iOS Apps | PDF Editor, Document Scanner & More",
    template: "%s | GetSolutions"
  },
  description: "Android and iOS apps and games. Edit PDFs offline, scan and compress documents, check app permissions, build resumes, get dating conversation help, track pregnancy and ovulation tests, and play Critter Scale.",
  keywords: [
    "Android apps",
    "iOS apps",
    "PDF editor Android",
    "document scanner app",
    "file compression Android",
    "permission manager",
    "privacy-focused apps",
    "offline PDF editor",
    "GetPDF",
    "no subscription apps",
    "Critter Scale",
    "balancing game iPhone",
    "LineCheck",
    "Smart Resume"
  ],
  authors: [{ name: "GetSolutions" }],
  creator: "GetSolutions",
  publisher: "GetSolutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getsolutions.app",
    title: "GetSolutions - Privacy-First Android & iOS Apps",
    description: "Android and iOS apps and games. Edit PDFs offline, scan and compress documents, check app permissions, build resumes, get dating conversation help, track pregnancy and ovulation tests, and play Critter Scale.",
    siteName: "GetSolutions",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "GetSolutions - Privacy-First Android & iOS Apps"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GetSolutions - Privacy-First Android & iOS Apps",
    description: "Android and iOS apps and games. Edit PDFs offline, scan and compress documents, check app permissions, build resumes, get dating conversation help, track pregnancy and ovulation tests, and play Critter Scale.",
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
      <body>
        <SiteStructuredData />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
