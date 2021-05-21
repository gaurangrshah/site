import { useEffect } from "react";
import { Box, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { ModeToggle } from "../components/mode-toggle";
import Scaffold from "../components/structure/scaffold";
import { Wave } from "@/components/backgrounds/shapes";

import { ChInnerWave } from "../components/motion-wave";
import { theme } from "@/chakra";
import { useMounted } from "@/hooks/use-mounted";

export function DefaultLayout(props) {
  const mounted = useMounted();

  const gradientTransition = {
    backgroundColor: {
      type: "tween",
      duration: 100,
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  return (
    <>
      {mounted && process.env.NODE_ENV === "development" ? (
        <MotionGradient gradientTransition={gradientTransition}>
          {/* <ModeToggle /> */}
          <Scaffold {...props} zIndex={1} />
          <WaveFooter />
        </MotionGradient>
      ) : (
        mounted && (
          <>
            {/* <ModeToggle /> */}
            <Scaffold {...props} zIndex={1} />
            <WaveFooter />
          </>
        )
      )}
    </>
  );
}

export const MotionGradient = ({ gradientTransition, children, ...rest }) => {
  return (
    <>
      <motion.div
        style={{
          h: "100vh",
          postition: "relative",
          zIndex: -1,
          overflow: "hidden",
          background: "rgba(255, 255, 255, 0.1)",
          background:
            "linear-gradient(to bottom right, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.0))",
          backgroundSize: "300% 300%",
        }}
        initial={{ backgroundPostion: "0 100%" }}
        animate={{ backgroundPostion: "0 50%" }}
        transition={{
          type: "inertia",
          velocity: 3000,
          repeatType: "loop",
        }}
      >
        <motion.div
          animate={{
            backgroundColor: [
              "#F7FFF7",
              "#C0E8CA",
              "#2CDEBA",
              // "#138E76",
              "#086375",
              "#2CDEBA",
              "#C0E8CA",
              "#F7FFF7",
            ],
          }}
          transition={gradientTransition}
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  );
};

export const WaveFooter = () => {
  return (
    <Box
      {...{
        position: `absolute`,
        bottom: 0,
        width: `full`,
        transform: `scale(1, -1)`,
        zIndex: -1,
      }}
    >
      <ChInnerWave pos='relative' h='full'>
        <Box
          as='svg'
          xmlns='http://www.w3.org/2000/svg'
          id='motion-wave'
          viewBox='0 0 800 338.05'
          preserveAspectRatio='none'
          fill='brand.dark'
          opacity='0.2'
          width='calc(100% - 9px)'
          height='25vh'
        >
          <path>
            <animate
              attributeName='d'
              values='M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z'
              repeatCount='indefinite'
              dur='30s'
            />
          </path>
        </Box>
      </ChInnerWave>
    </Box>
  );
};
