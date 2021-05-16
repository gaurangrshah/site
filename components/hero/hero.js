import { Container, Flex, SimpleGrid, VStack } from "@chakra-ui/react";

import { HeroImage } from "./hero-image";
import { HeroContent } from "./hero-content";

export const Hero = () => {
  return (
    <SimpleGrid
      columns={[1, null, 2]}
      autoFlow={["row", "row dense"]} // reverse grid columns on mobile
      w='full'
      position='relative'
      justifyContent='space-around'
      alignItems='center'
      // my={[6, null, 24]}
    >
      <VStack
        w={"100%"}
        pos='relative'
        order={[-1, null, -1]}
        p={[24, null, 36]}
      >
        <HeroImage />
      </VStack>
      <Container
        order={[1, null, 1]}
        pos='relative'
        h='30vh'
        w={"100%"}
        py={[24, null, 0]}
        maxW='container.md'
        flex={1}
        color='brand.500'
      >
        <HeroContent />
      </Container>
    </SimpleGrid>
  );
};
