import {
  Box,
  chakra,
  Flex,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { PathIcon } from "@/components/icons/path-icon";
import { otherIcons } from "./icons/other";
import { MotionBox } from "@/components/framer/motion-box";

export function List() {
  return (
    <Stack
      spacing={{ base: 10, md: 0 }}
      display={{ md: "grid" }}
      gridTemplateColumns={{ md: "repeat(2,1fr)" }}
      gridColumnGap={{ md: 8 }}
      gridRowGap={{ md: 10 }}
    >
      <Feature
        title='Jamstack aficionado'
        icon={<PathIcon icon={otherIcons.jam} />}
        multiplier={0}
      >
        I'm a huge fan of jamstack architecture. I think it's the pinnacle of
        the separation of concerns ideaology.
      </Feature>

      <Feature
        title='Get  $h!t done'
        icon={<PathIcon icon={otherIcons.bleep} />}
        multiplier={1}
      >
        I'm an introvert masquerading as an extrovert in order to get $h!t done.
      </Feature>

      <Feature
        title='Fail to succeed'
        icon={<PathIcon icon={otherIcons.fail2} />}
        multiplier={2}
      >
        I've failed at more things than most people attempt, but for some reason
        that only motivates me more.
      </Feature>
      <Feature
        title='Oontz oontz'
        icon={<PathIcon icon={otherIcons.record} />}
        multiplier={3}
      >
        I'm a die-hard music lover, I enjoy just about anything with a good
        groove to it, but I tend to lean towards deep melodic soulful house and
        techno.
      </Feature>
    </Stack>
  );
}

const Feature = ({ multiplier, ...props }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: multiplier ? multiplier * 0.1 : 0.1, duration: 1 }}
      display='flex'
      p={3}
    >
      {/* <Flex bg='brand.300' p={3}> */}
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: multiplier ? multiplier * 0.2 : 0.2,
          duration: 1,
        }}
        display='flex'
        flexShrink={0}
      >
        {/* <Flex shrink={0}> */}
        <Flex
          alignItems='center'
          justifyContent='center'
          h={16}
          w={16}
          rounded='md'
          bg={"brand.300"}
          color='brand.600'
          boxShadow='md'
        >
          <Icon
            boxSize={9}
            fill='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            {props.icon}
          </Icon>
        </Flex>
        {/* </Flex> */}
      </MotionBox>
      <Box ml={4}>
        <chakra.dt
          fontSize='lg'
          fontWeight='medium'
          lineHeight='6'
          color='brand.600'
        >
          {props.title}
        </chakra.dt>
        <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
          {props.children}
        </chakra.dd>
      </Box>
      {/* </Flex> */}
    </MotionBox>
  );
};
