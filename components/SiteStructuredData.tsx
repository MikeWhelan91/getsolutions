const siteUrl = "https://getsolutions.app";
const developerPlayStoreUrl =
  "https://play.google.com/store/apps/developer?id=GetSolutions.app";

export default function SiteStructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "GetSolutions",
      url: siteUrl,
      logo: `${siteUrl}/getsolutionslogo.png`,
      sameAs: [developerPlayStoreUrl],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "GetSolutions",
      url: siteUrl,
      publisher: {
        "@type": "Organization",
        name: "GetSolutions",
        url: siteUrl,
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
