import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

import { HeroImage } from "./hero-image";
import { List } from "@/components/list";
import { HeroContent } from "./hero-content";
import { NewsletterSignup } from "@/components/newsletter-signup";
export const Hero = () => {
  return (
    <>
      <SimpleGrid
        columns={[1, null, null, 2]}
        autoFlow={["row", "row dense"]} // reverse grid columns on mobile
        w='full'
        position='relative'
        justifyContent='space-around'
        alignItems='center'
      >
        <HeroImage />
        <Container
          order={[1, null, 1]}
          pos='relative'
          // h={["20vh", null, null, "40vh"]}
          w={"100%"}
          // pt={[24, null, 44]}
          p={[4, null, null, 0]}
          maxW='container.md'
          flex={1}
          color='brand.500'
          bg={["brand.300", null, null, "transparent"]}
          borderRadius='5px'
        >
          <HeroContent />
        </Container>
      </SimpleGrid>
      <Container
        order={[1, null, 1]}
        pos='relative'
        w={"100%"}
        maxW='container.md'
        flex={1}
        color='brand.500'
      >
        <Heading
          as='h3'
          fontSize={["2xl", null, "3xl", "4xl"]}
          fontFamily='accent'
          textAlign='center'
          my={12}
        >
          So, here's a few things you should know about me:
        </Heading>
        <List />
      </Container>
    </>
  );
};
