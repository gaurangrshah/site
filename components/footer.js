import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ContactForm } from "./contact-form";
import { Disclaimer } from "./disclaimer";
import { PathIcon } from "./icons/path-icon";

import { socialIcons } from "@/components/icons/social";
import { social } from "@/app.config";
import { ChNextLink } from "@/components/next-link";
import { MotionBox } from "@/components/framer/motion-box";

export const Footer = ({}) => {
  return (
    <Container maxW='container.xl'>
      <Flex
        w='full'
        direction={["column-reverse", null, null, "row"]}
        alignItems={["center", null, null, "stretch"]}
      >
        <Box w='full' p={2}>
          <Box w='full' minH='5em' bg='primary' borderRadius='10px'>
            <Heading as='h3' p={6} color='bg1'>
              Let's Connect
            </Heading>
            <ContactForm />
          </Box>
        </Box>
        <VStack p={16} color='gray.600' justify='center'>
          <Text pb={12}>
            Thank you so much for checking out my work. I'm still in the process
            of putting up more content.
          </Text>
          <Disclaimer />
        </VStack>
      </Flex>
      <HStack
        pos='relative'
        spacing={3}
        justifyContent={["center", null, null, "flex-end"]}
        alignItems='center'
        color='bg1'
        mt={[6, null, null, 0]}
        mr={[0, null, null, 20]}
      >
        <Text mr={6}>
          {" "}
          &copy;{" "}
          <chakra.span fontWeight='bold' ml={2}>
            GSDev
          </chakra.span>{" "}
          {new Date().getFullYear()}
        </Text>
        <SocialIcons />
      </HStack>
    </Container>
  );
};

export function SocialIcons({}) {
  return (
    <HStack spacing={4}>
      {Object.keys(social).map((channel) => {
        return (
          <ChNextLink
            key={social[channel].href}
            href={social[channel].href}
            isExternal
          >
            <MotionBox whileHover={{ scale: 1.3 }}>
              <PathIcon
                icon={socialIcons[channel]}
                size={
                  channel === "devTo" || channel === "linkedIn"
                    ? "2rem"
                    : "1.25rem"
                }
                fill='currentColor'
              />
            </MotionBox>
          </ChNextLink>
        );
      })}
    </HStack>
  );
}
