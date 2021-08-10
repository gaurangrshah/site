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


export function SeriesPreviewCard({ post }) {
  return (
    <ChNextLink href={`/blog/series/post/${post.slug}`}>
      <VStack
        as="article"
        align="flex-start"
        spacing={4}
        p={4}
        boxShadow="md"
        bg={'brand.300'}
      >
        <Box as="header">
          <Image src={post?.cover} alt={post?.title} rounded="md" />
          <VisuallyHidden>
            <Heading fontSize="xl" my={4}>
              {post?.title}
            </Heading>
          </VisuallyHidden>
        </Box>
        <Badge px={2} colorScheme="green">
          Part No: {post?.order}
        </Badge>
        <Text noOfLines={2}>{post?.description}</Text>
      </VStack>
    </ChNextLink>
  );
}
