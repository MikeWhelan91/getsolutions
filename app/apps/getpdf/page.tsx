import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetPDF - Privacy-First PDF Editor for Android",
  description: "Edit, organize, scan, and convert PDFs on your device. No accounts, no forced uploads, and fast on-device tools.",
  keywords: [
    "PDF editor Android",
    "offline PDF editor",
    "free PDF app",
    "merge PDF Android",
    "split PDF",
    "compress PDF",
    "edit PDF offline",
    "privacy PDF editor",
    "GetPDF"
  ],
  openGraph: {
    title: "GetPDF - Privacy-First PDF Editor for Android",
    description: "Edit, organize, scan, and convert PDFs on your device with private, on-device tools.",
    url: "https://getsolutions.app/apps/getpdf",
    type: "website",
    images: [
      {
        url: "/appscreenshots/getpdfapp/banner.png",
        width: 1200,
        height: 630,
        alt: "GetPDF Feature Banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GetPDF - Privacy-First PDF Editor for Android",
    description: "Edit PDFs with private, on-device tools and no forced uploads.",
    images: ["/appscreenshots/getpdfapp/banner.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/getpdf"
  }
};

export default function GetPDFPage() {
  const app = apps.getpdf;
  const relatedApps = [apps.getscan, apps.getcompress, apps.getsecure, apps["smart-resume"]];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
