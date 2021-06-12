import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";

import { ChNextLink } from "@/components/next-link";

export function Header({ children, ...rest }) {
  return (
    <Box
      margin='auto'
      pos='absolute'
      top={0}
      left={0}
      right={0}
      h='100px'
      zIndex={1}
    >
      <Container maxW='container.md'>
        <HStack as='header' w='full' justify='space-between' py={6}>
          <VisuallyHidden>
            <Heading>G.S. Dev</Heading>
          </VisuallyHidden>
          <ChNextLink href='/' cursor='pointer'>
            <Image src='/logo.svg' alt='gsdev logo' h='60px' />
          </ChNextLink>
          <ChNextLink
            href='/blog'
            cursor='pointer'
            fontSize='lg'
            fontWeight='700'
            color='brand.400'
            _hover={{
              color: "brand.500",
            }}
          >
            blog
          </ChNextLink>
        </HStack>
      </Container>
    </Box>
  );
}
