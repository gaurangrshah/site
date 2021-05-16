import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react";

export const ForHire = ({ children, ...rest }) => {
  return (
    <Box
      position="relative"
      top={-10}
      left={2}
      w='140px'
      h='55px'
      py={3}
      pb={4}
      // mt={-24}
      bgGradient='linear(to-br,  brand.600, brand.400)'
      color='brand.200'
      borderRadius='5px'
      boxShadow='md'
      textAlign='center'
      {...rest}
    >
      <VStack justify='center'>
        <Heading
          as='h6'
          fontFamily='body'
          fontSize='lg'
          // fontWeight='normal'
          textAlign='center'
          letterSpacing='3px'
          lineHeight={0.8}
          textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
        >
          AVAILABLE
        </Heading>
        <Divider p={0} borderColor='brand.300' w='50%' />
        <Text
          as='strong'
          fontFamily='body'
          fontSize='md'
          lineHeight={1}
          textShadow='rgba(179, 179, 179, 0.2) 1px 1px 6px'
        >
          For Hire
        </Text>
      </VStack>
    </Box>
  );
};
