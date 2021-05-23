import { useEffect } from "react";

import { Box, Container } from "@chakra-ui/react";

import { Section, SingleSection, DualSection } from "@/components/section";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Outro } from "@/components/outro";

import { beforeBox } from "@/chakra/variants";

import { NewsletterSignup } from "@/components/newsletter-signup";
import { Footer } from "@/components/footer";
import { ParallaxBox } from "@/components/framer/parallax-box";
import { transitions } from "@/components/framer/transitions";

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
  useEffect(() => {
    document.fonts.load("12px Caveat").then(() => console.log("loaded"));
  });

  return (
    <Box>
      <SingleSection
        bg='transparent'
        zIndex={0}
        _before={beforeBox({})}
        py={24}
        px={[4, 16]}
        bg='brand.300'
        divider={{
          pos: "bottom",
          shape: "tilt",
          style: { stroke: "transparent", fill: "brand.300" },
        }}
      >
        <Hero />
      </SingleSection>
      <Section mt={6} mb={24}>
        <Container w='full' maxW='container.xl'>
          <ParallaxBox transition={transitions.slideLToR}>
            <NewsletterSignup />
          </ParallaxBox>
        </Container>
      </Section>
      <Section py={16} minH='40vh' mt={62}>
        <Work />
      </Section>
      <Section pb={6} minH='30vh'>
        <Outro />
      </Section>
      <DualSection
        pb={12}
        minH='40vh'
        bg='brand.300'
        divider={{
          pos: "both",
          shape: "tilt",
          style: { stroke: "transparent", fill: "brand.300" },
        }}
      >
        <Footer />
      </DualSection>
    </Box>
  );
};

export default Index;
