import ThemeButton from "@/components/elements/ThemeButton";
import Image from "next/image";
import React from "react";

const SidebarHeader = () => {
  return (
    <header className="flex items-center justify-between m-auto w-fit lg:mb-9 md:flex-col lg:w-52 lg:flex-row">
      <div className="flex items-center gap-4">
        <Image
          src={"/img/profile.jpg"}
          alt="Image Profile"
          width={500}
          height={500}
          priority
          className="object-cover w-16 h-16 p-1 border-2 border-dashed rounded-full dark:border-gray-300 border-neutral-700 "
        />
        <div className="flex-col hidden lg:flex">
          <h2 className="text-base font-bold md:text-xl">Ahmad</h2>
          <p className="text-sm text-secondary-light dark:text-secondary-dark md:text-base">
            Albara
          </p>
        </div>
      </div>
      <ThemeButton />
    </header>
  );
};

export default SidebarHeader;
