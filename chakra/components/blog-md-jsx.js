import { chakra, Badge, Text, Heading } from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";

import { ChNextButtonLink } from "../../components/next-link";
import { ChNextLink } from "@/components/next-link";

const CHMarkdown = chakra(Markdown);

const MarkdownJSX = ({ section = "", overrides, ...rest }) => {
  return (
    <CHMarkdown
      className='md-jsx'
      {...rest}
      options={{
        overrides: {
          a: (props) => (
            <ChNextLink {...props} {...layerStyles.a} {...rest.a} />
          ),
          h1: (props) => (
            <Heading {...props} {...layerStyles.h1} {...rest.h1} />
          ),
          h2: (props) => (
            <Heading {...props} {...layerStyles.h2} {...rest.h2} />
          ),
          h3: (props) => (
            <Heading {...props} {...layerStyles.h3} {...rest.h3} />
          ),
          p: (props) => <Text {...props} {...layerStyles.p} {...rest.p} />,
          ul: (props) => (
            <chakra.ul {...props} {...layerStyles.ul} {...rest.ul} />
          ),
          li: (props) => (
            <chakra.li {...props} {...layerStyles.li} {...rest.li} />
          ),
          ...overrides,
        },
      }}
    >
      {section}
    </CHMarkdown>
  );
};

export default MarkdownJSX;

const layerStyles = {
  a: {
    size: "xs",
    variant: "ghost",
    fontWeight: 700,
    textDecoration: "underline",
  },
  h1: {
    mb: 6,
    as: "h2",
    fontFamily: "body",
    fontSize: { base: "3xl", md: "3xl", lg: "4xl" },
    fontWeight: "bold",
    color: "brand.200",
    lineHeight: "shorter",
  },
  h2: {
    as: "p",
    pr: { base: 0, lg: 9 },
    mb: 4,
    fontSize: "md",
    color: "gray.700",
    letterSpacing: "wider",
  },
  h3: {
    as: "p",
    fontFamily: "body",
    fontSize: "md",
    color: "brand.300",
  },
  p: {
    pr: { base: 0, lg: 9 },
    mb: 4,
    fontSize: "md",
    color: "gray.700",
    letterSpacing: "wider",
  },
  ul: {
    ml: 10,
    color: "gray.500",
  },
};
