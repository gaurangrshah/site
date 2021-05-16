import { Badge, Box, Container, Heading, HStack, Text } from "@chakra-ui/react";
import { NewsletterSignup } from "../newsletter-signup";

export const HeroContent = ({ children, ...rest }) => {
  return (
    <>
      <HStack>
        <Badge
          px={1}
          // bgGradient='linear(to-br,  brand.600, brand.400)'
          // color='brand.200'
          bg='brand.300'
          color='brand.500'
          boxShadow='sm'
        >
          Developer
        </Badge>
        <Badge
          px={1}
          // bgGradient='linear(to-br,  brand.600, brand.400)'
          // color='brand.200'
          bg='brand.300'
          color='brand.500'
          boxShadow='sm'
        >
          Maker
        </Badge>
      </HStack>
      <Heading
        pos='relative'
        fontSize={["2xl", "3xl", "4xl", "5xl"]}
        fontWeight='800'
        pb={[12]}
        pt={6}
        letterSpacing='1px'
        textTransform='capitalize'
        textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
        opacity={0.7}
        // color='brand.600'
        // color='brand.100'
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
      <Text
        pt={3}
        pl={2}
        fontSize='md'
        fontFamily='body'
        lineHeight={2.5}
        color='brand.700'
      >
        I build modern web experiences that help solve real world problems.{" "}
        <br />I recently got heavily inspired by the{" "}
        <Box as='span' className='markup'>
          #indiehacking&nbsp;
        </Box>
        community and am currently working on my first{" "}
        <Box as='span' className='markup'>
          #buildinpublic &nbsp;
        </Box>
        project.
      </Text>

      <NewsletterSignup />
    </>
  );
};
