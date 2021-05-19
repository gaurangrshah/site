import { useState } from "react";
import {
  Box,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";

import { CustomIcon } from "@/chakra/icons/custom-icon";
import { SocialWrapper } from "@/components/social-icons";

import { socialIcons } from "@/components/icons/social";
import { convertFormToObject } from "@/utils/form-helpers";
import { DrawnArrow } from "./scribbles/drawn-arrow";

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
      <Box
        pos='relative'
        w={["80%", null, null, "40%"]}
        my={16}
        p={6}
        bg='brand.200'
        borderRadius='md'
        boxShadow='1px 1px 8px 0 rgba(19,142,118,0.25)'
        borderStyle='inset'
        borderColor='brand.300'
        mx='auto'
      >
        <Box
          position='absolute'
          top={-20}
          right={5}
          zIndex={1}
          display='inline-block'
        >
          <Text className='scribble'>Follow my progress</Text>
          <DrawnArrow
            className='scribble'
            w={5}
            strokeWidth={0.3}
            transform='rotate(36deg)'
          />
        </Box>
        <Heading
          as='h5'
          lineHeight='0.9'
          fontFamily='article'
          fontSize='md'
          pb={2}
          color='brand.500'
          // textShadow='0px 0px 2px rgba(0,0,0, 0.1)'
        >
          Follow me on my indie-hacking journey!
        </Heading>
        {message ? (
          <Box>
            <Text>{message}</Text>
          </Box>
        ) : (
          <Box as='form' onSubmit={handleSubscribe} maxW="90%">
            <Text color='gray.500' lineHeight={2.8} my={3}>
              Sign up for{" "}
              <Box as='span' fontWeight='600'>
                free early-bird access
              </Box>{" "}
              to my upcoming newsletter
            </Text>
            <InputGroup size='sm' borderColor='brand.500'>
              <Input
                name='email'
                type='email'
                placeholder='you@youremail.com'
              />
              <InputRightAddon
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
      </Box>
    </SocialWrapper>
  );
};
