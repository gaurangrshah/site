import { NextSeo } from 'next-seo';
import {
  Container,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChNextButtonLink } from '@/components/next-link';
import { typeIs } from '@/utils/validator';

const Posts = ({ folders = [] }) => {
  console.log('🚀 | file: index.js | line 15 | folders', folders);
  return (
    <>
      <NextSeo title="Blog | G. Shah Dev" />
      <Container maxW="container.md" py={36}>
        <SimpleGrid w="full" mx="auto" columns={2} spacing={6}>
          {folders?.length &&
            folders?.map((folder) => (
              <VStack key={folder.sha} py={3}>
                console.log(folder)
                <Heading>{folder?.name}</Heading>
              </VStack>
            ))}

          {/* {JSON.parse(posts)?.map((post, i) => {
            return post?.posts?.map((p, i) => {
              return (
                <VStack key={`${post?.name}-${i}`} bg="white" rounded="xl">
                  <Image
                    src={p?.matter?.data?.cover}
                    w="full"
                    borderTopLeftRadius="xl"
                    borderTopRightRadius="xl"
                  />
                  <VStack spacing={6} p={6}>
                    <Heading fontSize="3xl">{p?.matter?.data?.title}</Heading>
                    <Text>{p?.matter?.data?.description}</Text>

                    <HStack w="full" justify="flex-end">
                      <ChNextButtonLink
                        variant="ghost"
                        href={p?.path.split('.').slice(0, -1).join('.')}
                      >
                        Read more...
                      </ChNextButtonLink>
                    </HStack>
                  </VStack>
                </VStack>
              );
            });
          })} */}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  const { getAllPosts } = await import('@/lib/octokit');
  const folders = await getAllPosts();
  return { props: { folder: folders ? folders : [] } };
}
