import { AppData } from "@/types/app";

const siteUrl = "https://getsolutions.app";

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
  const sameAs: string[] = [];

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": isWebApp ? "WebApplication" : "MobileApplication",
    name: app.name,
    alternateName: app.tagline,
    description: app.longDescription,
    applicationCategory: app.category,
    operatingSystem: isWebApp ? "Any" : "ANDROID",
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
    },
    isAccessibleForFree: true,
  };

  if (app.rating) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: app.rating,
      ratingCount: Math.max(Math.round((app.rating || 0) * 1000), 1),
    };
  }

  if (app.playStoreUrl) {
    data.installUrl = app.playStoreUrl;
    data.downloadUrl = app.playStoreUrl;
    sameAs.push(app.playStoreUrl);
    data.potentialAction = {
      "@type": "InstallAction",
      target: app.playStoreUrl,
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
