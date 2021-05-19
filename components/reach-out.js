import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";

import { PathIcon } from "@/components/icons/path-icon";
import { otherIcons } from "./icons/other";

export const ReachOut = () => {
  return (
    <Box
      w='full'
      p={24}
      my={36}
      mx='auto'
      bg='brand.300'
      textAlign='center'
      maxW='container.md'
      p={[6, 12, null, null, 24]}
      borderRadius={[null, null, null, "10px"]}
      bgGradient={`linear(to-tr, brand.500, brand.600)`}
      boxShadow='lg'
    >
      <Box
        p={6}
        m={4}
        border='2px solid'
        borderColor='brand.300'
        borderRadius='8px'
      >
        <Heading
          fontSize='5xl'
          textAlign='center'
          color='brand.300'
          lineHeight={1}
        >
          Let's Connect
        </Heading>
        <HStack
          justify='space-around'
          align='stretch'
          maxW='container.sm'
          spacing={16}
          mx='auto'
          my={12}
          textAlign='left'
        >
          <Flex
            w='full'
            mx='auto'
            alignItems='flex-start'
            p={6}
            bg='brand.300'
            borderRadius='5px'
            boxShadow='md'
          >
            <Box
              border='2px solid'
              borderColor='brand.400'
              borderRadius='50%'
              p={2}
              mr={2}
            >
              <PathIcon icon={otherIcons.desk} size='2.5rem' />
            </Box>
            <Text
              border='3px solid transparent'
              borderLeftColor='brand.400'
              pl={6}
              py={2}
            >
              I'm currently open to remote opportunities only. If you have an
              opportunity that you feel I'd be a good fit for, I'd be excited to
              hear from you.
            </Text>
          </Flex>
          <Flex
            w='full'
            mx='auto'
            alignItems='flex-start'
            p={6}
            bg='brand.300'
            borderRadius='5px'
            boxShadow='md'
          >
            <Box
              border='2px solid'
              borderColor='brand.400'
              borderRadius='50%'
              p={2}
              mr={2}
            >
              <PathIcon icon={otherIcons.handshake} size='2.5rem' />
            </Box>
            <Text
              border='3px solid transparent'
              borderLeftColor='brand.400'
              pl={6}
              py={2}
            >
              I'm also open to short-term freelance opportunities, I primarily
              specialize in helping startups and SMBs get off the ground. If
              you've got an idea I'd love to discuss it with you!
            </Text>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
};
