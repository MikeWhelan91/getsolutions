import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetPDF.me - Free Online PDF Editor | Zero Uploads, Complete Privacy",
  description: "Edit PDFs in your browser with zero uploads. Merge, split, compress PDFs entirely client-side. Complete privacy - files never touch our servers. Works offline after first load.",
  keywords: [
    "online PDF editor",
    "free PDF editor",
    "browser PDF editor",
    "client-side PDF",
    "privacy PDF editor online",
    "GetPDF.me",
    "merge PDF online",
    "split PDF online",
    "compress PDF online",
    "no upload PDF editor"
  ],
  openGraph: {
    title: "GetPDF.me - Free Online PDF Editor | Zero Uploads",
    description: "Edit PDFs in your browser with complete privacy. Files never touch our servers - everything happens client-side.",
    url: "https://getsolutions.app/apps/getpdf-web",
    type: "website",
    images: [
      {
        url: "/appicons/getpdf.png",
        width: 512,
        height: 512,
        alt: "GetPDF.me Icon"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "GetPDF.me - Free Online PDF Editor | Zero Uploads",
    description: "Edit PDFs in your browser. Zero uploads. Zero risk. Complete privacy.",
    images: ["/appicons/getpdf.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/getpdf-web"
  }
};

export default function GetPDFWebPage() {
  const app = apps["getpdf-web"];
  const relatedApps = [apps.getpdf, apps.getscan, apps.getcompress, apps["smart-resume"]];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
