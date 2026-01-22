import Link from "next/link";
import Image from "next/image";
import { apps as allApps } from "@/types/app";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function Home() {
  const appsArray = Object.values(allApps);
  const heroSlides = appsArray
    .filter((app) => app.banner)
    .map((app) => ({
      src: app.banner as string,
      alt: `${app.name} feature banner`,
      name: app.name,
      tagline: app.tagline
    }));

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-24">
          <div className="w-full space-y-6 text-center lg:w-1/2">
            <span className="inline-flex items-center gap-2 rounded-full bg-grass-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-grass-100">
              <span className="h-2 w-2 rounded-full bg-grass-400 animate-pulse" aria-hidden="true" />
              Privacy-first utility suite
            </span>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Utility apps that feel focused, fast, and fair.
            </h1>
            <p className="text-base text-gray-200 sm:text-lg">
              GetSolutions builds a focused lineup of tools that stay on-device, stay simple, and stay out of your way.
              Clean interfaces, practical features, and a design system that feels intentional from start to finish.
            </p>
            <div className="grid grid-cols-1 gap-4 text-gray-100 sm:grid-cols-2">
              <div className="flex flex-col items-center gap-3 rounded-2xl p-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-grass-500/20 text-grass-200">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">No-nonsense UX</p>
                  <p className="text-sm text-gray-300">Streamlined flows that get you from task to done in seconds.</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 rounded-2xl p-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-grass-500/20 text-grass-200">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l7 4v6c0 5-3.5 9.7-7 11-3.5-1.3-7-6-7-11V6l7-4z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Local-first by default</p>
                  <p className="text-sm text-gray-300">Your files stay on your device unless you choose otherwise.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-center">
              <a
                href="#apps"
                className="group w-full rounded-xl bg-grass-600 px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:translate-y-0.5 hover:bg-grass-500 hover:shadow-xl sm:w-auto"
              >
                Explore the lineup
              </a>
              <a
                href="/about"
                className="w-full rounded-xl bg-white/5 px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
              >
                Learn our approach
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            {heroSlides.length > 0 ? (
              <HeroSlideshow slides={heroSlides} />
            ) : (
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-r from-grass-500/30 via-grass-400/20 to-transparent blur-3xl" aria-hidden="true" />
              <div className="relative rounded-[32px] bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
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
                  </div>
                </div>
              </div>
            )}
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
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer flex flex-col text-center items-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* App Icon */}
                <div className="w-20 h-20 mb-6 bg-gradient-to-br from-lime-100 to-grass-100 rounded-2xl flex items-center justify-center overflow-hidden">
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
                  <span className="inline-block px-2 py-1 bg-grass-100 text-grass-700 text-xs font-semibold rounded">
                    {app.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {app.description}
                </p>

                {/* View Details Link */}
                <div className="inline-flex items-center justify-center w-full px-6 py-3 bg-grass-600 text-white font-semibold rounded-lg transition-all duration-300 mt-auto hover:bg-grass-500">
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
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-grass-100 flex items-center justify-center">
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
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-grass-100 flex items-center justify-center">
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
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-grass-100 flex items-center justify-center">
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
          <div className="text-center bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready for apps that respect you?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Try our apps and experience utility software that's actually built with users in mind, not just profit margins.
            </p>
            <a
              href="#apps"
              className="inline-block px-8 py-4 bg-grass-600 text-white font-semibold rounded-lg hover:bg-grass-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
