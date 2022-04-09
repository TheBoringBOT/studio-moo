import React from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "../section-title";

export default function work() {
  return (
    <>
      <SectionTitle h3={"Better websites for those building a better world"} />
      <Marquee speed={30} gradient={false}>
        <span>f</span>
        <span>f</span>
        <span>f</span>
        <span>f</span>
      </Marquee>
    </>
  );
}
