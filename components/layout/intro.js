import {
  SITE_NAME,
  SITE_BLOG_TITLE,
  SITE_BLOG_DESCRIPTION,
} from "../../lib/constants";
import ThemeToggle from "./theme-toggle";

export default function Intro() {
  return (
    <section className="flex-col   lg:flex-row flex items-baseline lg:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex-col">
        <h1 className="text-left text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          {SITE_BLOG_TITLE}
          <br />
          <p className="  text-sm tracking-wide md:mt-[-20px] md:pl-2">
            Av {SITE_NAME}.
          </p>
        </h1>
      </div>
      <div className="flex-col items-center">
        <div className="flex md:justify-end  mt-5">
          <ThemeToggle iconWidth={30} />
        </div>
      </div>
    </section>
  );
}
