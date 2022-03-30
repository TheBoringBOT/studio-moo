import {
  SITE_NAME,
  SITE_BLOG_TITLE,
  SITE_BLOG_DESCRIPTION,
} from "../../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col lg:flex-row flex items-baseline lg:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-left text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {SITE_BLOG_TITLE}
        <br />
        <p className="invisible md:visible  text-sm tracking-wide md:mt-[-20px] md:pl-2">
          Av {SITE_NAME}.
        </p>
      </h1>
      <h4 className="text-left text-lg mt-5 lg:pl-8">
        {SITE_BLOG_DESCRIPTION}
        <br />
        <span className="md:hidden">Av {SITE_NAME}.</span>
      </h4>
    </section>
  );
}
