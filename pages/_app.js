import "../styles/index.css";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import { pageVariants } from "../lib/animation-constants";

// Get current language content
// import { renderLanguageContent } from "../utils/language/render-language-content";

//! i8n in next.js does not work with export. So removed multiple language support for now.
//? possible solution: try to use i18n in next.js with https://github.com/martinkr/next-export-i18n
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      {/* <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={pageVariants}
      > */}
      <Component {...pageProps} />
      {/* </motion.div> */}
    </ThemeProvider>
  );
}
