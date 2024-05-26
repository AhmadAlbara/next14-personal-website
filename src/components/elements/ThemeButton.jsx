"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      className="grid w-10 h-10 rounded-full place-items-center md:mb-8 md:mt-4 md:h-0 lg:mt-0"
      aria-label="Theme Button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted ? (
        <>
          {theme === "light" ? (
            <span className="text-2xl">🌕</span>
          ) : (
            <span className="text-2xl">🌤️</span>
          )}
        </>
      ) : (
        <>
          <span className="text-2xl">🌤️</span>
        </>
      )}
    </button>
  );
};

export default ThemeButton;
