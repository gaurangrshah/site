import React, { useRef, useState, useEffect, useMemo } from "react";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ParallaxBox = ({ children, ...rest }) => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  console.log(entry);

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  const box = {
    width: "150px",
    height: "150px",
    borderRadius: "1em",
    backgroundColor: "#f9f07e",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const magic = {
    width: "200px",
    height: "200px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    marginLeft: "auto",
    marginRight: "auto",
  };
  return (
    <>
      <motion.div className='box' style={{ y: y1, x: -50, ...box }} />
      <motion.div
        className='box'
        style={{ y: y2, x: 50, ...box, background: "salmon" }}
      />
      <div style={{ height: 500 }} />
      <div style={{ position: "fixed", top: 0, left: 0 }}>
        {" "}
        {"is in view? " + inView}
      </div>
      <motion.div
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2, ease: "easeOut" }}
        ref={ref}
        className='magic'
      />
    </>
  );
};
