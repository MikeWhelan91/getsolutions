import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetCompress - File Compression for Android",
  description: "Reduce file sizes without quality loss. Compress images, videos, and documents efficiently.",
};

export default function GetCompressPage() {
  const app = apps.getcompress;
  const relatedApps = [apps.getpdf, apps.getscan, apps.getsecure];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
