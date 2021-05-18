import React from "react";
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

import { PathIcon } from "@/components/icons/path-icon";
import { TransitionBox } from "@/chakra/TransitionBox";
import { devIcons } from "./icons/dev";

export const Work = ({}) => {
  return (
    <>
      <Heading
        fontSize='5xl'
        textAlign='center'
        bgGradient='linear(to-l,  brand.600, brand.400)'
        backgroundClip='text'
        textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
        pb={24}
      >
        Recent Work
      </Heading>
      <Flex pos='relative'>
        <TransitionBox
          display='flex'
          justifyContent='center'
          alignItems='center'
          w='50%'
          // h={["20vh", null, "30vh"]}
          px={[16, null, null, 36]}
          bgGradient='linear(to-br, #FAD201, #FEE35D)'
          boxShadow='md'
          p={36}
        >
          <Image src='/falcon.svg' />
        </TransitionBox>
        <VStack
          // justify='flex-end'
          align='flex-start'
          pos='relative'
          w='50%'
          bg='brand.800'
          // bgGradient='linear(to-br, brand.dark, brand.700)'
          p={6}
        >
          <HStack
            as={Link}
            href='https://www.falcondrivingnj.com'
            isExternal
            w='100%'
            justify='space-between'
            _hover={{
              textDecoration: "none",
              color: "#FAD201",
              transition: "color 200ms",
            }}
            transition='color 200ms'
          >
            <Heading
              as='h3'
              fontFamily='article'
              pb={3}
              borderBottom='2px'
              cursor='pointer'
            >
              Falcon
            </Heading>
            <Text
              fontSize='xl'
              fontWeight='bold'
              // color='brand.400'
              opacity='0.6'
              bg='brand.900'
              px={2}
            >
              2021
            </Text>
          </HStack>
          <HStack flex={1} w='full' align='center' justify='center' mx={"auto"}>
            <Box bg='rgba(226, 250, 219, 0.6)' borderRadius='6px'>
              <PathIcon
                icon={devIcons.nodejs}
                size={["1.5rem", "2rem", "3rem"]}
                fill='brand.dark'
                p={["0.25rem", null, 2]}
              />
            </Box>
            <Text
              px={[1, null, null, 6]}
              color='brand.400'
              fontSize={["2xl", null, null, "4xl"]}
            >
              +
            </Text>
            <Box bg='rgba(226, 250, 219, 0.6)' borderRadius='6px'>
              <PathIcon
                icon={devIcons.next}
                size={["1.5rem", "2rem", "3rem"]}
                fill='brand.dark'
                p={["0.25rem", null, 2]}
              />
            </Box>
            <Text
              px={[1, null, null, 6]}
              color='brand.400'
              fontSize={["2xl", null, null, "4xl"]}
            >
              +
            </Text>
            <Box bg='rgba(226, 250, 219, 0.6)' borderRadius='6px'>
              <PathIcon
                icon={devIcons.airtable}
                size={["1.5rem", "2rem", "3rem"]}
                fill='brand.dark'
                p={["0.25rem", null, 2]}
              />
            </Box>
            <Text
              px={[1, null, null, 6]}
              color='brand.400'
              fontSize={["2xl", null, null, "4xl"]}
            >
              +
            </Text>
            <Box bg='rgba(226, 250, 219, 0.6)' borderRadius='6px'>
              <PathIcon
                icon={devIcons.vercel}
                size={["1.5rem", "2rem", "3rem"]}
                fill='brand.dark'
                p={["0.25rem", null, 2]}
              />
            </Box>
          </HStack>
          <HStack spacing={3} justify='flex-end' w='full'>
            {/* <Badge colorScheme="teal">Branding</Badge> */}
            <Badge colorScheme='teal' fontSize='xs'>
              Design
            </Badge>
            <Badge colorScheme='teal' fontSize='xs'>
              UX/UI
            </Badge>
            <Badge colorScheme='teal' fontSize='xs'>
              Development
            </Badge>
            <Badge colorScheme='teal' fontSize='xs'>
              SEO
            </Badge>
          </HStack>
        </VStack>
      </Flex>
      <Flex pos='relative'>
        <VStack align='flex-start' pos='relative' w='50%' bg='brand.800' p={6}>
          <HStack
            as={Link}
            href='https://www.platinumpropservices.com'
            isExternal
            w='100%'
            justify='space-between'
            _hover={{
              textDecoration: "none",
            }}
            textDecoration='none'
          >
            <Heading
              as='h3'
              fontFamily='article'
              pb={3}
              borderBottom='2px'
              cursor='pointer'
              _hover={{
                color: "#00186D",
                transition: "color 200ms",
                textDecoration: "none",
              }}
              transition='color 200ms'
            >
              Platinum
            </Heading>
            <Text
              fontSize='xl'
              fontWeight='bold'
              // color='brand.400'
              opacity='0.6'
              bg='brand.900'
              px={2}
            >
              2020
            </Text>
          </HStack>
          <HStack flex={1} w='full' align='center' justify='center' mx={"auto"}>
            <Box bg='rgba(226, 250, 219, 0.6)' borderRadius='6px'>
              <PathIcon
                icon={devIcons.graphql}
                size={["1.5rem", "2rem", "3rem"]}
                fill='brand.dark'
                p={["0.25rem", null, 2]}
              />
            </Box>
            <Text
              px={[1, null, null, 6]}
              color='brand.400'
              fontSize={["2xl", null, null, "4xl"]}
            >
              +
            </Text>
            <Box bg='rgba(226, 250, 219, 0.6)' borderRadius='6px'>
              <PathIcon
                icon={devIcons.gatsby}
                size={["1.5rem", "2rem", "3rem"]}
                fill='brand.dark'
                p={["0.25rem", null, 2]}
              />
            </Box>
            <Text
              px={[1, null, null, 6]}
              color='brand.400'
              fontSize={["2xl", null, null, "4xl"]}
            >
              +
            </Text>
            <Box bg='rgba(226, 250, 219, 0.6)' borderRadius='6px'>
              <PathIcon
                icon={devIcons.strapi}
                size={["1.5rem", "2rem", "3rem"]}
                fill='brand.dark'
                p={["0.25rem", null, 2]}
              />
            </Box>
            <Text
              px={[1, null, null, 6]}
              color='brand.400'
              fontSize={["2xl", null, null, "4xl"]}
            >
              +
            </Text>
            <Box bg='rgba(226, 250, 219, 0.6)' borderRadius='6px'>
              <PathIcon
                icon={devIcons.netlify}
                size={["1.5rem", "2rem", "3rem"]}
                fill='brand.dark'
                p={["0.25rem", null, 2]}
              />
            </Box>
          </HStack>
          <HStack spacing={3} justify='flex-end' w='full'>
            {/* <Badge colorScheme="teal">Branding</Badge> */}
            <Badge colorScheme='teal'>Design</Badge>
            <Badge colorScheme='teal'>UX/UI</Badge>
            <Badge colorScheme='teal'>Development</Badge>
            <Badge colorScheme='teal'>SEO</Badge>
          </HStack>
        </VStack>
        <TransitionBox
          display='flex'
          justifyContent='center'
          alignItems='center'
          w='50%'
          px={[16, null, null, 36]}
          // h={["20vh", null, "30vh"]}
          bgGradient='linear(to-tr, #0A3FFF, #00186D)'
          boxShadow='md'
          p={36}
        >
          <Image src='/pps-latest.svg' />
        </TransitionBox>
      </Flex>
    </>
  );
};
