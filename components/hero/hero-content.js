import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PathIcon } from "../icons/path-icon";
import { otherIcons } from "../icons/other";
import { devIcons } from "../icons/dev";

export const HeroContent = ({ children, ...rest }) => {
  return (
    <>
      <HStack>
        <Badge px={1} bg='brand.300' color='brand.500' boxShadow='sm'>
          Developer
        </Badge>
        <Badge px={1} bg='brand.300' color='brand.500' boxShadow='sm'>
          Maker
        </Badge>
      </HStack>
      <Heading
        pos='relative'
        fontSize={["2xl", "4xl", "3xl", "5xl"]}
        fontWeight='800'
        lineHeight={2.9}
        letterSpacing='1px'
        textTransform='capitalize'
        textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
        pt={6}
      >
        <Box as='span' fontSize='3xl' pb={2}>
          👋{" "}
        </Box>
        <Box
          as='span'
          color='brand.400'
          bgGradient='linear(to-r,  brand.600, brand.400)'
          backgroundClip='text'
        >
          Hi-Ya! I'm Gaurang!
        </Box>
      </Heading>
      <Box pl={2}>
        <Text
          fontSize='1.5rem'
          fontFamily='accent'
          lineHeight={[1.6, null, null, 2.5]}
          color='brand.600'
          textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
          mb={[6, null, null, 3]}
        >
          Thanks for checking out my little corner of the inter-webs!
        </Text>
        <Text
          fontSize='md'
          fontFamily='body'
          lineHeight={2}
          color='brand.700'
          maxW='lg'
        >
          I still can't get over how amazing it is that you've found me here. I
          guess it's only right that you learn a bit about me while you're here.
        </Text>
      </Box>
    </>
  );
};
