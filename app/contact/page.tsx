import { Metadata } from "next";
import Link from "next/link";

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
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <div className="mx-auto max-w-4xl px-6 py-20 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Contact GetSolutions
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Questions about our apps, partnerships, or support? Email us and we will reply as soon as we can.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <h2 className="text-xl font-bold text-gray-900">Email</h2>
            <a
              href="mailto:info@getsolutions.app"
              className="text-lg font-semibold text-grass-600 hover:text-grass-500 transition-colors"
            >
              info@getsolutions.app
            </a>
          </div>
          <p className="text-gray-600 mt-4">
            We read every message. Please include the app name in the subject line if it is a support request.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-grass-600 px-6 py-3 text-white font-semibold hover:bg-grass-500 transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <Link href="/" className="text-2xl font-bold mb-2 hover:text-grass-500 transition-colors">
                Get<span className="text-grass-600">Solutions</span>
              </Link>
              <p className="text-gray-400">Building better apps.</p>
            </div>

            <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
              <p className="text-gray-400 text-sm">
                © 2026 GetSolutions. All rights reserved.
              </p>
              <div className="flex gap-6 flex-wrap justify-center md:justify-end">
                <a href="/privacy" className="text-gray-400 hover:text-grass-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-grass-500 transition-colors">
                  Terms of Service
                </a>
                <a href="/contact" className="text-gray-400 hover:text-grass-500 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
