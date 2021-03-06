import { NextSeo } from 'next-seo';

import { Box, Badge, Container, Heading, HStack } from '@chakra-ui/react';

import { Image } from '@/components/next-chakra-image';
import MarkdownJSX from '@/chakra/components/blog-md-jsx';
import { Spinner } from '@/chakra/components/spinner';
import appConfig from '@/app.config';

const Post = ({ post }) => {

  const data = post?.map((p) => ({
    ...p?.matter?.data,
    content: p?.matter?.content,
  }));

  return (
    <>
      <NextSeo
        title={`${data[0]?.title} | Blog | G. Shah Dev`}
        description={data[0]?.title}
        openGraph={{
          title: `${data[0]?.title} | Blog | G. Shah Dev`,
          description: data[0]?.title,
          url: `${appConfig?.details?.blogUrl}/posts/${data[0]?.slug}`,

          type: 'article',
          article: {
            publishedTime: data[0]?.published,
            section: data[0]?.series ? data[0]?.series?.order : null,
            authors: ['https://www.gshahdev.com'],
            tags: data[0]?.tags?.split(', '),
            // @TODO:  add cannonical link
          },
          images: [
            {
              url: data[0]?.cover,
              width: 1200,
              height: 480,
              alt: data[0]?.title,
            },
          ],
        }}
        image={data[0]?.cover}
      />

      <SinglePost data={data[0]} />
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const { getPostPaths } = await import('@/lib/octokit.js');
  const paths = await getPostPaths(); // paths: [{params: {slug: ['paths']}}}

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { getSeriesFolder } = await import('@/lib/octokit.js');
  let post = await getSeriesFolder(`${context.params.slug[0]}-published`);

  return {
    props: { post },
  };
};

export function SinglePost({ data }) {
  return (
    <Container
      pos="relative"
      maxW="container.md"
      p={16}
      pt={40}
      bg="white"
      rounded="lg"
      textAlign="center"
      mx="auto"
    >
      <HStack w="full" ml="auto">
        {data?.tags.split(', ')?.map((tag) => (
          <Badge key={tag} colorScheme="teal">
            {tag}
          </Badge>
        ))}
      </HStack>
      <Box pos="relative" w="full">
        {data?.cover ? (
          <Image
            src={data?.cover}
            loading="eager"
            layout="intrinsic"
            width="600px"
            height="400px"
            objectFit="contain"
          />
        ) : (
          ''
        )}
      </Box>
      <Box textAlign="left" mt={16} mb={3}>
        <MarkdownJSX>{data?.content}</MarkdownJSX>
      </Box>
    </Container>
  );
}
