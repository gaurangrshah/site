import { Box, SlideFade } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

export const TransitionBox = ({
  options = { threshold: 0.8 },
  children,
  ...rest
}) => {
  const { ref: testRef, inView } = useInView(options);
  return (
    <>
      <Box ref={testRef} overflow='hidden' {...rest}>
        {/* {JSON.stringify({ inView })} */}
        <SlideFade in={inView} offsetY='50px' animateOpacity>
          {children}
        </SlideFade>
      </Box>
    </>
  );
};
