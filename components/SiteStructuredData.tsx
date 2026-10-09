const siteUrl = "https://getsolutions.app";
const developerPlayStoreUrl =
  "https://play.google.com/store/apps/developer?id=GetSolutions.app";

export default function SiteStructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      // Shared @id: the LineCheck site (uselinecheck.com) points its publisher at this same organisation.
      "@id": `${siteUrl}/#organization`,
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
      publisher: { "@id": `${siteUrl}/#organization` },
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
