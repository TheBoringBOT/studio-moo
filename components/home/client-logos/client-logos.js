import React from "react";
import Marquee from "react-fast-marquee";

//check window size
import useWindowSize from "../../../hooks/useWindowSize";

export default function clientLogos() {
  const { width, height } = useWindowSize();

  return (
    <div className="bg-white py-8">
      {/* checks the windowsize and shows marquee on mobile only */}
      {width <= 1024 ? (
        <Marquee speed={30} gradient={false}>
          {logos}
        </Marquee>
      ) : (
        logos
      )}
    </div>
  );
}

const LogosData = [
  "/assets/images/logos/1.svg",
  "/assets/images/logos/2.svg",
  "/assets/images/logos/3.svg",
  "/assets/images/logos/4.svg",
  "/assets/images/logos/5.svg",
];

const logos = (
  <div className="flex flex-row justify-center items-center  mx-auto">
    {LogosData.map((logo, index) => {
      return (
        <img
          key={index}
          src={logo}
          className="px-10"
          height="30"
          alt="client logo"
        />
      );
    })}
  </div>
);
