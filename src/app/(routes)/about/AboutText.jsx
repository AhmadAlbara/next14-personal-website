"use client";
import BreakLine from "@/components/elements/BreakLine";
import { motion } from "framer-motion";
import { ABOUT_TEXTS } from "@/constants/about";

const AboutText = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {ABOUT_TEXTS.map(({ text }, index) => (
        <p
          key={index}
          className="mb-8 leading-relaxed text-secondary-light dark:text-secondary-dark"
        >
          {text}
        </p>
      ))}
      <BreakLine />
    </motion.section>
  );
};

export default AboutText;
