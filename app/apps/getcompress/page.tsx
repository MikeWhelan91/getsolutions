import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetCompress - Image & Video Compressor for Android",
  description: "Reduce file sizes without quality loss. Compress images, videos, and PDFs with advanced algorithms. Save storage space and share files faster. Batch compression supported.",
  keywords: [
    "image compressor Android",
    "video compressor",
    "compress photos",
    "reduce file size",
    "PDF compressor",
    "GetCompress",
    "batch compression",
    "photo compression app",
    "save storage space"
  ],
  openGraph: {
    title: "GetCompress - Image & Video Compressor for Android",
    description: "Reduce file sizes without quality loss. Compress images, videos, and PDFs efficiently.",
    url: "https://getsolutions.app/apps/getcompress",
    type: "website",
    images: [
      {
        url: "/appicons/getcompress.png",
        width: 512,
        height: 512,
        alt: "GetCompress App Icon"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "GetCompress - Image & Video Compressor for Android",
    description: "Reduce file sizes without quality loss. Save storage space instantly.",
    images: ["/appicons/getcompress.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/getcompress"
  }
};

export default function GetCompressPage() {
  const app = apps.getcompress;
  const relatedApps = [apps.getpdf, apps.getscan, apps.getsecure];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
