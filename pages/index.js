import { useEffect } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { Section, SingleSection, DualSection } from "@/components/section";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Outro } from "@/components/outro";

import { beforeBox } from "@/chakra/variants";

import { NewsletterSignup } from "@/components/newsletter-signup";
import { Footer } from "@/components/footer";
import { ParallaxBox } from "@/components/framer/parallax-box";
import { transitions } from "@/components/framer/transitions";

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const Index = () => {
  // useEffect(() => {
  //   document.fonts.load("12px Caveat").then(() => console.log("loaded"));
  // });

  return (
    <Box>
      <SingleSection
        bg='transparent'
        zIndex={0}
        minH='60vh'
        _before={beforeBox({})}
        py={24}
        px={[4, 16]}
        bg='brand.300'
        divider={{
          pos: "bottom",
          shape: "tilt",
          style: { stroke: "transparent", fill: "brand.300" },
        }}
      >
        <Hero />
      </SingleSection>
      <Section mt={6} mb={24}>
        <Container w='full' maxW='container.xl' textAlign='center'>
          <Heading as='h2' mb={0}>
            Follow my journey.
          </Heading>
          <Text mt={3} mb={24}>
            As I build and break things - all in public.
          </Text>
          <Box w='full' mx='auto' textAlign='left'>
            <Text
              w='container.sm'
              mx='auto'
              mb={12}
              fontSize='lg'
              lineHeight={2.5}
            >
              I recently got heavily inspired by the{" "}
              <Box as='span' className='markup'>
                #indiehacking&nbsp;
              </Box>
              community and am currently working on my first{" "}
              <Box as='span' className='markup'>
                #buildinpublic &nbsp;
              </Box>
              project.
            </Text>
          </Box>
          <UpcomingProject />
          <ParallaxBox transition={transitions.slideLToR}>
            <NewsletterSignup />
          </ParallaxBox>
        </Container>
      </Section>
      <Section py={16} minH='40vh' mt={62}>
        <Work />
      </Section>
      <Section pb={6} minH='30vh'>
        <Outro />
      </Section>
      <DualSection
        pb={12}
        minH='40vh'
        bg='brand.300'
        divider={{
          pos: "both",
          shape: "tilt",
          style: { stroke: "transparent", fill: "brand.300" },
        }}
      >
        <Footer />
      </DualSection>
    </Box>
  );
};

export default Index;

export const UpcomingProject = ({}) => {
  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      position='relative'
      w='80%'
      h='300px'
      mx='auto'
      my={12}
      pt={12}
      bg='white'
      borderRadius='10px'
      background='#fff;background-image: radial-gradient(at 100% 90%, hsla(228,81%,60%,1) 0, transparent 57%), radial-gradient(at 100% 13%, hsla(255,74%,37%,1) 0, transparent 49%), radial-gradient(at 6% 4%, hsla(274,75%,41%,1) 0, transparent 58%), radial-gradient(at 0% 97%, hsla(332,90%,55%,1) 0, transparent 44%), radial-gradient(at 100% 100%, hsla(195,84%,64%,1) 0, transparent 34%)'
      boxShadow='lg'
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        bg: "linear-gradient(240deg, white, transparent)",
        borderRadius: "10px"
      }}
    >
      <Image
        w='50%'
        mx='auto'
        src='/themeable-brand.svg'
        filter='drop-shadow(0px 0px 2px rgba(70, 94, 55, 0.3))'
      />
      <Text as='small' alignSelf='flex-end' pt={3} mr='26%' color='black'>
        A CodeBuds Collaboration
      </Text>
      <Button disabled variant='outline' size='md' my={9} colorScheme='red'>
        Launching Soon!
      </Button>
      <Image
        position='absolute'
        top={10}
        right={5}
        src='/themeable.svg'
        w='80px'
        filter='drop-shadow(0px 0px 2px rgba(70, 94, 55, 0.3))'
      />
    </Flex>
  );
};
