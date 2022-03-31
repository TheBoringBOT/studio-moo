import "../styles/index.css";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import { pageVariants } from "../lib/animation-constants";

export default function MyApp({ Component, pageProps, router }) {
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
