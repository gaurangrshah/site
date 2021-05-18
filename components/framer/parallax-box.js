// @link: https://samuelkraft.com/blog/spring-parallax-framer-motion-guide
import { useState, useRef, useLayoutEffect, ReactNode } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const Parallax = ({ children, offset = 50, scrollY }) => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 10 });

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + element.scrollY ||
          element.pageYOffset
      );
      setClientHeight(element.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;

// USAGE: see '../../pages/parallax-box-example.js'
