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

export default function PreviewCard({ post, isSeries }) {
  let data = {};

  if (post) {
    data = isSeries ? post?.matter?.data?.series : post?.matter?.data;
    console.log('🚀 | file: preview-card.js | line 19 | data', data);
  }

  return (
    <ChNextLink
      href={isSeries ? `/blog/series/${data.slug}` : `/blog/${data.slug}`}
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
