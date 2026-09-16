import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "Kinu Tumble - Cosy Physics Stacking Game for iPhone",
  description: "Drop, nudge, and stack soft little Kinu into a box in this cosy 3D physics game, coming soon to iPhone.",
  keywords: [
    "Kinu Tumble",
    "physics stacking game",
    "tofu game",
    "cosy game iPhone",
    "cute puzzle game",
    "3D stacking game",
    "casual game iOS"
  ],
  openGraph: {
    title: "Kinu Tumble - Cosy Physics Stacking Game for iPhone",
    description: "How many Kinu will fit? Drag, spin, and drop them into the box without letting three tumble out.",
    url: "https://getsolutions.app/apps/kinu-tumble",
    type: "website",
    images: [
      {
        url: "/appicons/kinu-tumble.png",
        width: 1024,
        height: 1024,
        alt: "Kinu Tumble app icon"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinu Tumble - Coming Soon to iPhone",
    description: "Drop them in, nudge them together, and see how many Kinu you can fit.",
    images: ["/appicons/kinu-tumble.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/kinu-tumble"
  }
};

export default function KinuTumblePage() {
  const app = apps["kinu-tumble"];
  const relatedApps = [apps["critter-scale"], apps.linecheck, apps["smart-resume"], apps.getpdf];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
