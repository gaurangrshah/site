import React from "react";
import { Box, Container, Heading, Image } from "@chakra-ui/react";

// import { PathIcon } from "@/components/icons/path-icon";
// import { TransitionBox } from "@/chakra/TransitionBox";
// import { devIcons } from "./icons/dev";

export const Work = ({}) => {
  return (
    <>
      <Container maxW='container.xl'>
        <Heading
          fontSize={["3xl", null, "6xl"]}
          mb={24}
          mr={[0, null, 6]}
          border='3px solid transparent'
          borderRightColor='brand.500'
          w={['120px', null,  "250px"]}
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
        minH='50rem'
        mb={[80, null, null, 64]}
        bg='#FAD201'
        boxShadow={["none", null, null, "md"]}
        borderRadius={[null, null, null, "10px"]}
      >
        <Image src='/falcon.svg' w='180px' pt={12} pl={12} />
        <Box
          pos='absolute'
          top={[56, null, 16]}
          right={[1, null, null, 32]}
          w={["350px", null, "450px"]}
        >
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
            transform={[
              "translate(-10rem, -32rem)",
              null,
              null,
              "translate(-10rem, -25rem) ",
            ]}
            filter='drop-shadow(10px 10px 2px rgba(70, 94, 55, 0.3))'
          />
        </Box>
      </Container>
      <Container
        position='relative'
        maxW='container.xl'
        minH='50rem'
        mb={[80, null, null, 52]}
        bg='#00186B'
        boxShadow={["none", null, null, "md"]}
        borderRadius={[null, null, null, "10px"]}
        overflow={["hidden", null, "initial"]}
      >
        <Box
          pos='absolute'
          top={[64, null, null, 36]}
          left={[40, null, null, 64]}
          w={["350px", null, "450px"]}
        >
          <Image
            src='/pps-site-browser.svg'
            borderRadius='12px'
            zIndex={1}
            filter='drop-shadow(10px 10px 2px rgba(70, 94, 55, 0.3))'
          />
          <Image
            w='160px'
            src='/pps-site-mobile.svg'
            borderRadius='12px'
            zIndex={2}
            transform='translate(-10rem, -32rem) '
            filter='drop-shadow(10px 10px 2px rgba(70, 94, 55, 0.3))'
          />
        </Box>
        <Image src='/pps-latest.svg' w='180px' pt={12} pr={12} float='right' />
      </Container>
    </>
  );
};
