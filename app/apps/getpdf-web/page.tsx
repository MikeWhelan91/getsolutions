import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "GetPDF.me - Browser-Based PDF Editor",
  description: "Edit PDFs in your browser. Zero uploads. Zero risk. Complete privacy guaranteed.",
};

export default function GetPDFWebPage() {
  const app = apps["getpdf-web"];
  const relatedApps = [apps.getpdf, apps.getscan, apps.getcompress];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
