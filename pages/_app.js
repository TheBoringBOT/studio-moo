import "../styles/index.css";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import { pageVariants } from "../lib/animation-constants";

// Get current language content
import { renderLanguageContent } from "../utils/language/render-language-content";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      {/* <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={pageVariants}
      > */}
      <Component {...pageProps} {...renderLanguageContent()} />
      {/* </motion.div> */}
    </ThemeProvider>
  );
}
