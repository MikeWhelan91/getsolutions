import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "LineCheck - AI hCG & LH Test Strip Reader for iPhone & Android",
  description: "Read hCG pregnancy and LH ovulation test strips with on-device AI on iPhone and Android. Saved scan history, side-by-side comparisons, LH trends, cycle tracking, and Luna guidance.",
  keywords: [
    "LineCheck",
    "hCG test reader",
    "LH test reader",
    "pregnancy test checker",
    "ovulation test tracker",
    "faint line reader",
    "pregnancy test reader app Android",
    "ovulation test app Android",
    "fertility app iOS",
    "cycle tracking iPhone",
    "AI test strip reader"
  ],
  openGraph: {
    title: "LineCheck - AI hCG & LH Test Strip Reader for iPhone & Android",
    description: "On-device AI reads hCG and LH test strips on iPhone and Android, with history, comparisons, calendar tracking, and reference-only guidance.",
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
    title: "LineCheck - AI hCG & LH Test Strip Reader for iPhone & Android",
    description: "Review faint lines, track LH trends, compare scans, and plan around cycle timing on iPhone and Android.",
    images: ["/appicons/linecheck.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/linecheck"
  }
};

export default function LineCheckPage() {
  const app = apps.linecheck;
  const relatedApps = [apps["smart-resume"], apps.getpdf, apps["getpdf-web"], apps["critter-scale"]];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
