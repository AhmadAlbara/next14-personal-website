"use client";

import BreakLine from "@/components/elements/BreakLine";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiSolidDownvote } from "react-icons/bi";
const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="mb-4 text-xl font-bold min-[347px]:text-2xl md:text-3xl">
        U can call me{" "}
        <span className="inline-block text-transparent bg-gradient-to-r from-primary-gradient to-secondary-gradient bg-clip-text">
          Ahmad
        </span>
        <div className="inline-block ml-1 animate-waving-hand">👋</div>
      </h1>
      <ul className="pl-4 mb-4 space-y-1 text-sm list-disc text-secondary-light dark:text-secondary-dark md:text-lg">
        <li>Full-Stack Web Developer</li>
        <li>UI & UX Designer</li>
        <li>
          I build{" "}
          <span className="inline-block text-transparent bg-gradient-to-r from-primary-gradient to-secondary-gradient bg-clip-text">
            website
          </span>
          .
        </li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed text-secondary-light dark:text-secondary-dark md:text-lg">
        Leveraging the capabilities of the React and Laravel ecosystem, I
        specialize in transforming innovative ideas into digital realities that
        are not only highly functional but also readily accessible and
        inclusive. My goal is to ensure that every web
      </p>
      <p className="mb-4 text-sm md:text-lg">
        Available for hire
        <span className="inline-block ml-1 animate-bounce">✅</span>
      </p>
      <Link
        href="/pdf/CV2024.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className=" cursor-pointer text-secondary-light dark:text-secondary-dark pl-0.5 flex items-center gap-3 text-sm font-bold md:text-lg transition-all duration-300"
      >
        <div className="overflow-hidden border-b-2 border-solid border-secondary-light dark:border-secondary-dark">
          <BiSolidDownvote className="animate-rain-arrow" />
        </div>
        Download CV
      </Link>
      <BreakLine />
    </motion.section>
  );
};

export default Hero;
