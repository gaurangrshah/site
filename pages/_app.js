import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { ThemeEditorDrawerButton } from "@hypertheme-editor-pro/chakra-ui";

import { theme } from "@/chakra";
import { DefaultLayout } from "@/chakra/layouts";
import { ScaffoldProvider } from "@/chakra/contexts/scaffold-context";
import { LocalDataProvider } from "@/contexts/local-data-context";
import MessageRouter from "@/components/message-router";
import { Protected } from "@/components/auth";
// import { useUser } from "@/contexts/supabase-context";
import ErrorBoundary from "@/components/error-boundary";

import SEO from "../next-seo.config";

const App = ({ Component, pageProps, router }) => {
  const isDashboard = router.asPath.includes("dashboard");
  console.log(theme);
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
                  <Component {...pageProps} />
                </DefaultLayout>
              </MessageRouter>
              {process.env.NODE_ENV === "development" && (
                <ThemeEditorDrawerButton pos='fixed' bottom={4} right={2} />
              )}
            </ScaffoldProvider>
          </LocalDataProvider>
        </ErrorBoundary>
      </ChakraProvider>
    </>
  );
};

export default App;
