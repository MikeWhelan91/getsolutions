import { AppData } from "@/types/app";

const siteUrl = "https://getsolutions.app";
const developerPlayStoreUrl =
  "https://play.google.com/store/apps/developer?id=GetSolutions.app";

const withBase = (path?: string) => {
  if (!path) return undefined;
  try {
    return new URL(path, siteUrl).toString();
  } catch {
    return path;
  }
};

const buildStructuredData = (app: AppData) => {
  const isWebApp = Boolean(app.isWebsite);
  const screenshots = app.screenshots
    .map(withBase)
    .filter((src): src is string => Boolean(src));
  const sameAs: string[] = [developerPlayStoreUrl];
  const installTargets: string[] = [];

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": isWebApp ? "WebApplication" : "MobileApplication",
    name: app.name,
    alternateName: app.tagline,
    description: app.longDescription,
    applicationCategory: app.category,
    operatingSystem: isWebApp
      ? "Any"
      : [app.playStoreUrl ? "ANDROID" : null, app.appStoreUrl ? "IOS" : null]
          .filter((os): os is string => Boolean(os))
          .join(", ") || "ANDROID",
    softwareVersion: app.version,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    url: `${siteUrl}/apps/${app.id}`,
    image: withBase(app.icon),
    screenshot: screenshots,
    featureList: app.features,
    publisher: {
      "@type": "Organization",
      name: "GetSolutions",
      url: siteUrl,
      sameAs: [developerPlayStoreUrl],
    },
    isAccessibleForFree: true,
  };

  if (app.playStoreUrl) {
    installTargets.push(app.playStoreUrl);
    sameAs.push(app.playStoreUrl);
  }

  if (app.appStoreUrl) {
    installTargets.push(app.appStoreUrl);
    sameAs.push(app.appStoreUrl);
  }

  if (installTargets.length > 0) {
    data.installUrl = installTargets.length === 1 ? installTargets[0] : installTargets;
    data.downloadUrl = data.installUrl;
    data.potentialAction = {
      "@type": "InstallAction",
      target: installTargets.length === 1 ? installTargets[0] : installTargets,
    };
  }

  if (app.websiteUrl) {
    sameAs.push(app.websiteUrl);
  }

  if (sameAs.length > 0) {
    data.sameAs = sameAs;
  }

  return data;
};

export default function AppStructuredData({ app }: { app: AppData }) {
  const data = buildStructuredData(app);

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
