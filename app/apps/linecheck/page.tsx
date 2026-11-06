import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "LineCheck: On-Device AI Pregnancy & LH Test Scanner",
  description: "Read pregnancy and LH ovulation tests with Luna Check’s on-device AI. No test-photo uploads. For iPhone, iPhone Duo, iPad and Android.",
  itunes: { appId: "6775990353" },
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
    title: "LineCheck — your phone reads your test lines",
    description: "Luna Check’s built-in AI reads pregnancy and LH ovulation tests. Photos stay on-device. Available on iPhone, iPhone Duo, iPad and Android.",
    url: "https://getsolutions.app/apps/linecheck",
    type: "website",
    images: [
      {
        url: "/apps/linecheck/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LineCheck on-device AI pregnancy and LH ovulation test scanner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "LineCheck — your phone reads your test lines",
    description: "Luna Check’s built-in AI reads pregnancy and LH ovulation tests. Photos stay on-device. Available on iPhone Duo too.",
    images: ["/apps/linecheck/opengraph-image"]
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
