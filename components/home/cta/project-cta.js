import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { useViewportScroll, useTransform, motion } from "framer-motion";
import useRefScrollProgress from "../../../hooks/useRefScrollProgress";

import SectionTitle from "../section-title";

export default function projectCta() {
  //TODO: look into refactoring these animation, there probably is a cleaner way to do this
  const containerRef = useRef(null);
  const { ref, start, end } = useRefScrollProgress(containerRef);

  // Stores the start and end scrolling position for our container
  const [scrollPercentageStart, setScrollPercentageStart] = useState(null);
  const [scrollPercentageEnd, setScrollPercentageEnd] = useState(null);

  const { scrollYProgress } = useViewportScroll();
  // Use the container's start/end position percentage

  // offsets to manipulate section animation start
  const offset1 = 0.98;
  const offset2 = 0.94;
  const offset3 = 0.9;

  // animate opacity animation
  const animateOpacity = useTransform(
    scrollYProgress,
    [scrollPercentageStart * offset1, scrollPercentageEnd],
    [0, 1]
  );
  const animateOpacity2 = useTransform(
    scrollYProgress,
    [scrollPercentageStart * offset2, scrollPercentageEnd],
    [0, 1]
  );
  const animateOpacity3 = useTransform(
    scrollYProgress,
    [scrollPercentageStart * offset3, scrollPercentageEnd],
    [0, 1]
  );

  //translateY animation
  const animateTranslateY = useTransform(
    scrollYProgress,
    [scrollPercentageStart * 1.25, scrollPercentageEnd],
    [0, 150] //start 0 and move up 150
  );
  const animateScale = useTransform(
    scrollYProgress,
    [scrollPercentageStart * 1.15, scrollPercentageEnd],
    [1, 0.98] //start 0 and move up 150
  );
  // gradient overlay for background
  const animateGradientOverlay = useTransform(
    scrollYProgress,
    [scrollPercentageStart * 1.1, scrollPercentageEnd],
    [0, 1]
  );

  useEffect(() => {
    setScrollPercentageStart(start);
    setScrollPercentageEnd(end);
    console.log(start * (0.95 / offset3));
    console.log(end / offset3);
    console.log(scrollPercentageEnd * 0.95);
  });

  return (
    <section className="mt-[-100vh] bg-white relative text-center overflow-visible">
      {/* background image - make sure overlay and image have same size */}
      <div className="absolute bottom-0 w-full bg-indigo-400 h-5/6"></div>
      {/* gradient overlay for background - fade out on scroll */}
      <motion.div
        style={{ opacity: animateGradientOverlay }}
        className="absolute bottom-0 left-0 w-full h-5/6 bg-gradient-to-b from-white -z-1"
      ></motion.div>
      <div className="h-[200vh] relative">
        {/* invisible div to use for animation tracking */}
        <div
          ref={containerRef}
          className="absolute invisible -z-100  w-full h-40 bottom-[70vh]"
        ></div>

        {/* Each section is separated with a div to enable simpler animation tracking and manipulation */}
        <motion.div className="sticky top-0 h-screen ">
          <motion.div
            style={{ translateY: animateTranslateY, scale: animateScale }}
            className="flex flex-col items-center justify-center h-full w-[800px] py-28 space-y-8  max-w-[90vw] mx-auto leading-none tracking-tight"
          >
            {/* title */}
            <motion.div
              style={{ opacity: animateOpacity }}
              className="flex flex-row"
            >
              <h2 className="overflow-hidden font-bold text-black-2 title-normal tracking-tight  text-[3.4rem] md:text-[5rem]">
                Commodo auctor
                <br /> pretium lorem.
              </h2>
            </motion.div>

            {/* paragraph */}
            <motion.div
              style={{ opacity: animateOpacity2 }}
              className="flex flex-row"
            >
              <p className="text-2xl font-normal tracking-tight md:px-8 md:text-3xl text-black-2">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies morbi quis auctor.
              </p>
            </motion.div>

            {/* button */}
            <motion.div
              style={{ opacity: animateOpacity3 }}
              className="z-10 py-2"
            >
              <button className="px-8 py-4 text-lg text-white transition-all bg-black rounded-full cursor-pointer white text- hover:bg-light-grey">
                Get Started
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
