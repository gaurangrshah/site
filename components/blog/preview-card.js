import {
  Badge,
  Box,
  Heading,
  Image,
  Text,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';

import { ChNextLink } from '@/components/next-link';

function getSlugFromSeriesTitle(title) {
  const isNumber = Number(title.slice(-1));

  let result = false;

  if (isNumber) {
    result = title.substring(0, title.lastIndexOf('-'));
  }

  return result;
}

export function PreviewCard({ post, isSeries, linkTo }) {
  let data = {};

  if (post) {
    data = isSeries
      ? { ...post?.matter?.data, ...post?.matter?.data?.series } // @NOTE: the order here matters
      : post?.matter?.data
      ? post?.matter?.data
      : post;
  }

  return (
    <ChNextLink
      href={
        linkTo
          ? linkTo
          : isSeries
          ? `/blog/series/${getSlugFromSeriesTitle(data.slug)}`
          : `/blog/posts/${data.slug}`
      }
    >
      <VStack
        as="article"
        align="flex-start"
        spacing={4}
        p={4}
        boxShadow="md"
        bg={isSeries ? 'brand.300' : 'initial'}
      >
        <Box as="header">
          <Image src={data?.cover} alt={data?.title} rounded="md" />
          <VisuallyHidden>
            <Heading fontSize="xl" my={4}>
              {data?.title}
            </Heading>
          </VisuallyHidden>
        </Box>
        {isSeries ? (
          <Badge px={2} colorScheme="green">
            Series
          </Badge>
        ) : (
          ''
        )}
        <Text noOfLines={2}>
          {data?.description || post?.matter.data.description}
        </Text>
      </VStack>
    </ChNextLink>
  );
}
