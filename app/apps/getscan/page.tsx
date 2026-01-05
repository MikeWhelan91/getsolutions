import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetScan - AI Document Scanner App for Android",
  description: "Professional document scanner with AI-powered edge detection. Scan receipts, contracts, and documents with auto perspective correction. Create multi-page PDFs instantly.",
  keywords: [
    "document scanner Android",
    "scan documents",
    "AI scanner app",
    "OCR Android",
    "receipt scanner",
    "PDF scanner",
    "GetScan",
    "edge detection scanner",
    "multi-page PDF"
  ],
  openGraph: {
    title: "GetScan - AI Document Scanner App for Android",
    description: "Professional document scanner with AI-powered edge detection. Scan receipts, contracts, and documents instantly.",
    url: "https://getsolutions.app/apps/getscan",
    type: "website",
    images: [
      {
        url: "/appicons/getscan.png",
        width: 512,
        height: 512,
        alt: "GetScan App Icon"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "GetScan - AI Document Scanner App for Android",
    description: "Professional document scanner with AI-powered edge detection.",
    images: ["/appicons/getscan.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/getscan"
  }
};

export default function GetScanPage() {
  const app = apps.getscan;
  const relatedApps = [apps.getpdf, apps.getcompress, apps.getsecure];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
