import Link from "next/link";
import Container from "../layout/container";
import Logo from "../../public/logo.svg";
import ExportedImage from "next-image-export-optimizer";
import { motion } from "framer-motion";

export default function Header({ lang_home_nav }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
    >
      <Container>
        <div className="flex justify-between items-center mt-10 h-10">
          <div className="flex justify-start">
            <ExportedImage src={Logo} width={140} alt="" />
          </div>
          <nav>
            <ul className="flex justify-end items-center space-x-6">
              <Link href="/blog">
                <a className="hover:underline duration-200 transition-all">
                  {lang_home_nav.about}
                </a>
              </Link>
              <Link href="/blog">
                <a className="hover:underline duration-200 transition-all">
                  {lang_home_nav.services}
                </a>
              </Link>
              <Link href="/blog">
                <a className="hover:underline duration-200 transition-all">
                  {lang_home_nav.blog}
                </a>
              </Link>
              <Link href="/blog">
                <a
                  href={`mailto:`}
                  className="mx-3 bg-black dark:bg-gray-100 hover:bg-white hover:text-black hover:dark:bg-transparent hover:dark:border-gray-100 hover:dark:text-gray-100 border border-black text-white dark:text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                >
                  {lang_home_nav.mail}
                </a>
              </Link>
            </ul>
          </nav>
        </div>
      </Container>
    </motion.div>
  );
}
