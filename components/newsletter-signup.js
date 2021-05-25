import { useState } from "react";
import {
  Box,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import { CustomIcon } from "@/chakra/icons/custom-icon";
import { SocialWrapper } from "@/components/social-icons";

import { socialIcons } from "@/components/icons/social";
import { convertFormToObject } from "@/utils/form-helpers";
import { DrawnArrow } from "./scribbles/drawn-arrow";
import { MotionBox } from "@/components/framer/motion-box";
import { useMounted } from "@/hooks/use-mounted";

export const NewsletterSignup = ({ children, ...rest }) => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    e.persist();

    setIsSubmitting(true);

    const inputs = convertFormToObject([...e.target.querySelectorAll("input")]);

    const response = await fetch(`/api/subscribe`, {
      method: "POST",
      body: JSON.stringify({ email: inputs?.email }),
    });

    const data = await response.json();
    setIsSubmitting(false);
    if (data?.message) setMessage(data?.message);
  };
  return (
    <SocialWrapper
      icons={[
        {
          icon: socialIcons?.twitter,
          href: "https://twitter.com/Soham_Asmi",
        },
        {
          icon: socialIcons?.github,
          href: "https://github.com/gaurangrshah",
        },
        {
          icon: socialIcons?.instagram,
          href: "https://www.instagram.com/garungmusic/",
        },
      ]}
    >
      <VStack
        justify='center'
        align='center'
        pos='relative'
        w={["80%", null, null, "50%"]}
        mt={36}
        mb={19}
        px={6}
        py={12}
        bg='brand.200'
        borderRadius='md'
        boxShadow='1px 1px 8px 0 rgba(19,142,118,0.25)'
        borderStyle='inset'
        borderColor='brand.300'
        mx='auto'
      >
        <Heading
          as='h5'
          fontFamily='article'
          fontSize='md'
          lineHeight='0.9'
          color='brand.500'
          pb={3}
        >
          Follow me on my indie-hacking journey!
        </Heading>
        <Pointer />
        {message ? (
          <Box>
            <Text>{message}</Text>
          </Box>
        ) : (
          <Box as='form' onSubmit={handleSubscribe}>
            <Text color='gray.500' lineHeight={2.8} my={6}>
              Sign up for{" "}
              <Box as='span' fontWeight='600'>
                free early-bird access
              </Box>{" "}
              to my upcoming newsletter
            </Text>
            <InputGroup borderColor='brand.500' w='100%' mx='auto'>
              <Input
                borderRadius='5px'
                name='email'
                type='email'
                placeholder='you@youremail.com'
              />
              <InputRightAddon
                borderRadius='5px'
                children={
                  <IconButton
                    type='submit'
                    h='1.75rem'
                    size='sm'
                    color='brand.600'
                    isLoading={isSubmitting}
                    icon={<CustomIcon icon='plane' mt={1} />}
                  >
                    Submit
                  </IconButton>
                }
              />
            </InputGroup>
          </Box>
        )}
      </VStack>
    </SocialWrapper>
  );
};

export const Pointer = ({ children, ...rest }) => {
  const mounted = useMounted();

  return (
    <AnimatePresence>
      {mounted && (
        <MotionBox
          position='absolute'
          right={9}
          display='inline'
          zIndex={1}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -143 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Text className='scribble'>Follow my progress</Text>
          <DrawnArrow
            className='scribble'
            w={5}
            strokeWidth={0.3}
            transform='rotate(36deg)'
          />
        </MotionBox>
      )}
    </AnimatePresence>
  );
};
