import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import { PathIcon } from "@/components/icons/path-icon";

import { devIcons } from "./icons/dev";

export const Disclaimer = () => {
  return (
    <HStack
      pos='relative'
      border='3px dashed'
      borderColor='brand.400'
      borderRadius='10px'
      w='full'
      py={4}
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
          <Text fontSize='xs'>But if you see something, say something!</Text>
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
  );
};
