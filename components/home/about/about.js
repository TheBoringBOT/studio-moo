import React from "react";
import SectionTitle from "../section-title";
export default function about() {
  return (
    <>
      <SectionTitle
        h2={
          <>
            Say <span className="font-bold text-highlight-1">goodbye</span> to
            slow agencies and unreliable freelancers.
          </>
        }
        p={
          "Agencies are slow, expensive and hard to work with. Moo provides provides super-quick, responsive         designs and development."
        }
      />
      <div className="flex-col space-y-4 md:space-y-0 align-center md:flex-row flex md:space-x-11 items-center">
        {/* {features.map((feature, i) => (
            <div key={i}>
              <span className="bg-bg-primary text-text-primary rounded-full py-2 px-3 flex items-center whitespace-nowrap ">
                <CheckIcon className="h-5 w-5 mr-2" /> {feature}
              </span>
            </div>
          ))} */}
      </div>
    </>
  );
}

// const features = {
//   1: {
//     title: "Simple Packages",
//     description:
//       "We are specialised in setting up the foundation of your brand and setting you up for success.",
//     icon: "check",
//   },
//   2: {
//     title: "Simple Packages",
//     description:
//       "We are specialised in setting up the foundation of your brand and setting you up for success.",
//     icon: "check",
//   },
//   3: {
//     title: "Simple Packages",
//     description:
//       "We are specialised in setting up the foundation of your brand and setting you up for success.",
//     icon: "check",
//   },
// };
