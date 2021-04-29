import Image from "next/image";
import { Box, Flex, Heading, Text, useDisclosure } from "@chakra-ui/react";

import { GradientBg } from "@/components/gradient-bg";
import { CHModal } from "../modal";
import { MotionBox } from "../motion-box";
import { motion, useTransform } from "framer-motion";
import { LogoIcon } from "@/components/logo-icon";

export const Splash = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const gradientTransition = {
    backgroundColor: {
      type: "tween",
      duration: 100,
      repeat: Infinity,
      repeatType: "loop",
    },
  };
  return (
    <>
      <Flex
        direction='column'
        w='full'
        h='full'
        textAlign='center'
        mx='auto'
        my='auto'
      >
        <motion.div
          // w='full'
          // h='full'
          // backgroundSize='400% 400%'
          style={{
            height: "100vh",
            backgroundSize: "400% 400%",
            // backgroundImage: "linear-gradient(270deg, #546624, #0bd48b)",
            objectFit: "contain",
          }}
          s
          animate={{
            backgroundColor: [
              "#E3DFFF",
              "#F7FFF7",
              "#E2FADB",
              "#4ECDC4",
              "#138E76",
              "#086375",
              "#242F40",
            ],
          }}
          transition={gradientTransition}
        ></motion.div>
      </Flex>
      <CHModal
        isOpen={true}
        onClose={onClose}
        noOverlay
        useInert
        allowPinchZoom
        // trapFocus={falses}
        allowClose={false}
      >
        <Box w='100px' mx='auto' my='auto'>
          <LogoIcon />
        </Box>
        <Heading as='h3' fontSize='md' textAlign='center' py={24}>
          Under Maintenance, check soon! shortly
        </Heading>
      </CHModal>
    </>
  );
};
