import Container from "./container";

import {
  SITE_NAME,
  SITE_FOOTER_TEXT,
  SITE_DESCRIPTION_SHORT,
  SITE_CONTACT_PHONE,
  SITE_CONTACT_EMAIL,
  SITE_OPENING_HOURS,
} from "../../lib/constants";

export default function Footer({ lang_footer }) {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 dark:border-0 dark:bg-black">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            {lang_footer.title}
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`mailto:${SITE_CONTACT_EMAIL}`}
              className="mx-3 bg-black dark:bg-gray-100 hover:bg-white hover:text-black hover:dark:bg-black hover:dark:border-gray-100 hover:dark:text-gray-100 border border-black text-white dark:text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              {lang_footer.mail}
            </a>
            <a
              href={`tel:${SITE_CONTACT_PHONE}`}
              className="mx-3 font-bold hover:underline text-center"
            >
              {lang_footer.phone}
              <p className="italic">
                <small>{SITE_OPENING_HOURS}</small>
              </p>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-start py-10">
          <span>{SITE_FOOTER_TEXT}</span>
        </div>
      </Container>
    </footer>
  );
}
