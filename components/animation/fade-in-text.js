import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//? animation component  to animate fade in on text on scroll when in view
//TODO add more advanced animation options

export default function FadeInText({ children }) {
  const controls = useAnimation({
    transition: {
      staggerChildren: 0.5,
    },
  });
  const [ref, inView] = useInView({ threshold: 0.5 });

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
      //   transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      transition={{
        delay: 0,
        y: { type: "tween", stiffness: 300, damping: 30 },
        default: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
      }}
      variants={{
        visible: { opacity: 1, translateY: 0, staggerChildren: 2 },
        hidden: { opacity: 0, translateY: 50 },
      }}
    >
      {children}
    </motion.div>
  );
}
