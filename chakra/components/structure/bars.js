import { Box, Flex } from "@chakra-ui/react";
import { header, footer } from "../../layer-styles";
import { useScaffold } from "@/chakra/contexts/scaffold-context";
import { useColor } from "@/chakra/hooks/use-color";

export function Header({ HeaderComponent, bg, children, ...rest }) {
  const { theme } = useScaffold(); // @TODO: consume from localstorage
  const { color } = useColor();
  return (
    <Box {...header[theme]?.wrapper} bg={color(bg)}>
      <Flex {...header[theme]?.container}>
        <HeaderComponent {...rest} />
        {children}
      </Flex>
    </Box>
  );
}

export function Footer({ FooterComponent, bg, children, ...rest }) {
  const { theme } = useScaffold(); // @TODO: consume from localstorage
  const { color } = useColor();

  return (
    <Box {...footer[theme]?.wrapper} bg={color(bg)}>
      <Flex {...footer[theme]?.container}>
        <FooterComponent {...rest} />
        {children}
      </Flex>
    </Box>
  );
}
