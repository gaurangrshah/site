import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { PathIcon } from "@/components/icons/path-icon";

import { devIcons } from "./icons/dev";

export const Disclaimer = () => {
  return (
    <Stack
      direction={["column"]}
      align={["center"]}
      pos='relative'
      border='3px dashed'
      borderColor='secondary'
      borderRadius='10px'
      w='full'
      py={2}
    >
      <Box position='relative' w='100%' my={3} ml={3} p={2} textAlign='center'>
        <Text
          fontFamily='accent'
          flex={[0, null, 1]}
          fontSize='2xl'
          color='primary'
          mt={3}
          py={1}
          px={3}
          bg='bg1'
          transform='rotate(-22deg) translate(-2em, -3em)'
          maxW='200px'
        >
          Pardon The Appearance
        </Text>
        <Text
          fontSize={["2xl", null, null, "4xl"]}
          fontFamily='accent'
          color='bg2'
          pt={[0, null, null, 6]}
        >
          I'm still getting some things sorted.
        </Text>
      </Box>
      <VStack w='full' textAlign='left' alignItems='flex-end' pr={3}>
        <VStack w='full' align='flex-end' p={2}>
          <Text fontSize='xs'>See something? Say something!</Text>
          <Button
            as={Link}
            href='https://github.com/gaurangrshah/site/issues/new?assignees=&labels=&template=bug_report.md&title='
            isExternal
            border='none'
            textDecoration='none'
            colorScheme='green'
            rightIcon={<PathIcon icon={devIcons.github} fill='primary' />}
          >
            Report Bugs
          </Button>
        </VStack>
      </VStack>
    </Stack>
  );
};
