import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About GetSolutions - Apps and Games for iPhone, Android, and Web",
  description: "GetSolutions makes apps and games for iPhone, Android, and the web, including GetPDF, Smart Resume, LineCheck, and Critter Scale.",
  openGraph: {
    title: "About GetSolutions - Apps and Games for iPhone, Android, and Web",
    description: "Apps and games for iPhone, Android, and the web, including GetPDF, Smart Resume, LineCheck, and Critter Scale.",
    url: "https://getsolutions.app/about",
    type: "website"
  },
  alternates: {
    canonical: "https://getsolutions.app/about"
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-24">
          <h1 className="text-5xl font-semibold leading-none tracking-tight text-neutral-950 sm:text-6xl">
            About GetSolutions
          </h1>
          <div className="max-w-3xl">
            <p className="text-xl leading-8 text-neutral-700">
              GetSolutions makes apps and games for iPhone, Android, and the web.
            </p>
            <p className="mt-6 text-base leading-7 text-neutral-600">
              The lineup covers PDF editing with GetPDF and GetPDF.me, resumes and cover letters with Smart Resume, pregnancy and ovulation test tracking with LineCheck, and Critter Scale, a physics balancing game.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f3] py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ["Documents and files", "GetPDF and GetPDF.me edit, organize, and convert PDFs, with most tools running on your device."],
              ["Everyday help", "Smart Resume builds resumes and cover letters, while LineCheck reads and tracks test strips."],
              ["Games", "Critter Scale is a cosy physics puzzle about balancing squishy critters on a plank without letting the water spill."]
            ].map(([title, body]) => (
              <div key={title} className="border-t border-neutral-300 pt-5">
                <h2 className="text-xl font-semibold tracking-tight text-neutral-950">{title}</h2>
                <p className="mt-4 text-sm leading-6 text-neutral-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center lg:px-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">Browse the apps.</h2>
            <p className="mt-3 text-neutral-600">Screenshots, features, and download links for every GetSolutions app.</p>
          </div>
          <Link
            href="/#apps"
            className="inline-flex h-12 items-center justify-center rounded-md bg-[#c46f19] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#a85e15]"
          >
            Browse apps
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
