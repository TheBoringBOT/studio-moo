import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { LocomotiveScrollProvider as RLSProvider } from "react-locomotive-scroll";

import "locomotive-scroll/dist/locomotive-scroll.css";

export default function LocomotiveScroll({ children }) {
  //   const { scroll } = useLocomotiveScroll();
  const containerRef = useRef(null);
  return (
    <RLSProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <div data-scroll-section>{children}</div>
      </div>
    </RLSProvider>
  );
}
