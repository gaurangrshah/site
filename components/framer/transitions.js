export const transitions = {
  slideLToR: {
    variants: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -100 },
    },
    transition: { duration: 0.5, ease: "easeOut" },
  },
  alpha: {
    key: "alpha",
    variants: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    },
    transition: { duration: 1, delay: 0.6 },
  },
};
