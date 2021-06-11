import { Code as ChCode } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const Code = ({ children, ...rest }) => {
  return rest?.className ? (
    <SyntaxHighlighter
      language={rest?.className?.replace(/lang-/, "") || "text"}
      style={dark}
      showLineNumbers
      lineNumberStyle={{ color: "#495162", paddingRight: "16px" }}
    >
      <ChCode {...rest}>{children}</ChCode>
    </SyntaxHighlighter>
  ) : (
    <ChCode>{children}</ChCode>
  );
};
