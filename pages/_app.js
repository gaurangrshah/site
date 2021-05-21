import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";

import { theme } from "@/chakra";
import { DashboardLayout, DefaultLayout } from "@/chakra/layouts";
import { ScaffoldProvider } from "@/chakra/contexts/scaffold-context";
import { LocalDataProvider } from "@/contexts/local-data-context";
import MessageRouter from "@/components/message-router";
import { Protected } from "@/components/auth";
// import { useUser } from "@/contexts/supabase-context";
import ErrorBoundary from "@/components/error-boundary";

import SEO from "../next-seo.config";
import "@fontsource/caveat/index.css";
import "@fontsource/merriweather-sans/index.css";
import "@fontsource/merriweather/index.css";
import "@fontsource/yeseva-one/index.css";

const App = ({ Component, pageProps, router }) => {
  const isDashboard = router.asPath.includes("dashboard");
  // console.log(theme);
  return (
    <>
      <DefaultSeo {...SEO} />
      <ChakraProvider resetCSS theme={theme} initial>
        <ErrorBoundary>
          <LocalDataProvider>
            <ScaffoldProvider
            // provides user-context, error-context, toast-context
            >
              <MessageRouter asPath={router.asPath}>
                <DefaultLayout>
                  {isDashboard ? (
                    <DashboardLayout>
                      <Protected user={pageProps?.user}>
                        <Component {...pageProps} />
                      </Protected>
                    </DashboardLayout>
                  ) : (
                    <Component {...pageProps} />
                  )}
                </DefaultLayout>
              </MessageRouter>
            </ScaffoldProvider>
          </LocalDataProvider>
        </ErrorBoundary>
      </ChakraProvider>
    </>
  );
};

export default App;
