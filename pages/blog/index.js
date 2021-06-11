// import Image from "next/image";
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChNextButtonLink, ChNextLink } from "@/components/next-link";
// import { Image } from "../../components/next-chakra-image";

const Posts = ({ posts }) => {
  return (
    <Container maxW='container.md' py={36}>
      <SimpleGrid w='full' mx='auto' columns={2} spacing={6}>
        {posts.map((post) => {
          const cover = post?.cover_image; //@HACK:
          return (
            <VStack
              as={post?.type_of}
              key={post?.id}
              p={6}
              bg='white'
              rounded='xl'
            >
              {cover && (
                <Image
                  src={cover}
                  width='full'
                  alt={post?.title}
                  objectFit='contain'
                  borderTopRadius='10px'
                  borderTopRadius='10px'
                />
              )}
              <VStack w='80%' spacing={9} align='flex-start' pt={6}>
                <Heading>{post?.title}</Heading>
                <Text>{post?.description}</Text>

                <ChNextButtonLink
                  variant='ghost'
                  href={`/blog/post/${post?.slug}`}
                >
                  Read more...
                </ChNextButtonLink>
              </VStack>
            </VStack>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Posts;

export async function getStaticProps() {
  const { devApi } = await import("../../lib/dev-to");
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
  const posts = await devApi.getArticles({ username: "gsdev", page: 1 });
  // const posts = await res.json();
  return { props: { posts } };
}
