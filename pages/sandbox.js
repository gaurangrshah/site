import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";

const Sandbox = () => {
  return (
    <Box mb={64}>
      <Hero />
      <Intro />
    </Box>
  );
};

export default Sandbox;
