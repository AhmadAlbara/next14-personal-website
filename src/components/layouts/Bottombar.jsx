"use client";

import BOTTOMBAR_ITEMS from "@/constants/bottombar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeButton from "../elements/ThemeButton";

const Bottombar = () => {
  const pathname = usePathname();
  return (
    <nav className="shadow-md  shadow-primary-gradient bg-primary-dark fixed z-20 -translate-x-1/2 backdrop-blur-3xl bottom-4 left-1/2 flex items-center justify-evenly w-[85vw] max-w-md rounded-full p-2 md:hidden">
      {BOTTOMBAR_ITEMS.map((item, index) => {
        const isActivePage = pathname === item.pathname;
        return (
          <Link
            key={index}
            href={item.pathname}
            aria-label={`Go to ${item.pathname}`}
            className={
              isActivePage
                ? "h-10 w-10 rounded-full grid place-items-center bg-gradient-to-r from-primary-gradient to-secondary-gradient "
                : null
            }
          >
            <span
              className={
                isActivePage ? "text-primary-dark" : "text-neutral-500"
              }
            >
              {item.icon}
            </span>
          </Link>
        );
      })}
      <div className="ml-0.5 h-6 border-r border-solid border-neutral-200 dark:border-neutral-800" />
      <ThemeButton />
    </nav>
  );
};

export default Bottombar;
