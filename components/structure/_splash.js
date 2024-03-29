import {
  Box,
  chakra,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

import { LogoIcon } from "@/components/logo-icon";
import { MotionBox } from "../framer/motion-box";
import { CustomIcon } from "@/chakra/icons/custom-icon";

export const Splash = () => {
  return (
    <>
      <Flex
        direction='column'
        w='full'
        h='full'
        textAlign='center'
        mx='auto'
        my='auto'
        color='light'
      >
        <MotionBox
          position='absolute'
          top='0'
          zIndex='1'
          width='500px'
          height='400px'
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
            duration: 50,
            type: "spring",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        <Box
          position='relative'
          bg='dark'
          opacity='0.9'
          w={["70%", "container.xs", "50%"]}
          boxShadow='md'
          borderRadius='5px'
          py={24}
          zIndex='modal'
          mx='auto'
          my='auto'
          zindex='2'
        >
          <Box w='100px' mx='auto' my='auto' pb={6}>
            <Image src={`/personwbgcircle.svg`} />
          </Box>

          <Heading as='h2' color='secondary' lineHeight='1' mt={2}>
            Gaurang Shah
          </Heading>
          <chakra.small as='span' textAlign='center'>
            full stack developer
          </chakra.small>
          <Text fontSize='md' textAlign='center' color='primary' py={9}>
            Hey! I'm just setting some things up, check back soon...
          </Text>
          <Divider maxWidth='80%' mx='auto' mb={3} />
          <Box>
            <chakra.p my={3} pb={3}>
              In the meantime, feel free connect with me everywhere else:
            </chakra.p>
            <SocialIcons />
          </Box>

          <Box mt={6}>
            <Link
              href={`https://gallant-mestorf-d7446d.netlify.app`}
              isExternal
            >
              <chakra.p>
                👉 &nbsp; or you can visit the old site here 👈
              </chakra.p>
            </Link>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

const SocialIcons = ({
  icons = ["twitterfill", "github", "linkedin" /*"reddit", "makerlog" */],
  colors = ["twitter.500", "dark", "red.500", "blue.400", "green.400"],
  to = [
    "https://twitter.com/Soham_Asmi",
    "https://github.com/gaurangrshah",
    "https://www.linkedin.com/in/gshah2020/",
    // "https://www.reddit.com/user/CelebrationThink3768",
    // "https://getmakerlog.com/@Soham_Asmi",
  ],
  children,
  ...rest
}) => {
  return (
    <Flex
      direction='row'
      justify='space-evenly'
      align='center'
      px={[16, null, 32]}
      py={3}
      w='full'
      bg={"gray2"}
    >
      {icons?.length &&
        icons.map((icon, i) => {
          return (
            <Link key={icon} href={to[i]} isExternal>
              <CustomIcon
                bg={primary"}
                borderRadius='50%'
                border='2px'
                boxShadow='sm'
                icon={icon}
                size='2.5rem'
                color={colors[i]}
                mx='auto'
                my='auto'
                p={`0.25rem`}
              />
            </Link>
          );
        })}
    </Flex>
  );
};
