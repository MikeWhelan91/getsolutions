import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About GetSolutions - Built to Fix Spammy, Overpriced Apps",
  description: "GetSolutions builds focused tools that respect users. No spammy upsells, no bloated subscriptions, just clean utility apps that solve real problems.",
  openGraph: {
    title: "About GetSolutions - Built to Fix Spammy, Overpriced Apps",
    description: "We build practical tools that stay out of your way. Privacy-first, fairly priced, and intentionally designed.",
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
            Built against bloated utility software.
          </h1>
          <div className="max-w-3xl">
            <p className="text-xl leading-8 text-neutral-700">
              GetSolutions exists because everyday utility apps became noisy, restrictive, and overpriced. The goal is simple: build tools that do the job clearly, price them fairly, and avoid wasting people’s time.
            </p>
            <p className="mt-6 text-base leading-7 text-neutral-600">
              The suite covers PDF editing, scanning, compression, privacy checks, resumes, dating support, and test tracking. Different products need different technology, but the standard is consistent: practical workflows, honest limits, and interfaces that stay out of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f3] py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ["Clear by default", "No vague feature lists or fake productivity theater. Each app is built around a concrete job."],
              ["Fair upgrades", "Paid features should feel optional and understandable, not like traps around basic functionality."],
              ["Local where possible", "Files and private content should stay on-device or in-browser whenever the product can support it."]
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
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">See what is shipping now.</h2>
            <p className="mt-3 text-neutral-600">Browse the full app lineup and open the product pages.</p>
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
