import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact GetSolutions",
  description: "Contact GetSolutions for product questions, support, or partnerships. Email info@getsolutions.app.",
  openGraph: {
    title: "Contact GetSolutions",
    description: "Reach the GetSolutions team for product questions, support, or partnerships.",
    url: "https://getsolutions.app/contact",
    type: "website"
  },
  alternates: {
    canonical: "https://getsolutions.app/contact"
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
          <div>
            <h1 className="text-5xl font-semibold leading-none tracking-tight text-neutral-950 sm:text-6xl">
              Contact GetSolutions
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Questions about an app, a store listing, support, or partnerships can go straight to email.
            </p>
          </div>

          <div className="border border-neutral-200 bg-[#f7f6f3] p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">Email</p>
            <a
              href="mailto:info@getsolutions.app"
              className="mt-4 block break-words text-3xl font-semibold tracking-tight text-[#9b5614] transition-colors hover:text-neutral-950 sm:text-4xl"
            >
              info@getsolutions.app
            </a>
            <p className="mt-6 text-sm leading-6 text-neutral-600">
              Include the app name in the subject line if it is a support request. A screenshot, device model, and short description will make the issue easier to track down.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 sm:px-8 md:flex-row md:items-center lg:px-10">
          <p className="text-neutral-600">Want to look through the product pages first?</p>
          <Link
            href="/#apps"
            className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Back to apps
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
