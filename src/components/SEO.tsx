import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { SEO_DATA } from '../constants';

interface SEOProps {
  page?: string;
}

export const SEO = ({ page }: SEOProps) => {
  const { language } = useLanguage();
  const data = SEO_DATA[language];

  const title = page ? `${page} | Kirill Uvarov PSY` : data.title;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content="/assets/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={data.description} />
      <meta property="twitter:image" content="/assets/og-image.jpg" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};
