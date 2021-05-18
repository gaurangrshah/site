import Head from "next/head";
import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { useElementScroll } from "framer-motion";

import { Section } from "@/components/section";
import ParallaxBox from "@/components/framer/parallax-box";

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
