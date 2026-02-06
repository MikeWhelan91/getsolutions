import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GetSolutions",
    short_name: "GetSolutions",
    description:
      "Privacy-first utilities for Android and iOS including GetPDF, GetScan, GetCompress, GetSecure, Smart Resume, and Firstly.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#16a34a",
    lang: "en",
    orientation: "portrait-primary",
    categories: ["productivity", "utilities"],
    icons: [
      {
        src: "/appicons/getpdf.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/appicons/getscan.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/appicons/getcompress.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/appicons/getsecure.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/appicons/resume.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/appicons/firstly.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "GetPDF",
        url: "/apps/getpdf",
        description: "Open the offline PDF editor",
      },
      {
        name: "GetScan",
        url: "/apps/getscan",
        description: "Jump to the AI document scanner",
      },
      {
        name: "GetCompress",
        url: "/apps/getcompress",
        description: "Compress images, videos, and PDFs",
      },
      {
        name: "GetSecure",
        url: "/apps/getsecure",
        description: "Review Android permissions",
      },
      {
        name: "Smart Resume",
        url: "/apps/smart-resume",
        description: "Build resumes and cover letters",
      },
      {
        name: "Firstly",
        url: "/apps/firstly",
        description: "AI dating coach for better conversations",
      },
    ],
  };
}
