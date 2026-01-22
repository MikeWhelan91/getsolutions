import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetSecure - Privacy Permission Scanner for Android",
  description: "Scan app permissions on demand and spot risky access instantly. Lightweight privacy dashboard with no background monitoring.",
  keywords: [
    "Android permission manager",
    "app permissions",
    "privacy manager Android",
    "GetSecure",
    "permission scanner",
    "privacy app",
    "app security Android",
    "risky app detector"
  ],
  openGraph: {
    title: "GetSecure - Privacy Permission Scanner for Android",
    description: "On-demand permission scans with a clear privacy dashboard and zero background drain.",
    url: "https://getsolutions.app/apps/getsecure",
    type: "website",
    images: [
      {
        url: "/appscreenshots/getsecure/banner.png",
        width: 1200,
        height: 630,
        alt: "GetSecure Feature Banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GetSecure - Privacy Permission Scanner for Android",
    description: "On-demand permission scans with a clear privacy dashboard.",
    images: ["/appscreenshots/getsecure/banner.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/getsecure"
  }
};

export default function GetSecurePage() {
  const app = apps.getsecure;
  const relatedApps = [apps.getpdf, apps.getscan, apps.getcompress, apps["smart-resume"]];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
