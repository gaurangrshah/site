import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import { Splash } from "@/components/structure/splash";

export default function Landing() {
  return (
    <>
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
