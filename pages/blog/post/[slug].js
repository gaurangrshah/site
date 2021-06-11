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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);

  const posts = await res?.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString(), slug: post.slug },
  }));
  console.log("🚀 ~ file: [id].js ~ line 17 ~ paths ~ paths", paths);

  console.log("\nNumber of posts pre-rendered: ", posts.length);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { devApi } = await import("../../../lib/dev-to");

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/blog/post/${params.slug}`
  // );
  const post = await devApi.getArticleBySlug(params?.slug);
  // console.log("🚀 ~ file: [id].js ~ line 31 ~ getStaticProps ~ res", res);
  // const post = await res?.json();

  return { props: { post } };
}
