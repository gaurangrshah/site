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
      <Box position='relative' my={6} ml={3} w='350px' p={2}>
        {/* <Image position='absolute' top={-12} left={12} src='/noun-construction.svg' w='120px' /> */}
        <Text
          fontFamily='accent'
          flex={1}
          fontSize='2xl'
          color='brand.500'
          p={1}
          px={3}
          bg={"brand.300"}
          transform='rotate(-5deg)'
        >
          Pardon The Appearance
        </Text>
      </Box>
      <VStack w='full' textAlign='left' alignItems='flex-end' pr={3}>
        <Text fontSize='xl' fontFamily='accent' color='gray.700'>
          I'm still getting some things sorted.
        </Text>
        <VStack
          w='full'
          align='flex-end'
          my={6}
          p={2}
          bg='brand.200'
          // boxShadow='sm'
        >
          <Text fontSize='xs'>See something? Say something!</Text>
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
              colorScheme='green'
              rightIcon={<PathIcon icon={devIcons.github} fill='brand.300' />}
            >
              Report Bugs
            </Button>
          </ButtonGroup>
        </VStack>
      </VStack>
    </HStack>
  );
};
