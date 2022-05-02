import { useRef } from "react";

import SectionTitle from "../section-title";
import Header from "./header";
import UseScrollPosition from "../../../hooks/useScrollPosition";

import FadeInText from "../../animation/fade-in-text";

export default function hero() {
  const scrollPosition = UseScrollPosition();
  const containerRef = useRef(null);
  let scrollProgress = 0;
  let opacityProgress = 1;
  const { current: elCurrent } = containerRef;
  // parallax on scroll from scrollY

  if (elCurrent) {
    // scrollProgress = (scrollPosition / elCurrent.clientHeight) * 120;
    opacityProgress = 1 - Math.min(1, scrollPosition / elCurrent.clientHeight);
    scrollProgress = Math.min(1, scrollPosition / elCurrent.clientHeight);
  }
  return (
    <section
      ref={containerRef}
      className="bg-mid-grey  min-h-[690px] h-[80vh]
      max-h-[80vh] md:max-h-full "
    >
      {/* Parallax div */}
      <div
        className="will-change-transform"
        style={{ transform: `translateY(${scrollProgress * 35}vh)` }}
      >
        <div
          style={{
            opacity: opacityProgress,
          }}
          className="flex flex-col items-center justify-center"
        >
          <Header />
          <FadeInText>
            <SectionTitle
              h1={
                <>
                  <span className="text-white">
                    Quam ut tellus blandit est et in.
                  </span>
                </>
              }
              p={
                <>
                  <span className="text-white">
                    Odio blandit pretium scelerisque sit proin.
                  </span>
                </>
              }
            >
              <div className="z-10 py-2">
                <button className="px-8 py-4 text-lg text-white transition-all rounded-full cursor-pointer white text- bg-black-2 hover:bg-black-2-hover">
                  Contact Us
                </button>
              </div>
            </SectionTitle>
          </FadeInText>

          {/* <div className={styles.shape1}></div>
      <div className={styles.shape2}></div> */}
        </div>
      </div>
    </section>
  );
}
