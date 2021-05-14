import { useEffect, useState } from "react";
import {
  AspectRatio,
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BrandIcon } from "../intro";
import { devIcons } from "../icons/dev";
import { otherIcons } from "../icons/other";
import { msToMins } from "@/utils/datefns";
import { Spinner } from "@/chakra/components/spinner";

export const NowPlaying = ({ children, ...rest }) => {
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(async () => {
    setLoading(true);
    const response = await fetch(`/api/spotify/now-playing`);

    if (response.status === 200) {
      console.log("success - /now-playing");
      if (response.json) {
        const data = await response.json();
        setCurrent(data);
      }
    }
    setLoading(false);
  }, []);

  return (
    <>
      <Flex
        pos='relative'
        borderRadius='5px'
        maxW='500px'
        bg='gray.600'
        color='brand.200'
        boxShadow='md'
        minW='350px'
        maxH='130px'
        minH='45px'
        my={16}
      >
        <BrandIcon
          icon={devIcons.spotify}
          fill='#1DB954'
          pos='absolute'
          top={2}
          right={1}
          m={2}
        />
        {current?.item ? (
          <>
            <Flex
              bg='gray.700'
              w='120px'
              justify='center'
              align='center'
              borderRadius='5px'
            >
              <Image
                w='72px'
                h='72px'
                src={`${current?.item?.album?.images[1].url}`}
                borderTopLeftRadius='5px'
                borderBottomLeftRadius='5px'
                objectFit='cover'
              />
            </Flex>
            <Box p={3} w='full'>
              <HStack mr={8} bg='gray.700' borderRadius='5px' p={2}>
                <BrandIcon
                  icon={otherIcons.headphones}
                  stroke='brand.200'
                  fill='transparent'
                />
                <Link href={current?.item?.external_urls?.spotify} isExternal>
                  <Text>{current?.item?.name}</Text>
                </Link>
              </HStack>
              <Text as='small' pr={8}>
                {msToMins(current?.progress_ms)}/
                {msToMins(current?.item?.duration_ms)}
              </Text>
              <HStack as='span' justify='flex-end' w='full'>
                {current?.item?.artists.map((artist) => {
                  return (
                    <Link
                      key={artist?.id}
                      href={artist?.external_urls?.spotify}
                      isExternal
                    >
                      <Badge
                        colorScheme='blue'
                        fontSize='0.8em'
                        fontWeight='normal'
                        data-artist-id={artist.id}
                        _hover={{ boxShadow: "md" }}
                      >
                        <HStack>
                          <BrandIcon
                            icon={otherIcons.artist}
                            fill='brand.600'
                          />
                          <Text>{artist?.name}</Text>
                        </HStack>
                      </Badge>
                    </Link>
                  );
                })}
              </HStack>
              <HStack justify='flex-end' my={1}>
                <Link
                  data-album-id={current?.item?.album?.id}
                  key={current?.item?.album?.id}
                  href={current?.item?.album?.external_urls?.spotify}
                  isExternal
                >
                  <Badge
                    colorScheme='green'
                    fontSize='0.8em'
                    fontWeight='normal'
                    data-album-id={current?.item?.album.id}
                    p={1}
                  >
                    <HStack>
                      <BrandIcon
                        icon={otherIcons.album}
                        stroke='brand.600'
                        fill='transparent'
                        // fill={"brand.100"}
                      />
                      <Text>{current?.item?.album?.name}</Text>
                    </HStack>
                  </Badge>
                </Link>
              </HStack>
            </Box>
          </>
        ) : loading ? (
          <Spinner size='md' color='brand.300' />
        ) : (
          <HStack align='center'>
            <BrandIcon
              icon={otherIcons.sound_off}
              stroke='gray.500'
              fill='gray.500'
              size='1.5rem'
              ml={2}
            />
            <Text pr={6}>Not Currently Listening</Text>
          </HStack>
        )}
      </Flex>
    </>
  );
};
