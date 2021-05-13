import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { ShowJson } from "@/chakra/components/show-json";

export const Playlists = () => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    if (data) return;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/spotify/my-playlists`
    );
    const d = await response.json();
    console.log(d.response);
    const total = d?.response?.total;
    setData(d.data);
  }, []);

  return (
    <Box
      position='relative'
      bg='brand.dark'
      opacity='0.9'
      w={["70%", "container.xs", "container.lg"]}
      boxShadow='md'
      borderRadius='5px'
      py={24}
      mx='auto'
      my='auto'
      mb={"20em"}
    >
      <Flex pos='relative' w='full' flexWrap='wrap'>
        {data?.length &&
          data?.map((pl) => {
            console.log(pl);
            return (
              <Box
                pos='relative'
                key={pl?.id}
                color='white'
                maxW='200px'
                mx='auto'
                border='1px'
                as={Link}
                href={pl?.external_urls?.spotify}
                isExternal
              >
                <Image
                  src={pl?.images[1]?.url}
                  alt={pl?.name}
                  w='200px'
                  h='200px'
                />
                <Text
                  pos='absolute'
                  left='50%'
                  right='50%'
                  transform='translate(-50%, -50%)'
                  w='full'
                >
                  {pl?.name}
                </Text>
              </Box>
            );
          })}
      </Flex>
    </Box>
  );
};
