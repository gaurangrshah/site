import { Box, Heading } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence } from "framer-motion";

import { MotionBox } from "@/components/framer/motion-box";

const heading = {
  color: "gray1",
  fontSize: ["5xl", "6xl", "8xl", "8xl"],
  textAlign: "left",
  textShadow: "rgba(8,99,117, 0.4) 1px 1px 3px",
  lineHeight: 1.3,
  letterSpacing: "6px",
  // ml:{[24, null, null, 32]},
  // opacity: 0.6,
  // sx: { WebkitTextStroke: "0.025rem rgba(8,99,117, 0.04)" },
};

export const Outro = () => {
  return (
    <>
      <Box
        w='full'
        maxW='container.lg'
        mx='auto'
        textAlign='center'
        overflow='hidden'
        pb={36}
        border='1px solid red'
      >
        <MotionOutro>
          <Heading {...heading}>Why put off</Heading>
        </MotionOutro>
        <MotionOutro>
          <Heading {...heading}>for tomorrow</Heading>
        </MotionOutro>
        <MotionOutro>
          <Heading {...heading}>what you can </Heading>
        </MotionOutro>
        <MotionOutro>
          <Heading {...heading}>do today?</Heading>
        </MotionOutro>
      </Box>
    </>
  );
};

export const MotionOutro = ({ children, ...rest }) => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <>
      {JSON.stringify({ isVisible })}
      <MotionBox
        ref={ref}
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.02,
            },
          },
        }}
        initial='hidden'
        animate={isVisible && "visible"}
        w='600px'
        overflow='hidden'
        m={0}
        gap='10px'
        p='10px'
        mb='2em'
        {...rest}
      >
        {children?.length &&
          children.split(" ").map((currElement, index) => {
            console.log(
              "🚀 ~ file: outro.js ~ line 77 ~ children.split ~ currElement",
              currElement
            );

            return (
              <span
                key={index}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  lineHeight: 1.2,
                  mb: "0.5em",
                }}
              >
                <MotionBox
                  as='span'
                  key={index}
                  variants={{
                    hidden: { y: "100%" },
                    visible: {
                      y: "0%",
                      transition: {
                        ease: "anticipate",
                        duration: 1,
                      },
                    },
                  }}
                  display='block'
                  color='white'
                  fontSize='2em'
                >
                  {currElement}&nbsp;
                </MotionBox>
              </span>
            );
          })}
      </MotionBox>
    </>
  );
};
