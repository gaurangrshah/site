import { Box, SlideFade } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

export const TransitionBox = ({
  options = { threshold: 0.8 },
  children,
  ...rest
}) => {
  const { ref: ref, inView } = useInView(options);
  return (
    <>
      <Box ref={ref} overflow='hidden' {...rest}>
        {/* {JSON.stringify({ inView })} */}
        <SlideFade in={inView} offsetY='50px' animateOpacity>
          {children}
        </SlideFade>
      </Box>
    </>
  );
};
