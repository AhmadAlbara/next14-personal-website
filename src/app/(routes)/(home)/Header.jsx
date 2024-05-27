"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <motion.header
      className="flex items-center gap-4 mb-8 md:hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Image
        src={"/img/profile.jpg"}
        alt="Image Profile"
        width={500}
        height={500}
        priority
        className="object-cover w-16 h-16 p-1 border-2 border-dashed rounded-full dark:border-gray-300 border-neutral-700 "
      />
      <div className="flex flex-col gap-1">
        <h2 className="font-medium md:text-lg">Ahmad</h2>
        <p className="text-sm dark:text-secondary-dark text-secondary-light md:text-base">
          Albara
        </p>
      </div>
    </motion.header>
  );
};

export default Header;
