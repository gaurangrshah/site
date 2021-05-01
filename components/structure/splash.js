import {
  Box,
  chakra,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { LogoIcon } from "@/components/logo-icon";
import { MotionBox } from "../motion-box";
import { CustomIcon } from "@/chakra/icons/custom-icon";

export const Splash = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        direction='column'
        w='full'
        h='full'
        textAlign='center'
        mx='auto'
        // my='auto'
      >
        <MotionBox
          position='absolute'
          top='0'
          zIndex='1'
          width='600px'
          height='600px'
          borderRadius='50%'
          bgGradient='linear(to-r, rgba(255,255,255, 0), rgba(255,255,255, 0.3))'
          opacity='0.1'
          initial={{ rotate: 0, x: "-30%", y: "-30%" }}
          animate={{
            rotate: [0, 45, 90, 135, 280, 325, 360],
            x: ["-30%", "80%", "130%", "100%", "60%", "-30%"],
            y: ["-30%", "10%", "30%", "120%", "50%", "-30%"],
          }}
          transition={{
            duration: 20,
            type: "tween",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        <Box
          position='relative'
          bg='brand.dark'
          opacity='0.9'
          w={["70%", "container.xs", "50%"]}
          boxShadow='md'
          borderRadius='5px'
          py={24}
          zIndex='modal'
          mx='auto'
          my='auto'
          zindex='2'
          mt='15%'
        >
          <Box w='100px' mx='auto' my='auto'>
            <Image src={`/personwbg.svg`} />
          </Box>

          <Heading as='h2' color='brand.400' lineHeight='2'>
            Gaurang Shah
          </Heading>
          <Text fontSize='md' textAlign='center' color='brand.300'>
            <chakra.p
              as='span'
              lineHeight='2'
              role='img'
              aria-label='waving hand'
              fontSize='3xl'
              verticalAlign='middle'
            >
              👋{"   "}
            </chakra.p>{" "}
            Hey! I'm a Web Developer learning while building in public.
          </Text>
          <CustomIcon icon='add' />
        </Box>
      </Flex>
    </>
  );
};
