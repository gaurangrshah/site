import { mode } from "@chakra-ui/theme-tools";

// import { Header, Footer } from "@/chakra/components/structure/_bars";
// import { HeaderContent } from "@/components/structure/header-content";
// import { FooterContent } from "@/components/structure/footer-content";
// import { ascii } from "./utils/ascii";

// console.log(ascii());

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
