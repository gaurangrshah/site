import { chakra, Box } from "@chakra-ui/react";
import { useColor } from "@/chakra/hooks/use-color";

export function FooterContent({ ...rest }) {
  const { color } = useColor();
  return (
    <>
      <chakra.p color={color("color")}>
        &copy; {new Date().getFullYear()}
      </chakra.p>
    </>
  );
}

