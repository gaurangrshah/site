import { useEffect, useState } from "react";
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
  Text,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import { MotionBox } from "../framer/motion-box";

export const Playlists = () => {
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(async () => {
    if (data) return;
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
    console.log("test", e.target.getAttribute("data-index"));
    setSelected(e.target.getAttribute("data-index"));
  };

  return (
    <SimpleGrid pos='relative' w='full' columns={4} rowGap={4}>
      {data?.length &&
        data?.map((pl, i) => {
          console.log(pl);
          return (
            <MotionBox
              key={pl?.id}
              as={Link}
              href={pl?.external_urls?.spotify}
              isExternal
              pos='relative'
              color='white'
              // maxW='200px's
              mx='auto'
              boxShadow='md'
              initial={{ transform: `scale(1)` }}
              whileHover={{ transform: `scale(1.2)` }}
              onHoverStart={handlePlaylistHover}
              whileTap={{ transform: `scale(0.9)` }}
              data-index={i}
              // border='0.1em solid rgba(255,255,255,0.4)'
            >
              <Skeleton isLoaded={pl?.images[1]?.url} w='50px' h='50px'>
                <Image
                  src={pl?.images[1]?.url}
                  alt={pl?.name}
                  layout='intrinsic'
                  width='50px'
                  height='50px'
                />
              </Skeleton>
              {/* <AnimatePresence> */}
              {/* {selected === i && (

                <>
                  <MotionBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    position='relative'
                    w='full'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='row'
                    color='white'
                    zIndex={100}
                  >
                */}
              <SlideFade in={selected === i} offsetY='25px' zIndex={100}>
                <Text w='full' zIndex={100}>{pl?.name}</Text>
              </SlideFade>
              {/*
                  </MotionBox>
                </>

              )} */}
              {/* </AnimatePresence> */}
            </MotionBox>
          );
        })}
    </SimpleGrid>
  );
};
