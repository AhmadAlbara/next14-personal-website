"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import Image from "next/image";

const ProjectCard = ({
  url,
  title,
  description,
  techStack,
  image,
  imageAlt,
}) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className=" rounded-md bg-transparent shadow-lg transition-transform duration-200 dark:bg-neutral-800 dark:shadow-none lg:hover:scale-[1.03]"
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${title} live production demo`}
        className="flex flex-col h-full cursor-pointer group"
      >
        <div>
          <Image
            className="w-auto h-auto rounded-t-md"
            width={1920}
            height={1080}
            unoptimized={true}
            src={image}
            alt={imageAlt}
            loading="lazy"
            aria-label={`Live ${title} Production Screenshot`}
          />
        </div>

        <div className="p-4">
          <h1 className="flex items-center gap-1 font-bold md:text-lg">
            {title}
            <span className="transition-all duration-200 lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1">
              <TbArrowUpRight />
            </span>
          </h1>
          <p className="text-secondary-light dark:text-secondary-dark mt-2 mb-10 text-sm leading-relaxed md:h-[91px]">
            {description}
          </p>
          <ul className="flex flex-wrap gap-4">
            {techStack.map((tech, index) => (
              <li className=" md:text-2xl" key={index}>
                {tech.icon}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.li>
  );
};

export default ProjectCard;
