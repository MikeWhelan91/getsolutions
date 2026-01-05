import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetScan - Document Scanner for Android",
  description: "Professional document scanner with AI-powered edge detection. Transform your phone into a powerful scanner.",
};

export default function GetScanPage() {
  const app = apps.getscan;
  const relatedApps = [apps.getpdf, apps.getcompress, apps.getsecure];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
