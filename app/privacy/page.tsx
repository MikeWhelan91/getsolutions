import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - GetSolutions",
  description:
    "Privacy policy for GetSolutions apps and websites, including LineCheck. Covers local processing, optional AI features, ads, purchases, and support.",
  openGraph: {
    title: "Privacy Policy - GetSolutions",
    description:
      "Privacy policy for GetSolutions apps and websites, including LineCheck.",
    url: "https://getsolutions.app/privacy",
    type: "website"
  },
  alternates: {
    canonical: "https://getsolutions.app/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Last updated: June 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GetSolutions builds utility apps and websites with a bias toward local processing and restrained data
              collection. This policy applies to GetSolutions apps and websites, including GetPDF, GetScan,
              GetCompress, GetSecure, Smart Resume, Firstly, LineCheck, GetPDF.me, and GetSolutions.app.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Different apps use different data flows. Many features run entirely on-device or in-browser. Some
              optional features, especially AI-assisted features, require information to be sent to our service
              providers so the feature can work.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect only the information needed to run the product you choose to use. Depending on the app and
              feature, that may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Content you choose to process:</strong> such as files, screenshots, photos, or text submitted to an optional feature.</li>
              <li><strong>Purchase and entitlement status:</strong> to unlock paid features and restore purchases.</li>
              <li><strong>Basic technical and usage information:</strong> such as crash data, diagnostics, app launches, ad interactions, and feature usage where analytics or ad services are enabled.</li>
              <li><strong>Support communications:</strong> if you email us for help.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Stays Local</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many GetSolutions features are designed to stay on your device or in your browser. Examples include
              document editing, local file manipulation, image enhancement, scanning workflows, and other utilities
              that do not need a server round-trip to function.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Where a feature is local-only, we do not upload that content to our servers just to process it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">LineCheck-Specific Privacy Details</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LineCheck includes both local features and optional AI-assisted features. Most saved scan history,
              reminders, notes, and images are stored locally on the device unless you use a feature that requires
              remote processing.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Local storage:</strong> test photos, thumbnails, notes, scan history, reminders, and calendar-related settings are generally stored on-device.</li>
              <li><strong>AI test reads:</strong> if you choose an AI-assisted read, LineCheck may send the selected test photo, enhanced helper variants, test type, limited cycle context, recent reading context, and a pseudonymous safety identifier to our processing providers so the feature can work.</li>
              <li><strong>Luna chat and AI comparisons:</strong> if you use the in-app assistant or AI comparison features, LineCheck may send your message, recent scan context, reminder context, user-entered notes, cycle context, and the same pseudonymous safety identifier.</li>
              <li><strong>Ads:</strong> free tiers may display ads. Ad providers may collect device- or ad-related data needed to deliver and measure those ads.</li>
              <li><strong>Purchases:</strong> purchase status is used to unlock Pro features and restore entitlements.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              LineCheck deals with sensitive reproductive-health-related information. We do not use that sensitive
              information for cross-app tracking. We use it only to provide the feature you chose to run.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Features Across Our Apps</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some GetSolutions apps offer optional AI features. When you use them, the content you submit and the
              minimum related context required for the feature may be sent to third-party AI or hosting providers for
              processing. We use those providers to return the requested result to you.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not treat optional AI features as blanket permission to collect unrelated personal data. The data
              sent should stay tied to the feature you intentionally invoked.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on the app and feature, we may use third-party services such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Apple App Store and Google Play:</strong> app distribution, updates, subscriptions, and purchase handling.</li>
              <li><strong>Cloud hosting and API providers:</strong> to support optional online and AI-assisted features.</li>
              <li><strong>Ad networks:</strong> for free tiers that show ads.</li>
              <li><strong>Analytics or diagnostics tools:</strong> where enabled to understand stability and product usage.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              These providers operate under their own privacy policies. We try to use providers that are fit for the
              purpose and avoid collecting more than the feature needs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Permissions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our apps may request permissions such as camera, photos, notifications, biometrics, storage, or
              internet access when those permissions are needed for the app’s actual workflow. We do not ask for
              unrelated permissions just because we can.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Local-only data stays on your device until you delete it, uninstall the app, or your device clears it.
              Server-side retention depends on the feature and provider involved. Where a feature is intended to be
              transient, we aim to keep retention limited to what is reasonably necessary to complete the request,
              secure the service, enforce entitlements, and debug operational issues.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our apps and services are not directed to children under 13, and we do not knowingly collect personal
              information from children. If you believe a child has provided us information, contact us and we will
              review the request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use reasonable technical and organizational measures appropriate to the size of the business and the
              nature of the product. No service can promise perfect security, but we do try to keep the data path as
              narrow as possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Choices and Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can often avoid remote processing entirely by using local-only features, declining optional
              permissions, or not using optional AI features. You may also uninstall an app, delete local content,
              or contact us about privacy questions or requests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this policy as our apps, providers, or legal obligations change. When we do, we will
              update the date above and publish the revised version here.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questions about this privacy policy or our privacy practices can be sent to:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Email:</strong> info@getsolutions.app
            </p>
          </section>

          <section className="mb-8 bg-grass-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Plain-English Summary</h3>
            <p className="text-gray-700 leading-relaxed">
              Most of our products try to keep work local. Some optional features, especially AI features, need data
              to be sent out so they can function. For LineCheck specifically, local tracking data usually stays on
              the device, while optional AI reads and assistant features send the photo, message, and related context
              needed to answer the request.
            </p>
          </section>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="/" className="text-2xl font-bold mb-2 hover:text-grass-500 transition-colors">
                Get<span className="text-grass-600">Solutions</span>
              </a>
              <p className="text-gray-400">Building better apps.</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-400 text-sm mb-2">
                © 2026 GetSolutions. All rights reserved.
              </p>
              <div className="flex gap-6 flex-wrap justify-center md:justify-end">
                <a href="/privacy" className="text-gray-400 hover:text-grass-500 transition-colors underline">
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
