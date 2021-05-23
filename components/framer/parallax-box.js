import { Box } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { MotionBox } from "./motion-box";

// @link: https://dev.to/jesuscovam/react-parallax-effect-with-framer-motion-1mhd
export const ParallaxBox = ({ transition, children, ...rest }) => {
  const [ref, isVisible] = useInView({ threshold: 0.7 });
  const { key, ...restTransition } = transition;
  return (
    <MotionBox
      ref={ref}
      key={key}
      {...restTransition}
      // variants={variants}
      animate={isVisible ? "visible" : "hidden"}
      // transition={{ duration: 0.5, ease: "easeOut" }}

      style={{ marginLeft: "50px" }}
      // ml="50px"
    >
      {children}
    </MotionBox>
  );
};
