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
      <Box w='full' mx='auto' textAlign='center' overflow='hidden'>
        <Heading
          color='brand.700'
          fontSize={["3xl", null, "4xl", "5xl"]}
          textAlign='center'
          textShadow='rgba(44, 222, 186, 0.4) 1px 1px 3px'
          lineHeight={2}
          letterSpacing='6px'
          bgGradient='linear(to-l,  "", "")'
          backgroundClip='text'
          opacity={0.8}
          transform='translateX(-12%)'
        >
          Why put off for
        </Heading>
        <Heading
          fontSize={["4xl", null, "6xl", "7xl"]}
          textAlign='center'
          bgGradient='linear(to-l,  brand.600, brand.500)'
          backgroundClip='text'
          letterSpacing='6px'
          textShadow='rgba(44, 222, 186, 0.4) 1px 1px 3px'
          transform='translateX(8%)'
        >
          Tomorrow...
        </Heading>
        <Text
          fontFamily='accent'
          fontSize={["3xl", null, "4xl", "7xl"]}
          textAlign='center'
          textShadow='rgba(180,180,180, 0.9) 1px 1px 3px'
          color='transparent'
          letterSpacing='4px'
          opacity={0.4}
          transform='translateX(-10%)'
          transform='rotate(5deg)'
        >
          what you can do
        </Text>
        <Text
          fontFamily='heading'
          fontSize={["6xl", "7xl", null, "9xl"]}
          textAlign='center'
          bgGradient='linear(to-l,  brand.600, brand.400)'
          backgroundClip='text'
          lineHeight={1}
          letterSpacing='16px'
          textShadow='rgba(44, 222, 186, 0.4) 1px 1px 3px'
        >
          TODAY?
        </Text>
      </Box>
    </>
  );
};
