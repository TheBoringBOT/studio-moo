const ANIMATE_Easing = [0.22, 0.69, 0.62, 0.91];

export const ANIMATE_stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const ANIMATE_fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: ANIMATE_Easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: ANIMATE_Easing,
    },
  },
};

// Page animations
export const pageVariants = {
  pageInitial: {
    opacity: 0,
    y: 60,
    transition: { duration: 0.6, ease: ANIMATE_Easing },
  },
  pageAnimate: { opacity: 1, y: 0 },
};
