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
        fontSize={["2xl", "4xl", "3xl", "4xl"]}
        fontWeight='800'
        lineHeight={2.9}
        letterSpacing='1px'
        textTransform='capitalize'
        textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
        pb={[12]}
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
      <Box
        w='350px'
        h='9px'
        filter='blur(1.4rem) opacity(0.3)'
        bg='brand.900'
        mt={-20}
      />
      <Box pt={3} pl={2}>
        <Text
          fontSize='md'
          fontFamily='body'
          lineHeight={2.9}
          color='brand.700'
        >
          I love working with people and building awesome interfaces.
        </Text>
        <br />
        <HStack
          pos='relative'
          border='3px dashed'
          borderColor='brand.400'
          borderRadius='10px'
          w='80%'
          minH='10vh'
          py={4}
          my={4}
        >
          <Box my={6} ml={3} w='96px' h='96px' p={2}>
            <Image src='/noun-construction.svg' />
          </Box>
          <VStack textAlign='left' alignItems='flex-start' pl={3}>
            <Text
              fontFamily='accent'
              flex={1}
              // textAlign='center'
              fontSize='2xl'
              // textShadow='rgba(179, 179, 179, 0.2) 1px 1px 2px'
              color='brand.500'
              p={1}
              px={3}
              bg={"brand.300"}
              transform='rotate(-5deg)'
            >
              Pardon The Appearance
            </Text>
            <Text fontSize='xl' fontFamily='accent'>
              I'm still getting some things sorted.
            </Text>
            <VStack
              w='full'
              align='flex-end'
              my={6}
              p={2}
              bg='brand.200'
              boxShadow='sm'
            >
              <Text fontSize='xs'>
                But if you see something, say something!
              </Text>
              <ButtonGroup
                as={HStack}
                size='sm'
                isAttached
                border='2px solid'
                borderColor='brand.400'
                borderRadius='5px'
                p={1}
              >
                <Button
                  as={Link}
                  href='https://github.com/gaurangrshah/site/issues/new?assignees=&labels=&template=bug_report.md&title='
                  isExternal
                  border='none'
                  textDecoration='none'
                >
                  Report Bugs
                </Button>
                <PathIcon icon={devIcons.github} stroke='brand.800' />
              </ButtonGroup>
            </VStack>
          </VStack>
        </HStack>
        <br />
        <Text w='80%' lineHeight={2.5}>
          I recently got heavily inspired by the{" "}
          <Box as='span' className='markup'>
            #indiehacking&nbsp;
          </Box>
          community and am currently working on my first{" "}
          <Box as='span' className='markup'>
            #buildinpublic &nbsp;
          </Box>
          project.
        </Text>
      </Box>
    </>
  );
};
