import { AppData } from "@/types/app";
import Link from "next/link";
import Image from "next/image";
import AppStructuredData from "./AppStructuredData";
import AppFaqStructuredData from "./AppFaqStructuredData";
import AppBreadcrumbStructuredData from "./AppBreadcrumbStructuredData";

interface AppListingProps {
  app: AppData;
  relatedApps?: AppData[];
}

export default function AppListing({ app, relatedApps = [] }: AppListingProps) {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <AppStructuredData app={app} />
      <AppFaqStructuredData app={app} />
      <AppBreadcrumbStructuredData app={app} />
      {/* Header */}
      <header className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-grass-600 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Apps
          </Link>
        </div>
      </header>

      {/* App Header Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* App Icon */}
                <div className="flex-shrink-0 mt-8 md:mt-9">
                  <div className="w-32 h-32 bg-gradient-to-br from-lime-100 to-grass-100 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src={app.icon}
                      alt={`${app.name} icon`}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* App Info */}
                <div className="flex-grow">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-grass-100 text-grass-700 text-sm font-semibold rounded-full">
                      {app.category}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                    {app.name}
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    {app.tagline}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 mb-6 text-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">📦</span>
                      <div>
                        <div className="font-bold text-gray-900">{app.size}</div>
                        <div className="text-gray-500">Size</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🔄</span>
                      <div>
                        <div className="font-bold text-gray-900">{app.version}</div>
                        <div className="text-gray-500">Version</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {app.isWebsite ? (
                      <a
                        href={app.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-grass-600 text-white font-bold rounded-lg hover:bg-grass-500 transition-all duration-300 hover:scale-105 shadow-lg text-center"
                      >
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Visit Website
                      </a>
                    ) : (
                      app.playStoreUrl ? (
                        <a
                          href={app.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-grass-600 text-white font-bold rounded-lg hover:bg-grass-500 transition-all duration-300 hover:scale-105 shadow-lg text-center"
                        >
                          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                          </svg>
                          Get on Play Store
                        </a>
                      ) : (
                        <div className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-gray-200 text-gray-600 font-bold rounded-lg text-center cursor-not-allowed">
                          Coming Soon
                        </div>
                      )
                    )}
                    <button className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 text-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {app.banner && (
              <div className="w-full">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={app.banner}
                    alt={`${app.name} banner`}
                    width={900}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      {!app.isWebsite && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Screenshots</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {app.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-[360px] bg-gradient-to-br from-gray-100 to-grass-50 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={screenshot}
                    alt={`${app.name} screenshot ${index + 1}`}
                    width={192}
                    height={360}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this {app.isWebsite ? 'website' : 'app'}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {app.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {app.longDescription}
              </p>

              {/* Features List */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {app.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-lime-500 mr-3 mt-1 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {app.useCases && app.useCases.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Use Cases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {app.useCases.map((useCase, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-grass-600 mr-3 mt-1 text-xl flex-shrink-0">•</span>
                        <span className="text-gray-700">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {app.faqs && app.faqs.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">FAQs</h3>
                  <div className="space-y-4">
                    {app.faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-5 shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Additional Info Sidebar */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm sticky top-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Additional Information</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-gray-500 mb-1">Updated</div>
                    <div className="text-gray-900 font-semibold">{app.updatedOn}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Version</div>
                    <div className="text-gray-900 font-semibold">{app.version}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Size</div>
                    <div className="text-gray-900 font-semibold">{app.size}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Category</div>
                    <div className="text-gray-900 font-semibold">{app.category}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Developer</div>
                    <div className="text-gray-900 font-semibold">GetSolutions</div>
                  </div>
                </div>

                <div className="mt-6 pt-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Privacy & Security</h4>
                  <div className="flex items-start mb-2">
                    <span className="text-grass-500 mr-2 text-lg">🔒</span>
                    <span className="text-sm text-gray-600">No data collection</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-grass-500 mr-2 text-lg">✓</span>
                    <span className="text-sm text-gray-600">Offline-capable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {app.valueProps && app.valueProps.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Why it stands out</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {app.valueProps.map((value, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-5 shadow-sm text-gray-700">
                    {value}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Apps Section */}
      {relatedApps.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More from GetSolutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedApps.map((relatedApp) => (
                <Link
                  key={relatedApp.id}
                  href={`/apps/${relatedApp.id}`}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 mb-3 bg-gradient-to-br from-lime-100 to-grass-100 rounded-2xl flex items-center justify-center overflow-hidden">
                    <Image
                      src={relatedApp.icon}
                      alt={`${relatedApp.name} icon`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-grass-600 transition-colors">
                    {relatedApp.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {relatedApp.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {app.isWebsite
              ? "Visit the website and start using it right away."
              : "Download now and experience the difference."}
          </p>
          {app.isWebsite ? (
            <a
              href={app.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-grass-600 text-white font-bold rounded-lg hover:bg-grass-500 transition-all duration-300 hover:scale-105 shadow-lg text-center"
            >
              Visit {app.name}
            </a>
          ) : app.playStoreUrl ? (
            <a
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-grass-600 text-white font-bold rounded-lg hover:bg-grass-500 transition-all duration-300 hover:scale-105 shadow-lg text-center"
            >
              Download from Play Store
            </a>
          ) : (
            <div className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-gray-200 text-gray-600 font-bold rounded-lg text-center cursor-not-allowed">
              Coming Soon
            </div>
          )}
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
    </div>
  );
}
