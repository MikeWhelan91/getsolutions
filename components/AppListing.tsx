import { AppData } from "@/types/app";
import Link from "next/link";
import Image from "next/image";
import AppStructuredData from "./AppStructuredData";
import AppFaqStructuredData from "./AppFaqStructuredData";
import AppBreadcrumbStructuredData from "./AppBreadcrumbStructuredData";
import SiteFooter from "./SiteFooter";

interface AppListingProps {
  app: AppData;
  relatedApps?: AppData[];
}

function getPlatformLabel(app: AppData) {
  const platforms = [];

  if (app.appStoreUrl) platforms.push("iOS");
  if (app.playStoreUrl) platforms.push("Android");
  if (app.isWebsite) platforms.push("Web");

  return platforms.length > 0 ? platforms.join(" / ") : app.isComingSoon ? "Coming soon" : "In development";
}

function getVisual(app: AppData) {
  return app.banner ?? app.screenshots[0] ?? app.icon;
}

const StoreBadges = ({ app }: { app: AppData }) => {
  const badges: { href: string; src: string; alt: string }[] = [];

  if (app.appStoreUrl) {
    badges.push({
      href: app.appStoreUrl,
      src: "/badges/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",
      alt: "Download on the App Store"
    });
  }

  if (app.playStoreUrl) {
    badges.push({
      href: app.playStoreUrl,
      src: "/badges/GetItOnGooglePlay_Badge_Web_color_English.png",
      alt: "Get it on Google Play"
    });
  }

  if (badges.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-row flex-wrap items-center gap-3">
      {badges.map((badge) => (
        <a key={badge.href} href={badge.href} target="_blank" rel="noopener noreferrer" className="inline-flex transition-opacity hover:opacity-85">
          <Image src={badge.src} alt={badge.alt} width={200} height={60} className="h-12 w-auto" />
        </a>
      ))}
    </div>
  );
};

export default function AppListing({ app, relatedApps = [] }: AppListingProps) {
  const safetyHighlights = app.safetyHighlights ?? [
    {
      icon: "lock",
      label: "No data collection"
    },
    {
      icon: "check",
      label: "Offline-capable"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f1e8] text-[#171717]">
      <AppStructuredData app={app} />
      <AppFaqStructuredData app={app} />
      <AppBreadcrumbStructuredData app={app} />

      <header className="px-4 pb-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/#apps" className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-bold text-[#666b70] shadow-sm ring-1 ring-black/5 transition-colors hover:text-[#171717]">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m15 18-6-6 6-6" />
            </svg>
            Back to apps
          </Link>
        </div>
      </header>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 overflow-hidden rounded-[32px] bg-[#151821] p-6 text-white shadow-[0_24px_80px_rgba(32,26,18,0.16)] sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:p-10">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src={app.icon}
                alt={`${app.name} icon`}
                width={104}
                height={104}
                className="h-24 w-24 rounded-[24px] object-cover shadow-lg"
                priority
              />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ffb45c]">
                  {app.category} · {getPlatformLabel(app)}
                </p>
                <h1 className="mt-2 text-5xl font-black leading-none tracking-tight sm:text-6xl">{app.name}</h1>
              </div>
            </div>
            <p className="mt-7 max-w-xl text-2xl font-bold leading-9">{app.tagline}</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/68">{app.description}</p>
            <div className="mt-8">
              {app.isWebsite ? (
                <a
                  href={app.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#ff7a59] px-6 text-sm font-black text-[#151821] transition-colors hover:bg-[#ffb45c]"
                >
                  Visit website
                </a>
              ) : app.appStoreUrl || app.playStoreUrl ? (
                <StoreBadges app={app} />
              ) : (
                <div className="inline-flex h-12 items-center justify-center rounded-full border border-white/22 px-6 text-sm font-black text-white/72">
                  Coming soon
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[28px] bg-white/8 p-3 ring-1 ring-white/10 sm:p-4">
            {app.banner ? (
              <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_18px_55px_rgba(0,0,0,0.24)]">
                <Image
                  src={app.banner}
                  alt={`${app.name} banner`}
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {app.screenshots.slice(0, 3).map((screenshot, index) => (
                  <div key={`${screenshot}-${index}`} className="overflow-hidden rounded-[22px] bg-white shadow-[0_16px_45px_rgba(0,0,0,0.22)]">
                    <div className="relative aspect-[9/16]">
                      <Image
                        src={screenshot}
                        alt={`${app.name} screenshot ${index + 1}`}
                        fill
                        sizes="(min-width: 1024px) 200px, 30vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {!app.isWebsite && (
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-7">
            <div className="mb-5 flex items-end justify-between gap-4">
              <h2 className="text-3xl font-black tracking-tight">Screenshots</h2>
              <span className="text-sm font-semibold text-[#73808c]">Swipe to browse</span>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-3">
              {app.screenshots.map((screenshot, index) => (
                <div key={screenshot} className="w-48 flex-none overflow-hidden rounded-[24px] bg-[#ece7dc] shadow-sm ring-1 ring-black/5 sm:w-56">
                  <div className="relative aspect-[9/16]">
                    <Image
                      src={screenshot}
                      alt={`${app.name} screenshot ${index + 1}`}
                      fill
                      sizes="224px"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <h2 className="text-4xl font-black tracking-tight">About this {app.isWebsite ? "website" : "app"}</h2>
            <p className="mt-5 text-lg leading-8 text-[#4f5356]">{app.longDescription}</p>

            <div className="mt-10">
              <h3 className="text-2xl font-black tracking-tight">Key features</h3>
              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                {app.features.map((feature) => (
                  <div key={feature} className="rounded-2xl bg-[#f6f1e8] p-4 text-sm leading-6 text-[#4f5356]">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#ff7a59]" aria-hidden="true" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {app.useCases && app.useCases.length > 0 && (
              <div className="mt-10">
                <h3 className="text-2xl font-black tracking-tight">Use cases</h3>
                <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {app.useCases.map((useCase) => (
                    <div key={useCase} className="rounded-2xl bg-[#e8f7f5] p-4 text-sm leading-6 text-[#4f5356]">
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {app.faqs && app.faqs.length > 0 && (
              <div className="mt-10">
                <h3 className="text-2xl font-black tracking-tight">FAQs</h3>
                <div className="mt-5 space-y-3">
                  {app.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-2xl bg-[#f8f6f1] p-5">
                      <h4 className="font-black text-[#171717]">{faq.question}</h4>
                      <p className="mt-2 text-sm leading-6 text-[#5f615f]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="h-fit rounded-[32px] bg-[#151821] p-6 text-white shadow-sm lg:sticky lg:top-24">
            <h3 className="text-xl font-black tracking-tight">App information</h3>
            <dl className="mt-5 divide-y divide-white/10 text-sm">
              {[
                ["Updated", app.updatedOn],
                ["Version", app.version],
                ["Size", app.size],
                ["Category", app.category],
                ["Platform", getPlatformLabel(app)],
                ["Developer", "GetSolutions"]
              ].map(([label, value]) => (
                <div key={label} className="flex items-start justify-between gap-5 py-3">
                  <dt className="text-white/50">{label}</dt>
                  <dd className="text-right font-bold text-white">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 rounded-[24px] bg-white/8 p-5">
              <h4 className="text-sm font-black uppercase tracking-[0.16em] text-[#ffb45c]">Safety & privacy</h4>
              <div className="mt-4 space-y-3">
                {safetyHighlights.map((highlight) => (
                  <div key={highlight.label} className="flex gap-3 text-sm text-white/72">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[#ff7a59]" aria-hidden="true" />
                    <span>{highlight.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {app.valueProps && app.valueProps.length > 0 && (
          <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
            {app.valueProps.map((value) => (
              <div key={value} className="rounded-[24px] bg-white p-5 text-sm leading-6 text-[#5f615f] shadow-sm ring-1 ring-black/5">
                {value}
              </div>
            ))}
          </div>
        )}
      </section>

      {relatedApps.length > 0 && (
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-black tracking-tight">More from GetSolutions</h2>
            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {relatedApps.map((relatedApp) => (
                <Link key={relatedApp.id} href={`/apps/${relatedApp.id}`} className="group rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1">
                  <Image src={relatedApp.icon} alt={`${relatedApp.name} icon`} width={64} height={64} className="h-14 w-14 rounded-2xl object-cover" />
                  <h3 className="mt-5 text-lg font-black tracking-tight group-hover:text-[#db5f42]">{relatedApp.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f615f]">{relatedApp.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-[32px] bg-[#151821] p-7 text-white sm:p-9 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Ready to try {app.name}?</h2>
            <p className="mt-3 text-white/62">
              {app.isWebsite ? "Open the web app and start right away." : "Use the store links for the platforms currently available."}
            </p>
          </div>
          {app.isWebsite ? (
            <a href={app.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-[#ff7a59] px-6 text-sm font-black text-[#151821] transition-colors hover:bg-[#ffb45c]">
              Visit {app.name}
            </a>
          ) : app.appStoreUrl || app.playStoreUrl ? (
            <StoreBadges app={app} />
          ) : (
            <div className="inline-flex h-12 items-center justify-center rounded-full border border-white/22 px-6 text-sm font-black text-white/70">
              Coming soon
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
