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
import { useElementScroll, motion, useTransform } from "framer-motion";

import { Section } from "@/components/section";
import { MotionBox } from "@/components/framer/motion-box";
import { ParallaxBox } from "@/components/framer/ParallaxBox";

export default function Sandbox2() {
  const ref = useRef();
  const { scrollYProgress } = useElementScroll(ref);
  console.log(
    "🚀 ~ file: sandbox2.js ~ line 23 ~ Sandbox2 ~ scrollYProgress",
    scrollYProgress
  );

  useEffect(() => {
    return scrollYProgress.onChange((v) => console.log(v));
  }, [scrollYProgress]);

  return (
    <Box ref={ref} overflow='scroll'>
      <Section p={16} h='100vh' />
      <Section p={16} h='100vh'>
        <MotionBox style={{ scaleY: scrollYProgress }}>Test</MotionBox>
      </Section>

      <Section p={16} h='100vh' />
    </Box>
  );
}
