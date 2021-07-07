const appConfig = {
  details: {
    title: "Next.js + Supabase CMS",
    description:
      "A user-friendly cms built with react using next.js and supabase",
    siteUrl: process.env.NEXT_PUBLIC_URL,
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    cdnUrl: process.env.NEXT_PUBLIC_CDN_URL,
  },
  routes: {
    home: "/",
    about: "about",
    services: "services",
    contact: "contact",
    dashboard: "dashboard",
    blog: 'blog',
    profile: "profile",
    onboarding: "onboarding",
    signin: "auth/signin",
    signout: "auth/signout",
    signup: "auth/signup",
    forgotten_password: "auth/forgotten-password",
    update_password: "auth/update-password",
    api: {
      url: process.env.NEXT_PUBLIC_API_URL,
      endpoints: {
        // include endpoints exposed via client side api routes
      },
    },
  },
  social: {
    github: { href: "https://github.com/gaurangrshah" },
    twitter: { href: "https://twitter.com/Soham_Asmi" },
    devTo: { href: "https://dev.to/gaurangrshah" },
    hashnode: { href: "https://hashnode.com/@gsdev" },
    linkedIn: { href: "https://www.linkedin.com/in/gshah2020/" },
  },
  options: {
    toasts: { show: true },
    errors: { show: true, config: { tags: true } },
  },
};

appConfig.scaffold = {
  theme: "default",
};

appConfig.seo = {};

module.exports = appConfig;
