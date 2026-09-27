import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - GetSolutions",
  description:
    "Privacy policy for GetSolutions apps and websites, including LineCheck, Critter Scale, and Kinu Tumble. Covers local processing, Apple Health, optional AI features, ads, purchases, game services, and support.",
  openGraph: {
    title: "Privacy Policy - GetSolutions",
    description:
      "Privacy policy for GetSolutions apps and websites, including LineCheck, Critter Scale, and Kinu Tumble.",
    url: "https://getsolutions.app/privacy",
    type: "website"
  },
  alternates: {
    canonical: "https://getsolutions.app/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-950 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-500 mb-12">
          Last updated: September 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">Overview</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              GetSolutions builds utility apps and websites with a bias toward local processing and restrained data
              collection. This policy applies to GetSolutions apps and websites, including GetPDF, Smart Resume,
              LineCheck, Critter Scale, Kinu Tumble, GetPDF.me, and GetSolutions.app.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Different apps use different data flows. Many features run entirely on-device or in-browser. Some
              optional features, especially AI-assisted features, require information to be sent to our service
              providers so the feature can work.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">What We Collect</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We collect only the information needed to run the product you choose to use. Depending on the app and
              feature, that may include:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
              <li><strong>Content you choose to process:</strong> such as files, screenshots, photos, or text submitted to an optional feature.</li>
              <li><strong>Purchase and entitlement status:</strong> to unlock paid features and restore purchases.</li>
              <li><strong>Basic technical and usage information:</strong> such as crash data, diagnostics, app launches, ad interactions, and feature usage where analytics or ad services are enabled.</li>
              <li><strong>Support communications:</strong> if you email us for help.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">What Stays Local</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Many GetSolutions features are designed to stay on your device or in your browser. Examples include
              document editing, local file manipulation, image enhancement, scanning workflows, and other utilities
              that do not need a server round-trip to function.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Where a feature is local-only, we do not upload that content to our servers just to process it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">LineCheck-Specific Privacy Details</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              LineCheck includes both local features and optional AI-assisted features. Most saved scan history,
              reminders, notes, and images are stored locally on the device unless you use a feature that requires
              remote processing.
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
              <li><strong>Local storage:</strong> test photos, thumbnails, notes, scan history, reminders, cycle and daily logs, and calendar-related settings are generally stored on-device.</li>
              <li><strong>iCloud sync:</strong> if iCloud is enabled on your device, LineCheck syncs your data through your own private iCloud database so it is available on your other devices. This is handled by Apple, and we cannot access it.</li>
              <li><strong>About you:</strong> details you choose to add, such as your name, age, height, weight, cycle details, reproductive-health conditions, contraception, and supplements, are stored on your device and used to tailor predictions and explanations.</li>
              <li><strong>Apple Health:</strong> if you connect Apple Health, LineCheck reads only the types you allow: menstrual flow and spotting, basal body temperature, Apple Watch wrist temperature, cervical mucus, sexual activity, ovulation, pregnancy, and progesterone test results, cycle-related symptoms, contraception, pregnancy and lactation status, sleep, resting heart rate, heart rate variability, steps, walking and running distance, active energy, exercise time, workouts, height, weight, water, and date of birth. It can also save the temperature, weight, and water you log in LineCheck back to Apple Health. Apple Health data is processed on your device to power your calendar, predictions, and insights.</li>
              <li><strong>Test reads:</strong> pregnancy and ovulation test photos are read on your device by LineCheck's on-device model and local analysis. The photo is not uploaded to read it. The only exception is the optional "look again" second opinion: if you disagree with a result and ask Luna to look again, LineCheck sends that test photo, enhanced helper variants, the test type, your stated opinion, limited cycle and recent reading context, and a pseudonymous safety identifier to our AI provider to return a second reading.</li>
              <li><strong>Luna chat, weekly updates, and AI comparisons:</strong> if you use the in-app assistant, Luna's explanations, or AI comparison features, LineCheck may send your message, your first name, recent scan context, reminder context, user-entered notes, cycle context, your About you details, observations LineCheck has noticed, a short summary of recent Apple Health readings (such as sleep, resting heart rate, heart rate variability, activity, and weight), and the same pseudonymous safety identifier. This is sent through our server to our AI provider, OpenAI, only to answer your request. Our server does not store the content of these requests; OpenAI may retain API data for a limited period (currently up to 30 days) for abuse monitoring under its own policies.</li>
              <li><strong>Ads:</strong> free tiers may display ads. Ad providers may collect device- or ad-related data needed to deliver and measure those ads.</li>
              <li><strong>Purchases:</strong> purchase status is used to unlock Pro features and restore entitlements.</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed mb-4">
              LineCheck deals with sensitive reproductive-health-related information. We do not use that sensitive
              information for cross-app tracking. We use it only to provide the feature you chose to run.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              <strong>Apple Health data is never used for advertising or marketing, never sold, and never shared
              with ad networks, data brokers, or information resellers.</strong> It is not used for tracking. It
              leaves your device only when you use Luna, as part of the request described above, to answer your
              question. You can disconnect Apple Health at any time in LineCheck's Settings or in the Health app,
              and delete your LineCheck data from Settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">Critter Scale-Specific Privacy Details</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Critter Scale is a game that runs on your device. It has no accounts, no AI features, and no chat, and
              it does not ask for access to your camera, photos, microphone, contacts, or location.
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
              <li><strong>Local storage:</strong> high scores, run statistics, settings, tutorial progress, chosen cosmetics, and purchase status are saved on your device. We do not receive a copy.</li>
              <li><strong>Ads:</strong> the free version shows banner ads and occasional full-screen ads between runs, served by Google AdMob. Google may collect device identifiers, approximate location derived from IP address, and ad interaction data to deliver, measure, and limit fraud in those ads. On iOS, Critter Scale asks for App Tracking Transparency permission before any ad personalization that relies on tracking; if you decline, ads are shown without that tracking. Where required, such as in the EEA, UK, and Switzerland, a consent message lets you choose how your data is used for ads.</li>
              <li><strong>Purchases:</strong> Remove Ads and the Supporter Pack are one-time purchases processed by Apple. We receive only the entitlement status needed to unlock them and restore them; we never see your payment details.</li>
              <li><strong>Game Center:</strong> if you are signed in to Game Center, your score and Game Center player profile are submitted to Apple so leaderboards can work. This is handled by Apple under its own privacy policy.</li>
              <li><strong>Diagnostics:</strong> crash and performance data may be shared with us through Apple if you have enabled sharing with app developers in your device settings.</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Buying Remove Ads or the Supporter Pack stops ads from loading, which also stops the ad-related data
              collection described above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">Kinu Tumble-Specific Privacy Details</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Kinu Tumble is a game that runs on your device. It has no accounts, no AI features, and no chat, and
              it does not ask for access to your camera, photos, microphone, contacts, or location.
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
              <li><strong>Local storage:</strong> run progress, unlocked flavours, outfits, boxes, rooms, settings, and purchase status are saved on your device. We do not receive a copy.</li>
              <li><strong>Ads:</strong> the free version may show ads. Ad providers may collect device identifiers, approximate location derived from IP address, and ad interaction data to deliver, measure, and limit fraud in those ads. On iOS, Kinu Tumble asks for App Tracking Transparency permission before any ad personalization that relies on tracking; if you decline, ads are shown without that tracking. Where required, such as in the EEA, UK, and Switzerland, a consent message lets you choose how your data is used for ads.</li>
              <li><strong>Purchases:</strong> optional purchases such as ad removal or cosmetic content are processed by Apple. We receive only the entitlement status needed to unlock and restore them; we never see your payment details.</li>
              <li><strong>Game Center:</strong> if you are signed in to Game Center, your score and Game Center player profile are submitted to Apple so leaderboards can work. This is handled by Apple under its own privacy policy.</li>
              <li><strong>Diagnostics:</strong> crash and performance data may be shared with us through Apple if you have enabled sharing with app developers in your device settings.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">AI Features Across Our Apps</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Some GetSolutions apps offer optional AI features. When you use them, the content you submit and the
              minimum related context required for the feature may be sent to third-party AI or hosting providers for
              processing. We use those providers to return the requested result to you.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We do not treat optional AI features as blanket permission to collect unrelated personal data. The data
              sent should stay tied to the feature you intentionally invoked.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">Third-Party Services</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Depending on the app and feature, we may use third-party services such as:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
              <li><strong>Apple App Store and Google Play:</strong> app distribution, updates, subscriptions, and purchase handling.</li>
              <li><strong>Cloud hosting and API providers:</strong> to support optional online and AI-assisted features.</li>
              <li><strong>Ad networks:</strong> for free tiers that show ads, including Google AdMob.</li>
              <li><strong>Apple Game Center:</strong> for leaderboards in games such as Critter Scale and Kinu Tumble.</li>
              <li><strong>Analytics or diagnostics tools:</strong> where enabled to understand stability and product usage.</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed mb-4">
              These providers operate under their own privacy policies. We try to use providers that are fit for the
              purpose and avoid collecting more than the feature needs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">Permissions</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Our apps may request permissions such as camera, photos, notifications, Apple Health, biometrics,
              storage, or internet access when those permissions are needed for the app’s actual workflow. We do not ask for
              unrelated permissions just because we can.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">Retention</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Local-only data stays on your device until you delete it, uninstall the app, or your device clears it.
              Server-side retention depends on the feature and provider involved. Where a feature is intended to be
              transient, we aim to keep retention limited to what is reasonably necessary to complete the request,
              secure the service, enforce entitlements, and debug operational issues.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">Age Ratings and Children's Privacy</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Each GetSolutions app has its own intended audience and age rating, shown on its App Store or Google
              Play listing. Some apps cover adult topics and are intended only for adults, such as LineCheck
              (reproductive health). Others, such as casual games like Critter Scale and our
              document utilities, are made for a general audience.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              None of our apps are designed specifically for children, and we do not knowingly collect personal
              information from children under 13, or the minimum age of digital consent where you live. General
              audience apps that younger people may use, such as Critter Scale and Kinu Tumble, are built to need
              no account and no contact details, and we keep any data collection in them to what the app needs to
              run, deliver ads in free versions, and process purchases. A parent or guardian should review an
              app's age rating and store listing before a child uses it.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you believe a child has provided us personal information, contact us and we will review and, where
              appropriate, delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">Security</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We use reasonable technical and organizational measures appropriate to the size of the business and the
              nature of the product. No service can promise perfect security, but we do try to keep the data path as
              narrow as possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">Your Choices and Rights</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              You can often avoid remote processing entirely by using local-only features, declining optional
              permissions, or not using optional AI features. You may also uninstall an app, delete local content,
              or contact us about privacy questions or requests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">Changes to This Policy</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We may update this policy as our apps, providers, or legal obligations change. When we do, we will
              update the date above and publish the revised version here.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">Contact</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Questions about this privacy policy or our privacy practices can be sent to:
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              <strong>Email:</strong> info@getsolutions.app
            </p>
          </section>

          <section className="mb-8 bg-[#f7f6f3] rounded-xl p-6">
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Plain-English Summary</h3>
            <p className="text-neutral-700 leading-relaxed">
              Most of our products try to keep work local. Some optional features, especially AI features, need data
              to be sent out so they can function. For LineCheck specifically, your tracking data and Apple Health
              data stay on the device (and your private iCloud, if enabled), and test photos are read on the device.
              Only the optional "look again" second opinion sends a photo, and Luna's assistant features send your
              message and related context to answer the request. Apple Health data
              is never used for ads or sold. Critter Scale and Kinu Tumble keep your game progress on the device;
              their only outside data flows are ads in the free version, Apple purchases, and optional Game Center
              leaderboards.
            </p>
          </section>
        </div>
      </div>

      <footer className="bg-neutral-950 text-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="/" className="text-2xl font-bold mb-2 hover:text-white transition-colors">
                Get<span className="text-[#9b5614]">Solutions</span>
              </a>
              <p className="text-neutral-400">Building better apps.</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <p className="text-neutral-400 text-sm mb-2">
                © 2026 GetSolutions. All rights reserved.
              </p>
              <div className="flex gap-6 flex-wrap justify-center md:justify-end">
                <a href="/privacy" className="text-neutral-400 hover:text-white transition-colors underline">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-neutral-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="/contact" className="text-neutral-400 hover:text-white transition-colors">
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
