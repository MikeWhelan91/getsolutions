import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetSecure - Permission Guard & Privacy Manager for Android",
  description: "Monitor app permissions, scan on demand, and spot risky apps instantly. Lightweight permission manager with on-demand scans. No background services draining battery.",
  keywords: [
    "Android permission manager",
    "app permissions",
    "privacy manager Android",
    "GetSecure",
    "permission scanner",
    "privacy app",
    "app security Android",
    "permission monitoring",
    "risky app detector"
  ],
  openGraph: {
    title: "GetSecure - Permission Guard & Privacy Manager for Android",
    description: "Monitor app permissions, scan on demand, and spot risky apps instantly. Protect your privacy without babysitting another app.",
    url: "https://getsolutions.app/apps/getsecure",
    type: "website",
    images: [
      {
        url: "/appscreenshots/getsecure/banner.png",
        width: 1200,
        height: 630,
        alt: "GetSecure Permission Guard Banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GetSecure - Permission Guard & Privacy Manager for Android",
    description: "Monitor app permissions, scan on demand, spot risky apps instantly.",
    images: ["/appscreenshots/getsecure/banner.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/getsecure"
  }
};

export default function GetSecurePage() {
  const app = apps.getsecure;
  const relatedApps = [apps.getpdf, apps.getscan, apps.getcompress];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
