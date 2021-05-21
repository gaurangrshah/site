import { Box, Container } from "@chakra-ui/react";

import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Outro } from "@/components/outro";

import { beforeBox } from "@/chakra/variants";

import { NewsletterSignup } from "@/components/newsletter-signup";
import { Footer } from "@/components/footer";

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
    <Box>
      <Section
        border='1px'
        bg='transparent'
        zIndex={0}
        _before={beforeBox({})}
        py={24}
        px={16}
      >
        <Hero />
      </Section>
      <Section mt={6} mb={24}>
        <Container w='full' maxW='container.xl'>
          <NewsletterSignup />
        </Container>
      </Section>
      <Section py={16} minH='40vh' mt={62}>
        <Work />
      </Section>
      <Section pb={6} minH='30vh'>
        <Outro />
      </Section>
      <Section pb={36} minH='60vh'>
        <Footer />
      </Section>
    </Box>
  );
};

export default Index;
