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
import MarkdownJSX from "@/chakra/components/blog-md-jsx";

export const Post = ({ post }) => {
  console.log(post?.body_html);
  return (
    <Container maxW='container.md' p={16} bg='white' rounded='lg'>
      <Box as={post?.type_of}>
        <Heading>{post.title}</Heading>
        <Box>
          <MarkdownJSX section={post?.body_html} />
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
