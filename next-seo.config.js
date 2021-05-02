const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const title = "G. Shah Dev";
const description = "Full Stack Developer - Learning while I #buildInPublic";

const SEO = {
  title,
  description,
  url: `${BASE_URL}`,
  canonical: `${BASE_URL}`,
  twitter: {
    handle: "@Soham_asmi",
    site: "@Soham_asmi",
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${BASE_URL}`,
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
