import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import { PathIcon } from "@/components/icons/path-icon";
import { otherIcons } from "./icons/other";

export const ReachOut = () => {
  return (
    <Box
      w='full'
      my={36}
      mx='auto'
      bg='brand.300'
      p={[6, 12, null, null, 24]}
      maxW='container.lg'
      textAlign='center'
      borderRadius={[null, null, null, "10px"]}
      bgGradient={`linear(to-tr, brand.500, brand.600)`}
      boxShadow='lg'
    >
      <Heading
        fontSize='5xl'
        textAlign='center'
        lineHeight={2}
        color='brand.300'
      >
        Let's Connect
      </Heading>
      <Box
        p={6}
        m={4}
        border='2px solid'
        borderColor='brand.300'
        borderRadius='8px'
      >
        <Stack
          direction={["column", null, null, "row"]}
          justifyContent={["center", null, null, "space-around"]}
          alignItems={["center", null, null, "stretch"]}
          mx='auto'
          w='full'
          maxW={["container.sm", null, null, "container.md"]}
          spacing={16}
          my={12}
          textAlign='left'
        >
          <Flex
            alignItems='flex-start'
            w='full'
            maxW={["400px", null, "600px"]}
            mx='auto'
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
            alignItems='flex-start'
            w='full'
            maxW={["400px", null, "600px"]}
            mx='auto'
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
        </Stack>
      </Box>
    </Box>
  );
};
