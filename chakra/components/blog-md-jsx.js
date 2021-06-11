import {
  chakra,
  Badge,
  Box,
  Code as ChCode,
  Text,
  Heading,
} from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";

import { ChNextButtonLink } from "../../components/next-link";
import { ChNextLink } from "@/components/next-link";
import { Code } from "@/components/code";

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
          code: (props) => (
            <Code {...props} {...layerStyles.code} {...rest.code} />
          ),
          pre: (props) => (
            <chakra.pre {...props} {...layerStyles.pre} {...rest.pre} />
          ),
          div: (props) => <Box {...props} {...layerStyles.div} {...rest.div} />,
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
    color: "brand.400",
  },
  h1: {
    mt: 9,
    as: "h1",
    p: {
      fontFamily: "body",
      fontSize: { base: "3xl", md: "3xl", lg: "4xl" },
      fontWeight: "bold",
      color: "gray.500",
      lineHeight: "shorter",
    },
  },
  h2: {
    as: "h2",
    pr: { base: 0, lg: 9 },
    mt: 9,
    p: {
      fontFamily: "body",
      color: "gray.500",
      fontSize: "2xl",
      letterSpacing: "wider",
    },
  },
  h3: {
    as: "h3",
    mt: 9,
    p: {
      fontFamily: "body",
      fontSize: "xl",
      color: "gray.500",
    },
  },
  p: {
    as: "span", //@HACK: can't render p > p so rendering parent as span
    display: "inline-block",
    pr: { base: 0, lg: 9 },
    mb: 4,
    fontSize: "md",
    fontWeight: "normal",
    color: "gray.600",
    letterSpacing: "wider",
  },
  ul: {
    position: "relative",
    w: "85%",
    ml: 10,
    my: 9,
    color: "gray.500",
    fontSize: "md",
  },
  pre: {
    display: "flex",
    flexDirection: "row",
    // border: "1px solid red",
    whiteSpace: "pre-wrap",
    overflowX: "auto",
    sx: {
      code: {
        position: "relative",
        p: 6,
        maxW: "full",
        rounded: "lg",
        // shadow: "md",
      },
    },
  },
  code: {
    pos: "relative",
    variant: "subtle",
    maxW: "80%",
    px: 2,
    my: 2,
    // sx: {
    //   span: {
    //     maxW: "80%",
    //   },
    // },
  },
  div: {
    pos: "relative",
  },
};
