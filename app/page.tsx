import Link from "next/link";
import Image from "next/image";
import { apps as allApps, AppData } from "@/types/app";
import SiteFooter from "@/components/SiteFooter";

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

export default function Home() {
  const appsArray = Object.values(allApps);
  const heroApps = [allApps.linecheck, allApps["smart-resume"], allApps.getpdf].filter(Boolean);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1e8] text-[#171717]">
      <section className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 gap-8 rounded-[32px] bg-[#151821] p-6 text-white shadow-[0_24px_80px_rgba(32,26,18,0.16)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Utility apps that feel calm, quick, and finished.
            </h1>
            <p className="mt-7 text-lg leading-8 text-white/72">
              A small suite for PDFs, scanning, compression, privacy checks, resumes, dating support, and test tracking. Built for the exact moment you need the tool, then designed to get out of the way.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apps"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#ff7a59] px-6 text-sm font-bold text-[#151821] transition-colors hover:bg-[#ffb45c]"
              >
                Browse apps
              </a>
              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/22 px-6 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#151821]"
              >
                Why GetSolutions
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] bg-white/8 p-3 ring-1 ring-white/10 sm:p-4">
            <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
              {heroApps.slice(0, 1).map((app) => (
                <Link
                  key={app.id}
                  href={`/apps/${app.id}`}
                  className="group overflow-hidden rounded-[24px] bg-white text-[#171717] shadow-[0_18px_55px_rgba(0,0,0,0.24)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#ece7dc]">
                    <Image
                      src={getVisual(app)}
                      alt={`${app.name} preview`}
                      fill
                      sizes="(min-width: 1024px) 380px, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="flex items-center gap-3 p-4">
                    <Image
                      src={app.icon}
                      alt={`${app.name} icon`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-2xl object-cover"
                    />
                    <div className="min-w-0">
                      <p className="truncate font-black tracking-tight">{app.name}</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#73808c]">
                        {getPlatformLabel(app)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="flex flex-col gap-4">
                {heroApps.slice(1).map((app) => (
                  <Link
                    key={app.id}
                    href={`/apps/${app.id}`}
                    className="group flex items-center gap-4 rounded-[24px] bg-white p-4 text-[#171717] shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-1"
                  >
                    <Image
                      src={app.icon}
                      alt={`${app.name} icon`}
                      width={72}
                      height={72}
                      className="h-16 w-16 flex-none rounded-[20px] object-cover shadow-sm"
                      priority
                    />
                    <div className="min-w-0">
                      <p className="text-xl font-black leading-tight tracking-tight">{app.name}</p>
                      <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#5f615f]">{app.tagline}</p>
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-[#73808c]">
                        {getPlatformLabel(app)}
                      </p>
                    </div>
                  </Link>
                ))}
                <div className="rounded-[24px] bg-[#ffb45c] p-5 text-[#151821]">
                  <p className="text-3xl font-black">{appsArray.length}</p>
                  <p className="mt-1 text-sm font-bold">apps across mobile and web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto pb-2">
          {appsArray.map((app) => (
            <Link
              key={`strip-${app.id}`}
              href={`/apps/${app.id}`}
              className="flex min-w-max items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-bold text-[#171717] shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
            >
              <Image src={app.icon} alt={`${app.name} icon`} width={34} height={34} className="h-8 w-8 rounded-xl object-cover" />
              {app.name}
            </Link>
          ))}
        </div>
      </section>

      <section id="apps" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <h2 className="text-4xl font-black leading-none tracking-tight text-[#171717] sm:text-5xl">
              The app shelf.
            </h2>
            <p className="max-w-3xl text-base leading-7 text-[#5f615f]">
              Pick the tool you need. Each product page shows what it does, where it runs, and the screens you will actually use.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {appsArray.map((app) => (
              <Link
                key={app.id}
                href={`/apps/${app.id}`}
                className="group overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(32,26,18,0.14)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ece7dc]">
                  <div className="absolute inset-3 overflow-hidden rounded-[20px] bg-white/40">
                    <Image
                      src={getVisual(app)}
                      alt={`${app.name} preview`}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <Image
                      src={app.icon}
                      alt={`${app.name} icon`}
                      width={52}
                      height={52}
                      className="h-12 w-12 rounded-2xl object-cover shadow-sm"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#73808c]">{app.category}</p>
                      <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#db5f42]">
                        {getPlatformLabel(app)}
                      </p>
                    </div>
                  </div>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-[#171717]">{app.name}</h3>
                  <p className="mt-3 min-h-[84px] text-sm leading-6 text-[#5f615f]">{app.description}</p>
                  <div className="mt-5 inline-flex items-center text-sm font-black text-[#db5f42]">
                    View details <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-black/5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#ff7a59] p-8 sm:p-10 lg:p-12">
            <h2 className="max-w-xl text-4xl font-black leading-none tracking-tight text-[#151821] sm:text-5xl">
              Small apps, built with a lower tolerance for nonsense.
            </h2>
          </div>
          <div className="grid gap-px bg-black/5">
            {[
              ["Direct workflows", "Open the app, complete the task, and move on."],
              ["Fair upgrades", "Premium features should be clear, optional, and understandable."],
              ["Private by habit", "Local-first where possible, online only where the feature needs it."]
            ].map(([title, body]) => (
              <div key={title} className="bg-white p-7">
                <h3 className="text-xl font-black text-[#171717]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f615f]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
