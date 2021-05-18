import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { MotionBox } from "@/components/framer/motion-box";

const defaultTransition = {
  key: "default",
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  transition: { duration: .9 },
};

export const PresenceBox = ({
  transition = defaultTransition,
  options,
  children,
  ...rest
}) => {
  const { ref, inView } = useInView(options);
  return (
    <div ref={ref}>
      <AnimatePresence>
        {inView && (
          <MotionBox
            key='test'
            w='300px'
            h='300px'
            {...transition}
            {...rest}
          >
            {children}
          </MotionBox>
        )}
      </AnimatePresence>
    </div>
  );
};

/**
 * USAGE:

    <PresenceBox options={{ threshold: 0.5, triggerOnce: true }}>
        Test
      </PresenceBox>

 */
