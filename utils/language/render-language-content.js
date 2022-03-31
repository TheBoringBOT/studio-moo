import { useRouter } from "next/router";
import { lang } from "./language-constants";

//function to check current locale and return the corresponding language object from lang object in language-constants.js
export const renderLanguageContent = () => {
  // check locale with nextjs router
  const currentLanguage = useRouter().locale;
  return lang[currentLanguage];
};
