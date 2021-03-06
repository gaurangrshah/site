// @link: https://samuelkraft.com/blog/spring-parallax-framer-motion-guide
// @link: https://github.com/samuelkraft/samuelkraft-next/blob/master/components/parallax.tsx
import { Box } from "@chakra-ui/react";
import { dividers } from "./dividers";

export const Section = ({ children, ...rest }) => {
  return (
    <>
      <Box as='section' pos='relative' overflow="hidden" {...rest}>
        {children}
      </Box>
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
          {...divider.style}
          mb={-1}
        >
          <path d={dividers[divider.shape].top.d} />
        </Box>
      )}

      <Box as='section' pos='relative' overflow='hidden' {...rest}>
        {children}
      </Box>
      {divider && (
        <Box
          as='svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox={dividers[divider.shape].bottom.viewBox}
          {...divider.style}
          mt={-1}
        >
          <path d={dividers[divider.shape].bottom.d} />
        </Box>
      )}
    </>
  );
};

export const SingleSection = ({ divider, children, ...rest }) => {
  return (
    <>
      {divider && divider.pos === "top" && (
        <Box
          as='svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox={dividers[divider.shape].top.viewBox}
          {...divider.style}
          mb={-1}
        >
          <path d={dividers[divider.shape].top.d} />
        </Box>
      )}
      <Box as='section' pos='relative' overflow='hidden' {...rest}>
        {children}
      </Box>
      {divider && divider.pos === "bottom" && (
        <Box
          as='svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox={dividers[divider.shape].bottom.viewBox}
          {...divider.style}
          mt={-1}
        >
          <path d={dividers[divider.shape].bottom.d} />
        </Box>
      )}
    </>
  );
};

/**
 * USAGE:

 <DualSection
        bg='bg1
        divider={{ shape: "tilt", fill: "bg1, style: { mt: 9 } }}
        // _before={beforeBox()}
      >
      {children}
  </DualSection>
 */
