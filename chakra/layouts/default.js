import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { ModeToggle } from "../components/mode-toggle";
import Scaffold from "../components/structure/scaffold";
import { Wave } from "@/components/backgrounds/shapes";

import { useColor } from "@/chakra/hooks/use-color";


export function DefaultLayout(props) {
  const { color } = useColor();
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
      <motion.div
        style={{
          postition: "relative",
          height: "100vh",
          zIndex: 0,
          overflow: "hidden",
          background: "rgba(255, 255, 255, 0.1)",
          background:
            "linear-gradient(to bottom right, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.0))",
          backgroundSize: "400% 400%",
        }}
        initial={{ backgroundPostion: "0 100%" }}
        animate={{ backgroundPostion: "0 50%" }}
        transition={{
          type: "inertia",
          velocity: 300,
          repeatType: "loop",
        }}
      >
        <motion.div
          style={{
            height: "100vh",
          }}
          animate={{
            backgroundColor: [
              "#4ECDC4",
              "#138E76",
              "#086375",
              "#E3DFFF",
              "#F7FFF7",
              "#E2FADB",
              "#E3DFFF",
            ],
          }}
          transition={gradientTransition}
        >
          <ModeToggle />
          <Scaffold {...props} />
          <Wave
            colors={[color("fieldLabel"), color("fieldLabel")]}
            position='fixed'
            bottom={0}
            left={0}
            transform='rotate(180deg)'
            sx={{ transformStyle: "preserve-3d" }}
            zIndex='docked'
          />
        </motion.div>
      </motion.div>
    </>
  );
}

<svg
  xmlns='http://www.w3.org/2000/svg'
  class='icon icon-tabler icon-tabler-brand-twitter'
  width='44'
  height='44'
  viewBox='0 0 24 24'
  stroke-width='1.5'
  stroke='#2c3e50'
  fill='none'
  stroke-linecap='round'
  stroke-linejoin='round'
>
  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
  <path  />
</svg>;
