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
    <div className="flex items-center gap-2">
      <span>Theme</span>
      <select
        className="rounded-md px-3"
        name="theme"
        id="darkmode"
        onChange={handleDarkMode}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
