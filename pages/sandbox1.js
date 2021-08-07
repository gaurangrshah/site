/** @format */

import { Box, Button } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Section } from "@/components/section";
import { MotionBox } from "@/components/framer/motion-box";
import { PresenceBox } from "@/components/framer/presence-box";
import { List } from "@/components/list";

const Sandbox3 = ({ children, ...rest }) => {
  // const { ref, inView } = useInView({
  //   // trackVisibility: true,
  //   delay: 100,
  // });

  return (
    <Section h='60vh' mt='120px' border='5px solid red' color='gray1'>
      Hello
      <Button variant='solid' colorScheme='teal' size='xl'>
        Test
      </Button>
    </Section>
  );
};

Sandbox3.layout = "Default";

export default Sandbox3;
