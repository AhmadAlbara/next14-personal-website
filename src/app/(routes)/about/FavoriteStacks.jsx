"use client";

import { FAVORITE_STACKS } from "@/constants/about";
import { motion } from "framer-motion";
import { HiOutlineCode } from "react-icons/hi";
const FavoriteStacks = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex items-center gap-2 mb-5 primary md:text-xl">
        <HiOutlineCode />
        <h2 className="font-semibold ">Current Favorite Tech Stacks I Used</h2>
      </div>

      <ul className="flex flex-wrap gap-4 mt-4">
        {FAVORITE_STACKS.map((stack) => (
          <li
            key={stack.name}
            className="flex items-center justify-center transition-all duration-150 ease-in-out rounded-full w-9 h-9 md:w-12 md:h-12 hover:shadow-lg hover:shadow-primary-gradient"
          >
            <span className="text-[25px] md:text-[30px]">{stack.icon}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default FavoriteStacks;
