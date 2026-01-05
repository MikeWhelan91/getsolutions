import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetSecure - File Encryption for Android",
  description: "Military-grade encryption for your sensitive files. Keep your private data truly private.",
};

export default function GetSecurePage() {
  const app = apps.getsecure;
  const relatedApps = [apps.getpdf, apps.getscan, apps.getcompress];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
