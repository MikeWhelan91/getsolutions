import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetScan - Fast PDF Scanner for Android",
  description: "A no-frills document scanner with one-tap scans, ML Kit edge detection, and instant PDF saves to your device.",
  keywords: [
    "document scanner Android",
    "scan documents",
    "receipt scanner",
    "PDF scanner",
    "GetScan",
    "edge detection scanner",
    "fast PDF scan"
  ],
  openGraph: {
    title: "GetScan - Fast PDF Scanner for Android",
    description: "One-tap scanning with ML Kit edge detection and local PDF saves.",
    url: "https://getsolutions.app/apps/getscan",
    type: "website",
    images: [
      {
        url: "/appscreenshots/getscan/ChatGPT%20Image%20Jan%2022,%202026,%2002_30_09%20AM.png",
        width: 1200,
        height: 630,
        alt: "GetScan Feature Banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GetScan - Fast PDF Scanner for Android",
    description: "One-tap scanning with edge detection and local PDF saves.",
    images: ["/appscreenshots/getscan/ChatGPT%20Image%20Jan%2022,%202026,%2002_30_09%20AM.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/getscan"
  }
};

export default function GetScanPage() {
  const app = apps.getscan;
  const relatedApps = [apps.getpdf, apps.getcompress, apps.getsecure, apps["smart-resume"]];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
