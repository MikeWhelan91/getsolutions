import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { apps, AppData } from "@/types/app";

function platforms(app: AppData) {
  return [app.appStoreUrl && "iOS", app.playStoreUrl && "Android", app.isWebsite && "Web"].filter(Boolean).join(" · ") || "Coming soon";
}

export default function Home() {
  const priorityApps = [apps.linecheck, apps["smart-resume"], apps.getpdf];
  const allApps = [...priorityApps, ...Object.values(apps).filter((app) => !priorityApps.some((priority) => priority.id === app.id))];
  const featured = [apps.linecheck, apps["smart-resume"], apps.getpdf];
  return <main>
    <section className="home-hero page-shell">
      <div className="hero-copy">
        <h1>Small apps.<br/><span>Big jobs.</span></h1>
        <p className="hero-intro">Focused tools for documents, careers, privacy, and everyday decisions—made to help you finish the job and move on.</p>
        <div className="hero-actions"><a href="#apps" className="button button-primary">Explore the apps <span aria-hidden="true">↓</span></a><span>Available on iOS, Android &amp; web</span></div>
      </div>
      <div className="featured-stage" aria-label="Featured apps">
        <div className="stage-label"><span>Featured releases</span></div>
        {featured.map((app, index) => <Link href={`/apps/${app.id}`} className={`featured-app featured-app-${index + 1}`} key={app.id}>
          <Image src={app.icon} alt={`${app.name} icon`} width={160} height={160} priority/>
          <div><strong>{app.name}</strong><span>{platforms(app)}</span></div>
        </Link>)}
      </div>
    </section>

    <section id="apps" className="catalog-section"><div className="page-shell">
      <div className="section-heading catalog-heading"><div><p className="eyebrow">The collection</p><h2>One job. One good app.</h2></div><p>{allApps.length} apps for mobile and web</p></div>
      <div className="app-catalog">{allApps.map((app, index) => <Link href={`/apps/${app.id}`} className={`catalog-card catalog-card-${index % 4}`} key={app.id}>
        <div className="catalog-visual">
          <span className="catalog-number">{String(index + 1).padStart(2,"0")}</span>
          <div className="catalog-screen-stack">
            {(app.screenshots.length ? app.screenshots.slice(0, 3) : [app.icon]).map((screenshot, screenshotIndex) =>
              <Image className={`catalog-screen catalog-screen-${screenshotIndex + 1}`} src={screenshot} alt={`${app.name} app preview ${screenshotIndex + 1}`} width={310} height={671} key={screenshot}/>
            )}
          </div>
          <Image className="catalog-icon" src={app.icon} alt="" width={72} height={72}/>
        </div>
        <div className="catalog-copy"><p>{app.category} · {platforms(app)}</p><h3>{app.name}</h3><span>{app.tagline}</span></div>
        <span className="catalog-arrow" aria-hidden="true">View app ↗</span>
      </Link>)}</div>
    </div></section>

    <section className="principles page-shell"><div><p className="eyebrow">How we build</p><h2>Useful by design.</h2></div><div className="principle-list">
      <article><span>01</span><h3>Focused</h3><p>Each app does a clear job and makes the shortest path feel obvious.</p></article>
      <article><span>02</span><h3>Respectful</h3><p>Clear upgrades, thoughtful privacy choices, and no unnecessary friction.</p></article>
      <article><span>03</span><h3>Independent</h3><p>Built and maintained with care—not designed by committee.</p></article>
    </div></section>
    <SiteFooter/>
  </main>;
}
