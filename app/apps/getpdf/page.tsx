import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetPDF - Offline PDF Editor for Android",
  description: "Edit PDFs offline with complete privacy. Professional PDF editing on your Android device.",
};

export default function GetPDFPage() {
  const app = apps.getpdf;
  const relatedApps = [apps.getscan, apps.getcompress, apps.getsecure];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
