import { Code as ChCode } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const Code = ({ inline, className, children, ...rest }) => {
  // const match = /language-(\w+)/.exec(className || "");

  return !inline ? (
    <SyntaxHighlighter
      // language={match && match[1]}
      style={dark}
      // showLineNumbers
      // wrapLines
      // lineNumberStyle={{ color: "#495162", paddingRight: "16px" }}
    >
      <ChCode {...rest} style={{ width: "100%", border: "1px solid red" }}>
        {(String(children).replace(/\n$/), "")}
      </ChCode>
    </SyntaxHighlighter>
  ) : (
    <ChCode {...rest}>{children}</ChCode>
  );
};
