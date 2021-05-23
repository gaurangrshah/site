import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "@/chakra";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <link
          href='https://fonts.googleapis.com/css2?family=Caveat'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather+Sans'
          rel='stylesheet'
        />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
