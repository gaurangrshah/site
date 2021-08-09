import { NextSeo } from 'next-seo';
import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

import { ChNextLink } from '@/components/next-link';
import { typeIs } from '@/utils/validator';
import PreviewCard from '@/components/blog/preview-card';

function Posts({ folders = [] }) {
  console.log('🚀 | file: index.js | line 19 | folders', folders);
  return (
    <>
      <NextSeo title="Blog | G. Shah Dev" />
      <Container maxW="container.md" py={36}>
        <SimpleGrid w="full" mx="auto" columns={2} spacing={6}>
          {folders?.length &&
            folders?.map((folder) => {
              return (
                <HStack
                  key={folder?.sha}
                  align="stretch"
                  p={3}
                  color="black"
                  rounded="lg"
                >
                  <PreviewCard
                    post={folder?.posts[0]}
                    isSeries={folder?.isSeries}
                  />
                </HStack>
              );
            })}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Posts;

export async function getStaticProps() {
  const { getAllPosts } = await import('@/lib/octokit');
  const folders = await getAllPosts();
  console.log('🚀 | file: index.js | line 67 | folders', folders?.length);
  return { props: { folders: folders ? folders : [] } };
}
