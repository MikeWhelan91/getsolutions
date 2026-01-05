import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetPDF - Free Offline PDF Editor for Android",
  description: "Edit PDFs offline with complete privacy. Merge, split, compress, and annotate PDFs on your Android device. No uploads, no cloud, zero risk. 100% free PDF editor.",
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
    title: "GetPDF - Free Offline PDF Editor for Android",
    description: "Edit PDFs offline with complete privacy. Merge, split, compress, and annotate PDFs on your Android device.",
    url: "https://getsolutions.app/apps/getpdf",
    type: "website",
    images: [
      {
        url: "/appicons/getpdf.png",
        width: 512,
        height: 512,
        alt: "GetPDF App Icon"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "GetPDF - Free Offline PDF Editor for Android",
    description: "Edit PDFs offline with complete privacy. No uploads, no cloud, zero risk.",
    images: ["/appicons/getpdf.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/getpdf"
  }
};

export default function GetPDFPage() {
  const app = apps.getpdf;
  const relatedApps = [apps.getscan, apps.getcompress, apps.getsecure];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
