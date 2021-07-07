import { useRouter } from "next/router";
import { Box, Container, Heading, Image } from "@chakra-ui/react";

import { Spinner } from "@/chakra/components/spinner";
import MarkdownJSX from "@/chakra/components/blog-md-jsx";
// import { Image } from "@/components/next-chakra-image";

const Post = ({ posts }) => {
  const router = useRouter();
  const { query } = router;

  const post = posts?.map((p) =>
    p?.posts.find(
      (post) => post?.name.split(".").slice(0, -1).join(".") === query?.slug[1]
    )
  )[0];

  console.log(post?.matter?.data);

  return post ? (
    <Container
      maxW='container.lg'
      p={16}
      pt={40}
      bg='white'
      rounded='lg'
      textAlign='center'
      mx='auto'
    >
      <Image
        src={post?.matter?.data?.cover}
        // placeholder='blurDataURL'
        // loading='eager'
        // layout='fill'
        w='100%'
        h='100%'
        objectFit='contain'
        style={{
          position: "relative",
        }}
      />
      <Box textAlign='left' mt={16} mb={3}>
        <MarkdownJSX>{post?.matter?.content}</MarkdownJSX>
      </Box>
    </Container>
  ) : (
    <Spinner />
  );
};

export default Post;

export const getStaticProps = async (context) => {
  const { getAllPosts } = await import("@/lib/octokit.js");

  const posts = await getAllPosts();
  return { props: { posts } };
};

export const getStaticPaths = async () => {
  const { getPostPaths } = await import("@/lib/octokit.js");
  const paths = await getPostPaths();

  return {
    paths,
    fallback: true,
  };
};
