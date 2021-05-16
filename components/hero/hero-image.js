import { useRef, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { ForHire } from "../scribbles/for-hire";

export const HeroImage = ({ children, ...rest }) => {
  return (
    <>
      <Image
        position='relative'
        w='350px'
        mx='auto'
        src={`/personwbgcircle.svg`}
        objectFit='cover'
        filter={"drop-shadow(0 0 0.66rem rgba(70, 94, 55, 0.2))"}
        borderRadius="49%"
      />
      <ForHire mt={-26} />
    </>
  );
};
