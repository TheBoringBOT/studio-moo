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
    <footer className="bg-bg-primary text-white border-t  dark:border-0 dark:bg-black">
      <Container>
        <div className="py-28 flex flex-col  items-center xl:items-start ">
          <span className="text-2xl font-medium mb-4">Get in touch.</span>
          <h3 className="text-3xl xl:text-[3rem] font-bold tracking-tighter leading-tight text-center xl:text-left mb-10 lg:mb-0  lg:w-4/5 title-normal">
            Think your brand or company could do with{" "}
            <span className="text-indigo-400 font-bold">help</span> from us?
          </h3>
          <div className=" duration-200 transition-all hover:translate-y-[-5px] mt-10 flex items-start text-3xl border-dashed border-2 border-highlight-2 rounded-full hover:text-highlight-2">
            <a className="px-5 py-3" href={`mailto:${SITE_CONTACT_EMAIL}`}>
              {SITE_CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
