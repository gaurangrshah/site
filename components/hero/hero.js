import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { HeroImage } from "./hero-image";
import { List } from "@/components/list";
import { HeroContent } from "./hero-content";
import { MotionBox } from "@/components/framer/motion-box";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { PathIcon } from "@/components/icons/path-icon";
import { devIcons } from "@/components/icons/dev";

export const Hero = () => {
  return (
    <>
      <SimpleGrid
        columns={[1, null, null, 2]}
        autoFlow={["row", "row dense"]} // reverse grid columns on mobile
        w='full'
        position='relative'
        justifyContent='space-around'
        alignItems='center'
      >
        <MotionBox
          initial={{ opacity: 0, rotateY: 0 }}
          animate={{ opacity: 1, rotateY: 360 }}
          transition={{ duration: 1 }}
        >
          <HeroImage />
        </MotionBox>
        <Container
          order={[1, null, 1]}
          pos='relative'
          w={"100%"}
          p={[4, null, null, 0]}
          maxW='container.md'
          flex={1}
          color='bg1'
          bg={["primary", null, null, "transparent"]}
          borderRadius='5px'
        >
          <HeroContent />
        </Container>
      </SimpleGrid>
      <Container
        order={[1, null, 1]}
        pos='relative'
        w={"100%"}
        maxW='container.md'
        flex={1}
        color='bg1'
      >
        <MotionBox
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Heading
            as='h3'
            fontSize={["2xl", null, "3xl", "4xl"]}
            fontFamily='accent'
            textAlign='center'
            my={12}
          >
            So, here's a few things you should know about me:
          </Heading>
        </MotionBox>
        <List />
      </Container>
      <Container
        order={[1, null, 1]}
        pos='relative'
        w={"100%"}
        maxW='container.md'
        flex={1}
        color='bg1'
        mt={12}
      >
        <Flex w='full' align='center'>
          <Text w='full' px={9} my={1}>
            Current Stack
          </Text>
          <Text w='full' px={9} my={1}>
            Preferred tools
          </Text>
        </Flex>

        <Flex w='full' justify='center' align='stretch'>
          <SimpleGrid
            columns={[2, null, null, 3]}
            columnGap={3}
            rowGap={6}
            justifyItems='center'
            alignItems='center'
            w='full'
            p={9}
            mx={[2, null, null, 6]}
            fill='bg2'
            border='1px'
            borderStyle='dashed'
            borderColor='gray.400'
            rounded='lg'
          >
            <PathIcon icon={devIcons.react} size='3rem' />
            <PathIcon icon={devIcons.next} size='3rem' />
            <PathIcon icon={devIcons.supabase} size='3rem' />
            <PathIcon icon={devIcons.chakra} size='3rem' />
            <PathIcon icon={devIcons.framer} size='3rem' />
            <PathIcon icon={devIcons.graphql} size='3rem' />
          </SimpleGrid>
          <SimpleGrid
            columns={[2, null, null, 3]}
            columnGap={3}
            rowGap={6}
            justifyItems='center'
            alignItems='center'
            w='full'
            p={9}
            mx={[2, null, null, 6]}
            fill='bg2'
            border='1px'
            borderStyle='dashed'
            borderColor='gray.400'
            rounded='lg'
          >
            <PathIcon icon={devIcons.vscode} size='3rem' />
            <PathIcon icon={devIcons.github} size='3rem' />
            <PathIcon icon={devIcons.airtable} size='3rem' />
            <PathIcon icon={devIcons.hyper} size='3rem' />
            <PathIcon icon={devIcons.insomnia} size='3rem' />
            <PathIcon icon={devIcons.notion} size='3rem' />
            <PathIcon icon={devIcons.proxyman} size='3rem' />
            <PathIcon icon={devIcons.affinity} size='3rem' />
          </SimpleGrid>
        </Flex>
      </Container>
    </>
  );
};
