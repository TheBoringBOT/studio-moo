import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./hero.module.scss";

const AnimateHero = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const AnimatedChars = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const AnimatedText = ({ title, disabled, classes }) => (
  <motion.span
    className="px-[8vw]  4xl:px-[10vw] text-[23vw] lg:text-[13rem] font-black whitespace-nowrap  leading-tight"
    variants={disabled ? null : AnimateHero}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, i) => (
      <motion.span
        key={i}
        className=" inline-block relative whitespace-nowrap"
        variants={disabled ? null : AnimatedChars}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

export default function HeroText() {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div className="relative z-50 " variants={AnimateHero}>
      <div className="w-100 flex justify-start">
        <HeroTextTop title={"brand"} />
      </div>
      <div className="w-100 flex ">
        <HeroTextCenter title={"experience"} playMarquee={playMarquee} />
      </div>
      <div className="w-100 flex justify-end">
        <HeroTextBottom title={"studio"} />
      </div>
    </motion.div>
  );
}

const HeroTextTop = ({ title }) => {
  return (
    <div className={"overflow-hidden flex items-center justify-start "}>
      <div className="w-100 flex items-start">
        <AnimatedText title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className="w-100 flex items-start"
      >
        {/* <span className="row-message">
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </span> */}
      </motion.div>
    </div>
  );
};

// marquee text
const HeroTextCenter = ({ title, playMarquee }) => {
  return (
    <div className={` ${styles.marquee} ${playMarquee && styles.animate}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className={styles.marquee__inner}
      >
        <AnimatedText title={title} disabled />
        <AnimatedText title={title} />
        <AnimatedText title={title} disabled />
        <AnimatedText title={title} disabled />
      </motion.div>
    </div>
  );
};

const HeroTextBottom = ({ title }) => {
  return (
    <div className="overflow-hidden flex items-center }">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className="scroll"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedText title={title} />
    </div>
  );
};
