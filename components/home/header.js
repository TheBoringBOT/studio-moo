import Link from "next/link";
import Container from "../layout/container";
import Logo from "../../public/logo.svg";
import ExportedImage from "next-image-export-optimizer";
import { motion } from "framer-motion";
import { SITE_CONTACT_EMAIL } from "../../lib/constants";

export default function Header({}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 2.5,
      }}
    >
      <Container>
        <div className="flex justify-between items-center pt-20 h-10 font-bold text-xl">
          <div className="flex justify-start">
            <ExportedImage src={Logo} width={140} alt="" />
          </div>
          <nav>
            <ul className="flex justify-end items-center space-x-6">
              <Link href="/blog">
                <a className="hover:underline duration-200 transition-all">
                  Om Oss
                </a>
              </Link>
              <Link href="/blog">
                <a className="hover:underline duration-200 transition-all">
                  Tjänster
                </a>
              </Link>
              <Link href="/blogg">
                <a className="hover:underline duration-200 transition-all">
                  Blogg
                </a>
              </Link>

              <a
                href={`mailto:${SITE_CONTACT_EMAIL}`}
                className="mx-3 bg-black dark:bg-gray-100 hover:bg-white hover:text-black hover:dark:bg-transparent hover:dark:border-gray-100 hover:dark:text-gray-100 border border-black text-white dark:text-black font-bold py-2 px-2 duration-200 rounded transition-colors mb-6 lg:mb-0"
              >
                Mejla Oss
              </a>
            </ul>
          </nav>
        </div>
      </Container>
    </motion.div>
  );
}
