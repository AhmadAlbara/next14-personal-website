"use client";

import Link from "next/link";
import React from "react";
import SIDEBAR_ITEMS from "@/constants/sidebar";
import { usePathname } from "next/navigation";

const SidebarNav = () => {
  const path = usePathname();
  return (
    <nav>
      <ul className="space-y-4">
        {SIDEBAR_ITEMS.map((item, index) => {
          const isActivePage = path === item.pathname;
          return (
            <li key={index}>
              <Link href={item.pathname}>
                <div
                  className={`${
                    isActivePage
                      ? " hover:scale-100 bg-gradient-to-r from-primary-gradient to-secondary-gradient  text-primary-dark"
                      : "hover:scale-[1.08]"
                  } rounded-md flex items-center gap-4 w-fit px-4 py-3 font-bold hover:bg-neutral-200 dark:hover:bg-neutral-800 lg:w-full`}
                >
                  {item.icon}
                  <span className="hidden lg:block">{item.label}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarNav;
