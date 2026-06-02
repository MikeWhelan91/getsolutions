import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - GetSolutions",
  description:
    "Terms of service for GetSolutions apps and websites, including LineCheck. Covers subscriptions, AI features, acceptable use, and medical disclaimers where relevant.",
  openGraph: {
    title: "Terms of Service - GetSolutions",
    description:
      "Terms of service for GetSolutions apps and websites, including LineCheck.",
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
          Last updated: June 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to These Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using GetSolutions apps and websites, including GetPDF, GetScan, GetCompress, GetSecure,
              Smart Resume, Firstly, LineCheck, GetPDF.me, and GetSolutions.app, you agree to these terms.
              If you do not agree, do not use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Provide</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GetSolutions provides software tools for document workflows, productivity, privacy utilities, AI-assisted
              features, and related services. Features vary by app and may change over time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">License and Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We grant you a personal, limited, non-exclusive, non-transferable license to use our apps and services
              for lawful personal or internal business use.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Reverse engineer, decompile, or attempt to extract source code except where the law expressly allows it.</li>
              <li>Use the service to violate law, infringe rights, or process unlawful content.</li>
              <li>Attempt to interfere with payment, ad, entitlement, or security systems.</li>
              <li>Resell, sublicense, or redistribute the service unless we separately agree in writing.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Content</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You keep ownership of the content you submit, create, edit, or process through our products. You are
              responsible for making sure you have the right to use that content and for keeping your own backups where
              appropriate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Features</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some apps include optional AI-assisted features. By choosing to use them, you authorize us and our
              service providers to process the content and related context required to generate the requested result.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              AI output can be incomplete, inaccurate, or inappropriate for your specific situation. You should use
              judgment and not rely on AI output as a substitute for professional advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">LineCheck-Specific Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LineCheck is intended to help users capture, organize, compare, and interpret home pregnancy and LH test
              photos. It is not a medical device, does not provide medical diagnosis, and is not a substitute for a
              doctor, clinic, or laboratory test.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Local tools, reminders, saved history, and image adjustments are provided for personal reference.</li>
              <li>AI-assisted reads, comparisons, and assistant guidance are informational only and may be wrong.</li>
              <li>You are responsible for following the instructions for your test brand and seeking medical advice where appropriate.</li>
              <li>You must not use LineCheck for emergency decision-making or as the sole basis for medical decisions.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Features, Ads, and Paid Upgrades</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some apps offer free tiers, ad-supported experiences, one-time purchases, subscriptions, or a mix of
              those models.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Free tiers:</strong> may include ads, usage limits, or restricted premium features.</li>
              <li><strong>Paid upgrades:</strong> may unlock subscriptions, premium AI usage, ad removal, additional export limits, or other app-specific features.</li>
              <li><strong>Billing:</strong> app-store purchases are handled by Apple or Google under their billing terms.</li>
              <li><strong>Refunds:</strong> refund requests are generally handled through the platform you purchased from unless local law requires otherwise.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Availability and Changes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may add, remove, suspend, or change features, limits, providers, or pricing. We try to keep the
              service working, but we do not guarantee uninterrupted availability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The service is provided "as is" and "as available" to the maximum extent allowed by law. We do not
              promise that every feature will be error-free, uninterrupted, or suitable for every purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, GetSolutions is not liable for indirect, incidental, special,
              consequential, or punitive damages, or for loss of data, profits, goodwill, or business interruption.
              Where liability cannot be excluded, it is limited to the amount you paid for the relevant product or
              service in the 12 months before the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may stop using the service at any time. We may suspend or terminate access where reasonably necessary,
              including for abuse, fraud, unlawful use, or serious violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update these terms from time to time. When we do, we will update the date at the top of this
              page. Continued use after changes means you accept the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questions about these terms can be sent to:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Email:</strong> support@getsolutions.app
            </p>
          </section>

          <section className="mb-8 bg-grass-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Plain-English Summary</h3>
            <p className="text-gray-700 leading-relaxed">
              Use the apps lawfully, keep backups of important content, understand that optional AI features can be
              wrong, and do not treat LineCheck as medical advice or diagnosis.
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
                <a href="/privacy" className="text-gray-400 hover:text-grass-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-grass-500 transition-colors underline">
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
