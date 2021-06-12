import { Box, Container, Image, Heading } from "@chakra-ui/react";

import MarkdownJSX from "@/chakra/components/blog-md-jsx";

const Post = ({ post }) => {
  return (
    <Container maxW='container.md' p={16} pt={40} bg='white' rounded='lg'>
      <Image src={post?.cover_image} w='100%' objectFit='contain' />
      <Box as={post?.type_of}>
        <Heading my={8}>{post.title}</Heading>
        <Box>
          <MarkdownJSX>{post?.body_markdown}</MarkdownJSX>
        </Box>
      </Box>
    </Container>
  );
};

export default Post;

export async function getStaticPaths() {
  const { devApi } = await import("../../../lib/dev-to");

  const posts = await devApi.getArticles({ username: "gsdev", page: 1 });

  const paths = posts.map((post) => ({
    params: { id: post.id.toString(), slug: post.slug },
  }));

  console.log("\nNumber of posts pre-rendered: ", posts.length);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { devApi } = await import("../../../lib/dev-to");
  const post = await devApi.getArticleBySlug(params?.slug);

  return { props: { post } };
}
