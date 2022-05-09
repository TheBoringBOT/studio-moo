import SectionTitle from "../section-title";
import { SITE_FOOTER_TEXT } from "../../../lib/constants";

export default function Footer() {
  return (
    <footer className="z-10 relative  bg-black-3 h-[85vh] min-h-600px max-h-[780px] flex flex-col justify-center items-center">
      <div className="flex flex-col mt-auto">
        <SectionTitle
          h2={
            <p className="gradient-title">Quam ut tellus blandit est et in.</p>
          }
          p={
            <span className="text-xl text-mid-grey md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          }
        >
          <div className="py-2 ">
            <button className="px-8 py-4 text-lg transition-all bg-white rounded-full cursor-pointer text-black-2 white text- hover:bg-mid-grey">
              Contact Us
            </button>
          </div>
        </SectionTitle>
      </div>
      <div className="flex flex-col items-center py-10 mt-auto space-y-2 text-dark-grey opacity-60">
        <span className="font-semibold">{SITE_FOOTER_TEXT}</span>
        <span className="font-light text-md">Webbyrån I Stockholm</span>
      </div>
    </footer>
  );
}
