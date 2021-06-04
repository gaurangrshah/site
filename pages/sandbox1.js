import { Box } from "@chakra-ui/react";
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
    <Box id='pag-wrap'>
      <Section h='100vh' border='5px' borderColor='red' />
      <Section h='100vh' border='5px' borderColor='red' />
      {/* <PresenceBox options={{ threshold: 0.5, triggerOnce: true }}>
        Test
      </PresenceBox> */}
      <List />

      {/* <Box border='5px' borderColor='red' ref={ref}>
        <AnimatePresence>
          {inView && (
            <MotionBox
              key='test'
              w='300px'
              h='300px'
              bg='brand.300'
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 200 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 2 }}
            >
              Test
            </MotionBox>
          )}
        </AnimatePresence>
      </Box> */}
      <Section h='60vh' />
    </Box>
  );
};

export default Sandbox3;
