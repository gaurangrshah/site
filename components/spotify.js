import { useEffect, useState } from "react";
import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

import { ShowJson } from "@/chakra/components/show-json";

export const Spotify = () => {
  const [data, setData] = useState(null);
  const [more, setMore] = useState(null);

  useEffect(async () => {
    if (data) return;
    const response = await fetch(`http://localhost:3000/api/spotify/playlists`);
    const d = await response.json();
    console.log(d.response);
    const total = d?.response?.total;
    setData(d.data);
    if (d?.response?.next) setMore(d?.response?.next);
    // if (d?.response?.next) {
    //   do {
    //     if (total === data?.length) break;
    //     const response = await fetch(
    //       `http://localhost:3000/api/spotify/fetcher?url=${`${d?.response?.next}/?offset=${d?.response?.offset}&limit=${d?.response?.limit}`}`
    //     );
    //     if (response.ok) {
    //       const newData = response?.json ? await response?.json() : response;
    //       setData((prevState) => [...prevState, ...newData?.data?.items]);
    //     }
    //     if (response.next) {
    //       const next = await fetch(
    //         `http://localhost:3000/api/spotify/fetcher?url=${`${response?.next}/?offset=${d?.response?.offset}&limit=${response?.limit}`}`
    //       );
    //       const nextData = next?.json ? await next?.json() : next;
    //       setData((prevState) => [...prevState, ...nextData?.data?.items]);
    //     }
    //   } while (total !== data?.length);
    // }
  }, []);

  const handleMore = async () => {
    const response = await fetch(
      `http://localhost:3000/api/spotify/fetcher?url=${encodeURIComponent(
        more
      )}`
    );
    console.log(
      "🚀 ~ file: spotify.js ~ line 45 ~ handleMore ~ response",
      response
    );
    if (response.ok) {
      const nextData = response?.json ? await response?.json() : response;
      console.log(
        "🚀 ~ file: spotify.js ~ line 45 ~ handleMore ~ nextData",
        nextData
      );
      setData((prevState) => [...prevState, ...nextData?.data?.items]);
      if (response?.next) setMore(response?.next);
      else setMore(null);
    }
  };

  return (
    <Box
      position='relative'
      bg='brand.dark'
      opacity='0.9'
      w={["70%", "container.xs", "50%"]}
      boxShadow='md'
      borderRadius='5px'
      py={24}
      mx='auto'
      my='auto'
      mb={"20em"}
    >
      <SimpleGrid gridAutoFlow='column' gap='3' overflow='auto'>
        {data?.length &&
          data?.map((pl) => {
            return (
              <Box key={pl?.id} color='white' minW='300px'>
                <Text>{pl?.name}</Text>
                <Image
                  src={pl?.images[0]?.url}
                  alt={pl?.name}
                  w='200px'
                  h='200px'
                />
              </Box>
            );
          })}
        {more && (
          <Button onClick={handleMore}>More : {console.log(more)}</Button>
        )}
      </SimpleGrid>
    </Box>
  );
};
