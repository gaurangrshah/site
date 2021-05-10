import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import { CustomIcon } from "@/chakra/icons/custom-icon";
import { devIcons } from "./icons/dev";
import { MotionBox } from "./motion-box";

export const Intro = () => {
  const [show, setShow] = useState(false);
  return (
    <Stack
      direction='row'
      // w='full'
      position='relative'
      maxW={["90%", null, "70%"]}
      mx='auto'
      cursor='pointer'
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Flex
        direction={["column", null, "row"]}
        as='article'
        w='95%'
        mx='auto'
        bg='brand.300'
        opacity='0.8'
        p={6}
        py={12}
        boxShadow='xl'
        borderRadius='md'
        zIndex={1}
      >
        <Flex
          direction='column'
          alignItems={["center", null, "flex-start"]}
          w={["100%", null, "30%"]}
          borderRight={["0", null, "1px"]}
          borderColor='gray.200'
          boxSizing='border-box'
        >
          <Image ml={6} src={`/personwbgcircle.svg`} maxW='90px' />
          <Box p={6} textAlign={["center", null, "left"]}>
            <Heading
              as='h2'
              fontSize='2xl'
              fontFamily='body'
              textAlign={["center", null, "left"]}
              textTransform='capitalize'
              textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
              lineHeight='1'
              color='brand.500'
              mt={2}
            >
              Gaurang Shah
            </Heading>
            <Text as='small' fontSize='xs' textAlign={["center", null, "left"]}>
              Full Stack Developer
            </Text>
          </Box>
        </Flex>
        <Box
          w={["100%", null, "70%"]}
          mx='auto'
          flex={1}
          p={[12, null, 12]}
          my={["auto", null, 0]}
          textAlign={["center", null, "left"]}
        >
          <Heading
            as='h3'
            fontSize='3xl'
            fontFamily='body'
            color='brand.400'
            lineHeight='1.5'
            textTransform='capitalize'
            textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
          >
            👋 &nbsp; Hi-ya!
          </Heading>
          <Text w='100%' mt={4}>
            Hey, thanks for checking out my little corner of the inter-web.
          </Text>
          <Text w='100%' mt={1}>
            I'm still working on getting more content up, but in the meantime,
            take a look inside my toolbox: 🛠
          </Text>
        </Box>
      </Flex>
      <AnimatePresence zIndex={0}>
        {show && (
          <>
            <MotionBrand
              move={{
                initial: { y: 0, x: 0, opacity: 0 },
                animate: {
                  y: "-3vh",
                  x: `-43vw`,
                  opacity: 1,
                },
                exit: { y: 0, x: 0, opacity: 0 },
                transition: { type: "spring", bounce: 0.2, delay: 0.1 },
              }}
              icon={devIcons.apollo}
              color={"brand.400"}
            />
            <MotionBrand
              move={{
                initial: { y: 0, x: 0, opacity: 0 },
                animate: {
                  y: "5vh",
                  x: `-45vw`,
                  opacity: 1,
                },
                exit: { y: 0, x: 0, opacity: 0 },
                transition: { type: "spring", bounce: 0.2 },
              }}
              icon={devIcons.docker}
              color={"brand.400"}
            />
            <MotionBrand
              move={{
                initial: { y: 0, x: 0, opacity: 0 },
                animate: {
                  y: "-6vh",
                  x: `16vw`,
                  opacity: 1,
                },
                exit: { y: 0, x: 0, opacity: 0 },
                transition: { type: "spring", bounce: 0.2, delay: 0.25 },
              }}
              icon={devIcons.gatsby}
              color={"brand.400"}
            />
            <MotionBrand
              move={{
                initial: { y: 0, x: 0, opacity: 0 },
                animate: {
                  y: "-11vh",
                  x: `-4vw`,
                  opacity: 1,
                },
                exit: { y: 0, x: 0, opacity: 0 },
                transition: { type: "spring", bounce: 0.2, delay: 0.1 },
              }}
              icon={devIcons.next}
              color={"brand.400"}
              w='6rem'
              h='6rem'
            />
            <MotionBrand
              move={{
                initial: { y: 0, x: 0, opacity: 0 },
                animate: {
                  y: "-7vh",
                  x: `-17vw`,
                  opacity: 1,
                },
                exit: { y: 0, x: 0, opacity: 0 },
                transition: { type: "spring", bounce: 0.2, delay: 0.3 },
              }}
              icon={devIcons.blitz}
              color={"brand.400"}
            />
            <MotionBrand
              move={{
                initial: { y: 0, x: 0, opacity: 0 },
                animate: {
                  y: "-8vh",
                  x: `-33vw`,
                  opacity: 1,
                },
                exit: { y: 0, x: 0, opacity: 0 },
                transition: { type: "spring", bounce: 0.2, delay: 0.1 },
              }}
              icon={devIcons.vercel}
              color={"brand.400"}
            />
            <MotionBrand
              move={{
                initial: { y: 0, x: 0, opacity: 0 },
                animate: {
                  y: "-8vh",
                  x: `30vw`,
                  opacity: 1,
                },
                exit: { y: 0, x: 0, opacity: 0 },
                transition: { type: "spring", bounce: 0.2, delay: 0.1 },
              }}
              icon={devIcons.chakra}
              fill={"brand.400"}
            />
            <MotionBrand
              move={{
                initial: { y: 0, x: 0, opacity: 0 },
                animate: {
                  // y: "-1vh",
                  x: `39vw`,
                  opacity: 1,
                },
                exit: { y: 0, x: 0, opacity: 0 },
                transition: { type: "spring", bounce: 0.2, delay: 0.1 },
              }}
              icon={devIcons.netlify}
              color={"brand.400"}
            />
            <MotionBrand
              move={{
                initial: { y: 0, x: 0, opacity: 0 },
                animate: {
                  y: "9vh",
                  x: `41vw`,
                  opacity: 1,
                },
                exit: { y: 0, x: 0, opacity: 0 },
                transition: { type: "spring", bounce: 0.2, delay: 0.1 },
              }}
              icon={devIcons.heroku}
              color={"brand.400"}
            />
          </>
        )}
      </AnimatePresence>

      <SocialIcons />
    </Stack>
  );
};

export const BrandIcon = ({
  icon = {},
  size = "1.25rem",
  color = "inherit",
  ...rest
}) => {
  const Icon = ({ color, size, ...rest }) => {
    const { d, viewBox, ...restIcon } = icon;
    return (
      <Box
        as='svg'
        viewBox={viewBox}
        width={size}
        height={size}
        fill={color}
        {...rest}
        {...restIcon}
      >
        {/*
        NOTE:  svgs might have multiple paths in order to compose the icon, we'll render each one if we encounter an array
        */}
        {Array.isArray(icon.d) ? (
          d.map((d, i) => <path key={i} d={d} />)
        ) : (
          <path d={d} />
        )}
      </Box>
    );
  };

  return <Icon color={color} size={size} {...rest} />;
};

export const MotionBrand = ({ move, icon, ...rest }) => {
  return (
    <MotionBox
      position='absolute'
      top={0}
      left={`50%`}
      right={`50%`}
      bg='brand.300'
      w='4.5rem'
      h='4.5rem'
      p={2}
      borderRadius='50%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      {...move}
    >
      <BrandIcon
        icon={icon}
        color='#acacac'
        size='3rem'
        filter={`drop-shadow(0 0 0.26rem rgba(70, 94, 55, 0.2))`}
        {...rest}
      />
    </MotionBox>
  );
};

const SocialIcons = ({
  icons = ["twitterfill", "github", "linkedin" /*"reddit", "makerlog" */],
  colors = ["twitter.500", "brand.dark", "red.500", "blue.400", "green.400"],
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
    <Stack
      direction='column'
      justify='flex-start'
      align='flex-end'
      py={2}
      w='5%'
      sx={{ gap: "1em" }}
      {...rest}
    >
      {icons?.length &&
        icons.map((icon, i) => {
          return (
            <Link key={icon} href={to[i]} isExternal zIndex={1}>
              <CustomIcon
                bg='brand.200'
                borderRadius='50%'
                icon={icon}
                size='2rem'
                color={colors[i]}
                mx='auto'
                my='auto'
                p={`0.25rem`}
                boxShadow='sm'
              />
            </Link>
          );
        })}
    </Stack>
  );
};
