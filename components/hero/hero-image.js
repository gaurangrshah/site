import { useRef, useState } from "react";
import { Image, VStack } from "@chakra-ui/react";
import { ForHire } from "../scribbles/for-hire";
import { socialIcons } from "@/components/icons/social";
import { SocialWrapper } from "@/components/social-icons";

export const HeroImage = ({ children, ...rest }) => {
  return (
    <>
      <VStack w={"100%"} pos='relative' order={[-1, null, -1]} p={[24]}>
        <SocialWrapper
          icons={[
            {
              icon: socialIcons?.twitter,
              href: "https://twitter.com/Soham_Asmi",
            },
            {
              icon: socialIcons?.github,
              href: "https://github.com/gaurangrshah",
            },
            {
              icon: socialIcons?.instagram,
              href: "https://www.instagram.com/garungmusic/",
            },
          ]}
        >
          <Image
            position='relative'
            w={["250px", null, "d350px"]}
            mx='auto'
            src={`/personwbgcircle.svg`}
            objectFit='cover'
            filter={"drop-shadow(0 0 0.66rem rgba(70, 94, 55, 0.2))"}
            borderRadius='50%'
          />
        </SocialWrapper>
        {/* <ForHire mt={-26} /> */}
      </VStack>
    </>
  );
};
