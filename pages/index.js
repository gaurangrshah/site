import { Box, Flex, Heading } from "@chakra-ui/react";

import { Section, DualSection } from "@/components/section";
import { Hero } from "@/components/hero";
import { beforeBox } from "@/chakra/variants";
import { Intro } from "@/components/intro";
import { Timeline } from "@/components/timeline";
import { dividers } from "@/components/dividers";

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const Index = () => {
  return (
    <>
      <Section
        border='1px'
        bg='transparent'
        zIndex={0}
        _before={beforeBox({})}
        // py={24}
        px={16}
      >
        <Hero />
      </Section>
      <Heading
        fontSize='6xl'
        textAlign='center'
        bgGradient='linear(to-l,  brand.600, brand.400)'
        backgroundClip='text'
        textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
        mt={64}
      >
        Recent Work
      </Heading>
      <Box
        w='300px'
        h='9px'
        filter='blur(1.4rem) opacity(0.6)'
        bg='brand.600'
        mx='auto'
        mt={-1}
      />

      <DualSection
        bg='brand.500'
        divider={{ shape: "tilt", fill: "brand.500", style: { mt: 9 } }}
        _before={beforeBox()}
      >
        <Flex
          // border='1px'
          position='relative'
          w='full'
          h='70vh'
          bg='transparent'
          justify='center'
          align='center'
          textAlign='center'
        >
          <Box fontFamily='body' fontSize='2xl' color='brand.200'>
            🚀 Coming Soon
          </Box>
        </Flex>
      </DualSection>
      <Section
        border='1px'
        bg='transparent'
        zIndex={0}
        _before={beforeBox({})}
        py={24}
        px={16}
      ></Section>
    </>
  );
};

export default Index;
