import { NextSeo } from 'next-seo';

import {
  Box,
  Badge,
  Container,
  Heading,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';

import { Image } from '@/components/next-chakra-image';
import MarkdownJSX from '@/chakra/components/blog-md-jsx';
import { SeriesPreviewCard } from '@/components/blog/series-preview-card';
import { Spinner } from '@/chakra/components/spinner';
import appConfig from '@/app.config';

const Post = ({ posts }) => {
  const data = posts?.map((post) => ({
    // merge series frontmatter with post frontmatter - #NOTE: order matters
    ...post?.matter?.data?.series,
    ...post?.matter?.data,
    content: post?.matter?.content, // include markdown content
    isSeries: true,
  }));

  return (
    <>
      <NextSeo
        title={`${data?.title} | Blog | G. Shah Dev`}
        description={data?.title}
        openGraph={{
          title: `${data?.title} | Blog | G. Shah Dev`,
          description: data?.title,
          url: `${appConfig?.details?.blogUrl}/posts/${data?.slug}`,

          type: 'article',
          article: {
            publishedTime: data?.published,
            section: data?.series ? data?.series?.order : null,
            authors: ['https://www.gshahdev.com'],
            tags: data?.tags?.split(', '),
            // @TODO:  add cannonical link
          },
          images: [
            {
              url: data?.cover,
              width: 1200,
              height: 480,
              alt: data?.title,
            },
          ],
        }}
        image={data?.cover}
      />

      <SeriesList folder={data} />
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
  let posts = await getSeriesFolder(`${context.params.slug[0]}-published`);

  return {
    props: { posts },
  };
};

export function SeriesList({ folder }) {
  return (
    <Container maxW="container.md" py={36}>
      <SimpleGrid w="full" mx="auto" columns={2} spacing={6}>
        {folder?.map((post) => {
          return (
            <HStack
              key={post?.slug}
              align="stretch"
              p={3}
              color="black"
              rounded="lg"
            >
              <SeriesPreviewCard post={post} />
            </HStack>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}

export function SinglePost({ post, data }) {
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
