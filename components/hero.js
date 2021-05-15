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

import { CustomIcon } from "@/chakra/icons/custom-icon";

import { convertFormToObject } from "@/utils/form-helpers";
import { DrawnArrow } from "./scribbles/drawn-arrow";

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
        order={[-1, null, 1]}
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
            Maker
          </Badge>
        </HStack>
        <Heading
          fontSize={["3xl", "4xl", "5xl"]}
          // fontFamily='body'
          fontWeight='800'
          lineHeight={2.5}
          textTransform='capitalize'
          textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
          opacity={0.7}
        >
          👋 Hi-Ya! I'm Gaurang.
        </Heading>
        <Text pt={3} pl={2} fontSize='md' fontFamily='body' color='brand.700'>
          I build modern web experiences that help solve real world problems. I
          recently got heavily inspired by the{" "}
          <Box as='span' className='markup'>
            #indiehacking&nbsp;
          </Box>
          community and am currently working on my first{" "}
          <Box as='span' className='markup'>
            #buildinpublic &nbsp;
          </Box>
          project.
        </Text>

        <HeroForm />
      </Container>
      <Box w={"100%"} pos='relative' order={[1, null, -1]} p={36}>
        <Image
          position='relative'
          w='350px'
          mx='auto'
          src={`/personwbgcircle.svg`}
          objectFit='cover'
          filter={"drop-shadow(0 0 0.66rem rgba(70, 94, 55, 0.2))"}
          border='10px'
          borderColor='brand.800'
          borderRadius='49%'
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
      pos='relative'
      w='85%'
      my={32}
      p={6}
      bg='brand.200'
      // opacity={0.8}
      borderRadius='md'
      boxShadow='1px 1px 4px 0 rgba(19,142,118,0.25) inset'
      borderStyle='inset'
      // border={"0.2px inset"}
      borderColor='brand.300'
    >
      <Box
        position='absolute'
        top={-55}
        right={5}
        zIndex={1}
        display='inline-block'
      >
        <Text className='scribble'>Follow my progress</Text>
        <DrawnArrow
          className='scribble'
          w={5}
          strokeWidth={0.3}
          // fill='brand.400'
          // filter='drop-shadow(-1px 1px 0.06rem rgba(70, 94, 55, 0.3))'
          transform='rotate(36deg)'
        />
      </Box>
      <Heading
        as='h5'
        lineHeight='1.4'
        fontFamily='article'
        fontSize='sm'
        pb={2}
        color='brand.400'
        textShadow='0px 0px 2px rgba(0,0,0, 0.1)'
      >
        Follow my indie-hacking journey!
      </Heading>
      {message ? (
        <Box>
          <Text>{message}</Text>
        </Box>
      ) : (
        <Box as='form' onSubmit={handleSubscribe}>
          <Text color='gray.500' py={1}>
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
