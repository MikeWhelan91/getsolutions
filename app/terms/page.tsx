import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - GetSolutions",
  description: "Terms of service for GetSolutions apps and websites. Fair terms, no hidden traps, written in plain English.",
  openGraph: {
    title: "Terms of Service - GetSolutions",
    description: "Fair terms, no hidden traps, written in plain English.",
    url: "https://getsolutions.app/terms",
    type: "website"
  },
  alternates: {
    canonical: "https://getsolutions.app/terms"
  }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Last updated: January 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using GetSolutions apps (GetPDF, GetScan, GetCompress, GetSecure) or websites
              (GetPDF.me, GetSolutions.app), you agree to these terms. If you don't agree, please don't use our services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This isn't a trap—we're just covering the basics to protect both you and us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Provide</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GetSolutions provides utility apps and web tools for Android users. Our apps help you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Edit, merge, split, and manage PDF files</li>
              <li>Scan documents with your camera</li>
              <li>Compress images, videos, and documents</li>
              <li>Monitor and manage app permissions</li>
              <li>And other productivity features we add over time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">License and Usage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We grant you a personal, non-transferable, non-exclusive license to use our apps and services
              for your personal or internal business purposes. You may:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Install and use our apps on devices you own or control</li>
              <li>Process your own files and documents</li>
              <li>Use all features available in your version (free or paid)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Reverse engineer, decompile, or attempt to extract source code</li>
              <li>Remove or modify any copyright, trademark, or proprietary notices</li>
              <li>Use our apps for illegal purposes or to process illegal content</li>
              <li>Attempt to circumvent ads or payment systems through unauthorized means</li>
              <li>Resell, redistribute, or sublicense our apps</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Content and Data</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain all ownership rights to your files, documents, and content. We don't claim any rights
              to your data—it's yours.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You're responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>The legality of your content</li>
              <li>Having the right to process any files you use with our apps</li>
              <li>Backing up important files (we're not a cloud storage service)</li>
              <li>Complying with applicable laws when using our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Free vs. Paid Features</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some of our apps offer free versions with ads and optional paid upgrades. Here's the deal:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Free versions:</strong> Include lightweight ads to support development. Core features remain functional.</li>
              <li><strong>Paid upgrades:</strong> One-time purchases (where possible) to remove ads or unlock premium features. No sneaky auto-renewing subscriptions designed to trap you.</li>
              <li><strong>Refunds:</strong> Handled through Google Play Store's standard refund policy. We're not trying to make refunds impossible.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to keep our apps working smoothly, but we're a solo dev operation, so:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Apps may occasionally have bugs or downtime (we fix them as fast as we can)</li>
              <li>We may update or discontinue features with reasonable notice</li>
              <li>Web services (like GetPDF.me) may experience occasional outages</li>
              <li>We're not liable for data loss—please back up important files</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our apps are provided "as is" without warranties of any kind. We do our best to make them reliable,
              but we can't guarantee they'll always work perfectly or meet every specific need.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Translation: We work hard to make good software, but stuff happens. Use at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, GetSolutions and its developer are not liable for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Data loss or corruption</li>
              <li>Lost profits or business interruption</li>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Any damages beyond the amount you paid for the app (if anything)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some jurisdictions don't allow these limitations, so they may not apply to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates and Changes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update our apps and these terms from time to time. App updates are delivered through
              Google Play Store. Significant changes to these terms will be noted with a new "Last updated" date.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Continued use of our services after changes means you accept the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can stop using our apps at any time by uninstalling them. We may terminate or suspend
              access to our services if you violate these terms, though honestly, we'd rather just help you
              use the apps properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These terms are governed by the laws of your jurisdiction. Any disputes should be resolved
              through friendly discussion first, then formal legal channels if necessary.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questions about these terms? Reach out:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Email:</strong> support@getsolutions.app
            </p>
            <p className="text-gray-700 leading-relaxed">
              We're a small team (okay, one person), but we read every message and respond as quickly as possible.
            </p>
          </section>

          <section className="mb-8 bg-grass-50 border-2 border-grass-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Plain English Summary</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              These terms boil down to: Use our apps responsibly, don't try to break or steal them,
              and understand that while we work hard to make them great, we can't be held liable if
              something goes wrong.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We're not trying to trap you or hide gotchas in legal jargon. We built these apps to
              solve real problems, and we want you to use them with confidence.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="/" className="text-2xl font-bold mb-2 hover:text-grass-500 transition-colors">
                Get<span className="text-grass-600">Solutions</span>
              </a>
              <p className="text-gray-400">Building better Android apps.</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-400 text-sm mb-2">
                © 2026 GetSolutions. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="/privacy" className="text-gray-400 hover:text-grass-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-grass-500 transition-colors underline">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
