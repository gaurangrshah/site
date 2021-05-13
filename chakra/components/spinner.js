import { Box, Flex, Spinner as ChSpinner } from "@chakra-ui/react";

export function Spinner({ ...rest }) {
  return (
    // <Flex display='flex' minH='100%' flex={1}>
    <ChSpinner m='auto' zIndex='popover' {...rest} />
    // </Flex>
  );
}
