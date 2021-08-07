/** @format */

import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import {
  ThemeEditorProvider,
  ThemeEditorDrawerButton,
} from '@hypertheme-editor-pro/chakra-ui';
import { SupabaseProvider } from '@/contexts/supabase-context';
import { sb } from '@/lib/initSupabase';

import { theme } from '@/chakra';
import { Default as DefaultLayout } from '@/chakra/layouts';
// import * as Layouts from '@/chakra/layouts';
import { ScaffoldProvider } from '@/chakra/contexts/scaffold-context';
import { LocalDataProvider } from '@/contexts/local-data-context';
import MessageRouter from '@/components/message-router';
import { Protected } from '@/components/auth';
import ErrorBoundary from '@/components/error-boundary';

import appConfig from '@/app.config';
import SEO from '../next-seo.config';
import { combineProviders } from '@/utils/react';

const App = ({ Component, pageProps, router }) => {
  const { providers } = appConfig;

  const Providers = combineProviders(providers);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ChakraProvider resetCSS theme={theme} initial>
        <ErrorBoundary>
          <SupabaseProvider sb={sb}>
            <Providers>
              <MessageRouter asPath={router.asPath}>
                <DefaultLayout>
                  <Component {...pageProps} />
                </DefaultLayout>
              </MessageRouter>
              {process.env.NODE_ENV === 'development' && (
                <ThemeEditorDrawerButton pos="fixed" bottom={4} right={2} />
              )}
            </Providers>
          </SupabaseProvider>
        </ErrorBoundary>
      </ChakraProvider>
    </>
  );
};

export default App;
