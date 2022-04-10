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
        <div className="flex justify-between items-center pt-20 h-10 font-extrabold text-xl">
          <div className="flex justify-start">
            <ExportedImage src={Logo} width={140} alt="" />
          </div>
          <nav>
            <ul className="flex justify-end items-center space-x-6 uppercase ">
              <Link href="/blog">
                <a className=" duration-200 transition-all rounded-full border-dashed border-2 border-transparent hover:border-bg-primary p-2 hover:translate-y-[-5px] hover:scale-102   ">
                  Om Oss
                </a>
              </Link>
              <Link href="/blog">
                <a className=" duration-200 transition-all rounded-full border-dashed border-2 border-transparent hover:border-bg-primary p-2 hover:translate-y-[-5px] hover:scale-102 ">
                  Tjänster
                </a>
              </Link>
              <Link href="/blogg">
                <a className="duration-200 transition-all rounded-full border-dashed border-2 border-transparent hover:border-bg-primary p-2 hover:translate-y-[-5px] hover:scale-102 ">
                  Blogg
                </a>
              </Link>

              <a
                href={`mailto:${SITE_CONTACT_EMAIL}`}
                className="relative mx-3  py-2 px-2 duration-200 transition-all rounded
                 mb-6 lg:mb-0 text-white  flex items-center justify-center h-28 overflow-hidden text-lg hover:translate-y-[-5px] hover:scale-102 "
              >
                <img
                  className="z-[-1] absolute top-0 left-0 right-0 bottom-0 h-full w-full spin "
                  src="/assets/shapes/shape1.svg"
                  alt=""
                />
                <span className="p-2">Kontakt</span>
              </a>
            </ul>
          </nav>
        </div>
      </Container>
    </motion.div>
  );
}
