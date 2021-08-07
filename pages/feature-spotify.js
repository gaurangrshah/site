import Head from "next/head";
import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import { NowPlaying } from "@/components/spotify/now-playing";

export default function Sandbox() {
  return <NowPlaying />;
}
Sandbox.layout = "Default"
