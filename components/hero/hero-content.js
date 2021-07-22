import { useEffect, useState } from "react";
import {
  Badge,
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
import { PathIcon } from "../icons/path-icon";
import { otherIcons } from "../icons/other";
import { devIcons } from "../icons/dev";
import { MotionBox } from "@/components/framer/motion-box";

export const HeroContent = ({ children, ...rest }) => {
  return (
    <>
      <HStack>
        <MotionBox
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Badge px={1} bg='primary' color='bg1' boxShadow='sm'>
            Developer
          </Badge>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <Badge px={1} bg='primary' color='bg1' boxShadow='sm'>
            Maker
          </Badge>
        </MotionBox>
      </HStack>
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading
          pos='relative'
          fontSize={["2xl", "4xl", "3xl", "5xl"]}
          fontWeight='800'
          lineHeight={2.9}
          letterSpacing='1px'
          textTransform='capitalize'
          textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
          pt={6}
        >
          <Box as='span' fontSize='3xl' pb={2}>
            👋{" "}
          </Box>
          <Box
            as='span'
            color='secondary'
            bgGradient='linear(to-r,  bg1, secondary)'
            backgroundClip='text'
          >
            Hi-Ya! I'm Gaurang!
          </Box>
        </Heading>
      </MotionBox>
      <Box pl={2}>
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
        >
          <Text
            fontSize='1.5rem'
            fontFamily='accent'
            lineHeight={[1.6, null, null, 2.5]}
            color='bg2'
            textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
            mb={[6, null, null, 3]}
          >
            Thanks for checking out my little corner of the inter-webs!
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <Text
            fontSize='md'
            fontFamily='body'
            lineHeight={2}
            color='gray1'
            maxW='lg'
          >
            I still can't get over how amazing it is that you've found me here.
            I guess it's only right that you learn a bit about me while you're
            here.
          </Text>
        </MotionBox>
      </Box>
    </>
  );
};
