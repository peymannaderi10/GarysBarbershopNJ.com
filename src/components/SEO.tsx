import { Helmet } from "react-helmet";
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/images/gallery1.JPG",
  ogType = "website",
  structuredData,
  noindex = false
}: SEOProps) => {
  const siteUrl = "https://garsbarbershop.com";
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Ensure structured data is properly injected into the document head
  useEffect(() => {
    if (structuredData) {
      // Remove any existing structured data script for this page
      const existingScript = document.querySelector('script[data-seo-structured-data]');
      if (existingScript) {
        existingScript.remove();
      }

      // Create and inject new structured data script
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-structured-data', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Cleanup function
      return () => {
        const scriptToRemove = document.querySelector('script[data-seo-structured-data]');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [structuredData]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Gary's Barber Shop" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Gary's Barber Shop" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@gars_barbershop" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured Data - Also handled via useEffect for better crawler detection */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 