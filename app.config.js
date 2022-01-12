import { ScaffoldProvider } from '@/chakra/contexts/scaffold-context';
import { LocalDataProvider } from '@/contexts/local-data-context';
import { constants } from './chakra/constants';

const defaultProviders = [LocalDataProvider, ScaffoldProvider];
const pluginProviders = [];

const appConfig = {
  details: {
    title: 'G. Shah Dev',
    description: 'Full Stack Developer - Learning and Building in Public',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    cdnUrl: process.env.NEXT_PUBLIC_CDN_URL,
    blogUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
  },
  routes: {
    home: '/',
    about: 'about',
    services: 'services',
    contact: 'contact',
    dashboard: 'dashboard',
    blog: 'blog',
    profile: 'profile',
    onboarding: 'onboarding',
    signin: 'auth/signin',
    signout: 'auth/signout',
    signup: 'auth/signup',
    forgotten_password: 'auth/forgotten-password',
    update_password: 'auth/update-password',
    api: {
      url: process.env.NEXT_PUBLIC_API_URL,
      endpoints: {
        // include endpoints exposed via client side api routes
      },
    },
  },
  social: {
    hashnode: { href: 'https://hashnode.com/@gsdev' },
    github: { href: 'https://github.com/gaurangrshah' },
    twitter: { href: 'https://twitter.com/Soham_Asmi' },
    devTo: { href: 'https://dev.to/gaurangrshah' },
    linkedIn: { href: 'https://www.linkedin.com/in/gshah2020/' },
  },
  options: {
    toasts: { show: true },
    errors: { show: true, config: { tags: true } },
  },
  providers: [...defaultProviders, ...pluginProviders],
  constants: {
    // strictly check the negative
    isSSR: !(typeof window !== 'undefined' && window.document?.createElement),
  },
};

// appConfig.scaffold = {
//   theme: "default",
// };

appConfig.seo = {};

module.exports = appConfig;
