import { details } from "@/app.config";

const { siteUrl, title, description } = details;

const SEO = {
  title,
  description,
  url: `${siteUrl}`,
  canonical: `${siteUrl}`,
  twitter: {
    handle: "@Soham_asmi",
    site: "@Soham_asmi",
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}`,
    title,
    description,
    images: [
      {
        url: `https://cdn.jsdelivr.net/gh/gaurangrshah/_shots@master/scrnshots/twitter-card.png`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
    site_name: `${title}`,
  },
};

export default SEO;
