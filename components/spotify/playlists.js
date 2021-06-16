import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Flex,
  Image as ChImage,
  Link,
  SlideFade,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import { MotionBox } from "../framer/motion-box";

export const Playlists = () => {
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(async () => {
    if (data?.length) return;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/spotify/my-playlists`
    );
    const d = await response.json();
    // console.log(d.response);
    const total = d?.response?.total;
    setData(d.data);
  }, []);

  const handlePlaylistHover = (e) => {
    e.preventDefault();
    console.log("test", e.target.getAttribute("data-index"), selected);
    setSelected(e.target.getAttribute("data-index"));
  };

  return (
    <Stack
      pos='relative'
      w='full'
      direction='row'
      flexWrap='wrap'
      spacing={4}
      pt={6}
    >
      {data?.length &&
        data?.map((pl, i) => {
          return (
            // <>
            <MotionBox
              whileHover={{
                scale: 1.2,
              }}
              mb={6}
            >
              <Image
                src={pl?.images[1]?.url}
                alt={pl?.name}
                layout='intrinsic'
                width='50px'
                height='50px'
              />
            </MotionBox>
            // <SlideFade in={selected === i} offsetY='25px' zIndex={100}>
            //   <Text w='full' zIndex={100}>
            //     {pl?.name}
            //   </Text>
            // </SlideFade>
            // </>
          );
        })}
    </Stack>
  );
};

const scaleUpTransition = {
  tranistion: "all .2s ease-out",
  transitionDelay: ".1s",
  _hover: {
    transform: "scale(1.1)",
  },
};
