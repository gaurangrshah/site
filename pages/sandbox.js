import Head from "next/head";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { Splash } from "@/components/structure/splash";
import { Playlists } from "@/components/spotify/playlists";
import { NowPlaying } from "@/components/spotify/now-playing";


export default function Sandbox() {
  return (
    <VStack>
      <NowPlaying />
      <Flex m='auto auto' overflow='auto' maxW='full'>
        <Playlists />
      </Flex>
    </VStack>
  );
}
