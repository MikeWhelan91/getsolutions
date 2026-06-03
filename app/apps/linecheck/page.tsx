import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "LineCheck - AI hCG & LH Test Strip Reader for iOS",
  description: "Review hCG and LH test strips with AI-assisted line reads, saved scan history, comparisons, cycle tracking, and iPhone-only guidance.",
  keywords: [
    "LineCheck",
    "hCG test reader",
    "LH test reader",
    "pregnancy test checker",
    "ovulation test tracker",
    "faint line reader",
    "fertility app iOS",
    "cycle tracking iPhone",
    "AI test strip reader"
  ],
  openGraph: {
    title: "LineCheck - AI hCG & LH Test Strip Reader for iOS",
    description: "AI-assisted hCG and LH strip review with history, comparisons, calendar tracking, and reference-only guidance.",
    url: "https://getsolutions.app/apps/linecheck",
    type: "website",
    images: [
      {
        url: "/appicons/linecheck.png",
        width: 1200,
        height: 630,
        alt: "LineCheck App Icon"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "LineCheck - AI hCG & LH Test Strip Reader for iOS",
    description: "Review faint lines, track LH trends, compare scans, and plan around cycle timing.",
    images: ["/appicons/linecheck.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/linecheck"
  }
};

export default function LineCheckPage() {
  const app = apps.linecheck;
  const relatedApps = [apps.firstly, apps["smart-resume"], apps.getpdf, apps.getscan];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
