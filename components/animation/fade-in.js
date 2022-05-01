import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//? animation component for use in other components to animate fade in on scroll when in view

export default function FadeIn({ children, delay }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{
        duration: 0.8,
        delay: delay ? delay : 0,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      variants={{
        visible: { scale: 1, translateY: 0 },
        hidden: { scale: 0.98, translateY: 200 },
      }}
    >
      {children}
    </motion.div>
  );
}
