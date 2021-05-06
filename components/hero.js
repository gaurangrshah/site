import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import { beforeBox } from "../chakra/variants";

export const Hero = () => {
  return (
    <Flex
      direction={["column-reverse", null, "row"]}
      w='full'
      h={["60vh", null, null, "100vh"]}
      justifyContent={["flex-start", null, "flex-start"]}
      alignItems={"center"}
      position='relative'
      bg='transparent'
      zIndex={0}
      _before={beforeBox({})}
    >
      <Container
        p={16}
        h='40vh'
        w={["90%", null, "60%"]}
        maxW='container.md'
        flex={1}
        color='brand.500'
        mt={8}
      >
        <Text fontSize='md' fontFamily='body' color='brand.700'>
          This is the lead text
        </Text>
        <Heading
          fontSize={["3xl", "4xl", "6xl"]}
          fontFamily='body'
          fontWeight='800'
          lineHeight={2}
          textTransform='capitalize'
          textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
          opacity={0.7}
        >
          This is a heading
        </Heading>
        <Text
          pr={[0, null, 28]}
          fontSize='md'
          fontFamily='body'
          color='brand.700'
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          beatae doloremque laboriosam soluta omnis aut in ipsa, praesentium
          quasi? Animi.
        </Text>
        <Box float='right' mr={[9, null, 36]} mt={9}>
          <Button colorScheme='brand.800' variant='outline'>
            Learn More
          </Button>
        </Box>
      </Container>
      <Box w={["90%", null, "40%"]}>
        <Image
          pr={[0, null, 12]}
          mx='auto'
          mt={8}
          height='300px'
          src={`/gsdev-puzzle-piece.svg`}
          objectFit='cover'
          filter={"drop-shadow(0 0 0.46rem rgba(70, 94, 55, 0.8))"}
        />
      </Box>
    </Flex>
  );
};
