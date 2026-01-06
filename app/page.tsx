import Link from "next/link";
import Image from "next/image";
import { apps as allApps } from "@/types/app";

export default function Home() {
  const appsArray = Object.values(allApps);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-24">
          <div className="w-full space-y-6 lg:w-1/2">
            <span className="inline-flex items-center gap-2 rounded-full border border-grass-500/50 bg-grass-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-grass-100">
              <span className="h-2 w-2 rounded-full bg-grass-400 animate-pulse" aria-hidden="true" />
              Purpose-built Android utilities
            </span>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Hero experiences that stay sharp on every screen.
            </h1>
            <p className="text-base text-gray-200 sm:text-lg">
              GetSolutions delivers privacy-first tools that look as good on desktop monitors as they do on handheld devices.
              No stretched imagery, no awkward layouts—just confident, utility-focused design.
            </p>
            <div className="grid grid-cols-1 gap-4 text-gray-100 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-grass-500/20 text-grass-300">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Pixel-perfect scaling</p>
                  <p className="text-sm text-gray-300">Hero imagery is framed to keep its clarity across breakpoints.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-grass-500/20 text-grass-300">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Transparent value</p>
                  <p className="text-sm text-gray-300">Fair pricing, no lock-ins, and thoughtful design touches.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a
                href="#apps"
                className="group w-full rounded-xl border-2 border-grass-500 bg-grass-600 px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:translate-y-0.5 hover:bg-grass-500 hover:shadow-xl sm:w-auto"
              >
                Explore our apps
              </a>
              <a
                href="#about"
                className="w-full rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:w-auto"
              >
                See how we build
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-r from-grass-500/30 via-grass-400/20 to-transparent blur-3xl" aria-hidden="true" />
              <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-[5/3] w-full overflow-hidden rounded-3xl">
                  <Image
                    src="/hero.png"
                    alt="GetSolutions Hero"
                    fill
                    className="object-cover"
                    priority
                    sizes="(min-width: 1024px) 520px, 90vw"
                  />
                </div>
                <div className="mt-5 flex items-center justify-between text-sm text-gray-200">
                  <div>
                    <p className="font-semibold text-white">Responsive by design</p>
                    <p className="text-xs text-gray-400">Optimized for tablets, phones, and wide displays.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-grass-300">50K+</p>
                    <p className="text-[11px] uppercase tracking-wide text-gray-400">installs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Showcase Section */}
      <section id="apps" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Apps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our suite of Android applications, each crafted with attention to detail and user privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appsArray.map((app, index) => (
              <Link
                key={app.id}
                href={`/apps/${app.id}`}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-grass-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up cursor-pointer flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* App Icon */}
                <div className="w-20 h-20 mb-6 bg-gradient-to-br from-lime-100 to-grass-100 rounded-2xl flex items-center justify-center border-2 border-grass-300 overflow-hidden">
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* App Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-grass-600 transition-colors">
                  {app.name}
                </h3>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-grass-100 text-grass-700 text-xs font-semibold rounded border border-grass-300">
                    {app.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {app.description}
                </p>

                {/* View Details Link */}
                <div className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg group-hover:bg-grass-600 group-hover:text-white transition-all duration-300 border-2 border-gray-900 group-hover:border-grass-700 mt-auto">
                  View Details
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-grass-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About GetSolutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              Built by a solo developer who got frustrated with restrictive utility apps that nickel-and-dime users with predatory subscriptions and excessive ads.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              GetSolutions apps are designed to be genuinely useful without the frustration. Light ads, fair pricing, and no sneaky subscription traps that try to catch you out. Just tools that work the way you'd expect them to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Value 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-grass-100 flex items-center justify-center border-2 border-grass-500">
                <svg className="w-8 h-8 text-grass-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600">
                Your data stays on your device. No tracking, no data collection, no cloud dependencies unless you choose them.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-grass-100 flex items-center justify-center border-2 border-grass-500">
                <svg className="w-8 h-8 text-grass-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600">
                Light ads, one-time purchases where possible, and absolutely no predatory subscription traps designed to catch you out.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-grass-100 flex items-center justify-center border-2 border-grass-500">
                <svg className="w-8 h-8 text-grass-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Less Frustration</h3>
              <p className="text-gray-600">
                No artificial restrictions, paywalls for basic features, or dark patterns. Just straightforward apps that do what they say.
              </p>
            </div>
          </div>

          {/* Contact/CTA */}
          <div className="text-center bg-white rounded-2xl p-8 sm:p-12 border-2 border-grass-500 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready for apps that respect you?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Try our apps and experience utility software that's actually built with users in mind, not just profit margins.
            </p>
            <a
              href="#apps"
              className="inline-block px-8 py-4 bg-grass-600 text-white font-semibold rounded-lg hover:bg-grass-500 transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-grass-700"
            >
              Browse Apps
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">
                Get<span className="text-grass-600">Solutions</span>
              </h3>
              <p className="text-gray-400">Building better Android apps.</p>
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
