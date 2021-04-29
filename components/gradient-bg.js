import * as React from "react";
import { motion } from "framer-motion";
import { chakra, Box } from "@chakra-ui/react";
Box;
export const GradientBg = ({ children, ...rest }) => {
  return (
    <Box pos='relative' w='100%' h='100%' zIndex='-1' {...rest}>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 50 70'
      >
        <motion.linearGradient
          id='linear'
          x1='0%'
          y1='0%'
          x2='100%'
          y2='100%'
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            // duration: 50,
            // type: "tween",
            type: "inertia",
            velocity: 300,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
          }}
        >
          <motion.stop
            stopColor='#4ECDC4'
            animate={{
              stopColor: [
                // "#242F40",
                "#4ECDC4",
                "#F7FFF7",
                "#E3DFFF",
                "#138E76",
                "#086375",
                "#4ECDC4",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 20,
            }}
            offset='25%'
          />
          <motion.stop
            stopColor='#086375'
            animate={{
              stopColor: [
                "#086375",
                "#F7FFF7",
                "#E3DFFF",
                "#138E76",
                "#4ECDC4",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 20,
            }}
            offset='50%'
          />
          <motion.stop
            stopColor='#4ECDC4'
            animate={{
              stopColor: ["#4ECDC4", "#F7FFF7", "#E2FADB"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 20,
            }}
            offset='75%'
          />
          <motion.stop
            stopColor='#E2FADB'
            animate={{
              stopColor: ["#E2FADB", "#242F40", "#4C5563", "#086375"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 20,
            }}
            offset='100%'
          />
        </motion.linearGradient>
        <rect id='a' width='300' height='100' fill='url(#linear)' />
      </motion.svg>
    </Box>
  );
};
