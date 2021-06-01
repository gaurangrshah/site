import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Flex,
  Image as ChImage,
  Link,
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
    <Box
      position='relative'
      bg='rgba(226, 250, 219, 0.25)'
      opacity='0.9'
      w={["70%", "container.xs", "container.lg"]}
      boxShadow='md'
      borderRadius='5px'
      py={24}
      mx='auto'
      my='auto'
      mb={"20em"}
    >
      <SimpleGrid pos='relative' w='full' columns={4} rowGap={20}>
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
                maxW='200px'
                mx='auto'
                boxShadow='md'
                initial={{ transform: `scale(1)` }}
                whileHover={{ transform: `scale(1.2)` }}
                onHoverStart={handlePlaylistHover}
                whileTap={{ transform: `scale(0.9)` }}
                data-index={i}
              >
                <Skeleton isLoaded={pl?.images[1]?.url} w='200px' h='200px'>
                  <Image
                    src={pl?.images[1]?.url}
                    alt={pl?.name}
                    layout='intrinsic'
                    width='200px'
                    height='200px'
                  />
                </Skeleton>
                <AnimatePresence>
                  {selected === i && (
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
                      zIndex={1}
                    >
                      <Text w='full'>{pl?.name}</Text>
                    </MotionBox>
                  )}
                </AnimatePresence>
              </MotionBox>
            );
          })}
      </SimpleGrid>
    </Box>
  );
};
