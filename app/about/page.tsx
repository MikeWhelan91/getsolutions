import { Metadata } from "next";
import Link from "next/link";

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
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          We build tools that solve problems, not create them.
        </h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          GetSolutions exists because utility apps became bloated, spammy, and overpriced. Too many apps hide
          basic features behind aggressive subscriptions, bury you in ads, or move your files to the cloud just to
          monetize your data. We think that is backwards.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What we stand for</h2>
            <p className="text-gray-700 leading-relaxed">
              Clear pricing, local-first workflows, and honest feature lists. Our apps focus on the core job and
              get you back to what you were doing. No manipulative funnels. No surprise upsells.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why we build this way</h2>
            <p className="text-gray-700 leading-relaxed">
              We are building a suite of tools that feel trustworthy: GetPDF for editing, GetScan for quick capture,
              GetCompress for clean file sizes, GetSecure for permission clarity, and Smart Resume for faster
              job applications. Each product is a response to the frustrating patterns we see in crowded app stores.
            </p>
          </section>

          <section className="bg-grass-50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">The promise</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Build useful features without locking basics behind subscriptions.</li>
              <li>• Keep files on your device whenever possible.</li>
              <li>• Ship clean, predictable interfaces that do not waste time.</li>
              <li>• Make upgrades optional, not coercive.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What is next</h2>
            <p className="text-gray-700 leading-relaxed">
              We are continuously refining every app in the lineup while expanding the suite to cover more everyday
              tasks. If you want to see what is shipping now, start with the apps page.
            </p>
            <Link
              href="/#apps"
              className="inline-flex mt-6 items-center justify-center rounded-lg bg-grass-600 px-6 py-3 text-white font-semibold hover:bg-grass-500 transition-colors"
            >
              Browse the apps
            </Link>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
