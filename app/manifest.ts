import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GetSolutions",
    short_name: "GetSolutions",
    description:
      "Apps and games for iPhone, Android, and the web, including GetPDF, Smart Resume, LineCheck, Critter Scale, and Kinu Tumble.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111827",
    lang: "en",
    orientation: "portrait-primary",
    categories: ["productivity", "utilities"],
    icons: [
      {
        src: "/getsolutions-favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/appicons/resume.png",
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
        name: "Smart Resume",
        url: "/apps/smart-resume",
        description: "Build resumes and cover letters",
      },
    ],
  };
}
