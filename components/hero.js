import { useRef, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import debounce from "lodash.debounce";

import { MotionBox } from "./motion-box";
import { CustomIcon } from "@/chakra/icons/custom-icon";

import { convertFormToObject } from "@/utils/form-helpers";

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
          lineHeight={1.3}
          textTransform='capitalize'
          textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
          opacity={0.7}
        >
          Scalable solutions that deliver results.
        </Heading>
        <Text
          pt={3}
          pl={2}
          pr={[0, null, 28]}
          fontSize='md'
          fontFamily='body'
          color='brand.700'
        >
          Fast, secure, user-centric web expereinces built with the latest
          innovative technologies designed to help you connect with your
          audience.
        </Text>
        <HeroForm />
      </Container>
      <Box w={"100%"} pos='relative' order={[-1, null, 1]}>
        <Image
          position='relative'
          w='350px'
          mx='auto'
          src={`/gslogo3d.png`}
          objectFit='cover'
          filter={"drop-shadow(0 0 0.66rem rgba(70, 94, 55, 0.2))"}
        />
      </Box>
    </SimpleGrid>
  );
};

export const HeroForm = ({ children, ...rest }) => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    e.persist();

    setIsSubmitting(true);

    const inputs = convertFormToObject([...e.target.querySelectorAll("input")]);

    const response = await fetch(`/api/subscribe`, {
      method: "POST",
      body: JSON.stringify({ email: inputs?.email }),
    });

    const data = await response.json();
    setIsSubmitting(false);
    if (data?.message) setMessage(data?.message);
  };
  return (
    <Box
      w='85%'
      mt={6}
      p={6}
      bg='brand.200'
      opacity={0.8}
      borderRadius='md'
      boxShadow='sm'
      border={"0.5px"}
    >
      <Heading as='h5' lineHeight='1.4' fontSize='sm' pb={2} color='brand.600'>
        Stay on top of the latest tech trends!
      </Heading>
      {message ? (
        <Box>
          <Text>{message}</Text>
        </Box>
      ) : (
        <Box as='form' onSubmit={handleSubscribe}>
          <Text color='brand.700' py={1}>
            Signup for{" "}
            <Box as='span' fontWeight='600'>
              free early-bird access
            </Box>{" "}
            to my upcoming newsletter
          </Text>
          <InputGroup size='sm' borderColor='brand.500'>
            <Input name='email' type='email' placeholder='you@youremail.com' />
            <InputRightAddon
              children={
                <IconButton
                  type='submit'
                  h='1.75rem'
                  size='sm'
                  color='brand.600'
                  isLoading={isSubmitting}
                  icon={<CustomIcon icon='plane' mt={1} />}
                >
                  Submit
                </IconButton>
              }
            />
          </InputGroup>
        </Box>
      )}
    </Box>
  );
};

export const LogoHover = ({}) => {
  // @FIXME:  animation: logo pan on hover

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
