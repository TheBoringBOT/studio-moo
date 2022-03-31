import {
  SITE_NAME,
  SITE_BLOG_TITLE,
  SITE_BLOG_DESCRIPTION,
} from "../../lib/constants";
import ThemeToggle from "./theme-toggle";

export default function Intro({ lang_blog_content }) {
  return (
    <section className="flex-col   lg:flex-row flex items-baseline lg:justify-between  mb-16 md:mb-12">
      <div className="flex-col">
        <h1 className="text-left text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          {lang_blog_content.title}
          <br />
          <p className="  text-sm tracking-wide mt-[-20px] md:pl-2">
            {lang_blog_content.subtitle}
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
