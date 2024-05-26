"use client";

import { motion } from "framer-motion";
import BreakLine from "./BreakLine";

const PageTitle = ({ title, description }) => {
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
      <p className="mt-2 leading-relaxed text-secondary-light dark:text-secondary-dark md:mb-14 md:text-lg lg:mb-0">
        {description}
      </p>
      <BreakLine decoration="border-dashed" />
    </motion.div>
  );
};

export default PageTitle;
