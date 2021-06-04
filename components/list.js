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
      >
        I'm a huge fan of jamstack architecture. I think it's the pinnacle of
        the separation of concerns ideaology.
      </Feature>

      <Feature
        title='Get  $h!t done'
        icon={<PathIcon icon={otherIcons.bleep} />}
      >
        I'm an introvert masquerading as an extrovert in order to get $h!t done.
      </Feature>

      <Feature
        title='Fail to succeed'
        icon={<PathIcon icon={otherIcons.fail2} />}
      >
        I've failed at more things than most people attempt, but for some reason
        that only motivates me more.
      </Feature>
      <Feature title='Oontz oontz' icon={<PathIcon icon={otherIcons.record} />}>
        I'm a die-hard music lover, I enjoy just about anything with a good
        groove to it, but I tend to lean towards deep melodic soulful house and
        techno.
      </Feature>
    </Stack>
  );
}

const Feature = (props) => {
  return (
    <Flex bg='brand.300' p={3} borderRadius='5px'>
      <Flex shrink={0}>
        <Flex
          alignItems='center'
          justifyContent='center'
          h={16}
          w={16}
          rounded='md'
          bg={useColorModeValue("brand.500")}
          color='white'
        >
          <Icon
            boxSize={9}
            fill='currentColor'
            viewBox='0 0 24 24'
            // stroke='currentColor'
            aria-hidden='true'
          >
            {props.icon}
          </Icon>
        </Flex>
      </Flex>
      <Box ml={4}>
        <chakra.dt
          fontSize='lg'
          fontWeight='medium'
          lineHeight='6'
          color={useColorModeValue("gray.900")}
        >
          {props.title}
        </chakra.dt>
        <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};
