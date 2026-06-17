import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  schema?: object | object[];
}

export default function SEO({
  title,
  description,
  path,
  image = "/images/og-image.jpg",
  type = "website",
  schema
}: SEOProps) {
  const canonicalUrl = `https://peyzajsarayi.com${path}`;
  const fullTitle = `${title} | Peyzaj Sarayı Seraları & Tasarım`;

  return (
    <Helmet>
      {/* 1. Language attribute */}
      <html lang="tr" />

      {/* 2. Primary Title & Description */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* 3. Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Peyzaj Sarayı" />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith("http") ? image : `https://peyzajsarayi.com${image}`} />
      <meta property="og:url" content={canonicalUrl} />

      {/* 4. Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith("http") ? image : `https://peyzajsarayi.com${image}`} />

      {/* 5. JSON-LD Schema (if defined) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
