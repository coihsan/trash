"use client";
import React, { useState, useEffect } from "react";
import { iconsUI } from "../constants/Icons";
export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDarkMode = savedTheme === "dark";
      setIsDarkMode(isDarkMode);
      document.documentElement.classList.toggle("dark", isDarkMode);
    }
  }, []);

  return (
    <div className="relative rounded-md bg-coral-100 dark:bg-coral-800 dark:text-coral-100">
      <div className="flex items-center gap-2 rounded-md px-3 py-2 dark:text-coral-100">
        <div className="dark:fill-coral-100 w-[20px] h-[20px]">
          {!isDarkMode ? iconsUI.moon : iconsUI.sun}
        </div>
        <select
          className="bg-coral-100 dark:bg-coral-800 cursor-pointer text-sm"
          name="theme"
          id="darkmode"
          onChange={handleDarkMode}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
}
