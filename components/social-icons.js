import { useState } from "react";
import { Box, Button, Flex, IconButton, Link } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import { MotionBox } from "@/components/framer/motion-box";
import { PathIcon } from "@/components/icons/path-icon";

export const SocialWrapper = ({ pad = false, icons, children, ...rest }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Box
        pos='relative'
        // border='1px solid red'
        // onMouseOver={() => setShow(true)}
        // cursor='pointer'
        overflow='hidden'
        {...rest}
      >
        <AnimatePresence>
          {show && (
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              position='absolute'
              top={"50%"}
              bottom={"50%"}
              transform={"translate(-50%, -50%)"}
              right={-12}
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <Button
                my={3}
                size='sm'
                color='red'
                borderRadius='50%'
                p={2}
                bg='rgba(0,0,0,0.05)'
                onClick={() => setShow(false)}
                opacity={0.3}
              >
                X
              </Button>
              <SocialIcons icons={icons} {...rest} />
            </MotionBox>
          )}
        </AnimatePresence>
        {children}
      </Box>
    </>
  );
};

/**
 * USAGE:

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
            { icon: socialIcons?.instagram, href:"https://www.instagram.com/garungmusic/" },
          ]}
        />
 */

export const SocialIcons = ({ icons, ...rest }) => {
  return (
    icons?.length &&
    icons.map((icon, i) => {
      return (
        <Link
          key={`${icon?.icon}-${i}`}
          href={icon?.href}
          isExternal
          // zIndex={100}
        >
          <MotionBox whileHover={{ scale: 1.2 }}>
            <PathIcon
              fill='brand.500'
              icon={icon?.icon}
              size='2.5rem'
              p={2}
              {...rest}
            />
          </MotionBox>
        </Link>
      );
    })
  );
};
