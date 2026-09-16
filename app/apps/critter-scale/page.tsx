import { Metadata } from "next";
import AppListing from "@/components/AppListing";
import { apps } from "@/types/app";

export const metadata: Metadata = {
  title: "Critter Scale - Cosy Physics Balancing Game for iPhone",
  description: "Steer falling critters onto two piles, keep the plank level to build a ×3 multiplier, and stop the water spilling in this cosy physics puzzle for iPhone.",
  keywords: [
    "Critter Scale",
    "balancing game",
    "physics puzzle game",
    "stacking game iPhone",
    "cosy puzzle game",
    "casual game iOS",
    "one thumb game",
    "Game Center leaderboard"
  ],
  openGraph: {
    title: "Critter Scale - Cosy Physics Balancing Game for iPhone",
    description: "Balance squishy critters on a plank, build your multiplier, and keep the flood from spilling.",
    url: "https://getsolutions.app/apps/critter-scale",
    type: "website",
    images: [
      {
        url: "/appicons/critterscale.png",
        width: 1200,
        height: 630,
        alt: "Critter Scale App Icon"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Critter Scale - Cosy Physics Balancing Game for iPhone",
    description: "Tap left, tap right, keep it level, and mind the water.",
    images: ["/appicons/critterscale.png"]
  },
  alternates: {
    canonical: "https://getsolutions.app/apps/critter-scale"
  }
};

export default function CritterScalePage() {
  const app = apps["critter-scale"];
  const relatedApps = [apps.linecheck, apps["smart-resume"], apps.getpdf, apps["getpdf-web"]];

  return <AppListing app={app} relatedApps={relatedApps} />;
}
