import { AppData } from "@/types/app";
import Link from "next/link";
import Image from "next/image";
import AppStructuredData from "./AppStructuredData";
import AppFaqStructuredData from "./AppFaqStructuredData";
import AppBreadcrumbStructuredData from "./AppBreadcrumbStructuredData";
import SiteFooter from "./SiteFooter";

interface AppListingProps { app: AppData; relatedApps?: AppData[] }

function platformLabel(app: AppData) {
  return [app.appStoreUrl && "iPhone & iPad", app.playStoreUrl && "Android", app.isWebsite && "Web"]
    .filter(Boolean).join(" · ") || (app.isComingSoon ? "Coming soon" : "In development");
}

function StoreLinks({ app, light = false }: { app: AppData; light?: boolean }) {
  if (app.isWebsite) return (
    <a href={app.websiteUrl} target="_blank" rel="noopener noreferrer" className={light ? "button button-light" : "button button-primary"}>
      Open web app <span aria-hidden="true">↗</span>
    </a>
  );
  if (!app.appStoreUrl && !app.playStoreUrl) return <span className="button button-muted">Coming soon</span>;
  return <div className="flex flex-wrap items-center gap-3">
    {app.appStoreUrl && <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={`Download ${app.name} on the App Store`} className="store-badge"><Image src="/badges/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" width={180} height={54} /></a>}
    {app.playStoreUrl && <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={`Get ${app.name} on Google Play`} className="store-badge"><Image src="/badges/GetItOnGooglePlay_Badge_Web_color_English.png" alt="Get it on Google Play" width={180} height={54} /></a>}
  </div>;
}

export default function AppListing({ app, relatedApps = [] }: AppListingProps) {
  const info = [["Updated", app.updatedOn], ["Version", app.version], ["Size", app.size], ["Category", app.category], ["Platform", platformLabel(app)]];
  return <main className="product-page">
    <AppStructuredData app={app}/><AppFaqStructuredData app={app}/><AppBreadcrumbStructuredData app={app}/>

    <section className="product-intro page-shell">
      <Link href="/#apps" className="back-link"><span aria-hidden="true">←</span> All apps</Link>
      <div className="product-hero-grid">
        <div className="product-heading">
          <Image src={app.icon} alt={`${app.name} icon`} width={156} height={156} className="product-icon" priority/>
          <div className="product-copy">
            <p className="eyebrow">{app.category} <span>·</span> {platformLabel(app)}</p>
            <h1>{app.name}</h1>
            <p className="product-tagline">{app.tagline}</p>
            <p className="product-description">{app.description}</p>
            <StoreLinks app={app}/>
          </div>
        </div>
        {app.screenshots.length > 0 && <div className={`product-preview ${app.isWebsite ? "product-preview-web" : ""}`} aria-label={`${app.name} preview`}>
          {app.screenshots.slice(0, 3).map((src, index) => <Image src={src} alt="" width={250} height={541} className={`product-preview-screen product-preview-screen-${index + 1}`} priority={index === 0} key={src}/>)}
        </div>}
      </div>
    </section>

    {!app.isWebsite && app.screenshots.length > 0 && <section className="screenshot-section">
      <div className="page-shell">
        <div className="section-heading"><div><p className="eyebrow">Inside the app</p><h2>A closer look.</h2></div><p>Scroll to explore</p></div>
        <div className="screenshot-rail" aria-label={`${app.name} screenshots`}>
          {app.screenshots.map((src, index) => <figure className="screenshot-card" key={src}>
            <Image src={src} alt={`${app.name} app screenshot ${index + 1}`} width={310} height={671} sizes="(max-width: 640px) 74vw, 310px" priority={index < 2}/>
          </figure>)}
        </div>
      </div>
    </section>}

    <section className="detail-section page-shell">
      <div className="detail-layout">
        <article className="about-app">
          <p className="eyebrow">About</p><h2>Made for the task at hand.</h2>
          <p className="long-description">{app.longDescription}</p>
          <div className="feature-grid">
            {app.features.map((feature, index) => <div className="feature-item" key={feature}><span>{String(index + 1).padStart(2, "0")}</span><p>{feature}</p></div>)}
          </div>
        </article>
        <aside className="app-facts">
          <h3>Information</h3><dl>{info.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          {app.safetyHighlights && <div className="privacy-note"><strong>Safety & privacy</strong>{app.safetyHighlights.map(item => <p key={item.label}><span>✓</span>{item.label}</p>)}</div>}
        </aside>
      </div>
      {app.faqs && <div className="faq-block faq-wide"><div className="faq-heading"><p className="eyebrow">Questions</p><h2>Good to know.</h2></div>
        <div className="faq-list">{app.faqs.slice(0, 6).map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
      </div>}
    </section>

    {relatedApps.length > 0 && <section className="related-section"><div className="page-shell"><div className="section-heading"><div><p className="eyebrow">Also by GetSolutions</p><h2>More useful apps.</h2></div></div>
      <div className="related-grid">{relatedApps.map(item => <Link href={`/apps/${item.id}`} className="related-card" key={item.id}><Image src={item.icon} alt="" width={72} height={72}/><div><h3>{item.name}</h3><p>{item.tagline}</p></div><span aria-hidden="true">↗</span></Link>)}</div>
    </div></section>}

    <section className="download-callout page-shell"><div><p className="eyebrow">Get started</p><h2>Try {app.name}.</h2><p>{app.isWebsite ? "Open it in your browser and get straight to work." : "Available from the official store links below."}</p></div><StoreLinks app={app} light/></section>
    <SiteFooter/>
  </main>;
}
