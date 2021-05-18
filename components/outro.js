import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
export const Outro = () => {
  return (
    <>
      <Box w='full' mx='auto' textAlign='center'>
        <Heading
          color='brand.700'
          fontSize={["5xl", null, "6xl", "7xl"]}
          textAlign='center'
          textShadow='rgba(0, 0, 0, 0.2) 1px 1px 6px'
          lineHeight={2}
          opacity={0.8}
        >
          Why put off for
        </Heading>
        <Heading
          fontSize={["5xl", null, "6xl", "7xl"]}
          textAlign='center'
          bgGradient='linear(to-l,  brand.600, brand.400)'
          backgroundClip='text'
          letterSpacing='6px'
        >
          Tomorrow...
        </Heading>
        <Text
          fontFamily='accent'
          fontSize={["3xl", null, "4xl", "6xl"]}
          textAlign='center'
          // bgGradient='linear(to-l,  brand.600, brand.300)'
          // backgroundClip='text'
          textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
          letterSpacing='4px'
          my={3}
          opacity={0.4}
        >
          That which you can do
        </Text>
        <Text
          fontFamily='heading'
          fontSize={["6xl", "7xl", null, "8xl"]}
          textAlign='center'
          bgGradient='linear(to-l,  brand.600, brand.400)'
          backgroundClip='text'
          lineHeight={1}
          letterSpacing='16px'
        >
          TODAY
        </Text>
      </Box>
      <Box></Box>
    </>
  );
};
