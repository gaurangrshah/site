import { mode } from "@chakra-ui/theme-tools";
import "focus-visible/dist/focus-visible";

export const styles = {
  global: (props) => ({
    ".js-focus-visible": {
      /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
    */
      outline: "none",
      boxShadow: "none",
    },
    "*": {
      border: 0,
      margin: 0,
      padding: 0,
      fontFeatureSettings: `'kern'`,
      textRendering: "optimizeLegibility",
      WebkitFontSmoothing: "antialiased",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    },
    "*, *::before, *::after": {
      borderColor: mode("gray.500", "gray.700")(props),
      boxSizing: "border-box",
      wordWrap: "break-word",
    },
    "*::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px var(--chakra-colors-brand-500)",
      borderRadius: "10px",
      backgroundColor: "transparent",
    },
    "*::-webkit-scrollbar": {
      width: "9px",
    },
    "*::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      boxShadow: "inset 0 0 6px var(--chakra-colors-brand-400)",
      backgroundColor: "var(--chakra-colors-brand-400)",
    },
    "html, body": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      scrollBehavior: "smooth",
      // using % here allows users to override default size in browser settings??
      fontSize: "85.2%", // == 10px
      background: "transparent",
      // height: "100vh",
    },
    body: {
      position: "relative",
      fontFamily: "body",
      color: mode("brand.700", "brand.200")(props),
      fontSize: "1.5rem",
      lineHeight: 2,
      textRendering: "optimizeLegibility",
      WebkitTextSizeAdjust: "none",
      MozFontSmoothing: "grayscale",
      overflowX: "hidden",
      overflowY: "hidden",
      maxW: "full",
      "span.markup": {
        color: "brand.500",
        fontFamily: "accent",
        fontSize: "2xl",
        lineHeight: 0.7,
        background: "brand.300",
        px: "0.2rem",
        mr: "0.2rem",
        borderRadius: "2px",
      },
      "p.scribble": {
        color: "brand.500",
        fontFamily: "accent",
        fontSize: "2xl",
        opacity: 0.8,
        textShadow: "0px 0px 2px rgba(0,0,0, 0.2)",
      },
      "svg.scribble": {
        fill: "brand.500",
        filter: "drop-shadow(0px 0px 2px rgba(70, 94, 55, 0.3))",
      },
      "*.hide-scroll::-webkit-scrollbar": { display: "none" },
      "*.hide-scroll": { scrollBarWidth: "none" },
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.300")(props),
    },
    "input:focus": {
      border: "inherit",
    },
    "input:focus:invalid": {
      backround: "rgba(255, 224, 224, 1)",
    },
    "input:focus, input:focus:valid": {
      backround: "rgba(226, 250, 219, 1)",
    },
    "a:active, a:focus, a:visited": {
      outline: 0,
      border: "none",
      outlineStyle: "none",
      textDecoration: "none",
      boxShadow: "0 0 0 1px rgba(0, 0, 0, 0) !important",
    },
    "a:hover": {
      textDecoration: "underline",
    },
    a: {
      textDecoration: "none",
      color: mode("black", "white")(props),
    },
    button: {
      fontFamily: "body",
    },
  }),
};
