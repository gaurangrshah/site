import { useRef } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import debounce from "lodash.debounce";

import { MotionBox } from "./motion-box";

export const Hero = () => {
  return (
    <SimpleGrid
      columns={[1, null, 2]}
      autoFlow={["row", "row dense"]} // reverse grid columns on mobile
      w='full'
      position='relative'
      justifyContent='space-around'
      alignItems='center'
      my={[6, null, 24]}
    >
      <Container
        order={[1, null, -1]}
        pos='relative'
        h='30vh'
        w={"100%"}
        py={[24, null, 0]}
        maxW='container.md'
        flex={1}
        color='brand.500'
      >
        <HStack>
          <Badge color='brand.600' colorScheme='whiteAlpha'>
            Developer
          </Badge>
          <Badge color='brand.600' colorScheme='whiteAlpha'>
            Creator
          </Badge>
        </HStack>
        <Heading
          fontSize={["3xl", "4xl", "5xl"]}
          fontFamily='body'
          fontWeight='800'
          lineHeight={1.6}
          textTransform='capitalize'
          textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
          opacity={0.7}
        >
          Solutions built to deliver.
        </Heading>
        <Text
          pr={[0, null, 28]}
          fontSize='md'
          fontFamily='body'
          color='brand.700'
        >
          I help startups and SMBs with a user-centric approach to delivering
          robust scalable solutions that are fast, secure, and fully accessible.
        </Text>
        {/* <Box float='right' mr={[9, null, 36]} mt={9}>
          <Button colorScheme='brand.800' variant='outline'>
            Learn More
          </Button>
        </Box> */}
      </Container>
      <LogoHover />
    </SimpleGrid>
  );
};

export const LogoHover = ({}) => {
  const offsetX = useRef();
  const offsetY = useRef();

  const handleMouseMove = (e) => {
    offsetX.current = e.clientX - window.innerWidth / 2;
    offsetY.current = e.clientY - window.innerHeight / 2;
    console.log(offsetX, offsetY);
  };

  return (
    <MotionBox
      w={"100%"}
      pos='relative'
      order={[-1, null, 1]}
      initial={{ x: 0 }}
      whileHover={{ translateX: offsetX.current / 6 }}
      onMouseMove={debounce(handleMouseMove, 100)}
    >
      <Image
        position='relative'
        w='350px'
        mx='auto'
        src={`/gslogo3d.webp`}
        objectFit='cover'
        filter={"drop-shadow(0 0 0.66rem rgba(70, 94, 55, 0.2))"}
      />
    </MotionBox>
  );
};
