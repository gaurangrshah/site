// @link: https://samuelkraft.com/blog/spring-parallax-framer-motion-guide
// @link: https://github.com/samuelkraft/samuelkraft-next/blob/master/components/parallax.tsx
import { chakra, Box, SlideFade } from "@chakra-ui/react";
import { dividers } from "./dividers";

export const Section = ({ divider, children, ...rest }) => {
  return (
    <>
      {divider && (divider.pos === "top" || divider.pos === "both") && (
        <Box
          as='svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox={dividers[divider.shape].viewBox}
          {...divider.style}
          fill={divider.fill}
          stroke={divider.fill}
          mb={-1}
        >
          <path d={dividers[divider.shape].d} />
        </Box>
      )}
      <Box
        as='section'
        pos='relative'
        {...rest}
        border='10px'
        borderColor='green'
      >
        {children}
      </Box>
      {divider && (divider.pos === "bottom" || divider.pos === "both") && (
        <Box
          as='svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox={dividers[divider.shape].viewBox}
          {...divider.style}
          fill={divider.fill}
          mt={-1}
        >
          <path d={dividers[divider.shape].d} />
        </Box>
      )}
    </>
  );
};

export const DualSection = ({ divider, children, ...rest }) => {
  return (
    <>
      {divider && (
        <Box
          as='svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox={dividers[divider.shape].top.viewBox}
          fill={divider.fill}
          {...divider.style}
          mb={-1}
        >
          <path d={dividers[divider.shape].top.d} />
        </Box>
      )}
      <Box as='section' pos='relative' {...rest}>
        {children}
      </Box>
      {divider && (
        <Box
          as='svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox={dividers[divider.shape].bottom.viewBox}
          fill={divider.fill}
          {...divider.style}
          mt={-1}
        >
          <path d={dividers[divider.shape].bottom.d} />
        </Box>
      )}
    </>
  );
};
