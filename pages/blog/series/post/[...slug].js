import { NextSeo } from 'next-seo';
import converter from 'number-to-words';

import { Box, Badge, Container, Heading, HStack, Text } from '@chakra-ui/react';

import { Image } from '@/components/next-chakra-image';
import MarkdownJSX from '@/chakra/components/blog-md-jsx';
import { Spinner } from '@/chakra/components/spinner';
import appConfig from '@/app.config';

const Post = ({ post }) => {
  const data = post?.matter?.data;

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
      <SinglePost data={post} />
    </>
  );
};

export default Post;

// @%TODO:  extract to utility fn
function getSlugFromSeriesTitle(title) {
  const isNumber = Number(title.slice(-1));

  let result = false;

  if (isNumber) {
    result = title.substring(0, title.lastIndexOf('-'));
  }

  return result;
}

export const getServerSideProps = async (context) => {
  const { getSeriesFolder, getFileBySlug } = await import('@/lib/octokit.js');

  const fileURL = `blog/${getSlugFromSeriesTitle(
    context.params.slug[0]
  )}-published/${context.params.slug[0]}.md`;

  let { post } = await getFileBySlug(fileURL);

  return {
    props: { post },
  };
};

export function SinglePost({ data }) {
  // @TODO: extract into a component file
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
      <Box pos="relative" w="full">
        <Image
          src={data?.matter?.data?.cover}
          loading="eager"
          layout="intrinsic"
          width="800px"
          height="600px"
          objectFit="contain"
          sx={{ borderRadius: `10px` }}
        />
        <HStack w="full" ml="auto">
          {data?.matter?.data?.tags.split(', ')?.map((tag) => (
            <Badge key={tag} colorScheme="teal">
              {tag}
            </Badge>
          ))}
        </HStack>
        <Box
          py={6}
          mt={9}
          border="1px dotted"
          borderColor="brand.400"
          rounded="md"
        >
          <Text>
            ☝️ <strong> NOTE: </strong>{' '}
            {`This article is the ${converter.toWordsOrdinal(
              data?.matter?.data?.series?.order
            )} part of a larger series`}
          </Text>
        </Box>
      </Box>
      <Box textAlign="left" mt={16} mb={3}>
        <MarkdownJSX>{data?.matter?.content}</MarkdownJSX>
      </Box>
    </Container>
  );
}
