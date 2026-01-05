import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - GetSolutions",
  description: "Privacy policy for GetSolutions apps and websites.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Last updated: January 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GetSolutions is built by a solo developer who believes your data is yours, not ours.
              This privacy policy applies to all GetSolutions apps (GetPDF, GetScan, GetCompress, GetSecure)
              and websites (including GetPDF.me and GetSolutions.app).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We DON'T Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We don't collect, store, or transmit your personal data. Specifically:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>We don't collect your files, documents, photos, or any content you process</li>
              <li>We don't track your location</li>
              <li>We don't collect your contacts, messages, or call logs</li>
              <li>We don't build profiles about you</li>
              <li>We don't sell your data to anyone (because we don't have any)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Our Apps Work</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our apps process everything locally on your device. When you edit a PDF, scan a document,
              compress a file, or check app permissions, all of that happens entirely on your phone or in your browser.
              Your files never leave your device unless you explicitly choose to share them using your device's
              standard sharing features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do Collect (The Bare Minimum)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To keep the lights on and improve our apps, we collect minimal, anonymous data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Crash reports:</strong> If an app crashes, Android may send us anonymous crash logs so we can fix bugs. These don't contain your personal data or file contents.</li>
              <li><strong>Basic analytics:</strong> We may collect anonymous usage statistics (like which features are used most) through Google Play Services. This helps us understand what to improve.</li>
              <li><strong>Ad interactions:</strong> Some apps show lightweight ads. Ad providers may collect anonymous data about ad views and clicks. We use reputable ad networks that comply with privacy regulations.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our apps may use these third-party services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Google Play Services:</strong> For app distribution, crash reporting, and basic analytics</li>
              <li><strong>Ad Networks:</strong> For displaying lightweight ads in free versions of our apps</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              These services have their own privacy policies. We choose providers that respect user privacy,
              but we recommend reviewing their policies if you're concerned.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">App Permissions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our apps only request permissions necessary for their core functionality:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Storage/Files:</strong> To read and save documents you're working with</li>
              <li><strong>Camera:</strong> (GetScan only) To capture document photos</li>
              <li><strong>Internet:</strong> Only for displaying ads or downloading app updates, never for uploading your data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              We never access permissions for unrelated purposes. If an app doesn't need your camera, it won't ask for it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our apps and services are not directed at children under 13. We don't knowingly collect
              information from children. If you're a parent and believe your child has provided us with
              information, please contact us and we'll delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since we don't collect or store your personal data, there's no central database to breach.
              Your files and data stay on your device, protected by your device's security features.
              We recommend using device encryption and screen locks for maximum security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since we don't collect your personal data, there's nothing for us to access, modify, or delete.
              You have complete control over your data because it never leaves your device.
              You can uninstall our apps at any time, and all local data will be removed according to
              your device's standard app data handling.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this privacy policy occasionally to reflect changes in our practices or legal requirements.
              We'll update the "Last updated" date at the top. Significant changes will be announced in app updates
              or on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this privacy policy or our privacy practices, you can reach us at:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Email:</strong> privacy@getsolutions.app
            </p>
            <p className="text-gray-700 leading-relaxed">
              We're a small operation (solo dev!), so responses might take a few days, but we read every message.
            </p>
          </section>

          <section className="mb-8 bg-grass-50 border-2 border-grass-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <p className="text-gray-700 leading-relaxed">
              We built GetSolutions because we were frustrated with apps that treat users like products.
              Your files are yours, your privacy is yours, and we have no interest in either.
              We make money through lightweight ads and optional upgrades, not by hoarding your data.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-6xl px-6">
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
                <a href="/privacy" className="text-gray-400 hover:text-grass-500 transition-colors underline">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-grass-500 transition-colors">
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
