import {
  Box,
  chakra,
  Code as ChCode,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
// import { Image } from "@/components/next-chakra-image";

import { ChNextLink } from "@/components/next-link";
import { darken, lighten } from "@chakra-ui/theme-tools";

const CHMarkdown = chakra(Markdown);

const MarkdownJSX = ({ options, overrides, children, ...rest }) => {
  return (
    <CHMarkdown
      className='md-jsx'
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
          h4: (props) => (
            <Heading {...props} {...layerStyles.h4} {...rest.h4} />
          ),
          h5: (props) => (
            <Heading {...props} {...layerStyles.h5} {...rest.h5} />
          ),
          p: (props) => <Text {...props} {...layerStyles.p} {...rest.p} />,
          ul: (props) => (
            <chakra.ul {...props} {...layerStyles.ul} {...rest.ul} />
          ),
          ol: (props) => (
            <chakra.ol {...props} {...layerStyles.ol} {...rest.ol} />
          ),
          code: (props) => (
            <ChCode {...props} {...layerStyles.code} {...rest.code} />
          ),
          pre: (props) => (
            <chakra.pre {...props} {...layerStyles.pre} {...rest.pre} />
          ),
          div: (props) => <Box {...props} {...layerStyles.div} {...rest.div} />,
          img: (props) => <Image {...props} {...layerStyles.img} />,
          blockquote: (props) => (
            <Box as='blockquote' {...props} {...layerStyles.blockquote} />
          ),
          table: (props) => (
            <Box as='table' {...props} {...layerStyles.table} />
          ),
          iframe: (props) => (
            <Box as='iframe' w='full' {...props} {...layerStyles.iframe} />
          ),
          ...overrides,
        },
        ...options,
      }}
    >
      {children}
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
    color: darken("secondary", 10),
  },
  h1: {
    my: 6,
    as: "h1",
    fontFamily: "body",
    fontSize: "5xl",
    fontWeight: "bold",
    color: "gray.500",
  },
  h2: {
    as: "h2",
    mt: 12,
    mb: 6,
    fontSize: "4xl",
    fontFamily: "body",
    color: "gray.500",
  },
  h3: {
    as: "h3",
    mt: 12,
    mb: 3,
    fontSize: "2xl",
    fontFamily: "body",
    color: "gray.500",
  },
  h4: {
    as: "h4",
    mt: 6,
    mb: 3,
    fontSize: "xl",
    fontFamily: "body",
    color: "gray.500",
  },
  h5: {
    as: "h5",
    mt: 6,
    mb: 3,
    fontSize: "xl",
    fontFamily: "body",
    color: "gray.500",
  },
  p: {
    mx: "auto",
    my: 3,
    pr: { base: 0, lg: 9 },
    fontFamily: "heading",
    fontSize: "2xl",
    fontWeight: "500",
    color: "gray.600",
    letterSpacing: "narrow",
    lineHeight: 1.5,
    sx: {
      em: {
        color: "gray.500",
      },
      strong: {
        mt: 4,
      },
      code: {
        display: "inline",
        fontSize: "md",
        bg: lighten("secondary", 40),
        my: 0,
        lineHeight: 1.75,
      },
      li: {
        display: "inline",
      },
    },
  },
  ul: {
    position: "relative",
    ml: 10,
    mb: 4,
    color: "gray.500",
    fontFamily: "heading",
    fontSize: "2xl",
    sx: {
      ul: {
        ml: "1em",
      },
    },
    li: {
      sx: {
        code: {
          display: "inline",
          bg: lighten("secondary", 40),
        },
      },
    },
  },
  ol: {
    position: "relative",
    counterReset: "li",
    ml: 4,
    mr: 2,
    my: 9,
    color: "gray.500",
    fontFamily: "heading",
    fontSize: "2xl",
    sx: {
      "& ::marker": {
        color: "gray.400",
        p: 2,
        rounded: "md",
      },
      li: {
        fontSize: "xl",
      },
      ol: {
        ml: "5em",
      },
    },
  },
  img: {
    // placeholder: "blurDataUrl",
    layout: "responsive",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    rounded: "lg",
  },
  pre: {
    display: "flex",
    flexDirection: "row",
    whiteSpace: "pre-wrap",
    overflowX: "auto",
    sx: {
      code: {
        position: "relative",
        p: 6,
        maxW: "full",
        rounded: "lg",
      },
    },
  },
  code: {
    pos: "relative",
    variant: "subtle",
    w: "full",
    px: 2,
    my: 2,
  },
  div: {
    pos: "relative",
    mx: "auto",
  },
  blockquote: {
    p: 6,
    py: 6,
    minH: "2em",
    bg: "light",
    color: "bg1",
    borderLeft: "3px solid",
    borderLeftColor: "secondary",
    my: 6,
    sx: {
      p: {
        fontSize: "xl",
        lineheight: 1.3,
        ml: 6,
        whitespace: "pre-wrap",
        code: {
          mx: 0,
        },

        _last: {
          mb: 2,
        },
      },
      code: {
        mx: 6,
      },
    },
  },
  table: {
    w: "full",
    tableLayout: "fixed",
    whiteSpace: "nowrap",
    my: 12,
    sx: {
      tr: {
        border: "1px",
        borderColor: "secondary",
      },
      th: {
        p: 2,
        border: "1px",
        borderColor: "secondary",
      },
      td: {
        p: 2,
        border: "1px",
        borderColor: "secondary",
        code: {
          display: "inline",
          bg: "primary",
        },
      },
    },
  },
  iframe: {
    w: "full",
    minH: "40vh",
    mx: "auto",
  },
};
