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
  // Get random quote
  const { quote, source } = getRandomQuote();

  return (
    <footer className="bg-accent-1 border-t border-accent-2 dark:border-0 dark:bg-black">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            {SITE_NAME} {SITE_DESCRIPTION_SHORT}
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`mailto:${SITE_CONTACT_EMAIL}`}
              className="mx-3 bg-black dark:bg-gray-100 hover:bg-white hover:text-black hover:dark:bg-black hover:dark:border-gray-100 hover:dark:text-gray-100 border border-black text-white dark:text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Mejla Oss
            </a>
            <a
              href={`tel:${SITE_CONTACT_PHONE}`}
              className="mx-3 font-bold hover:underline text-center"
            >
              Ringa Oss
              <p className="italic">
                <small>{SITE_OPENING_HOURS}</small>
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  items-center justify-center lg:justify-between py-10">
          <span className="font-semibold">{SITE_FOOTER_TEXT}</span>
          <span className="text-center mt-5 text-sm opacity-50">
            <i>{quote}</i>
            <br className="lg:hidden" /> - {source}
          </span>
        </div>
      </Container>
    </footer>
  );
}

//inspiring quotes array easter egg
const quotes = [
  {
    quote: "“If you’re going through hell, keep going.”",
    source: "Winston Churchill",
  },
  {
    quote: "“Do what you can, with what you have, where you are.”",
    source: "Theodore Roosevelt",
  },
  {
    quote: "“It does not matter how slowly you go as long as you do not stop.”",
    source: "Confucius",
  },
  {
    quote: "“Never give up.”",
    source: "Winston Churchill",
  },
  {
    quote: "“Do what you feel in your heart to be right.”",
    source: "Eleanor Roosevelt",
  },
  {
    quote: "“The only way to do great work is to love what you do.”",
    source: "Steve Jobs",
  },
  {
    quote: "“The best way to predict the future is to create it.”",
    source: "Abraham Lincoln",
  },
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
