import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import { Splash } from "@/components/structure/splash";

export default function Landing() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Full Stack Developer - Learning while building in public'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://gshahdev.com/' />
        <meta property='og:title' content='G. Shah Dev' />
        <meta
          property='og:description'
          content='Full Stack Developer - Learning while building in public'
        />
        <meta
          property='og:image'
          content='https://cdn.jsdelivr.net/gh/gaurangrshah/_shots@master/scrnshots/image.png'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://gshahdev.com/' />
        <meta property='twitter:title' content='G. Shah Dev' />
        <meta
          property='twitter:description'
          content='Full Stack Developer - Learning while building in public'
        />
        <meta
          property='twitter:image'
          content='https://cdn.jsdelivr.net/gh/gaurangrshah/_shots@master/scrnshots/image.png'
        />
      </Head>

      <Flex m='auto auto'>
        <Splash />

        {/* Protected content only visible to auhenticaed users
        <ProtectedRoute>
          Go to your <Link href='/dashboard/pages'>dashboard</Link>
        </ProtectedRoute>
        */}
      </Flex>
    </>
  );
}
