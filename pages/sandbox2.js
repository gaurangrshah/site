import Head from "next/head";
import { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useElementScroll, useTransform } from "framer-motion";

import { Section } from "@/components/section";
import { MotionBox } from "@/components/framer/motion-box";
import ParallaxBox from "@/components/framer/ParallaxBox";

export default function Sandbox2() {
  const ref = useRef();
  const { scrollY } = useElementScroll(ref);

  return (
    <Box ref={ref} overflowY='scroll' className='hide-scroll' h='100vh'>
      <Section w='full' h='60vh' />
      <Section w='full' h='60vh' />
      <Section w='full' h='60vh' />
        <Section
          w='full'
          h='60vh'
          bg={"gray.500"}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <ParallaxBox scrollY={scrollY} offset={200}>
            Test
          </ParallaxBox>
        </Section>
      <Section w='full' h='60vh' />
    </Box>
  );
}
