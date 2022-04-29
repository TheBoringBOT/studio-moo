import SectionTitle from "../section-title";
import { SITE_FOOTER_TEXT } from "../../../lib/constants";

export default function Footer() {
  return (
    <footer className="mt-28 bg-light-grey h-[70vh] min-h-600px max-h-[780px] flex flex-col justify-center items-center">
      <div className="flex flex-col mt-auto">
        <SectionTitle
          h2={
            <p className="gradient-title">Quam ut tellus blandit est et in.</p>
          }
          p={
            <span className="text-xl md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          }
        >
          <div className="py-2 ">
            <button className="px-8 py-4 text-lg text-white transition-all rounded-full cursor-pointer white text- bg-black-2 hover:bg-black-2-hover">
              Contact Us
            </button>
          </div>
        </SectionTitle>
      </div>
      <div className="flex flex-col items-center py-10 mt-auto text-dark-grey">
        <span>{SITE_FOOTER_TEXT}</span>
      </div>
    </footer>
  );
}
