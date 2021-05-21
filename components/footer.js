import {
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
import { ContactForm } from "./contact-form";
import { Disclaimer } from "./disclaimer";

export const Footer = ({}) => {
  return (
    <Container maxW='container.xl'>
      <Flex
        w='full'
        direction={["column", null, null, "row"]}
        alignItems={["center", null, null, "stretch"]}
      >
        <Box w='full' p={16}>
          <Box w='full' minH='5em' bg='brand.300' borderRadius='10px'>
            <Heading p={6} color='brand.500'>
              Let's Connect
            </Heading>
            <ContactForm />
          </Box>
        </Box>
        <VStack p={16} color='gray.600' justify='center'>
          <HStack w='full' justify='flex-start' spacing={36} my={12}>
            {/* <Box
              as='ul'
              listStyleType='none'
              sx={{ li: { pt: 2, fontSize: "md" } }}
            >
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </Box>
            <Box
              as='ul'
              listStyleType='none'
              sx={{ li: { pt: 2, fontSize: "md" } }}
            >
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </Box>
            <Box
              as='ul'
              listStyleType='none'
              sx={{ li: { pt: 2, fontSize: "md" } }}
            >
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </Box> */}
          </HStack>
          <Text pb={12}>
            Thank you so much for checking out my work. I'm still in the process
            of putting up more content. There's also several more features I'm
            looking forward to adding including a blog and some interactive
            tutorials. So be sure to check back soon.
          </Text>
          <Disclaimer />
          <Text pt={12}>
            I'm currently open to remote opportunities only. If you have an
            opportunity that you feel I'd be a good fit for, I'd be excited to
            hear from you.
          </Text>
          <Text pb={12}>
            I'm also open to short-term freelance opportunities, I primarily
            specialize in helping startups and SMBs get off the ground. If
            you've got an idea I'd love to discuss it with you!
          </Text>
          <HStack w='full'>
            <Text>GSDev &copy; {new Date().getFullYear()}</Text>
          </HStack>
        </VStack>
      </Flex>
    </Container>
  );
};
