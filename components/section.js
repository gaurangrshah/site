// @link: https://samuelkraft.com/blog/spring-parallax-framer-motion-guide
// @link: https://github.com/samuelkraft/samuelkraft-next/blob/master/components/parallax.tsx
import { chakra, Box, SlideFade } from "@chakra-ui/react";
import { dividers } from "./dividers";

export const Section = ({ divider, children, ...rest }) => {
  return (
    <>
      {divider && divider.pos === "top" && (
        <Box
          as='svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox={dividers[divider.shape].viewBox}
          {...divider.style}
          fill={divider.fill}
        >
          <path d={dividers[divider.shape].d} />
        </Box>
      )}
      <Box as='section' pos='relative' {...rest}>
        {children}
      </Box>
      {divider && divider.pos === "bottom" && (
        <Box
          as='svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox={dividers[divider.shape].viewBox}
          {...divider.style}
          fill={divider.fill}
        >
          <path d={dividers[divider.shape].d} />
        </Box>
      )}
    </>
  );
};
