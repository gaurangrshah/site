import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import { Splash } from "@/components/structure/splash";
import { Spotify } from "@/components/spotify";

export default function Sandbox() {
  return (
    <>
      <Flex m='auto auto' height='100%' overflow='auto'>
        {process.env.NODE_ENV === "development" ? <Spotify /> : <Splash />}

        {/* Protected content only visible to auhenticaed users
        <ProtectedRoute>
          Go to your <Link href='/dashboard/pages'>dashboard</Link>
        </ProtectedRoute>
        */}
      </Flex>
    </>
  );
}
