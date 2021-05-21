import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import { Section } from "@/components/section";

const Sandbox2 = () => {
  return (
    <Section my={36}>
      <Container maxW='container.xl'>
        <Heading
          fontSize='6xl'
          mb={6}
          mr={6}
          border='3px solid transparent'
          borderRightColor='brand.500'
          w='250px'
          color='brand.dark'
        >
          Recent
          <br />
          Work
        </Heading>
      </Container>
      <Container
        position='relative'
        maxW='container.xl'
        minH='45vh'
        my={52}
        bg='#FAD201'
        boxShadow='md'
        borderRadius='10px'
      >
        <Image src='/falcon.svg' w='180px' pt={12} pl={12} />
        <Box pos='absolute' top={16} right={32} w='450px'>
          <Image
            src='/falcon-site-browser.svg'
            borderRadius='12px'
            zIndex={1}
            filter='drop-shadow(10px 10px 2px rgba(70, 94, 55, 0.3))'
          />
          <Image
            w='200px'
            src='/falcon-site-mobile.svg'
            borderRadius='12px'
            zIndex={2}
            transform='translate(-10rem, -25rem) '
            filter='drop-shadow(10px 10px 2px rgba(70, 94, 55, 0.3))'
          />
        </Box>
      </Container>
      <Container
        position='relative'
        maxW='container.xl'
        minH='45vh'
        my={52}
        bg='#00186B'
        boxShadow='md'
        borderRadius='10px'
      >
        <Box pos='absolute' top={36} left={64} w='450px'>
          <Image
            src='/pps-site-browser.svg'
            borderRadius='12px'
            zIndex={1}
            filter='drop-shadow(10px 10px 2px rgba(70, 94, 55, 0.3))'
          />
          <Image
            w='200px'
            src='/pps-site-mobile.svg'
            borderRadius='12px'
            zIndex={2}
            transform='translate(-10rem, -32rem) '
            filter='drop-shadow(10px 10px 2px rgba(70, 94, 55, 0.3))'
          />
        </Box>
        <Image src='/pps-latest.svg' w='180px' pt={12} pr={12} float='right' />
      </Container>
    </Section>
  );
};

export default Sandbox2;
