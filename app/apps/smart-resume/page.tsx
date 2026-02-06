import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "Smart Resume - AI Resume & Cover Letter Builder for Android & iOS",
  description: "Create tailored resumes and cover letters with AI guidance, ATS checks, and polished templates. Export ready-to-send PDFs in minutes.",
  keywords: [
    "AI resume builder",
    "resume builder iOS",
    "resume builder Android",
    "cover letter generator",
    "ATS resume check",
    "resume templates",
    "Smart Resume",
    "resume PDF export",
    "job application tools",
    "CV builder"
  ],
  openGraph: {
    title: "Smart Resume - AI Resume & Cover Letter Builder for Android & iOS",
    description: "Build resumes and cover letters fast with AI guidance, ATS checks, and clean templates.",
    url: "https://getsolutions.app/apps/smart-resume",
    type: "website",
    images: [
      {
        url: "/appscreenshots/resume/banner.png",
        width: 1200,
        height: 630,
        alt: "Smart Resume Feature Banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Resume - AI Resume & Cover Letter Builder for Android & iOS",
    description: "Build resumes and cover letters fast with AI guidance and ATS checks.",
    images: ["/appscreenshots/resume/banner.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/smart-resume"
  }
};

export default function SmartResumePage() {
  const app = apps["smart-resume"];
  const relatedApps = [apps.getpdf, apps.getscan, apps.getcompress, apps.getsecure];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
