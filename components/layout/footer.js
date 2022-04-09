import Container from "./container";
import { useEffect, useState } from "react";

import {
  SITE_NAME,
  SITE_FOOTER_TEXT,
  SITE_DESCRIPTION_SHORT,
  SITE_CONTACT_PHONE,
  SITE_CONTACT_EMAIL,
  SITE_OPENING_HOURS,
} from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-bg-primary text-white border-t border-accent-2 dark:border-0 dark:bg-black">
      <Container>
        <div className="py-28 flex flex-col  items-center md:items-start ">
          <span className="text-xl font-medium mb-4">Get in touch.</span>
          <h3 className="text-3xl lg:text-6xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-3/4 title-normal">
            Think your brand or company could do with help from us?
          </h3>
          <div className="mt-10 flex items-start text-3xl underline">
            <a href={`mailto:${SITE_CONTACT_EMAIL}`}>{SITE_CONTACT_EMAIL}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
