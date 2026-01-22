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

export default function AppFaqStructuredData({ app }: { app: AppData }) {
  if (!app.faqs || app.faqs.length === 0) {
    return null;
  }

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: app.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    url: withBase(`/apps/${app.id}`),
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
