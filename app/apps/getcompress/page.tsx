import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetCompress - PDF & Image Compressor for Android",
  description: "Compress PDFs and images directly on your device. Adjust quality with a simple slider or advanced controls, all offline with zero uploads.",
  keywords: [
    "image compressor Android",
    "PDF compressor",
    "compress photos",
    "reduce file size",
    "GetCompress",
    "offline compression",
    "photo compression app",
    "save storage space"
  ],
  openGraph: {
    title: "GetCompress - PDF & Image Compressor for Android",
    description: "Compress PDFs and images locally with no uploads and easy quality controls.",
    url: "https://getsolutions.app/apps/getcompress",
    type: "website",
    images: [
      {
        url: "/appscreenshots/getcompress/banner.png",
        width: 1200,
        height: 630,
        alt: "GetCompress Feature Banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GetCompress - PDF & Image Compressor for Android",
    description: "Compress PDFs and images locally with simple, private controls.",
    images: ["/appscreenshots/getcompress/banner.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/getcompress"
  }
};

export default function GetCompressPage() {
  const app = apps.getcompress;
  const relatedApps = [apps.getpdf, apps.getscan, apps.getsecure, apps["smart-resume"]];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
