import { useEffect, useState } from "react";
import {
  AspectRatio,
  Badge,
  Box,
  Container,
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
import { PathIcon } from "../icons/path-icon";
import { Playlists } from "./playlists";

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
      <VStack
        as={Container}
        maxW={96}
        bg='gray.700'
        borderRadius='5px'
        my={3}
        pb={3}
        boxShadow='sm'
      >
        <HStack
          color='gray.500'
          w='full'
          mx='auto'
          justify='space-between'
          p={1}
        >
          <PathIcon icon={devIcons.spotify} fill='#1DB954' opacity='0.7' />
          <Box w='90%' textAlign='center'>
            {current?.item ? (
              <Text color='primary'>Currently Listening</Text>
            ) : loading ? (
              <Spinner />
            ) : (
              <Text>Not Currently Listening</Text>
            )}
          </Box>
          {!current?.item ? (
            <PathIcon
              icon={otherIcons.sound_off}
              stroke='gray.500'
              fill='transparent'
              size='2em'
            />
          ) : (
            <PathIcon
              icon={otherIcons.sound_on}
              stroke='light'
              fill='transparent'
              size='2em'
            />
          )}
        </HStack>
        {current?.item && (
          <HStack align='flex-start' color='light' pb={4}>
            <Box w='150px'>
              <Image
                src={`${current?.item?.album?.images[1].url}`}
                borderRadius='5px'
                // objectFit='contain'
              />
            </Box>
            <VStack w='full' align='flex-start' ml={3}>
              <HStack justify='space-between' w='full'>
                <Link href={current?.item?.external_urls?.spotify} isExternal>
                  <Text>{current?.item?.name}</Text>
                </Link>
              </HStack>
              <HStack flexWrap='wrap'>
                <PathIcon
                  icon={otherIcons.artist}
                  fill='transparent'
                  stroke='secondary'
                />
                {current?.item?.artists.map((artist, i) => {
                  const isMultiple = current?.item?.artists?.length > 1;
                  const isLast = current?.item?.artists?.length === i;
                  return (
                    <Link
                      key={artist?.id}
                      href={artist?.external_urls?.spotify}
                      data-artist-id={artist.id}
                      isExternal
                    >
                      <Text as={isMultiple ? "small" : "b"} color='secondary'>
                        {artist?.name}
                      </Text>
                      {isMultiple && !isLast ? "," : ""}
                    </Link>
                  );
                })}
              </HStack>
              <Link
                key={current?.item?.album?.id}
                href={current?.item?.album?.external_urls?.spotify}
                data-album-id={current?.item?.album?.id}
                isExternal
              >
                <HStack>
                  <PathIcon
                    icon={otherIcons.album}
                    fill='transparent'
                    stroke='secondary'
                  />
                  <Text as='small'>{current?.item?.album?.name}</Text>
                </HStack>
              </Link>
            </VStack>
          </HStack>
        )}
        <Playlists />
      </VStack>
    </>
  );
};
