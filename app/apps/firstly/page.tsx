import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "Firstly - AI Dating Coach for iOS",
  description: "Get smart openers, chat analysis, and confidence-boosting reply ideas to keep conversations moving.",
  keywords: [
    "AI dating coach",
    "dating opener",
    "chat analysis",
    "conversation coaching",
    "dating app tips",
    "Firstly"
  ],
  openGraph: {
    title: "Firstly - AI Dating Coach for iOS",
    description: "Upload screenshots to get openers, chat insights, and next-message suggestions with privacy in mind.",
    url: "https://getsolutions.app/apps/firstly",
    type: "website",
    images: [
      {
        url: "/appicons/firstly.png",
        width: 1200,
        height: 630,
        alt: "Firstly App Icon"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Firstly - AI Dating Coach for iOS",
    description: "Smart openers, chat analysis, and compatibility insights for better dating conversations.",
    images: ["/appicons/firstly.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/firstly"
  }
};

export default function FirstlyPage() {
  const app = apps.firstly;
  const relatedApps = [apps["smart-resume"], apps.getpdf, apps.getscan, apps.getcompress];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
